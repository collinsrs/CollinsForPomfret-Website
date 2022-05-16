import Container from './container'
import InstagramIcon from '@mui/icons-material/Instagram';
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Change is possible. Vote now.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <Link href='https://instagram.com/collinsforpomfret'>
           <div className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'>
           <InstagramIcon className="w-12 h-12 text-white" />

            <span className="ml-2">Follow me on Instagram</span>
            </div>
            </Link>
            <a
              href={`https://github.com/collinsrs/CollinsForPomfret-Website`}
              className="mx-3 font-bold hover:underline"
            >
              View source code on GitHub
            </a>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href='/#contact'>
              <span className="mx-3 font-bold hover:underline">
                Contact me
              </span>
            </Link>
            </div>
            <span className="text-base text-gray-500 block mt-8">© {new Date().getFullYear()} | web design and content by me. powered by Next.js and Vercel.</span>
        </div>
      </Container>
    </footer>
  )
}
