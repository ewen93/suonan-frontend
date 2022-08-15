import styles from './postSnapshot.module.css'

export default function PostSnapshot({post}) {
  return (
    <div className={styles.postSnapshot}>
      {post}
    </div>
  )
}