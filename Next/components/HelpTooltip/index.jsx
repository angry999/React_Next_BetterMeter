import { useState, useCallback } from 'react'
import styles from './styles.module.scss'
import { usePopper } from 'react-popper'

const HelpTooltip = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'top',
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top'],
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'arrow',
          // padding should be equal to border-radius of the dropdown
          options: { element: arrowElement, padding: 7 },
        },
        {
          name: 'preventOverflow',
          options: {
            // padding from browser edges
            padding: 16,
          },
        },
      ],
    }
  )

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const open = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
    <>
      <div
        onMouseEnter={open}
        onMouseLeave={close}
        role="button"
        tabIndex={0}
        className={styles.handle}
        ref={setReferenceElement}
      />

      {isOpen && (
        <div
          className={styles.popover}
          ref={setPopperElement}
          style={popperStyles.popper}
          {...attributes.popper}
        >
          <div className={styles.content}>
            <div className={styles.contentTitle}>{title}</div>
            <div className={styles.contentDescription}>{description}</div>
          </div>
          <div
            ref={setArrowElement}
            style={popperStyles.arrow}
            className={styles.popoverArrow}
          />
        </div>
      )}
    </>
  )
}

export default HelpTooltip
