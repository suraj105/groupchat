import Head from 'next/head'
import  Login  from '../components/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header';
import Texts from '../components/Texts';

export default function Home() {

  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />

  return (
    
    <div className=" h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-900  overflow-x-hidden">
      <Head>
        <title>Metaverse app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='max-w-screen-xl mx-auto '>
         <Header />
         <Texts />
        </div>

    </div>
  )
}
