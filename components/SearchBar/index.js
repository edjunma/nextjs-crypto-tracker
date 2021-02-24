import styles from './Search.module.css';

const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin.search}>
      <input className={styles.coin.input} {...rest} />
    </div>
  )
}

export default SearchBar;
