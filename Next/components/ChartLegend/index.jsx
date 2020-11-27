import styles from './styles.module.scss'
import cn from 'classnames'

const ChartLegend = ({ items, selected }) => {
  return (
    <div className={styles.chartLegend}>
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(styles.item, { [styles.selected]: item.label === selected })}
          style={item.label === selected ? { backgroundColor: item.color } : {}}
        >
          <div className={styles.circle} style={{ borderColor: item.color }} />
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  )
}

export default ChartLegend
