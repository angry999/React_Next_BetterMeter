import styles from './styles.module.scss'
import cn from 'classnames'
import HelpTooltip from '../HelpTooltip'

const DataItem = ({ name, value, icon, delta, description }) => {
  return (
    <div className={styles.dataItem}>
      <div className={styles.name}>
        <span>{name}</span>
        <HelpTooltip title={name} description={description} />
      </div>
      <div className={styles.data}>
        <div className={cn(styles.icon, styles[icon])} />
        <div className={styles.value}>{value}</div>
        <div
          className={cn(
            styles.delta,
            delta >= 0 ? styles.positive : styles.negative
          )}
        >
          {delta > 0 ? '+' : ''}
          {delta}%
        </div>
      </div>
    </div>
  )
}

export default DataItem
