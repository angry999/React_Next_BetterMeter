import styles from './styles.module.scss'
import { formatNumber } from '../../utils/format'
import Avatar from '../Avatar'

const DataList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name} className={styles.item}>
          <div className={styles.label}>
            <Avatar abbr={item.abbr} color={item.color} dark={item.dark} />
            <div className={styles.name}>{item.name}</div>
          </div>
          <div className={styles.value}>{formatNumber(item.value)}</div>
        </div>
      ))}
    </div>
  )
}

export default DataList
