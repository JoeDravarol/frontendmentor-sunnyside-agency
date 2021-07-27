import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core'

import TestimonialsDetails from 'components/TestimonialDetails'
import { useWindowSize } from 'hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4em 0 3em',
    [theme.breakpoints.up('lg')]: {
      padding: '6em 0 5em'
    }
  },
  title: {
    fontSize: '1.25rem',
    fontFamily: theme.typography.fontFamilyFraunces,
    textTransform: 'uppercase',
    wordSpacing: theme.spacing(0.75),
    color: theme.palette.neutral.grayishBlue,
    marginBottom: '2.5em'
  },
  gridContainer: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1600,
      margin: '0 auto'
    }
  }
}))

const Testimonials = ({ data }) => {
  const windowSize = useWindowSize()
  const classes = useStyles()

  const justifyContent = windowSize.width < 1440 ? 'center' : 'space-around'

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h5"
        component="h2"
        align="center"
      >
        Client testimonials
      </Typography>

      <Grid
        className={classes.gridContainer}
        container
        justifyContent={justifyContent}
        spacing={3}
      >
        {data.map((testimonial) => (
          <Grid item>
            <TestimonialsDetails key={testimonial.id} {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Testimonials
