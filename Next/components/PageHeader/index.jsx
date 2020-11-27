import styles from './styles.module.scss'

const PageHeader = ({ title, aside }) => {
  return (
    <div className={styles.pageHeader}>
      <h1 className={styles.title}>{title}</h1>
      {aside}
    </div>
  )
}

export default PageHeader
