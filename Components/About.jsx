import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BS from '../images/bodyspray.jpg'
import BR from '../images/nivea.jpg'
import CR from '../images/cream.jpg'
import SG from '../images/sunsilkgreen.jpg'


function About() {
    let settings={
        dot:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        
    }
    return (
        
        
        <Slider {...settings}>
           
            <div className='card-wrap'>
                <div className='card'>
                    <div className='card-image'>
                    <img src={BS} alt=""/>
                    </div>
                    <div className='details'>
                        <h2>BodySpray <span className='desc'>Addidass</span></h2>
                    </div>
                </div>
            </div>

            <div className='card-wrap'>
                <div className='card'>
                    <div className='card-image'>
                    <img src={BR} alt=""/>
                    </div>
                    <div className='details'>
                        <h2>Nivea<span className='desc'>Cold Cream/ </span></h2>
                    </div>
                </div>
            </div>

            <div className='card-wrap'>
                <div className='card'>
                    <div className='card-image'>
                    <img src={CR} alt=""/>
                    </div>
                    <div className='details'>
                        <h2>NIVEA <span className='desc'>Nivea Cream</span></h2>
                    </div>
                </div>
            </div>

            <div className='card-wrap'>
                <div className='card'>
                    <div className='card-image'>
                    <img src={SG} alt=""/>
                    </div>
                    <div className='details'>
                        <h2>Sunsilk<span className='desc'>Green</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default About
