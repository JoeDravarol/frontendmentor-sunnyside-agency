import React from 'react'

import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

import mobileHeroImg from 'images/mobile/image-header.jpg'
import desktopHeroImg from 'images/desktop/image-header.jpg'
import arrowDownIcon from 'images/icon-arrow-down.svg'
import { useWindowSize } from 'hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '70vh',
    position: 'relative',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'start',
    [theme.breakpoints.up('lg')]: {
      height: '80vh'
    }
  },
  heroBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'bottom',
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.up('lg')]: {
      objectPosition: 'center'
    }
  },
  heroTitle: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '2.9rem',
    fontFamily: theme.typography.fontFamilyFraunces,
    maxWidth: 375,
    height: 'fit-content',
    position: 'relative',
    marginTop: '3em',
    letterSpacing: '5px',
    [theme.breakpoints.up('sm')]: {
      marginTop: '3.5em'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 'initial'
    }
  },
  arrowDownIcon: {
    position: 'relative',
    marginTop: '2em',
    zIndex: 3,
    display: 'inline-block',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2.5em'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '5em'
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '7em'
    }
  }
}))

const Hero = () => {
  const windowSize = useWindowSize()
  const classes = useStyles()

  const heroBg = windowSize.width < 600 ? mobileHeroImg : desktopHeroImg

  return (
    <div className={classes.root}>
      <img className={classes.heroBg} src={heroBg} alt="A sliced orange" />
      <Typography className={classes.heroTitle} variant="h3" component="h2">
        We are creatives
      </Typography>
      <img
        className={classes.arrowDownIcon}
        src={arrowDownIcon}
        alt="Arrow down icon"
      />
    </div>
  )
}

export default Hero
