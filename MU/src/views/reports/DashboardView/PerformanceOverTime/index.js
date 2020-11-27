import React, {useState, useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  makeStyles
} from '@material-ui/core';
import Chart from './Chart';

import _ from 'lodash'
import cn from 'classnames'
import styles from './styles.module.scss'

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 0,
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: 'none',
    borderLeft: 'solid 1px #e5e5e5'
  },
  chart: {
    height: '100%'
  }
}));



function PerformanceOverTime({ className, color, data, filterData, unit, ...rest }) {
  const classes = useStyles();
  const selected = 'Glyphy.io' 

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
          <Box
            height={524}
            minWidth={500}
            style={{paddingBottom:50}}
          >
            <div className={styles.chartLegend}>
            {filterData.map((item) => (
              <div
                key={item.name}
                className={cn(styles.item, { [styles.selected]: item.name === selected })}
                style={item.name === selected ? { backgroundColor: item.color } : {}}
              >
                <div className={styles.circle} style={{ borderColor: item.color }} />
                <div className={styles.label}>{item.name}</div>
              </div>
            ))}
          </div>
            <Chart
              color={color}
              data={data}
              unit={unit}
            />
          </Box>
      </CardContent>
    </Card>
  );
}

PerformanceOverTime.propTypes = {
  className: PropTypes.string
};


export default PerformanceOverTime;
