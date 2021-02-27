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
