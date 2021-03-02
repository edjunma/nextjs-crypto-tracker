import Coins from '../components/Coins';
import SearchBar from '../components/SearchBar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar type='text' placeholder='Search'/>
      <Coins />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}
