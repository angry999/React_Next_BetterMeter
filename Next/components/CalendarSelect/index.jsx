import styles from './styles.module.scss'
import cn from 'classnames'

const CalendarSelect = ({ label, value, className }) => {
  return <div className={cn(styles.calendarSelect, className)}>
    <div className={styles.label}><div className={styles.icon}/> {label}</div>
    <div className={styles.value}>{value}</div>
  </div>
}

export default CalendarSelect
