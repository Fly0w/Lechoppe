import '../style/globals.css'
import Nav from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: `L'échoppe`,
  description: 'Buy your favorite games and anime items',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
             <div className="gradient"/>
        </div>

        <header className="flex-center">
          <Link href="/" >
            <Image 
              src="/assets/icons/logo_transparent.png"
              alt="logo l'échoppe"
              height={250}
              width={250}
            />
          </Link>
        </header>

        <main className="app">
          <Nav />
          {children}
        </main> 
      </body>
    </html>
  )
}
