import styles from '../styles/search.module.scss'

const Search = ({ placeholder, type="text" }): JSX.Element => {
    return (
        <div className={styles.searchBarContainer}>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}

export default Search
