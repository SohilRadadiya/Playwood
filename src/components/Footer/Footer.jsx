import React from 'react'
import "./Footer.css"
import logofooter from "../../image/logo1.png"
// import facebook from "../../image/facebook.png"
import { FaFacebookF } from "react-icons/fa";
import instagram from "../../image/instagram.png"
import linkedin from "../../image/linkedin.png"
import npintrest from "../../image/npintrest.png"
import rss from "../../image/rss.png"
import twitter from "../../image/twitter.png"
import youtube from "../../image/youtube.png"
import mobile from "../../image/mobile.png"
import email from "../../image/email.png"
import newsletter from "../../image/newsletter.png"
import address from "../../image/address.png"

const Footer = () => {
    return (
        <>
            <div className="footer">
                <footer>
                    <div className="footer1">
                        <img src={logofooter} alt="" />
                    </div>
                    <div className="footer2">
                        <div className="footer3">
                            <div className="footer22">
                                <div className="footer4">
                                    <p>Home |</p>
                                    <p>About Us |</p>
                                    <p>Our Products |</p>
                                    <p>Free Download |</p>
                                    <p>Events |</p>
                                    <p>Career |</p>
                                    <p>Contact Us |</p>
                                </div>
                            </div>
                            <div className="footer5">
                                <div className="footer6">
                                    <p>Testimonials |</p>
                                    <p>Blog |</p>
                                    <p>Video |</p>
                                    <p>CSR |</p>
                                    <p>Privacy policy |</p>
                                    <p>T&C |</p>
                                    <p>Mobile App |</p>
                                </div>
                                <div className="footer7">
                                    {/* <img src={facebook} alt="" /> */}
                                    <FaFacebookF />
                                    <img src={twitter} alt="" />
                                    <img src={youtube} alt="" />
                                    <img src={linkedin} alt="" />
                                    <img src={rss} alt="" />
                                    <img src={npintrest} alt="" />
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="footer8">
                                <div className="footer9 footer20">
                                    <div className="footer10">
                                        <div className="footer11">
                                            <img src={mobile} alt="" />
                                        </div>
                                        <div className="footer12">
                                            +91-9136254180
                                        </div>
                                    </div>
                                </div>
                                <div className="footer9 footer21">
                                    <div className="footer10">
                                        <div className="footer11">
                                            <img src={email} alt="" />
                                        </div>
                                        <div className="footer13">
                                            info@naturalveneers.com
                                        </div>
                                    </div>
                                </div>
                                <div className="footer9">
                                    <div className="footer14">
                                        <div className="footer15">
                                            <div className="footer16">
                                                <img src={newsletter} alt="" />
                                            </div>
                                            NEWSLETTER
                                        </div>
                                        <div className="footer17">
                                            <input type="text" placeholder="E-mail" className="input" />
                                            <span className="footer18">
                                                Go
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer9">
                                    <div className="footer10">
                                        <div className="footer11">
                                            <img src={address} alt="" />
                                        </div>
                                        <div className="footer19">
                                            307-308, Traffic Lite Business Park, M.G. Road,<br /> Ghatkopar (W), Mumbai-86.Maharashta, India.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="line"></div>
                <div className="copy">
                    <p>Copyright © Natural Veneers. All rights reserved.</p>
                </div>
            </div>



            <div className="footer20">
                <div className="footer21">
                    <div className="footer22">
                        <p>Home </p>
                        <p>About Us </p>
                        <p>Our Products </p>
                        <p>Free Download </p>
                        <p>Events </p>
                        <p>Career </p>
                        <p>Contact Us </p>
                    </div>
                    <div className="footer23">
                        <p>Testimonials </p>
                        <p>Blog </p>
                        <p>Video </p>
                        <p>CSR </p>
                        <p>Privacy policy </p>
                        <p>T&C </p>
                        <p>Mobile App </p>
                    </div>
                </div>
                <div className="footer24">
                    <div className="footer25">
                        <FaFacebookF />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={rss} alt="" />
                        <img src={npintrest} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="footer8">
                    <div className="footer9 footer20">
                        <div className="footer10">
                            <div className="footer11">
                                <img src={mobile} alt="" />
                            </div>
                            <div className="footer12">
                                +91-9136254180
                            </div>
                        </div>
                    </div>
                    <div className="footer9 footer21">
                        <div className="footer10">
                            <div className="footer11">
                                <img src={email} alt="" />
                            </div>
                            <div className="footer13">
                                info@naturalveneers.com
                            </div>
                        </div>
                    </div>
                    <div className="footer9">
                        <div className="footer14">
                            <div className="footer15">
                                <div className="footer16">
                                    <img src={newsletter} alt="" />
                                </div>
                                NEWSLETTER
                            </div>
                            <div className="footer17">
                                <input type="text" placeholder="E-mail" className="input" />
                                <span className="footer18">
                                    Go
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="footer9">
                        <div className="footer10">
                            <div className="footer11">
                                <img src={address} alt="" />
                            </div>
                            <div className="footer19">
                                307-308, Traffic Lite Business Park, M.G. Road,<br /> Ghatkopar (W), Mumbai-86.Maharashta, India.
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Footer