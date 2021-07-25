import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core'

import Container from 'components/layouts/Container'
import Logo from 'components/icons/Logo'
import Hamburger from 'components/icons/Hamburger'
import { useWindowSize } from 'hooks'

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: 100,
    justifyContent: 'center',
  },
  toolbar: {
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  logo: {
    height: 48,
    display: 'grid',
    alignItems: 'center'
  },
  menuButton: {
    color: '#FFF',
    textTransform: 'capitalize',
    fontSize: '1.25em',
  },
  menuItem: {
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
    fontSize: '1.5em',
    fontWeight: 700,
    '&:hover': {
      background: 'transparent'
    },
  },
  contactMenuItem: {
    '&:hover': {
      background: 'initial',
    }
  },
  contactButton: {
    borderRadius: theme.spacing(3),
    padding: '.55em 1.5em',
    background: theme.palette.button.secondary,
    fontWeight: 600,
    fontSize: '1.15em',
    [theme.breakpoints.up('lg')]: {
      background: theme.palette.button.primary,
      '&:hover': {
        color: '#FFF',
        background: theme.palette.button.hover
      }
    }
  },
  menuButtonsContainer: {
    width: 450,
    display: 'flex',
    justifyContent: 'space-between'
  },
  paperProps: {
    overflow: 'visible',
    marginTop: 100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    alignItems: 'center',
    height: 350,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-32px',
      right: 0,
      borderBottom: '32px solid #FFF',
      borderLeft: '32px solid transparent'
    },
    [theme.breakpoints.up('sm')]: {
      width: 450,
      position: 'relative',
    }
  }
}))

const Nav = ({ headersData }) => {
  const classes = useStyles()
  const windowSize = useWindowSize()
  const [mobileView, setMobileView] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (windowSize.width < 1280) {
      setMobileView(true)
    } else {
      setMobileView(false)
    }
  }, [windowSize])

  const preventDefault = (e) => e.preventDefault()
  const handleMenuOpen = () => {
    setDrawerOpen(true)
  }
  const handleMenuClose = () => {
    setDrawerOpen(false)
  }

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          className={classes.menuButton}
          href={href}
          component={Link}
          onClick={preventDefault}
          underline="none"
        >
          {label}
        </Button>
      )
    })
  }

  const contactButton = (
    <Button
      className={classes.contactButton}
      href="#"
      component={Link}
      onClick={preventDefault}
      underline="none"
    >
      Contact
    </Button>
  )

  const getMobileMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link key={label} to={href} underline="none" align="center">
          <MenuItem className={classes.menuItem}>{label}</MenuItem>
        </Link>
      )
    })
  }

  const manageLogo = (
    <Link href="#" onClick={preventDefault} className={classes.logo}>
      <Logo />
    </Link>
  )

  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar} disableGutters>
        {manageLogo}

        <IconButton
          color="inherit"
          area-label="menu"
          area-haspopup="true"
          edge="end"
          onClick={handleMenuOpen}
        >
          <Hamburger />
        </IconButton>

        <Menu
          open={drawerOpen}
          onClose={handleMenuClose}
          style={{ left: 'none'}} // Remove MUI inline horizontal properties
          getContentAnchorEl={null} // Remove default MUI vertical properties
          PaperProps={{
            square: true,
            elevation: 0,
            className: classes.paperProps
          }}
        >
          {getMobileMenuButtons()}
          <MenuItem className={classes.contactMenuItem}>{contactButton}</MenuItem>
        </Menu>
      </Toolbar>
    )
  }

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar} disableGutters>
        {manageLogo}

        <div className={classes.menuButtonsContainer}>
          {getMenuButtons()}
          {contactButton}
        </div>
      </Toolbar>
    )
  }

  return (
    <AppBar
      className={classes.appbar}
      position="absolute"
      color="transparent"
      elevation={0}
    >
      <Container>{mobileView ? displayMobile() : displayDesktop()}</Container>
    </AppBar>
  )
}

export default Nav
