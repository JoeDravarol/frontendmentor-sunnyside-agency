import React from 'react'

import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import Logo from 'components/icons/Logo'
import Facebook from 'components/icons/Facebook'
import Twitter from 'components/icons/Twitter'
import Instagram from 'components/icons/Instagram'
import Pinterest from 'components/icons/Pinterest'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.footer.background,
    textAlign: 'center',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    height: 350,
    [theme.breakpoints.up('lg')]: {
      height: 400
    }
  },
  logo: {
    transform: 'scale(1.25)',
    '& path': {
      fill: theme.palette.footer.icon
    }
  },
  linksContainer: {
    margin: '3em 0 6em',
    width: 375
  },
  link: {
    color: theme.palette.footer.text,
    fontSize: '1.25em',
    transition: 'all .15s ease-in-out',
    '&:hover': {
      color: '#FFF'
    }
  },
  socialContainer: {
    width: 190
  },
  icon: {
    '&:hover': {
      '& path': {
        transition: 'all .15s ease-in-out',
        fill: '#FFF'
      }
    }
  }
}))

const navLinkData = [
  {
    label: 'About',
    href: '#'
  },
  {
    label: 'Services',
    href: '#'
  },
  {
    label: 'Projects',
    href: '#'
  }
]

const Footer = () => {
  const classes = useStyles()

  const preventDefault = (event) => event.preventDefault()

  const navLinks = (
    <Grid
      className={classes.linksContainer}
      container
      justifyContent="space-around"
    >
      {navLinkData.map((link) => (
        <Grid item key={'footer-' + link.label} xs={4}>
          <Link
            className={classes.link}
            href={link.href}
            onClick={preventDefault}
            underline="none"
          >
            {link.label}
          </Link>
        </Grid>
      ))}
    </Grid>
  )

  const socialIcons = (
    <Grid className={classes.socialContainer} container>
      <Grid item xs={3}>
        <Link
          className={classes.icon}
          href="#"
          onClick={preventDefault}
          underline="none"
          title="Facebook"
        >
          <Facebook />
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link
          className={classes.icon}
          href="#"
          onClick={preventDefault}
          underline="none"
          title="Instagram"
        >
          <Instagram />
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link
          className={classes.icon}
          href="#"
          onClick={preventDefault}
          underline="none"
          title="Twitter"
        >
          <Twitter />
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link
          className={classes.icon}
          href="#"
          onClick={preventDefault}
          underline="none"
          title="Pinterest"
        >
          <Pinterest />
        </Link>
      </Grid>
    </Grid>
  )

  return (
    <div className={classes.root}>
      <Link href="#" onClick={preventDefault} underline="none">
        <Logo className={classes.logo} />
      </Link>

      {navLinks}
      {socialIcons}
    </div>
  )
}

export default Footer
