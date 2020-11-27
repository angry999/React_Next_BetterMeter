import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Menu,
  MenuItem,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Calendar as CalendarIcon } from 'react-feather';

const timeRanges = [
  {
    value: 'today',
    text: 'Today'
  },
  {
    value: 'yesterday',
    text: 'Yesterday'
  },
  {
    value: 'last_30_days',
    text: 'Last 30 days'
  },
  {
    value: 'last_year',
    text: 'Last year'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0px',
    marginBottom: '30px' 
  },
  headerFT: {
    fontFamily: 'DM Sans,Arial,Helvetica,sans-serif'
  },
  actionIcon: {
    marginRight: theme.spacing(1)
  },
  titleMTB: {
    marginTop: '20px',
    marginBottom: '30px'
  }
}));

function Header({ className, ...rest }) {
  const classes = useStyles();
  const actionRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [timeRange, setTimeRange] = useState(timeRanges[2].text);

  return (
    <Grid
      container
      spacing={9}
      justify="space-between"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item>  
        <h1
          color="textPrimary"
          style={{fontFamily: "'DM Sans' !important", fontSize: '36px'}}
        >
          Analytics
        </h1>
      </Grid>
       
    </Grid>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
