import { providers, getSession } from "next-auth/client"
import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"
import Login from "./login"

const Home = ({ session }) => {
  if (!session) return <Login />
  
  return (
    <div className="h-screen bg-gray-100 overflow-hidden border">
      <Head>
        <title>Facebook</title>
      </Head>
      {/* HEADER */}
      <Header>

      </Header>

      <main className="flex">
        {/*SIDEBAR*/}
        <Sidebar />
        {/*FEED*/}
        <Feed />
        {/*WIDGETS*/}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}