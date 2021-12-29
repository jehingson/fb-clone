import { useSession } from 'next-auth/client'
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    UserGroupIcon
} from '@heroicons/react/outline'

import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'



export default function Sidebar() {
    const [session, loading] = useSession()


    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-x-[300'px]">
            {session && (<SidebarRow src={session.user.image} title={session.user.name} />)}
            <SidebarRow Icon={UsersIcon} title="Amigos" />
            <SidebarRow Icon={UserGroupIcon} title="Grupos" />
            <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
            <SidebarRow Icon={CalendarIcon} title="Calendario" />
            <SidebarRow Icon={ClockIcon} title="Recuedos" />
            <SidebarRow Icon={ChevronDownIcon} title="Ver más" />

        </div>
    )
}
