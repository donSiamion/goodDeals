import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { auth, deauth } from '../slices/authSlice'
import type { RootState } from '../store'
import Auth from './auth'

const Home: NextPage = () => {

  const isAuth = useSelector((state: RootState) => state.auth.isAuthentificate)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Auth />
    </div>
  )
}

export default Home
