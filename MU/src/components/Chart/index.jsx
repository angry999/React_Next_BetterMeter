import { useRef } from 'react'
import {
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  ResponsiveContainer,
} from 'recharts'
import {
  formatNumberShort,
  formatMinutes,
  formatNumber,
} from '../../utils/format'
import styles from './styles.module.scss'
import { CHART_UNIT } from '../../constants'
import useResponsive from '../../hooks/useResponsive'
import { Portal } from 'react-portal'

const Dot = (props) => {
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
          <div className={styles.tooltipLabel}>{payload.date}`20</div>
          <div className={styles.tooltipValue}>{formatValue(value)}</div>
          <div className={styles.tooltipArrow} />
        </div>
      </Portal>
    </>
  )
}

const TooltipContent = () => <div />

const UNIT_FORMATTER = {
  [CHART_UNIT.NUMBER]: formatNumberShort,
  [CHART_UNIT.TIME]: formatMinutes,
  [CHART_UNIT.PERCENTAGE]: (value) => value + '%',
}

const VALUE_FORMATTER = {
  [CHART_UNIT.NUMBER]: formatNumber,
  [CHART_UNIT.TIME]: formatMinutes,
  [CHART_UNIT.PERCENTAGE]: (value) => value + '%',
}

const Chart = ({ data, color, unit = CHART_UNIT.NUMBER }) => {
  const chartRef = useRef()
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

export default Chart
