import Head from 'next/head'
import type { NextPage } from 'next'
import {Container} from '@components/layout/Container'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
           <Container>
               <h1>Suraj Personal Site....</h1>
           </Container>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home