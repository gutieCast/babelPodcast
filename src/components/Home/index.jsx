import React from 'react'
import { Hero } from 'components/Home/components/Hero'
import { Call2021 } from 'components/Home/components/Call2021'
import { Lab2021 } from 'components/Home/components/Lab2021'
import { Podcasts } from 'components/Podcasts'
import { Contact } from 'components/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Call2021 />
            <Lab2021 />
            <Podcasts />
            <Contact />
        </>
    )
}

export default Home
