import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}> LOGO </span>
      <button className={`${styles.headerButton} ${styles.verticalCentering}`}>
        登录
      </button>
    </div>
  )
}