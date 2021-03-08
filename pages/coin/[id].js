import Layout from '../../components/Layout';

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img src={coin.image.large} alt={coin.name} className={styles.coin_image}/>
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p className={styles.coin_ticker}>{coin.symbol}</p>
          <p className={styles.coin_current}>
            {coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
    </Layout>
    )
}