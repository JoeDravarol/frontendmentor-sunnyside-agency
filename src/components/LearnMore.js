import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  link: {
    position: 'relative',
    display: 'inline-block',
    color: 'hsl(212, 27%, 19%)',
    zIndex: 5,
    textTransform: 'uppercase',
    fontSize: '1.15em',
    fontFamily: theme.typography.fontFamilyFraunces,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      color: '#000',
      '&::after': {
        left: '-10%'
      }
    },
    '&::after': {
      position: 'absolute',
      bottom: '-10%',
      left: '-5%',
      background: ({ borderColor }) => {
        return borderColor === 'yellow'
          ? 'hsl(51, 100%, 49%)'
          : 'hsl(7, 99%, 70%)'
      },
      opacity: '.3',
      content: '""',
      display: 'block',
      width: '110%',
      height: 10,
      borderRadius: '16px',
      zIndex: -1,
      transition: 'all .2s ease-in-out'
    }
  }
}))

const LearnMore = (props) => {
  const { link } = useStyles(props)
  const preventDefault = (event) => event.preventDefault()

  return (
    <Link className={link} href="#" onClick={preventDefault} underline="none">
      Learn More
    </Link>
  )
}

export default LearnMore
