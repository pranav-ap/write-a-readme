import React from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Slideshow from '../components/Slideshow'

import './styles/index.scss'

const Home = () => (
  <Layout>
    <Head title={'Home'}/>
    <Slideshow/>
  </Layout>
)

export default Home
