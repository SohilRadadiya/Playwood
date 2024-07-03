import React, { useEffect } from 'react'
import image1 from "../src/image/desktop_image_1.jpg"
import image2 from "../src/image/desktop_image_2.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"

const Temp = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div>
            <div className="image">
                <img src={image1} alt="" style={{ width: "100%", height: "2000px", border: "2px solid black" }} />
                <img src={image2} alt="" style={{ width: "100%" }}
                    //  className=`"aos-init aos-animate" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-once="true"`
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    // data-aos-once="true"
                />
                <img src={image2} alt="" style={{ width: "100%" }}
                    //  className=`"aos-init aos-animate" data-aos="zoom-in-down" data-aos-duration="2000" data-aos-once="true"`
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    // data-aos-once="true"
                />
            </div>
        </div>
    )
}

export default Temp