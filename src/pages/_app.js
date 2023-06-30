import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-dark w-full min-h-screen">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
