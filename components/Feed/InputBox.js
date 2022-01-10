import { useSession } from "next-auth/client"
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../../firebase";

export default function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null)
    const filepickerRef = useRef(null)
    const [imagetoPost, setImageToPost] = useState(null)


    const sendPost = e => {
        e.preventDefault()
        if (!inputRef.current.value) return
        db.collection('posts').add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: new Date()
        }).then(doc => {
            if (imagetoPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imagetoPost, 'data_url')

                removeImage()

                uploadTask.on('state_change', null, error => console.error(error), () => {
                    // when the upload completes
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        }, { merge: true })
                    })
                })
            }
        })
        inputRef.current.value = ""
    }

    const addImageToPost = (e) => {
        let render = new FileReader()
        if (e.target.files[0]) {
            render.readAsDataURL(e.target.files[0])
        }
        render.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }

    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-600 font-semibold mt-6 text-black-200">
            <div className="flex space-x-4 p-4 item-center">
                {session && <Image
                    className="rounded-full"
                    src={session.user.image}
                    width={40}
                    height={40}
                    layout="fixed"
                />}
                <form className="flex flex-1">
                    <input
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text"
                        ref={inputRef}
                        placeholder={`¿Qué estás pensando, ${session && session.user.name}?`} />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                </form>
                {
                    imagetoPost && (
                        <div onClick={removeImage} className="flex flex-col hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                            <img className="h-10 object-contain" src={imagetoPost} alt="" />
                            <p className="text-xs text-red-500 text-center ">Remove</p>
                        </div>
                    )
                }
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-4 sm:h-7 text-red-500" />
                    <p className="text-[10px] sm:text-sm xl:text-base">Video en directo</p>
                </div>
                <div
                    onClick={() => filepickerRef.current.click()}
                    className="inputIcon">
                    <CameraIcon className="h-4 sm:h-7 text-green-400" />
                    <p className="text-[10px]  sm:text-sm xl:text-base">Foto/video</p>
                    <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-4 sm:h-7 text-yellow-300" />
                    <p className="text-[10px] sm:text-sm xl:text-base">Sentimiento/actividad</p>
                </div>
            </div>
        </div>
    )
}
