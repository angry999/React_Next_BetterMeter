import styles from './styles.module.scss'
import cn from 'classnames'

const menuItems = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    active: true,
  },
  {
    label: 'Sites',
    icon: 'sites',
  },
  {
    label: 'Campaigns',
    icon: 'campaigns',
  },
  {
    label: 'Analytics',
    icon: 'analytics',
  },
  {
    label: 'Live View',
    icon: 'live-view',
  },
  {
    label: 'Users',
    icon: 'users',
  },
  {
    label: 'Organizations',
    icon: 'organizations',
  },
  {
    label: 'Settings',
    icon: 'settings',
  },
]

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      {menuItems.map((item) => (
        <div key={item.label} className={cn(styles.item, { [styles.active]: item.active })}>
          <div
            className={styles.icon}
            style={{
              backgroundImage: `url(/images/icon-menu-${item.icon}.svg)`,
            }}
          />
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default MainMenu
