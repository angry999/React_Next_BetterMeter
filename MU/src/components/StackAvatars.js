import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: 10
  },
  avatar: {
    '& > img': {
      width: 'auto',
      height: 'auto'
    },
    border: `3px solid ${theme.palette.background.default}`,
    zIndex: '100',
    marginLeft: -10,
    '&:hover': {
      zIndex: '100'
    }
  },
  more: {
    backgroundColor: colors.red[600],
    color: colors.common.white
  }
}));

function StackAvatars({
  avatars,
  colors,
  limit,
  className,
  ...rest
}) {
  const classes = useStyles();
  let lastIndex = 0;


  const avatarNodes = avatars.slice(0, limit).map((item) => (
    <Avatar
      key={++lastIndex}
      className={clsx(classes.avatar, classes.more)}
      style={{ background: colors[0] }}
    >
      <Typography
        color="inherit"
        variant="subtitle2"
      >
        {avatars[0]}
      </Typography>
    </Avatar>
  )); 

  if (avatars.length > limit) {
    avatarNodes.push(
      <Tooltip
        key={++lastIndex}
        title="View"
      >
        <Avatar
          className={classes.avatar}
          style={{ background: colors[1], zIndex:'1' }}
          src={avatars[1]}
        />
      </Tooltip>
    );
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {avatarNodes}
    </div>
  );
}

StackAvatars.propTypes = {
  avatars: PropTypes.array,
  className: PropTypes.string,
  limit: PropTypes.number
};

StackAvatars.defaultProps = {
  avatars: [],
  limit: 1
};

export default memo(StackAvatars);
