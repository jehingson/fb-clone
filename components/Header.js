import Image from "next/image"
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    UserGroupIcon,
    HomeIcon,
    ViewGridIcon,
    MenuIcon,
} from '@heroicons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import "../styles/Header.module.css";
import HeaderIcon from "./HeaderIcon";



export default function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-3 shadow-md">
            {/*Left*/}
            <div className="header flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon
                        className="h-6 text-gray-600" />
                    <input
                        className="
                            flex 
                            ml-2 
                            items-center 
                            bg-transparent 
                            outline-none
                            placeholder-gray-500
                            flex-shrink
                            hidden
                            xl:inline-flex
                            "
                        type="text"
                        placeholder="Buscar en facebook" />
                </div>
            </div>
            {/*Center */}
            <div className="flex justify-start md:justify-center flex-grow items-center">
                <div className="flex space-x-6 md:space-x-1 hidden md:inline-flex">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
                <MenuIcon className="icon bg-transparent md:hidden ml-3" />
            </div>
            {/*Right*/}
            <div className="flex items-center space-x-2 justify-center md:justify-end">
                <p className="whitespace-rowrap font-semibold pr-3 hidden xl:inline-flex">Json Dev</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>

        </div>
    )
}

