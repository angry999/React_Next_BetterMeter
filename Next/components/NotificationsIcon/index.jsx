import styles from './styles.module.scss'

const NotificationsIcon = ({ count }) => {
  return (
    <div className={styles.notificationsIcon}>
      <div className={styles.icon} />
      <div className={styles.count}>{count}</div>
    </div>
  )
}

export default NotificationsIcon
