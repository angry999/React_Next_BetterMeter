import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StackAvatars from 'src/components/StackAvatars';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: '12px',
    paddingBottom: '12px'
  },
  viewButton: {
    // marginLeft: theme.spacing(2)
  },
  listItemText: {
    '& > span': {
      fontSize: '28px !important',
      textAlign: 'right',
      fontWeight: 500,
      fontFamily: 'DM Mono,Arial,Helvetica,sans-serif'
    },
    paddingRight: 0
  }

}));

function TaskItem({ task, className, ...rest }) {
  const classes = useStyles();

  let critical = false;

  return (
    <ListItem
      className={clsx(
        classes.root,
        { [classes.critical]: critical },
        className
      )}
      {...rest}
    >
      <StackAvatars
        avatars={task.members}
        colors={task.colors}
        limit={1}
      />
      <ListItemText
        className={classes.listItemText}
        primary={new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(task.value)}
      />
    </ListItem>
  );
}

TaskItem.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object.isRequired
};

export default TaskItem;
