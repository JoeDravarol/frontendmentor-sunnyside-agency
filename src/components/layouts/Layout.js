import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import Nav from 'components/Nav'

const theme = createTheme({
  palette: {
    text: {
      secondary: 'hsl(232, 10%, 55%)'
    },
    button: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(51, 100%, 49%)',
      hover: 'rgba(255, 255, 255, 0.2)'
    },
    neutral: {
      veryDarkDesaturatedBlue: 'hsl(212, 27%, 19%)',
      veryDarkGrayishBlue: 'hsl(213, 9%, 39%)',
      darkGrayishBlue: 'hsl(232, 10%, 55%)',
      grayishBlue: 'hsl(210, 4%, 67%)'
    }
  },
  typography: {
    fontFamily: 'Barlow',
    fontFamilyFraunces: 'Fraunces'
  }
})

const styles = {
  backgroundColor: '#FFF',
  overflow: 'hidden'
}

const Layout = ({ children }) => {
  const headersData = [
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav headersData={headersData} />
      <Box style={styles}>
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default Layout
