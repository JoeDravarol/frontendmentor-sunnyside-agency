import React from 'react'

import Layout from 'components/layouts/Layout'
import Hero from 'components/sections/Hero'
import Services from 'components/sections/Services'
import Testimonials from 'components/sections/Testimonials'

import emilyAvatar from 'images/image-emily.jpg'
import thomasAvatar from 'images/image-thomas.jpg'
import jennieAvatar from 'images/image-jennie.jpg'

const testimonialsData = [
  {
    id: 1,
    name: 'Emily R',
    role: 'Marketing Director',
    statement: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    img: emilyAvatar
  },
  {
    id: 2,
    name: 'Thomas S',
    role: 'Chief Operating Officer',
    statement: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    img: thomasAvatar
  },
  {
    id: 3,
    name: 'Jennie F',
    role: 'Business Owner',
    statement: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    img: jennieAvatar
  },
]

const App = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials data={testimonialsData} />
    </Layout>
  )
}

export default App
