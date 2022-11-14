import image1 from "../../assets/images/homeV3/joker.png";
import image2 from "../../assets/images/icons/steps.png";
import image3 from "../../assets/images/icons/BlockChain1.png";
import image4 from "../../assets/images/icons/BlockChain6.png";
import image5 from "../../assets/images/icons/BlockChain3.png";
import image6 from "../../assets/images/icons/BlockChain4.png";
import image7 from "../../assets/images/icons/BlockChain5.png";
import image8 from "../../assets/images/icons/BlockChain2.png";
import image9 from "../../assets/images/icons/BlockChain2.png";
import image10 from "../../assets/images/icons/One.svg";
import image11 from "../../assets/images/icons/two.svg";
import image12 from "../../assets/images/icons/three.svg";
import image13 from "../../assets/images/icons/earthBg.svg";
import image14 from "../../assets/images/icons/plus.svg";
import image15 from "../../assets/images/icons/munis.svg";
import image16 from "../../assets/images/icons/steps2.png";
import image17 from "../../assets/images/icons/galaxy_image.png";
import image18 from "../../assets/images/logo.png";
import image19 from "../../assets/images/kycimg/location.svg";
import image20 from "../../assets/images/kycimg/call-outgoing.svg";
import image21 from "../../assets/images/kycimg/sms-notification.svg";

import "./temp.scss";

function About() {
    return (
        <div>
            <div className="loader_first">
                <div className="circular-spinner"></div>
            </div>



            <div id="sc-banner" className="sc_banner_v3 banner-bg position-relative">
                <div className="container">
                    <div className="banner-content v3_banner_content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="sc_banner_v3_left">
                                    <h2 className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s"><span>Colophon & About</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">CryptoCarnival is a collaboration between three editors, eighteen authors, and countless other game developers and community contributors. Quinn DuPont, Paul Dylan-Ennis, and Donncha Kavanagh are the editors. More information about our motivation is available in the <a href="comingsoon.html">Introduction</a>.</p>
                                    <p>This website was designed and developed by Quinn DuPont. It is a crude edit of a commercially available Web3 theme. The book (<a href="comingsoon.html">PDF</a>) was designed by Quinn DuPont and typeset by the authors using Overleaf and LaTex.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="sc_banner_v3_right">
                                    <div className="animetion_avater">
                                        <img src={image1} alt="img" className="img-fluid" />
                                    </div>
                                    <ul>
                                        <li>
                                            <h3>Word count</h3>
                                            <h4 className="counter-number"><span className="counter">110,000</span> </h4>
                                        </li>
                                        <li>
                                            <h3>Tokens Minted</h3>
                                            <h4 className="counter-number"><span className="counter">350,000,000</span> </h4>
                                        </li>
                                        <li className="m-0">
                                            <h3>Funding Raised</h3>
                                            <h4 className="counter-number"><span className="counter">1.1</span> eth</h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kyc_form_sect">
                <div className="container">
                    <div className="row m-0">
                        <h3>Contact the editors</h3>
                        <div className="col-md-6 p-0">
                            <div className="contact_form">
                                <div className="input__group__between">
                                
                                <form action="https://public.herotofu.com/v1/5d2859d0-5098-11ed-8970-6943e4ac8982" method="post">
                                    <div className="input__group mb-23">
                                        <label for="name">Your Name</label>
                                        <input size="30" name="Name" id="name" type="text" placeholder="e.g. Smith" required />
                                    </div>
                                    <div className="input__group mb-23">
                                        <label for="email">Your Email</label>
                                        <input size="30" name="Email" id="email" type="email" placeholder="e.g. example@gmail.com" required  />
                                    </div>
                                    <div className="theme-btn blue">
                                        <input type="submit" value="Contact Us" />
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="get_in_touch_contact_sect">
                                <div className="get_in_touch_contact_content">
                                    <h2>Contact Info</h2>
                                    <div className="contact_info_content">
                                        <div className="contact_info_symbol">
                                            <img src={image19} alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="contact_info_symbol">
                                            <h5>CryptoCarnival HQ</h5>
                                            <h6>Somewhere in the Metaverse</h6>
                                            <a href="https://cryptocarnival.wtf">https://cryptocarnival.wtf</a>
                                        </div>
                                    </div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_symbol">
                                            <img src={image20} alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="contact_info_symbol">
                                            <h5>Telegram</h5>
                                            <h6><a href="https://t.me/cryptocarnivalz">https://t.me/cryptocarnivalz</a></h6>
                                        </div>
                                    </div>
                                    <div className="contact_info_content">
                                        <div className="contact_info_symbol">
                                            <img src={image21} alt="icon" className="img-fluid" />
                                        </div>
                                        <div className="contact_info_symbol">
                                            <h5>Donate</h5>
                                            <h6>Ethereum: XXX</h6>
                                            <h6>Bitcoin: XXX</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="how_to_participate_sect">
                <div className="moon_img_bg">
                    <img src={image13} alt="img" className="img-fluid" />
                </div>
            </div> */}
            <div className="gamfi-footer-section">
                <div className="container">
                    <div className="footer-cta-area text-center active-shape hover-shape-inner">
                        <h2 className="title mb-15">
                            Join the Cryptocarnival<br />
                            contest
                        </h2>
                        <p className="dsc mb-40">
                            Win eth, give back to the community, have fun.
                        </p>
                        <a className="theme-btn d-inline-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2500ms" href="/contest">
                            <span>Enter contest</span>
                            <div className="hover-shape1"></div>
                            <div className="hover-shape2"></div>
                            <div className="hover-shape3"></div>
                        </a>
                        <span className="border-shadow shadow-1"></span>
                        <span className="border-shadow shadow-2"></span>
                        <span className="border-shadow shadow-3"></span>
                        <span className="border-shadow shadow-4"></span>
                        <span className="hover-shape-bg hover_shape1"></span>
                        <span className="hover-shape-bg hover_shape2"></span>
                        <span className="hover-shape-bg hover_shape3"></span>
                    </div>
                </div>
                <div className="footer-area">
                    <div className="container">
                        <div className="sec-heading text-center">
                            <div className="sub-inner mb-52">
                                <img className="heading-right-image" src={image16} alt="Steps-Image" />
                                <span id="shareSocial" className="sub-title white-color">Share on Social</span>
                                <img className="heading-left-image" src={image2} alt="Steps-Image" />
                            </div>
                        </div>
                        <div className="footer-listing text-center mb-100 md-mb-70">
                            <ul className="footer-icon-list">
                                <li>
                                    <a href="https://twitter.com/intent/tweet?text=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                                        <i className="icon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/cryptocarnivalz">
                                        <i className="icon-telegram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://mail.google.com/mail/u/0/?view=cm&to&su=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf&body=https%3A%2F%2Fcryptocarnival.wtf%0A&bcc&cc&fs=1&tf=1">
                                        <i className="icon-medium"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=cryptocarnival.wtf">
                                        <i className="icon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="icon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=cryptocarnival.wtf&quote=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                                        <i className="icon-facebook"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-logo text-center mb-45">
                            <a href="/dashboard">
                                <img src={image18} alt="Footer-logo" />
                            </a>
                        </div>
                        <div className="footer-mainmenu text-center mb-20">
                            <ul>
                                <li>
                                    <a href="#Whatiscryptocarnival">How it works</a>
                                </li>
                                <li>
                                    <a href="/comingsoon">Read essays</a>
                                </li>
                                <li>
                                    <a href="/contest">Play games</a>
                                </li>
                                <li>
                                    <a href="#tokenInfo">Token info</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/about">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright-area text-center mb-0">
                            <p className="dsc mb-37">
                                Copyright © 2022. All Rights Reserved by
                                <a target="_blank" className="gafi" href="#">the Authors</a>
                            </p>
                        </div>
                        {/* <div className="scrollup text-center">
                            <a href="#">
                                <i className="icon-arrow_up"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
