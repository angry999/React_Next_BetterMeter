import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Button,
  List,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import TaskItem from './TaskItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
    borderBottomLeftRadius: '20px',
    boxShadow: 'none'
  },
  navigateNextIcon: {
    marginLeft: theme.spacing(1)
  },
  scrollerMT: {
    marginTop: '30px'
  },
  itemPT: {
    marginTop: '30px',
    padding: '0px 50px 0px 50px'
  },
  btnSee: {
    textTransform: 'none', 
    color: '#6f6f6f', 
    marginTop:'26px', 
    fontSize:'16px', 
    fontFamily: 'DM Sans,Arial,Helvetica,sans-serif'
  }
}));

function TeamTasks({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [tasks, setTasks] = useState(null);

  const getTasks = useCallback(() => {
    axios
      .get('/api/reports/tasks')
      .then((response) => {
        if (isMountedRef.current) {
          setTasks(response.data.tasks);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  if (!tasks) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box className={classes.itemPT}>
        <List>
          {tasks.map((task, i) => (
            <TaskItem
              divider={i < tasks.length - 1}
              key={task.id}
              task={task}
            />
          ))}
        </List>
      </Box>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="/"
          className={classes.btnSee}
        >
          See all
          <NavigateNextIcon className={classes.navigateNextIcon} />
        </Button>
      </Box>
    </Card>
  );
}

TeamTasks.propTypes = {
  className: PropTypes.string
};

export default TeamTasks;
