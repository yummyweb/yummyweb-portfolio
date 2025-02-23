import styles from '../styles/header.module.scss'

const Header = ({ active }: { active }): JSX.Element => {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Projects", path: "/" },
        { name: "Contact", path: "/" },
    ]
    return (
        <header className={styles.header}>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <a className={link.name === active ? styles.active : ""} href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header
