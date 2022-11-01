import Head from 'next/head'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import AboutSection from '../components/About'
import BlogSection from '../components/Blog'
import ContactFunction from '../components/Contact'

export default function Home() {
  return (
    <div className="h-full bg-white">
      <Head>
        <title>DabAZ</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Header />

      <main>
        <section id='about' className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">About me</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
                Learn more about me.
              </p>
            </div>
            <AboutSection />
          </div>
        </section>

        <section id='blog' className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">From the blog</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
                This blog is about what I learned recently about ethical hacking.
              </p>
            </div>
            <BlogSection />
          </div>
        </section>

        <section id='contact' className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">Contact me</h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500 sm:mt-4">
                If you have passion to build a profitable product, please contact me.
              </p>
            </div>
            <ContactFunction />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
