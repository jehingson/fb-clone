import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'

export default function Home({ session }) {
  console.log('session', session);
  if (!session) return <Login />
  return (
    <div className={styles.container}>
      <Head>
        <title>Facebook</title>
      </Head>
      {/* HEADER */}
      <Header>

      </Header>

      <main>
        {/*SIDEBAR*/}
        {/*FEED*/}
        {/*WIDGETS*/}
      </main>
    </div>
  )
}


export async function getServersSideProps(context) {
  // Get the user
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
} 
