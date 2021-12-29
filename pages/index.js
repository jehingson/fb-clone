import { providers, getSession } from "next-auth/client"
import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"
import styles from '../styles/Home.module.css'

const Home = ({ session }) => {
  console.log('eeee', session)
  return (
    <div >
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