import React from 'react'

import Layout from '../components/Layout'
import Head from '../components/Head'
import SlideShow from '../components/SlideShow'

import './styles/index.scss'

const Home = () => (
  <Layout>
    <Head title={'Home'}/>
    <SlideShow/>
  </Layout>
)

export default Home
