import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddressBar from './AddressBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import HelpIcon from '@material-ui/icons/Help'

import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100vw - ${theme.drawerWidth}px)`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logo: {
    height: 40,
  },
  toolbar: {
    alignItems: 'center',
  },
}))

const AppBar = props => {
  const {
    updateUrl,
    url,
    toggleDrawer,
    toggleScreenDialog,
    toggleHelpDialog,
  } = props
  const classes = useStyles()
  return (
    <MuiAppBar color="default" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img
          src="https://responsive-viewer-ads.netlify.app/logo.png"
          alt="Responsive Viewer"
          className={classes.logo}
        />
        <AddressBar initialValues={{ url }} onSubmit={updateUrl} />
        <div className={classes.grow} />

        <Button color="primary" href="https://ko-fi.com/skmail" target="_blank">
          Support me
        </Button>
        <IconButton
          href="https://twitter.com/SolaimanKmail"
          target="_blank"
          edge="end"
          aria-label="Follow me on twitter"
          aria-haspopup="true"
          color="inherit"
        >
          <TwitterIcon />
        </IconButton>

        <IconButton
          onClick={toggleHelpDialog}
          edge="end"
          aria-label="Add Screen"
          aria-haspopup="true"
          color="inherit"
        >
          <HelpIcon />
        </IconButton>
        <IconButton
          onClick={() => toggleScreenDialog()}
          edge="end"
          aria-label="Add Screen"
          aria-haspopup="true"
          color="inherit"
        >
          <AddIcon />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar
