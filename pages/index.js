import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>ETB DAO</title>
        <meta name="description" content="A community by and for Blockchain developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to ETB DAO! 
        </h1>

        <div className='p-5 mb-4 bg-light rounded-3'>
          <div className='container-fluid py-5'>
            <h1 className='display-5 fw-bold'>ETB DAO</h1>
            <p className='col-md-8 fs-4'>
              ETB DAO is a community by and for Blockchain developers. We build Blockchain projects based on the ETB token, in hackathons.
            </p>
          </div>
        </div>

        <div>
          <p>
            A few useful links:
          </p>
          <ul>
            <li>ETB Token pool on <a href='https://pancakeswap.info/pool/0xdb44c35cd6c378eb9e593d4c7243118064172fb2'>Pancakeswap</a></li>
            <li>Address of the ETB token: 0x7AC64008FA000BfDc4494e0BfCC9F4efF3d51d2a - <a href='https://bscscan.com/address/0x7AC64008FA000BfDc4494e0BfCC9F4efF3d51d2a'>bscscan</a></li>
            <li><a href='http://voting.eattheblocks.com'>Governance app</a> - ETB tokens required to vote</li>
            <li><a href='https://staking.eattheblocks.com'>Staking pool</a>, to earn ETB</li>
            <li>Discord community (coming...)</li>
          </ul>
        </div>
      </main>

      <footer className='footer mt-auto py-3 bg-light'>
        <div className='container'>
          <span className='text-muted'>ETB DAO - Copyright 2021</span>
        </div>
      </footer>
    </div>
  )
}
