import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import mobileEggImg from 'images/mobile/image-transform.jpg'
import desktopEggImg from 'images/desktop/image-transform.jpg'
import mobileCupImg from 'images/mobile/image-stand-out.jpg'
import desktopCupImg from 'images/desktop/image-stand-out.jpg'
import mobileCherryImg from 'images/mobile/image-graphic-design.jpg'
import desktopCherryImg from 'images/desktop/image-graphic-design.jpg'
import mobileMandarineImg from 'images/mobile/image-photography.jpg'
import desktopMandarineImg from 'images/desktop/image-photography.jpg'

import LearnMore from 'components/LearnMore'
import { useWindowSize } from 'hooks'

const useStyles = makeStyles((theme) => ({
  flexContainer: {
    '@media (min-width: 800px)': {
      display: 'flex',
      '&:nth-of-type(1)': {
        flexDirection: 'row-reverse'
      }
    }
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  square: {
    height: 'calc(100vw - 5px)',
    maxHeight: 500,
    display: 'grid',
    alignItems: 'center',

    '@media (min-width: 800px)': {
      width: '50vw',
      height: '50vw',
      maxHeight: 'initial'
    }
  },
  content: {
    padding: '3em 2.15em',
    textAlign: 'center',
    maxWidth: 375,
    justifySelf: 'center',
    '@media (min-width: 800px)': {
      textAlign: 'left'
    },
    [theme.breakpoints.up('lg')]: {
      padding: 'initial'
    }
  },
  contentTitle: {
    fontFamily: theme.typography.fontFamilyFraunces,
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem'
    }
  },
  contentDesc: {
    margin: '1.5em 0',
    color: theme.palette.text.secondary,
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
      margin: '2em 0'
    }
  },
  heroLikeSquare: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'end',
    position: 'relative',
    height: 600,
    paddingBottom: '4.5em',

    '@media (min-width: 800px)': {
      width: '50vw'
    },
    [theme.breakpoints.up('lg')]: {
      height: '50vw'
    }
  },
  bgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute'
  },
  heroLikeContent: {
    alignSelf: 'end',
    position: 'relative',
    zIndex: 3,
    textAlign: 'center',
    maxWidth: 375
  },
  heroLikeContentTitle: {
    fontFamily: theme.typography.fontFamilyFraunces
  },
  heroLikeContentDesc: {
    marginTop: '1.5em',
    opacity: '0.85'
  },
  graphicContent: {
    color: 'hsl(167, 40%, 24%)'
  },
  photographyContent: {
    color: 'hsl(198, 62%, 26%)'
  }
}))

const Services = () => {
  const windowSize = useWindowSize()
  const classes = useStyles()

  const isWidthSm = windowSize.width < 600
  const eggImg = isWidthSm ? mobileEggImg : desktopEggImg
  const cupImg = isWidthSm ? mobileCupImg : desktopCupImg
  const cherryBgImg = isWidthSm ? mobileCherryImg : desktopCherryImg
  const mandarineBgImg = isWidthSm ? mobileMandarineImg : desktopMandarineImg

  return (
    <div className={classes.container}>
      <div className={classes.flexContainer}>
        <div className={classes.square}>
          <img
            className={classes.img}
            src={eggImg}
            alt="Egg with shadow on yellow background"
          />
        </div>

        <div className={classes.square}>
          <div className={classes.content}>
            <Typography
              className={classes.contentTitle}
              variant="h4"
              component="h2"
            >
              Transform your brand
            </Typography>

            <Typography className={classes.contentDesc}>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </Typography>

            <LearnMore borderColor="yellow" />
          </div>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.square}>
          <img className={classes.img} src={cupImg} alt="pinkish red cup" />
        </div>

        <div className={classes.square}>
          <div className={classes.content}>
            <Typography
              className={classes.contentTitle}
              variant="h4"
              component="h2"
            >
              Stand out to the right audience
            </Typography>

            <Typography className={classes.contentDesc}>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </Typography>

            <LearnMore borderColor="red" />
          </div>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.heroLikeSquare}>
          <img
            className={classes.bgImg}
            src={cherryBgImg}
            alt="Cherry with water droplets"
          />

          <div
            className={`${classes.heroLikeContent} ${classes.graphicContent}`}
          >
            <Typography
              className={classes.heroLikeContentTitle}
              variant="h4"
              component="h2"
            >
              Graphic design
            </Typography>

            <Typography className={classes.heroLikeContentDesc}>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </Typography>
          </div>
        </div>

        <div className={classes.heroLikeSquare}>
          <img className={classes.bgImg} src={mandarineBgImg} alt="Mandarine" />

          <div
            className={`${classes.heroLikeContent} ${classes.photographyContent}`}
          >
            <Typography
              className={classes.heroLikeContentTitle}
              variant="h4"
              component="h2"
            >
              Photography
            </Typography>

            <Typography className={classes.heroLikeContentDesc}>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
