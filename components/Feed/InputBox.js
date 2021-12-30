import { useSession } from "next-auth/client"
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef } from "react";

export default function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null)

    const sendPost = e => {
        e.preventDefault()
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
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-4 sm:h-7 text-red-500" />
                    <p className="text-[10px] sm:text-sm xl:text-base">Video en directo</p>
                </div>
                <div className="inputIcon">
                    <CameraIcon className="h-4 sm:h-7 text-green-400" />
                    <p className="text-[10px]  sm:text-sm xl:text-base">Foto/video</p>
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="h-4 sm:h-7 text-yellow-300" />
                    <p className="text-[10px] sm:text-sm xl:text-base">Sentimiento/actividad</p>
                </div>
            </div>
        </div>
    )
}
