import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedPost from '@/components/FeaturedPost'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.appName}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-gray-900 text-gray-50 min-h-screen'>
        <div className='flex flex-col'>
          <Navbar />

          <div className="container">
            <FeaturedPost />
          </div>
        </div>
      </main>
    </>
  )
}
