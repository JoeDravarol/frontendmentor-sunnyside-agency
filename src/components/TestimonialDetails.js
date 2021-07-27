import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto 4em'
  },
  avatar: {
    margin: '0 auto',
    width: 70,
    height: 70
  },
  statement: {
    margin: '2em auto',
    maxWidth: 330,
    color: theme.palette.neutral.veryDarkGrayishBlue
  },
  name: {
    fontFamily: theme.typography.fontFamilyFraunces
  },
  role: {
    color: theme.palette.neutral.grayishBlue
  }
}))

const TestimonialDetails = ({ name, statement, role, img }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={0} square>
      <Avatar className={classes.avatar} src={img} alt={`${name}'s avatar`} />

      <Typography
        className={classes.statement}
        variant="body1"
        color="textSecondary"
        align="center"
      >
        {statement}
      </Typography>

      <Typography
        className={classes.name}
        variant="h6"
        component="h3"
        align="center"
      >
        {name}.
      </Typography>

      <Typography className={classes.role} variant="body1" align="center">
        {role}
      </Typography>
    </Paper>
  )
}

export default TestimonialDetails
