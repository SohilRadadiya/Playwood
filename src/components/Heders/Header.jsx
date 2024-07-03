// import React, { useState } from 'react';
// import './Header.css';
// import logo from '../../../src/image/logo.svg';
// import phone from '../../../src/image/android-icn.png';
// import apple_icon from '../../../src/image/apple-icn.png';
// import { IoSearchOutline } from 'react-icons/io5';
// import { FaAngleDown } from "react-icons/fa";
// import { CiMenuFries } from "react-icons/ci";


// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleClose = () => {
//         setIsMenuOpen(false);
//     };
//     return (
//         <>

//             <header className="header">
//                 <div className="left">
//                     <div className="logo">
//                         <img src={logo} alt="Logo" />
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="buggermenu">
//                         <div className="menu-icon" onClick={handleToggle}>
//                             <CiMenuFries />
//                         </div>
//                     </div>

//                     {/* <div className={`header1 ${isMenuOpen ? 'open' : ''}`}>
//                         <div className="menu">
//                             <ul className="menu1">
//                                 <li className='download'>Download  <span className="icon1"><FaAngleDown /></span>
//                                     <div className="menu2">
//                                         <a href="#" onClick={handleClose}>Veneer Textures</a>
//                                         <a href="#" onClick={handleClose}>Veneers Encyclopedia</a>
//                                         <a href="#" onClick={handleClose}>Company Profile</a>
//                                         <a href="#" onClick={handleClose}>Product Brochures</a>
//                                         <a href="#" onClick={handleClose}>Veneer Guide</a>
//                                         <a href="#" onClick={handleClose}>Sample Box</a>
//                                         <a href="#" onClick={handleClose}>Monthly Wallpaper</a>
//                                         <a href="#" onClick={handleClose}>Why Turakhia Veneers?</a>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div> */}



//                     <div className="content">
//                         <div className="list top">
//                             <ul className="list_1">
//                                 <li className="dropdown text">
//                                     Downloads <span className="icon1"><FaAngleDown /></span>
//                                     <div className="dropdown-content">
//                                         <a href="#">Veneer Textures</a>
//                                         <a href="#">Veneers Encyclopedia</a>
//                                         <a href="#">Company Profile</a>
//                                         <a href="#">Product Brochures</a>
//                                         <a href="#">Veneer Guide</a>
//                                         <a href="#">Sample Box</a>
//                                         <a href="#">Monthly Wallpaper</a>
//                                         <a href="#">Why Turakhia Veneers?</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">About</li>
//                                 <li className="text">Contact</li>
//                                 <li className="text">Blog</li>
//                                 <li className="text">Login</li>
//                                 <li className="text">Register</li>
//                                 <li className="input_fill">
//                                     <p className="icon"><IoSearchOutline /></p>
//                                     <input type="text" placeholder="SEARCH VENEER" />
//                                 </li>
//                                 <li className="text"><img src={phone} alt="Android" /></li>
//                                 <li className="text"><img src={apple_icon} alt="Apple" /></li>
//                                 <li className="text1">Since 1992</li>
//                             </ul>
//                         </div>
//                         <div className="list1 bottem">
//                             <ul className="list1_1">
//                                 <li className="text">FLUTED PANELS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">FURROW REGANTO</a>
//                                         <a href="#">FURROW</a>
//                                         <a href="#">FURROW LITE</a>
//                                         <a href="#">BARCODE</a>
//                                         <a href="#">CHROMA RIBBED</a>
//                                         <a href="#">CHROMA COMPOSITE</a>
//                                         <a href="#">ACCO</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">COLORED VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">CHROMA COLLECTION</a>
//                                         <a href="#">CHROMA RIBBED</a>
//                                         <a href="#">CHROMA COMPOSITE</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">TEXTURED VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">VENEER TEXTURES</a>
//                                         <a href="#">VENEER ENCYCLOPEDIA</a>
//                                         <a href="#">COMPANY PROFILE</a>
//                                         <a href="#">PRODUCT BROCHURES</a>
//                                         <a href="#">VENEER GUIDE</a>
//                                         <a href="#">SAMPLE BOX</a>
//                                         <a href="#">MONTHLY WALLPAPER</a>
//                                         <a href="#">WHY TURAKHIA VENEERS?</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">MATTE VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">MATTELE</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">DESIGNER VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">DESIGNER</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">NATURAL VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu mega-menu1">
//                                         <a href="#">NATURAL WOOD VENEERS</a>
//                                         <a href="#">WOOD VENEERS BY COLOR</a>
//                                         <a href="#">WOOD VENEERS BY CHARACTER</a>
//                                         <a href="#">WOOD VENEERS BY PLACEMENT</a>
//                                         <a href="#">WOOD VENEERS BY DESIGN</a>
//                                         <a href="#">WOOD VENEERS BY SPECIE</a>
//                                         <a href="#">RARE VENEERS</a>
//                                         <a href="#">NATFLEX</a>
//                                         <a href="#">NATBOARDS</a>
//                                     </div>
//                                 </li>
//                                 <li><button className="btn">QUICK INQUIRY</button></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

// export default Header;


// import React, { useState } from 'react';
// import './Header.css';
// import logo from '../../../src/image/logo.svg';
// import phone from '../../../src/image/android-icn.png';
// import apple_icon from '../../../src/image/apple-icn.png';
// import { IoSearchOutline } from 'react-icons/io5';
// import { FaAngleDown } from "react-icons/fa";
// import { CiMenuFries } from "react-icons/ci";

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleClose = () => {
//         setIsMenuOpen(false);
//     };

//     return (
//         <>
//             <header className="header">
//                 <div className="left">
//                     <div className="logo">
//                         <img src={logo} alt="Logo" />
//                     </div>
//                 </div>
//                 <div className="right">
//                     <div className="buggermenu">
//                         <div className="menu-icon" onClick={handleToggle}>
//                             <CiMenuFries />
//                         </div>
//                     </div>
//                     <div className="content">
//                         <div className="list top">
//                             <ul className="list_1">
//                                 <li className="dropdown text">
//                                     Downloads <span className="icon1"><FaAngleDown /></span>
//                                     <div className="dropdown-content">
//                                         <a href="#">Veneer Textures</a>
//                                         <a href="#">Veneers Encyclopedia</a>
//                                         <a href="#">Company Profile</a>
//                                         <a href="#">Product Brochures</a>
//                                         <a href="#">Veneer Guide</a>
//                                         <a href="#">Sample Box</a>
//                                         <a href="#">Monthly Wallpaper</a>
//                                         <a href="#">Why Turakhia Veneers?</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">About</li>
//                                 <li className="text">Contact</li>
//                                 <li className="text">Blog</li>
//                                 <li className="text">Login</li>
//                                 <li className="text">Register</li>
//                                 <li className="input_fill">
//                                     <p className="icon"><IoSearchOutline /></p>
//                                     <input type="text" placeholder="SEARCH VENEER" />
//                                 </li>
//                                 <li className="text"><img src={phone} alt="Android" /></li>
//                                 <li className="text"><img src={apple_icon} alt="Apple" /></li>
//                                 <li className="text1">Since 1992</li>
//                             </ul>
//                         </div>
//                         <div className="list1 bottem">
//                             <ul className="list1_1">
//                                 <li className="text">FLUTED PANELS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">FURROW REGANTO</a>
//                                         <a href="#">FURROW</a>
//                                         <a href="#">FURROW LITE</a>
//                                         <a href="#">BARCODE</a>
//                                         <a href="#">CHROMA RIBBED</a>
//                                         <a href="#">CHROMA COMPOSITE</a>
//                                         <a href="#">ACCO</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">COLORED VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">CHROMA COLLECTION</a>
//                                         <a href="#">CHROMA RIBBED</a>
//                                         <a href="#">CHROMA COMPOSITE</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">TEXTURED VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">VENEER TEXTURES</a>
//                                         <a href="#">VENEER ENCYCLOPEDIA</a>
//                                         <a href="#">COMPANY PROFILE</a>
//                                         <a href="#">PRODUCT BROCHURES</a>
//                                         <a href="#">VENEER GUIDE</a>
//                                         <a href="#">SAMPLE BOX</a>
//                                         <a href="#">MONTHLY WALLPAPER</a>
//                                         <a href="#">WHY TURAKHIA VENEERS?</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">MATTE VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">MATTELE</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">DESIGNER VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu">
//                                         <a href="#">DESIGNER</a>
//                                     </div>
//                                 </li>
//                                 <li className="text">NATURAL VENEERS <span className="icon1"><FaAngleDown /></span>
//                                     <div className="mega-menu mega-menu1">
//                                         <a href="#">NATURAL WOOD VENEERS</a>
//                                         <a href="#">WOOD VENEERS BY COLOR</a>
//                                         <a href="#">WOOD VENEERS BY CHARACTER</a>
//                                         <a href="#">WOOD VENEERS BY PLACEMENT</a>
//                                         <a href="#">WOOD VENEERS BY DESIGN</a>
//                                         <a href="#">WOOD VENEERS BY SPECIE</a>
//                                         <a href="#">RARE VENEERS</a>
//                                         <a href="#">NATFLEX</a>
//                                         <a href="#">NATBOARDS</a>
//                                     </div>
//                                 </li>
//                                 <li><button className="btn">QUICK INQUIRY</button></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>
//     );
// }

// export default Header;






import React, { useState } from 'react';
import './Header.css';
import logo from '../../../src/image/logo.svg';
import phone from '../../../src/image/android-icn.png';
import apple_icon from '../../../src/image/apple-icn.png';
import { IoSearchOutline } from 'react-icons/io5';
import { FaAngleDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className={`header ${isMenuOpen ? 'sticky-header' : ''}`}>
                <div className="left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="right">
                    <div className="buggermenu" onClick={handleToggle}>
                        <CiMenuFries />
                    </div>



                    <div className={`col1 ${isMenuOpen ? 'open' : ''}`}>
                        <div className="col12">Download</div>
                        <div className="col12">About</div>
                        <div className="col12">Contact</div>
                        <div className="col12">Blog</div>
                        <div className="col12">Login</div>
                        <div className="col12">Register</div>
                    </div>



                    <div className="content">
                        <div className="list top">
                            <ul className="list_1">
                                <li className="dropdown text">
                                    Downloads <span className="icon1"><FaAngleDown /></span>
                                    <div className="dropdown-content">
                                        <a href="#">Veneer Textures</a>
                                        <a href="#">Veneers Encyclopedia</a>
                                        <a href="#">Company Profile</a>
                                        <a href="#">Product Brochures</a>
                                        <a href="#">Veneer Guide</a>
                                        <a href="#">Sample Box</a>
                                        <a href="#">Monthly Wallpaper</a>
                                        <a href="#">Why Turakhia Veneers?</a>
                                    </div>
                                </li>
                                <li className="text">About</li>
                                <li className="text">Contact</li>
                                <li className="text">Blog</li>
                                <li className="text">Login</li>
                                <li className="text">Register</li>
                                <li className="input_fill">
                                    <p className="icon"><IoSearchOutline /></p>
                                    <input type="text" placeholder="SEARCH VENEER" />
                                </li>
                                <li className="text"><img src={phone} alt="Android" /></li>
                                <li className="text"><img src={apple_icon} alt="Apple" /></li>
                                <li className="text1">Since 1992</li>
                            </ul>
                        </div>
                        <div className="list1 bottem">
                            <ul className="list1_1">
                                <li className="text">FLUTED PANELS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu">
                                        <a href="#">FURROW REGANTO</a>
                                        <a href="#">FURROW</a>
                                        <a href="#">FURROW LITE</a>
                                        <a href="#">BARCODE</a>
                                        <a href="#">CHROMA RIBBED</a>
                                        <a href="#">CHROMA COMPOSITE</a>
                                        <a href="#">ACCO</a>
                                    </div>
                                </li>
                                <li className="text">COLORED VENEERS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu">
                                        <a href="#">CHROMA COLLECTION</a>
                                        <a href="#">CHROMA RIBBED</a>
                                        <a href="#">CHROMA COMPOSITE</a>
                                    </div>
                                </li>
                                <li className="text">TEXTURED VENEERS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu">
                                        <a href="#">VENEER TEXTURES</a>
                                        <a href="#">VENEER ENCYCLOPEDIA</a>
                                        <a href="#">COMPANY PROFILE</a>
                                        <a href="#">PRODUCT BROCHURES</a>
                                        <a href="#">VENEER GUIDE</a>
                                        <a href="#">SAMPLE BOX</a>
                                        <a href="#">MONTHLY WALLPAPER</a>
                                        <a href="#">WHY TURAKHIA VENEERS?</a>
                                    </div>
                                </li>
                                <li className="text">MATTE VENEERS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu">
                                        <a href="#">MATTELE</a>
                                    </div>
                                </li>
                                <li className="text">DESIGNER VENEERS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu">
                                        <a href="#">DESIGNER</a>
                                    </div>
                                </li>
                                <li className="text">NATURAL VENEERS <span className="icon1"><FaAngleDown /></span>
                                    <div className="mega-menu mega-menu1">
                                        <a href="#">NATURAL WOOD VENEERS</a>
                                        <a href="#">WOOD VENEERS BY COLOR</a>
                                        <a href="#">WOOD VENEERS BY CHARACTER</a>
                                        <a href="#">WOOD VENEERS BY PLACEMENT</a>
                                        <a href="#">WOOD VENEERS BY DESIGN</a>
                                        <a href="#">WOOD VENEERS BY SPECIE</a>
                                        <a href="#">RARE VENEERS</a>
                                        <a href="#">NATFLEX</a>
                                        <a href="#">NATBOARDS</a>
                                    </div>
                                </li>
                                <li><button className="btn">QUICK INQUIRY</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
;