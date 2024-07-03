import React, { useEffect } from 'react'
import HeroImg1 from "../image/desktop_image_2.jpg";
import Aos from 'aos'
import "aos/dist/aos.css"
import img1 from "../image/desktop_image_1.jpg"
import img2 from "../image/explore_img.png"
import img3 from "../image/view_img.png"
import img4 from "../image/download_img.png"
import img5 from "../image/play_img.png"
import img6 from "../image/texture_img.png"

const Image = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding banner-inner" data-aos="zoom-in-down"
            data-aos-duration="2000" data-aos-once="true">
            <a href="veneer-range/acco.html">
                <img src={img1}
                    data-mobile="https://naturalveneers.s3.ap-south-1.amazonaws.com/blocks/acco-mobile-banner.jpg"
                    data-desktop="https://naturalveneers.s3.ap-south-1.amazonaws.com/banners/acco-banner.jpg"
                    class="d-block w-100" alt="..." />
            </a>
            <ul class="banners_btn barcode_btn banner_acco">
                <li><a href="veneers/acco.html"><img
                    src={img2}
                    alt="Explore Features" /><span>Explore<br />Features</span></a></li>
                <li><a href="veneer-range/acco.html"><img
                    src={img3}
                    alt="View Product Range" /><span>View<br />Product Range</span></a></li>
                <li><a href="https://naturalveneers.s3.ap-south-1.amazonaws.com/brochure/pdf/brochures/Acco-Brochure.pdf"
                    target="_blank"><img
                        src={img4}
                        alt="Download Brochure" /><span>Download<br />Brochure</span></a></li>
                <li><a href="https://youtu.be/Y2G6AifyLUA?si=Gwlj0YYObPq2bu7h" data-fancybox=""><img
                    src={img5}
                    alt="View Video" /><span>View<br />Video</span></a></li>
                <li><a href="index9d6a.html"><img
                    src={img6}
                    alt="Download Texture" /><span>Download<br /> Texture</span></a></li>
            </ul>
        </div>
    )
}

export default Image