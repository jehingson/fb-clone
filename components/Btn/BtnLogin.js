import { signIn } from 'next-auth/client'

export default function BtnLogin({ provider, bgColor, txtColor = "#eee" }) {
    return (
        <div>
            <button
                className="w-full p-2 mt-4 rounded-md hover:opacity-75 transition-all active:opacity-100 active:drop-shadow"
                style={{ background: `${bgColor}`, color: `${txtColor}` }}
                onClick={() => signIn(provider.id)}
            >Iniciar sesión con {provider.name}</button>
        </div>
    )
}
