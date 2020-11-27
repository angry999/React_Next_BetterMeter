import React, {
  useRef,
  useState,
  memo
} from 'react';
import PropTypes from 'prop-types';
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  makeStyles
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AchiveIcon from '@material-ui/icons/ArchiveOutlined';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles(() => ({
  menu: {
    width: 156,
    maxWidth: '100%',
    borderRadius: 10
  },
  editText: {
    '& > span': {
      fontSize: 15,
      fontFamily: 'DM Sans',
      color: '#000'
    }
  },
  menuItem:
  {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

function GenericMoreButton(props) {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Tooltip title="More options">
        <IconButton
          {...props}
          onClick={handleMenuOpen}
          ref={moreRef}
        >
          <MoreIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handleMenuClose}
        open={openMenu}
        PaperProps={{ className: classes.menu }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem className={classes.menuItem}>
          <ListItemText primary="Edit" className={classes.editText} />
          <ListItemIcon style={{ minWidth: 16 }}>
            <ExpandLessIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemText primary="Rfresh" className={classes.editText} />
        </MenuItem>
      </Menu>
    </>
  );
}

GenericMoreButton.propTypes = {
  className: PropTypes.string
};

export default memo(GenericMoreButton);
