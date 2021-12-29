import BtnLogin from "./BtnLogin"


export default function Login({ providers }) {
    console.log('providess', providers.google)
    return (
        <div className="flex items-center justify-center 
        min-h-screen">

            <BtnLogin
                provider={providers.google}
                bgColor='#f2573f' />
        </div>
    )
}
