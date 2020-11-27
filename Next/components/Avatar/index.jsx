import styles from './styles.module.scss'
import cn from 'classnames'

const Avatar = ({ abbr, color, dark, className, photoUrl }) => {
  return (
    <div
      className={cn(styles.avatar, { [styles.dark]: dark }, className)}
      style={{ backgroundColor: color }}
    >
      {photoUrl ? <img src={photoUrl} /> : <span>{abbr}</span>}
    </div>
  )
}

export default Avatar
