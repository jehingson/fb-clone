import Image from "next/image"
import { useState } from "react"

function Contact({ src, name }) {
    const [hoverState, setHoverState] = useState(false)


    return (
        <div
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
            className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
            <Image
                src={src}
                objectFit="cover"
                width={50}
                height={50}
                layout="fixed"
                className="rounded-full"
            />
            <p>{name}</p>
            <div className={
                "absolute " +
                "bottom-2 " +
                "left-7 " +
                "bg-green-400 " +
                "h-3 " +
                "w-3 " +
                "rounded-full " +
                (!hoverState ? " " : "animate-bounce ")
            }></div>
        </div>
    )
}

export default Contact
