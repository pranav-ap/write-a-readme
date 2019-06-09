import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Progress from "../components/Progress"
import Slideshow from "../components/Slideshow"

const Home = () => (
  <Layout>
    <Head title={"Home"}/>
    <Progress/>
    <Slideshow/>
  </Layout>
)

export default Home


// 1. Get url - username and project name
// 2. get shield links
// 3. get license
// 4. describe the project - short - long
// 5. Setup for development
//   6. external Usage - going to be used in other people code
// 7. Change Log ?
//   8. Screen shots / gifs
// 9. Code of conduct
