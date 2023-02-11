import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedPost from '@/components/FeaturedPost'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import Posts from '@/components/Posts'
import RootLayout from '@/components/layouts/RootLayout'

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
      <main>
        <RootLayout>
          <FeaturedPost />
          <Posts />
        </RootLayout>
      </main>
    </>
  )
}
