import styles from './styles.module.scss'
import { formatNumber } from '../../utils/format'
import Avatar from '../Avatar'
import cn from 'classnames'

const TrendsList = ({ items }) => {
  return (
    <div className={styles.dataItem}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.label}>
            <Avatar abbr={item.abbr} color={item.color} dark={item.dark} className={styles.avatar} />
            <div className={cn(styles.type, styles[item.type])} />
          </div>
          <div className={styles.value}>{formatNumber(item.value)}</div>
        </div>
      ))}
    </div>
  )
}

export default TrendsList
