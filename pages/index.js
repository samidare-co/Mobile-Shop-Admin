import Layout from '@/components/Layout'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()
  return (
    <Layout>
      <div className="flex justify-between">
        <div></div>
        <div className="flex h-6 justify-center bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={
              'https://lh5.googleusercontent.com/-CB2rjpKaTyw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucl4ElWYc1emFXXy_TaLh5aizndEGA/photo.jpg'
            }
            alt=""
            className="w-6 h-6"
          />
          <span className="px-2">{'Sami'}</span>
        </div>
      </div>
    </Layout>
  )
}
