import Link from 'next/link'
import Image from 'next/image'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


function MyApp( { Component, pageProps }) {
  return (
  <div>
    <nav>
      <ul  className='flex '>
        <li className='mx-auto w-9/12'><Link href="/"><a ><Image src="/logo.svg" alt="hugo Logo" width={150} height={40} /></a></Link></li>
        <div className='flex flex-row space-x-4'>
        <li className='my-4'><Link href="/service"><a><h2 class = "text-pink-600">Services</h2></a></Link></li>
        <li className='my-4'><Link href="/team"><a><h2 class = "text-pink-600">Team</h2></a></Link></li>
        <li className='my-4'><Link href="/contact"><h2 class = "text-pink-600">Contact</h2></Link></li>
        <li className='my-4'><Link href="/about"><h2 class = "text-pink-600">About</h2></Link></li>
        </div>
      </ul>
    </nav>
    <hr></hr>
    <Component {...pageProps} />
  </div>
  );
}

export default MyApp
