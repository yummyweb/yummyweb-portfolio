import styles from '../styles/search.module.scss'

const Search = ({ placeholder, type="text", value="", onChange=null }): JSX.Element => {
    return (
        <div className={styles.searchBarContainer}>
            <input value={value} onChange={onChange} placeholder={placeholder} type={type} />
        </div>
    )
}

export default Search
