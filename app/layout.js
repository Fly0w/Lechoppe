import '../style/globals.css'
import Nav from '@/components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import CartProvider from '@/modules/CartProvider'
import AuthProvider from '@/modules/AuthProvider'

export const metadata = {
  title: `L'échoppe`,
  description: 'Buy your favorite games and anime items',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <div className='main'>
        </div>

        <main className="">
          <AuthProvider>
            <CartProvider>
              <Nav />           
              <div className="flex-center my-6 h-20">
                <Link href="/" >
                  <Image 
                    src="/assets/icons/logo_transparent.png"
                    alt="logo l'échoppe"
                    height={200}
                    width={200}
                  />
                </Link>
              </div>
              {children}
            </CartProvider>
          </AuthProvider>
        </main> 
        
      </body>
    </html>
  )
}
