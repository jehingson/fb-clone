export default function HeaderIcon({ Icon, active }) {
    return (
        <div className="
            flex 
            items-center 
            rounded-xl 
            cursor-pointer 
            md:px-5 
            sm:h-14 
            hover:bg-gray-100
            md:active:border-b-2
            border-blue-500
            group
            ">
            <Icon className={`
                h-5 
                text-gray-600
                text-center
                sm:h-7
                sm:px-2
                mx-auto
                group-hover:text-blue-500
                ${active && 'text-blue-500'}
                `} />
        </div>
    )
}
