import React from 'react'
import { Hero } from './components/Hero'
// import { Call2021 } from 'components/Home/components/Call2021'
import { Lab2021 } from './components/Lab2021'
import { Podcasts } from '../Podcasts'
import { Contact } from '../Contact'

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Call2021 /> */}
            <Lab2021 />
            <Podcasts />
            <Contact />
        </>
    )
}

export default Home
