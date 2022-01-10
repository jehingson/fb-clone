import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Contact from "../Contact"

const CONTACTS = [
    {
        name: "Chris Evans",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fcapi.jpg?alt=media&token=78ff20cf-6609-4868-9e81-7afaee4305dd"
    },
    {
        name: "Scarlett Johansson",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fscarlle.jfif?alt=media&token=4ba59b02-57fc-4a88-9193-795dbb25cda3"
    },
    {
        name: "Robert Downey",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fdowney.jpg?alt=media&token=bed76d24-9cdf-4eb8-a9ca-3fbe2414e9f9"
    },
    {
        name: "Elizabeth Olsen",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Flicensed.jfif?alt=media&token=774138fe-0b84-43da-8ee6-f1edd21f83de"
    },
    {
        name: "Benedict Cumberbatch",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Fstrings.jpg?alt=media&token=7b1c4128-61c2-42b1-b838-7ecfef53e83e"
    },
    {
        name: "Tom Holland",
        src: "https://firebasestorage.googleapis.com/v0/b/fb-dev-7f76b.appspot.com/o/stories%2Ftom.jpg?alt=media&token=eb69554c-81bd-4a5f-8805-bc3815910f61"
    }
]

export default function Widgets() {

    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contactos</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                </div>
            </div>
            {CONTACTS?.map(contact => <Contact key={contact.src} src={contact.src} name={contact.name} />)}
        </div>
    )
}
