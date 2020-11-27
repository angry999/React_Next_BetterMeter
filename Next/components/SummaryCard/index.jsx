import { useState } from 'react'
import styles from './styles.module.scss'
import ThreeDotsMenu from '../ThreeDotsMenu'
import DataList from '../DataList'
import Select from '../Select'

const SummaryCard = ({ title, data, filter }) => {
  const [filterValue, setFilterValue] = useState(filter.value || filter.options[0].value)
  return (
    <div className={styles.summaryCard}>
      <div className={styles.threeDotsMenu}>
        <ThreeDotsMenu
          options={[
            { label: 'Edit', action: () => {} },
            { label: 'Refresh', action: () => {} },
          ]}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      {!!filter && (
        <div className={styles.filter}>
          <Select
            options={filter.options}
            label={filter.label}
            value={filterValue}
            onChange={setFilterValue}
            handleClassName={styles.filterSelectHandle}
          />
        </div>
      )}
      <DataList items={data} />
    </div>
  )
}

export default SummaryCard
