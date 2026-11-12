import React from 'react'
import './About.css'
import hotelVideo from '../../imgs/video.mp4'
import {Link} from 'react-router-dom'
import MyFooter from '../../components/Footer/MyFooter'
import MyCopyright from '../../components/Copyright/MyCopyright'

const About = () => {
    return (
        <div>
            <section className="heading">
                <video autoPlay loop className="video-background" muted playsInline>
                    <source src={hotelVideo} type="video/mp4" />
                </video>

                <center>
                    <div className="welcome-msg">
                        <h1> About Willow Retreat </h1>
                        <p>
                            Welcome to Willow Retreat, your premier sanctuary of tranquility, elegance, and natural luxury.
                            Surrounded by breathtaking scenic landscapes, Willow Retreat offers a rejuvenating escape where timeless hospitality
                            meets modern comfort. Whether you seek a peaceful weekend getaway, an unforgettable family vacation, or an intimate
                            setting for relaxation, our thoughtfully appointed suites, world-class wellness spa, and gourmet dining experiences
                            are designed to restore your mind, body, and soul.
                            <br /><br />
                            Acclaimed for exceptional service and serene ambiance, Willow Retreat provides a curated hospitality experience.
                            From our plush bedding and panoramic views to outdoor recreation and personalized concierge assistance, every detail
                            of your stay is crafted to create cherished memories. Discover pure serenity and elevate your stay at Willow Retreat.
                        </p>
                       <Link to="/rooms"> <span className="btn btn-book btna"> Book Room </span> </Link>
                       <Link to="/"> <span className="btn btn-home btna"> Return to Home</span></Link>
                    </div>

                </center>
            </section>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default About
