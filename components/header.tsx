import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header = (): JSX.Element => {
    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Blog", path: "/blog"},
        {name: "Projects", path: "/projects"},
        {name: "Contact", path: "/contact"},
    ]
    return (
        <header className={styles.header}>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <Link href={link.path}>{ link.name }</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header
