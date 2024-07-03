import React, { useEffect } from 'react';
import "./Hero.css";
import Image from "../../components/Image"
import HeroImg from "../../image/desktop_image_1.jpg";
import HeroImg1 from "../../image/desktop_image_2.jpg";
import HeroImg2 from "../../image/desktop_image_3.jpg";
import HeroImg3 from "../../image/desktop_image_4.jpg";
import HeroImg4 from "../../image/desktop_image_5.jpg";
import HeroImg5 from "../../image/desktop_image_.jpg";
import HeroImg6 from "../../image/desktop_image_7.jpg";
import HeroImg7 from "../../image/desktop_image_8.jpg";
import HeroImg8 from "../../image/desktop_image_9.jpg";
import img1 from "../../image/desktop_image_10.jpg";
import img2 from "../../image/desktop_image_11.jpg";
import img3 from "../../image/desktop_image_12.jpg";
import img4 from "../../image/desktop_image_13.jpg";
import HeroImg20 from "../../image/desktop_image_19.jpg";
import HeroImg21 from "../../image/desktop_image_20.jpg";
import HeroImg22 from "../../image/desktop_image_21.jpg";
import HeroImg23 from "../../image/desktop_image_22.jpg";
import HeroImg24 from "../../image/desktop_image_23.jpg";
import HeroImg25 from "../../image/desktop_image_39.jpg";
import HeroImg26 from "../../image/desktop_image_24.jpg";
import HeroImg27 from "../../image/desktop_image_25.jpg";
import HeroImg28 from "../../image/desktop_image_26.jpg";
import HeroImg29 from "../../image/desktop_image_27.jpg";
import HeroImg30 from "../../image/desktop_image_28.jpg";
import HeroImg32 from "../../image/desktop_image_32.jpg";
import HeroImg33 from "../../image/desktop_image_33.jpg";
import HeroImg34 from "../../image/desktop_image_34.png";
import HeroImg35 from "../../image/desktop_image_35.png";
import HeroImg36 from "../../image/desktop_image_36.png";
import HeroImg37 from "../../image/desktop_image_37.png";
import HeroImg38 from "../../image/desktop_image_38.jpg";
import HeroImg39 from "../../image/desktop_image_30.jpg";
import HeroImg40 from "../../image/desktop_image_31.jpg";
import explore from "../../image/explore_img.png";
import view from "../../image/view_img.png";
import download from "../../image/download_img.png";
import play from "../../image/play_img.png";
import texture from "../../image/texture_img.png";
import phone from '../../../src/image/android-icn.png';
import apple_icon from '../../../src/image/apple-icn.png';
import NumberCounter from 'number-counter';
import Aos from 'aos'
import "aos/dist/aos.css"

const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="image1 .image1_1"
                data-aos="zoom-in-down"
                data-aos-duration="500" data-aos-offset="100">
                <img src={HeroImg} alt="Hero" />
                <div className="content1 con1">
                    <div className="explore">
                        <img src={explore} alt="" />
                        <p>Explore <br /> Features</p>
                    </div>
                    <div className="explore">
                        <img src={view} alt="" />
                        <p>View <br /> Product Range</p>
                    </div>
                    <div className="explore">
                        <img src={download} alt="" />
                        <p>Download <br /> Brochure</p>
                    </div>
                    <div className="explore">
                        <img src={play} alt="" />
                        <p>View <br /> Video</p>
                    </div>
                    <div className="explore">
                        <img src={texture} alt="" />
                        <p>Download <br /> Texture</p>
                    </div>
                </div>
            </div >
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image2 image1_2">
                <div className="image1"
                    data-aos="fade-up"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg1} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image3 image1_3">
                <div className="image1"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" data-aos-offset="100">
                    <img src={HeroImg2} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image4 image1_4">
                <div className="image1"
                    data-aos="zoom-in-down"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg3} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image5  image1_5">
                <div className="image1"
                    data-aos="zoom-in-down"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg4} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image6 image1_6">
                <div className="image1"
                    data-aos="fade-right"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg5} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        {/* <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div> */}
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image7 image1_7">
                <div className="image1"
                    data-aos="fade-down"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg6} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image8 image1_8">
                <div className="image1"
                    data-aos="zoom-in"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg7} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <div className="image9 image1_9">
                <div className="image1"
                    data-aos="zoom-in"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg8} alt="Hero" />
                    <div className="content1 con1">
                        <div className="explore">
                            <img src={explore} alt="" />
                            <p>Explore <br /> Features</p>
                        </div>
                        <div className="explore">
                            <img src={view} alt="" />
                            <p>View <br /> Product Range</p>
                        </div>
                        <div className="explore">
                            <img src={download} alt="" />
                            <p>Download <br /> Brochure</p>
                        </div>
                        <div className="explore">
                            <img src={play} alt="" />
                            <p>View <br /> Video</p>
                        </div>
                        <div className="explore">
                            <img src={texture} alt="" />
                            <p>Download <br /> Texture</p>
                        </div>
                    </div>
                </div >
            </div>
            <div className="con2">
                <div className="con2_1">
                    <div className="con2_2">
                        <img src={explore} alt="" />
                        <p className="con2_3">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_2">
                        <img src={view} alt="" />
                        <p className="con2_3">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
                <div className="con2_4">
                    <div className="con2_5">
                        <img src={download} alt="" />
                        <p className="con2_6">
                            Explore <br />Features
                        </p>
                    </div>
                    <div className="con2_7">
                        <img src={play} alt="" />
                        <p className="con2_8">
                            View <br />Product Range
                        </p>
                    </div>
                </div>
            </div>
            <p className="text1_p">EXPLORE WOOD VENEER RANGE</p>
            <div className="image10 image1_10">
                <div className="imag1" data-aos="zoom-in-left" data-aos-duration="500" data-aos-offset="100">
                    <img src={img1} alt="" />
                    <div className="content2">
                        <p>Veneers by <b>Colors</b></p>
                    </div>
                </div>
                <div className="imag1" data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="100">
                    <img src={img2} alt="" />
                    <div className="content2 content4">
                        <p>Veneers by<b>Characters</b></p>
                    </div>
                </div>
                <div className="imag1" data-aos="zoom-in-down" data-aos-duration="500" data-aos-offset="100">
                    <img src={img3} alt="" />
                    <div className="content2 content4">
                        <p>Veneers by <b>Placement</b></p>
                    </div>
                </div>
                <div className="imag1" data-aos="zoom-in-right" data-aos-duration="500" data-aos-offset="100">
                    <img src={img4} alt="" />
                    <div className="content2 content5">
                        <p>Veneers by <b>Design</b></p>
                    </div>
                </div>
            </div>
            <div className="con9">
                <div className="con10">
                    <div className="con11">
                        <img src={img1} alt="" />
                        <div className="con12">
                            Veneers by<b>&nbsp;Colors</b>
                        </div>
                    </div>
                    <div className="con11">
                        <img src={img2} alt="" />
                        <div className="con12">
                            Veneers by<b>&nbsp;Characters</b>
                        </div>
                    </div>
                </div>
                <div className="con10">
                    <div className="con11">
                        <img src={img3} alt="" />
                        <div className="con12">
                            Veneers by<b>&nbsp;Placement</b>
                        </div>
                    </div>
                    <div className="con11">
                        <img src={img4} alt="" />
                        <div className="con12">
                            Veneers by<b>&nbsp;Design</b>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image11">
                <div className="image1"
                    data-aos="zoom-in"
                    // data-aos-easing="ease-out-cubic"
                    data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg20} alt="Hero" className="con13" />
                    <div className="content1">
                        <p className="text2">High Quality <b>Veneer Texture</b><br />For your 3d projects</p>
                        <p className="text3">Download</p>
                    </div>
                    <div className="con14">
                        <p className="con15">High Quality <b>&nbsp;Veneer Texture</b></p>
                    </div>
                </div >
            </div>
            <div className="image12 image1_12">
                <div className="img" data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg21} alt="" />
                </div>
                <div className="img" data-aos="fade-down" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg22} alt="" />
                </div>
            </div>
            <div className="con16">
                <img src={HeroImg21} alt="" />
            </div>
            <div className="con19">
                <img src={HeroImg22} alt="" />
            </div>
            <div className="image13">
                <div className="image1" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg23} alt="" className="con17" />
                    <p>FACTORY TOUR</p>
                </div>
            </div>
            <div className="image14 image1_14">
                <div className="image1" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg24} alt="" className="con18" />
                    <p>ENVIRONMENT FRIENDLY</p><br />
                    <div className="t">We are the first wood veneer company in <br />
                        <span className="text">India to be FSC certified</span></div>
                </div>
            </div>
            <div className="image14">
                <div className="image1" data-aos="zoom-in" data-aos-duration="1000" data-aos-offset="100">
                    <img src={HeroImg25} alt="" style={{ height: "600px" }} />
                    <div className="content3">
                        <div className="temp">
                            <b>  NATURAL VENEERS BY TURAKHIA </b><br />
                            <span className="temp1">
                                Trusted by Millions Since 3 Decades
                            </span>
                        </div>
                        <div className="temp2">
                            <div className="temp3" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                                <img src={HeroImg26} alt="" />
                                <h6 className="temp4">1st</h6>
                                <div className="temp5">
                                    FSC certified wood
                                </div>
                                <div className="temp6">
                                    veneer company in india
                                </div>
                            </div>
                            <div className="temp3" data-aos="zoom-in-up" data-aos-duration="500" data-aos-offset="100">
                                <img src={HeroImg27} alt="" />
                                <h6 className="temp4"><NumberCounter end={150} delay={4} />+ </h6>
                                <div className="temp5">
                                    FSC certified wood
                                </div>
                                <div className="temp6">
                                    veneer company in india
                                    {/* <NumberCounter end={100} delay={20}/> */}
                                </div>
                            </div>
                            <div className="temp3" data-aos="zoom-in-down" data-aos-duration="500" data-aos-offset="100">
                                <img src={HeroImg28} alt="" />
                                <h6 className="temp4"> <NumberCounter end={1000} delay={20} />+</h6>
                                <div className="temp5">
                                    FSC certified wood
                                </div>
                                <div className="temp6">
                                    veneer company in india
                                    {/* <NumberCounter end={100} delay={20}/> */}
                                </div>
                            </div>
                            <div className="temp3" data-aos="zoom-out" data-aos-duration="500" data-aos-offset="100">
                                <img src={HeroImg29} alt="" />
                                <h6 className="temp4">25</h6>
                                <div className="temp5">
                                    FSC certified wood
                                </div>
                                <div className="temp6">
                                    veneer company in india
                                    {/* <NumberCounter end={100} delay={20}/> */}
                                </div>
                            </div>
                            <div className="temp3" data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
                                <img src={HeroImg30} alt="" />
                                <h6 className="temp4">  <NumberCounter end={10000} delay={10} />+</h6>
                                <div className="temp5">
                                    FSC certified wood
                                </div>
                                <div className="temp6">
                                    veneer company in india
                                    {/* <NumberCounter end={100} delay={20}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="con20">
                <div className="con21">
                    <img src={HeroImg25} alt="" />
                </div>
                <div className="con22">
                    <div className="con23">
                        NATURAL VENEERS BY TURAKHIA <br />
                        <span className="con24">
                            Trusted by Millions Since 3 Decades
                        </span>
                    </div>
                </div>

                <div className="con25">
                    <div className="con26">
                        <div className="con27" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <img src={HeroImg26} alt="" />
                            <h6 className="con28">1st</h6>
                            <div className="con29">
                                FSC certified wood
                            </div>
                            <div className="con30">
                                veneer company in india
                            </div>
                        </div>
                    </div>
                    <div className="con26">
                        <div className="con27" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <img src={HeroImg27} alt="" />
                            <h6 className="con28"><NumberCounter end={150} delay={4} />+ </h6>
                            <div className="con29">
                                FSC certified wood
                            </div>
                            <div className="con30">
                                veneer company in india
                            </div>
                        </div>
                    </div>
                    <div className="con26">
                        <div className="con27" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <img src={HeroImg28} alt="" />
                            <h6 className="con28">25</h6>
                            <div className="con29">
                                FSC certified wood
                            </div>
                            <div className="con30">
                                veneer company in india
                            </div>
                        </div>
                    </div>
                </div>
                <div className="con31">
                    <div className="con26">
                        <div className="con32" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <img src={HeroImg29} alt="" />
                            <h6 className="con28"><NumberCounter end={150} delay={4} />+ </h6>
                            <div className="con29">
                                FSC certified wood
                            </div>
                            <div className="con30">
                                veneer company in india
                            </div>
                        </div>
                    </div>
                    <div className="con26">
                        <div className="con32" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                            <img src={HeroImg30} alt="" />
                            <h6 className="con28"><NumberCounter end={1500} delay={4} />K + </h6>
                            <div className="con33">
                                FSC certified wood
                            </div>
                            <div className="con34">
                                veneer company in india
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image14 ">
                <div className="image1 video" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg32} alt="" />
                    <p>WE MAKE, <br />WHAT WE BELIEVE</p>
                    <button className="text4">Watch the flim</button>
                </div>
            </div>
            <div className="con35">
                <img src={HeroImg39} alt="" />
            </div>
            <div className="con36">
                <img src={HeroImg40} alt="" />
            </div>
            <div className="con37">
                <div className="con38" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg32} alt="" />
                    <p className="con39">WE MAKE, <br />WHAT WE BELIEVE</p>
                    <button className="con40">Watch the flim</button>
                </div>
            </div>
            <div className="image14">
                <div className="image3" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg33} alt="" />
                    <p className="text6">TURAKHIA NATURAL VENEESRS APP</p>
                    <button className="text5">Downloads</button>
                    <div className="img11">
                        <img src={phone} alt="" />
                        <img src={apple_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="con41">
                <div className="con42" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg33} alt="" />
                    <p className="con43">TURAKHIA NATURAL VENEESRS APP</p>
                    <button className="con44">Download</button>
                    <div className="con45">
                        <img src={phone} alt="" />
                        <img src={apple_icon} alt="" />
                    </div>
                </div>
            </div>
            <div className="image15">
                <div className="class10">
                    <div className="img" data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
                        <img src={HeroImg34} alt="" />
                        <img src={HeroImg35} alt="" />
                    </div>
                </div>
                <div className="class10">
                    <div className="img" data-aos="fade-down" data-aos-duration="500" data-aos-offset="100">
                        <img src={HeroImg36} alt="" />
                        <img src={HeroImg37} alt="" />
                    </div>
                </div>
            </div>
            <div className="image16">
                <div className="image1" data-aos="zoom-in" data-aos-duration="500" data-aos-offset="100">
                    <img src={HeroImg38} alt="" />
                    <p className="text7">HAVE QUESTIONS?</p>
                    <p className="text8">For any questions or information <br />
                        related to veneers , contact us...</p>
                    <p><span className="text11">Call</span></p>
                    <p className="text9">+ 91-9136460666</p>
                    <p><span className="text12">Email</span></p>
                    <p className="text13">INFO@NATURALVENEERS.COM</p>
                </div>
            </div>
        </>
    );
}

export default Hero;
