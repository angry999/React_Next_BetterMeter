import React, {useRef} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Line } from 'react-chartjs-2';
import {
  fade,
  makeStyles,
  useTheme
} from '@material-ui/core';
import { Portal } from 'react-portal'
import styles from './styles.module.scss'
import {
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts'
import { useState, useLayoutEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
 
const TooltipContent = () => <div />

const MEDIA_QUERY = {
  MOBILE: {
    query: '(max-width: 1023px)',
  },
}

const formatNumber = (value) => new Intl.NumberFormat().format(value)

const formatNumberShort = (num, digits = 0) => {
  const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y']

  for (let i = units.length - 1; i >= 0; i--) {
    let decimal = Math.pow(1000, i + 1)

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i]
    }
  }

  return num
}
 
const formatMinutes = (value) => {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60
  const secondsStr = seconds < 10 ? `${seconds}0` : seconds

  return `${minutes}:${secondsStr}`
}

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false)

  const isMobile = useMediaQuery(MEDIA_QUERY.MOBILE)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true)
  }, [])

  return {
    isMobile: isClient ? isMobile : false,
  }
}


const Dot = (props) => {
  // const styles = useStyles();
  const { cx, cy, payload, value, chartRef, fill, formatValue } = props
  return (
    <>
      <circle
        r="5.5"
        stroke="white"
        strokeWidth="5"
        fill={fill}
        className="recharts-dot recharts-line-dot"
        cx={cx}
        cy={cy}
        r={10}
        opacity={1}
      />

      <Portal node={chartRef.current}>
        <div className={styles.tooltip} style={{ left: cx, top: cy - 18 }}>
          <div className={styles.tooltipLabel}>{payload.date} ‘20</div>
          <div className={styles.tooltipValue}>{formatValue(value)}</div>
          <div className={styles.tooltipArrow} />
        </div>
      </Portal>
    </>
  )
}

const CHART_UNIT = {
  NUMBER: 'number',
  TIME: 'time',
  PERCENTAGE: 'percentage'
}

const VALUE_FORMATTER = {
  [CHART_UNIT.NUMBER]: formatNumber,
  [CHART_UNIT.TIME]: formatMinutes,
  [CHART_UNIT.PERCENTAGE]: (value) => value + '%',
}

const UNIT_FORMATTER = {
  [CHART_UNIT.NUMBER]: formatNumberShort,
  [CHART_UNIT.TIME]: formatMinutes,
  [CHART_UNIT.PERCENTAGE]: (value) => value + '%',
}

const Chart = ({ color, data, unit = CHART_UNIT.NUMBER }) => {
  const chartRef = useRef()
  // const styles = useStyles();
  const { isMobile } = useResponsive()
  const yAxisFormatter = UNIT_FORMATTER[unit]
  const formatValue = VALUE_FORMATTER[unit]

  return (
    <div className={styles.chart} ref={chartRef}>
      <ResponsiveContainer height="100%" width="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            type="category"
            domain={['dataMin', 'dataMax']}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => value.toUpperCase()}
            padding={{ left: 33, right: 33 }}
            interval="preserveStart"
          />
          {!isMobile && (
            <YAxis
              dataKey="value"
              domain={['dataMin', (dataMax) => dataMax * 1.1]}
              interval={0}
              axisLine={false}
              tickLine={false}
              scale="linear"
              orientation="right"
              tickFormatter={yAxisFormatter}
              padding={{ bottom: 23, top: 13 }}
            />
          )}
          <Tooltip content={TooltipContent} />
          <Line
            dataKey="value"
            type="linear"
            stroke={color}
            strokeWidth={3}
            dot={{ r: 0, stroke: 0 }}
            activeDot={
              <Dot chartRef={chartRef} fill={color} formatValue={formatValue} />
            }
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired
  // labels: PropTypes.array.isRequired
};

export default Chart;
