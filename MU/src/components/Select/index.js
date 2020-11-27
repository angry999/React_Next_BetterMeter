import { useState, useCallback, useMemo, useEffect } from 'react'
import _ from 'lodash'
import styles from './styles.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'
import { usePopper } from 'react-popper'
import cn from 'classnames'

import React from 'react';
import PropTypes from 'prop-types';

const getTextWidth = (text, font) => {
  if (typeof document === 'undefined') {
    return 'auto'
  }
  // re-use canvas object for better performance
  const canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement('canvas'))

  const context = canvas.getContext('2d')
  context.font = font

  const metrics = context.measureText(text)

  return metrics.width
}

const sameWidth = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width + 35}px`
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${state.elements.reference.offsetWidth + 35}px`
  },
}

function DropdownMenu({
  options,
  value,
  label,
  onChange,
  theme,
  className,
  full,
  optionComponent: OptionComponent,
  handleClassName,
}) {
  const [valueWidth, setValueWidth] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles: popperStyles, attributes } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['bottom-start'],
          },
        },
        {
          name: 'offset',
          options: {
            offset: [-20, -46],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            // padding from browser edges
            padding: 16,
          },
        },
        sameWidth,
      ],
    }
  )

  const close = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const toggle = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const changeValue = useCallback(
    (option) => () => {
      close()
      onChange && onChange(option.value)
    },
    [close]
  )

  const withColor = useMemo(() => _.some(options, (option) => option.color))

  const valueLabel = useMemo(() => {
    return _.get(_.find(options, { value }), 'label')
  }, [options, value])

  useEffect(() => {
    let width = 'auto'

    if (full) {
      const optionWidths = options.map((option) =>
        getTextWidth(
          option.label,
          "500 16px 'DM Sans', Arial, Helvetica, sans-serif"
        )
      )

      width = _.max(optionWidths)
    }

    setValueWidth(width)
  }, [setValueWidth, options, full])

  return (
    <div
      className={cn(
        styles.select,
        {
          [styles[theme]]: !!theme,
          [styles.open]: isOpen,
          [styles.full]: full,
        },
        className
      )}
    >
      <OutsideClickHandler onOutsideClick={close}>
        <div
          onClick={toggle}
          role="button"
          tabIndex={0}
          className={cn(styles.handle, handleClassName)}
          ref={setReferenceElement}
        >
          <div className={styles.label}>{label}:</div>
          {!!valueLabel && (
            isOpen ?
              <div className={styles.valueWrapperOpen}>
                <div className={styles.value} style={{ width: valueWidth }}>
                  {withColor ? '' : valueLabel}
                </div>
              </div>
              :
              <div className={styles.valueWrapper}>
                <div className={styles.value} style={{ width: valueWidth }}>
                  {withColor ? '' : valueLabel}
                </div>
              </div>
          )}
        </div>

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
                  onClick={changeValue(option)}
                  role="button"
                  tabIndex={0}
                  className={cn(styles.option, {
                    [styles.selected]: option.value === value,
                    [styles.withColor]: withColor,
                  })}
                >
                  {OptionComponent ? (
                    <OptionComponent option={option} value={value} />
                  ) : (
                      option.label
                    )}
                </div>
              ))}
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  )
}

DropdownMenu.propTypes = {
  className: PropTypes.string
};

export default DropdownMenu
