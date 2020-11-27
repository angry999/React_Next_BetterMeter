import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const Tabs = ({ children, selected, onTabClick }) => {
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {React.Children.map(children, (child) =>
          child && child.props.tab ? (
            <div
              className={cn(styles.tab, {
                [styles.selected]: child.props.tab === selected,
              })}
              onClick={() => onTabClick(child.props.tab)}
            >
              {child}
            </div>
          ) : (
            child
          )
        )}
      </div>
    </div>
  )
}

Tabs.Tab = () => {}

export default Tabs
