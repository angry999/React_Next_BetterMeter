import { useState, useCallback } from 'react'
import styles from './styles.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'
import { usePopper } from 'react-popper'

const ThreeDotsMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom-end'],
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, -40],
          },
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

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const closeOnAction = useCallback(
    (action) => () => {
      close()
      action && action()
    },
    [close]
  )

  return (
    <OutsideClickHandler onOutsideClick={close}>
      <div
        onClick={toggle}
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
          <div className={styles.list}>
            {options.map((option) => (
              <div
                key={option.label}
                onClick={closeOnAction(option.action)}
                role="button"
                tabIndex={0}
                className={styles.option}
              >
                {option.label}
              </div>
            ))}
          </div>
          <div
            onClick={close}
            role="button"
            tabIndex={0}
            className={styles.handleClose}
          />
        </div>
      )}
    </OutsideClickHandler>
  )
}

export default ThreeDotsMenu
