import React from 'react'

import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

import mobileMilkBottleImg from 'images/mobile/image-gallery-milkbottles.jpg'
import desktopMilkBottleImg from 'images/desktop/image-gallery-milkbottles.jpg'
import mobileOrangeImg from 'images/mobile/image-gallery-orange.jpg'
import desktopOrangeImg from 'images/desktop/image-gallery-orange.jpg'
import mobileConeImg from 'images/mobile/image-gallery-cone.jpg'
import desktopConeImg from 'images/desktop/image-gallery-cone.jpg'
import mobileSugarcubeImg from 'images/mobile/image-gallery-sugar-cubes.jpg'
import desktopSugarcubeImg from 'images/desktop/image-gallery-sugarcubes.jpg'

import { useWindowSize } from 'hooks'

const useStyles = makeStyles({
  img: {
    maxWidth: '100%',
    display: 'block' // Remove whitespace
  }
})

const Gallery = () => {
  const windowSize = useWindowSize()
  const { img } = useStyles()

  const milkBottleImg =
    windowSize < 1280 ? mobileMilkBottleImg : desktopMilkBottleImg
  const orangeImg = windowSize < 1280 ? mobileOrangeImg : desktopOrangeImg
  const coneImg = windowSize < 1280 ? mobileConeImg : desktopConeImg
  const sugarcubeImg =
    windowSize < 1280 ? mobileSugarcubeImg : desktopSugarcubeImg

  return (
    <Grid container>
      <Grid item xs={6} sm={3}>
        <img className={img} src={milkBottleImg} alt="Milk bottles" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <img className={img} src={orangeImg} alt="Half an orange on a plate" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <img className={img} src={coneImg} alt="Ice-cream cone" />
      </Grid>
      <Grid item xs={6} sm={3}>
        <img className={img} src={sugarcubeImg} alt="Stacked marshmellow" />
      </Grid>
    </Grid>
  )
}

export default Gallery
