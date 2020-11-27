import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HelpTooltip from 'src/components/HelpTooltip'
import cn from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#000',
    backgroundColor: '#fff',
    boxShadow: 'none',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 0,
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px'
  },
  avatar: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    height: 30,
    width: 30,
    '& > img': {
      width: 'auto',
      height: 'auto'
    },
    marginRight: '15px'
  },
  name: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '100%',
    color: '#84868A',
    marginTop: '10px',
    '&>span': {
      marginRight: '5px',
    },
    '&>span+*': {
      position: 'relative',
      top: '-1px'
    }
  },
  delta: {
    borderRadius: '12px',
    height: '24px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '24px',
    marginLeft: '10px',
    padding: '0 7px'
  },
  secContent: {
    justifyContent: 'center'
  },
  midTitle: {
    fontFamily: 'DM Mono,Arial,Helvetica,sans-serif',
    fontSize: '36px',
    fontWeight: 500
  }
}));

function RoiPerCustomer({ className, name, icon, value, description, delta, bkImg, bkColor, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      style={{background: bkColor}}
      {...rest}
    >
      <Box flexGrow={1}>
        <Box className={classes.name}>
          <span>
            {name}
          </span>
          <HelpTooltip title={name} description={description} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          className={classes.secContent}
        >

          <Avatar
            className={classes.avatar}
            color="inherit"
            src={bkImg}
          >
            <AttachMoneyIcon />
          </Avatar>
          <Typography
            color="inherit"
            variant="body1"
            className={classes.midTitle}
          >
            {value}
          </Typography>
          {delta > 0 ?
            <div
              className={classes.delta}
              style={{ background: '#BEEDC0', color: '#01653B' }}
            >
              +{delta}%
            </div>
            :
            <div
              className={classes.delta}
              style={{ background: '#FED1D1', color: '#EC0C0C' }}
            >
              {delta}%
            </div>
          }
        </Box>
      </Box>
    </Card>
  );
}

RoiPerCustomer.propTypes = {
  className: PropTypes.string
};

export default RoiPerCustomer;
