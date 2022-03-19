import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'

import TopBarDeskTop from './Desktop'
import TopBarMobile from './Mobile'

import { MenuValues } from 'src/Menu'

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
  },
}))

const TopBar = props => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" classes={classes}>
      <Toolbar>
        <Hidden smDown>
          <TopBarDeskTop
            menuValue={props.menuValue}
            locationSearch={props.locationSearch}
          />
        </Hidden>
        <Hidden mdUp>
          <TopBarMobile locationSearch={props.locationSearch} />
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export { MenuValues }

export default TopBar
