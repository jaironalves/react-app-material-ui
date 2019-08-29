import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { Drawer } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { RouterLink } from 'src/components'

const useStyles = makeStyles(theme => ({
  drawerPaper: props => ({
    position: 'relative',
    whiteSpace: 'nowrap',
    width: props.sidebarWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  listIcon: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1),
    },
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}))

const Sidebar = ({ sidebarWidth, sidebarOpen, setSidebarOpen, pages }) => {
  const classes = useStyles({ sidebarWidth })

  return (
    <Drawer
      variant="permanent"
      className={clsx({
        [classes.drawerPaper]: sidebarOpen,
        [classes.drawerPaperClose]: !sidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerPaper]: sidebarOpen,
          [classes.drawerPaperClose]: !sidebarOpen,
        }),
      }}
      open={sidebarOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setSidebarOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {pages.map(page => (
          <ListItem
            button
            key={page.title}
            component={RouterLink}
            to={page.href}
          >
            <ListItemIcon className={classes.listIcon}>
              {page.icon}
            </ListItemIcon>
            <ListItemText primary={page.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
}

export default Sidebar
