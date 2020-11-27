import React from 'react'
import Avatar from '../Avatar'
import styles from './styles.module.scss'
import { formatFullName } from '../../utils/format'

const UserMenu = ({ photoUrl, firstName, lastName }) => {
  return <div className={styles.userMenu}>
    <Avatar photoUrl={photoUrl} className={styles.avatar} />
    <div className={styles.fullName}>{formatFullName(firstName, lastName)}</div>
    <div className={styles.arrow} />
  </div>
}

export default UserMenu
