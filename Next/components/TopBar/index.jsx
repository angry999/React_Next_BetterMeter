import NotificationsIcon from '../NotificationsIcon'
import SearchIcon from '../SearchIcon'
import UserMenu from '../UserMenu'
import styles from './styles.module.scss'

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.mobileMenuWrapper}>
        <div className={styles.mobileMenuIcon} />
      </div>

      <img src="/images/logo.svg" alt="logo" className={styles.logo} />

      <div className={styles.rightPanel}>
        <div className={styles.search}>
          <SearchIcon />
        </div>
        <div className={styles.notifications}>
          <NotificationsIcon count={9} />
        </div>
        <div className={styles.userMenu}>
          <UserMenu
            photoUrl="/assets/avatar.png"
            firstName="Adrian"
            lastName="Villa"
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar
