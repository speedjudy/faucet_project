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

import "./temp.scss";

function Contest() {
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
                                    <h2 className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s"><span>CRYPTOCARNIVAL CONTEST</span></h2>
                                    <h3 className="wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">Build on-chain games, give back to the community, and win prizes.</h3>

                                    <p>Until November 30, 2022, we are running a builders’ contest for the best web-based, on-chain carnival game. We want to inspire the Web3 community to design simple (optional: stupid) games that critically reflect on the nature of Web3 in 2022. Winning entries will be integrated into this website alongside essays from top international scholars.</p>

                                    <h3>Prizes</h3>
                                    <h4>1st prize: 345363405 GWEI (0.4 eth)</h4>
                                    <h4>2nd prize: 172681702 GWEI (0.2 eth)</h4>
                                    <h4>3rd prize: 107926064 GWEI (0.125 eth)</h4>
                                    <p>Plus everlasting fame and glory! Your game will be forever emblazoned in the Crypto<span className="flipper flip_V">Carnival!</span></p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            <div className="gamfi-team-section gamfi_faq_sect gamfi_our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42">
                <div className="container">
                    <div className="sec-heading text-center mb-55">
                        <h2 className="title">Contest rules</h2>
                    </div>
                    <div className="faq_content_sect">
                        <div className="faq_questions">
                            <h2 id="Whatiscryptocarnival" className="accordion no-border">
                                How do I submit my entry?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>Cryptocarnival is a collection of 18 essays that reflect on, interrogate, and define web3 in 2022. Quinn DuPont, Paul Dylan-Ennis, and Donncha Kavanagh are the editors. The texts can be read online at <a href="index.html">cryptocarnival.wtf</a> or as a <a href="comingsoon.html">PDF</a>. Additionally, on-chain games can be played as a carnivalesque diversion. Games were created by community members as part of a builders <a href="contest.html">contest</a>.</p>
                            </div>

                            <h2 className="accordion">
                                What kinds of games are suitable?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span></h2>
                            <div className="accordion-panel">
                                <p>carnivalesque aspects of Web3: reflecting on the ludic, the degenerate, the excessive, the foul and rude, and the plain weird.</p>
                            </div>

                            <h2 className="accordion">
                                Who chooses the winners?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>The editors, Quinn DuPont, Paul Dylan-Ennis, and Donncha Kavanagh will evaluate the submissions and collectively choose the winners.</p>
                            </div>

                            <h2 id="tokenInfo" className="accordion">
                                Are there examples of suitable games?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span> 
                            </h2>
                            <div className="accordion-panel">
                                <p>Example example...</p>
                            </div>
                            
                            <h2 className="accordion">
                                Who owns the copyright of games?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span> 
                            </h2>
                            <div className="accordion-panel">
                                <p>All software and game assets are released with individual copyright notices, otherwise, original author retains all copyright. We strongly encourage open source licences.</p>
                            </div>
                            
                            <h2 className="accordion">
                                I love this! How else can I help?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span> 
                            </h2>
                            <div className="accordion-panel">
                                <p>You can donate! A little extra eth would really help.</p>
                                <p>Or, <a href="about.html">reach out to the editors</a> to donate your time. We can use technical and non-technical help.</p>
                            </div>

                            <h2 className="accordion">
                                LOL. Why so cheap?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span> 
                            </h2>
                            <div className="accordion-panel">
                                <p>We know. This isn’t a lot of eth (maybe we should have received more from our Gitcoin grant!), so we’re counting on your generosity and keen interest in helping us develop a free, public good. We want software developers (and crappy chain-code hackers) to join us in this experiment, where we think about new kinds of publication and playfully interrogate the carnivalesque aspects of Web3.</p>
                            </div>

                        </div>
                        <h6>Want to know more ? <a href="about.html">Contact the editors !</a></h6>
                        <div className="FAQGalaxyImg">
                            <img src={image17} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="gamfi-footer-section">
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

export default Contest;
