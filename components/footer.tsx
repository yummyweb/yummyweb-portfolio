import Link from 'next/link'
import styles from '../styles/footer.module.scss'

const Footer = () => {
    const footerLinks = [
        {name: "Home", url: "/"},
        {name: "Twitter", url: "https://twitter.com/AntarikshaVerm2"},
        {name: "GitHub", url: "https://github.com/yummyweb"},
        {name: "About", url: "/about"},
        {name: "Dribbble", url: "https://dribbble.com"},
        {name: "RSS", url: "/feed.xml", beta: true},
        {name: "Blog", url: "/blog"},
        {name: "Changelog", url: "/changelog", new: true},
        {name: "Projects", url: "/projects"},
        {name: "Contact", url: "/contact"},
    ]

    return (
        <footer className={styles.footer}>
            <ul className={styles.links}>
                {footerLinks.map(link => (
                <li key={link.name}>
                    <Link href={link.url}>
                    <a>
                        {link.name} {link.new && <span className={styles.newBadge}>New</span>} {link.beta && <span className={styles.betaBadge}>Beta</span>}
                    </a>
                    </Link>
                </li>
                ))}
            </ul>
            <p className={styles.copyright}>&copy; yum {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
