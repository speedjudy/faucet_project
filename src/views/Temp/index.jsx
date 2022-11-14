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

function Temp() {
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
                                    <h2 className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s"><span>CRYPTOCARNIVAL</span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.7s">Crypto<span className="flipper flip_V">Carnival</span> is a collection of 18 NFT essays. This special collection of essays from top international scholars reflects on the carnivalesque nature of Web3 in 2022. By connecting your Web3 wallet you can enhance your reading experience with <a href="/contest">on-chain games.</a> Enjoy the CryptoCarnival.</p>
                                    <div className="gamfi_v2_hero_btns wow fadeInUp">
                                        <a href="/comingsoon" className="readon white-btn hover-shape view-project-btn">
                                            <span className="btn-text">READ ESSAYS</span>
                                            <span className="hover-shape1"></span>
                                            <span className="hover-shape2"></span>
                                            <span className="hover-shape3"></span>
                                        </a>
                                        <a className="readon black-shape apply-project-btn" href="/contest">
                                            <span className="btn-text">PLAY GAMES</span>
                                            <span className="hover-shape1"></span>
                                            <span className="hover-shape2"></span>
                                            <span className="hover-shape3"></span>
                                        </a>
                                    </div>
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
                <div className="multi_block_chains_sect">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="multi_block_chains_left">
                                    <h3>Exclusive NFT prizes <span><img src={image2} alt="Steps-Image" className="img-fluid" /></span></h3>
                                    <h3>Rarest and most desirable digital assets</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="multi_block_chains_right_sect">
                                    <div className="gamfi-partner-section multi_block_chains_right">
                                        <div className="gamfi-partner-inner multi_block_chains_right_content">
                                            <div className="partner-image">
                                                <a href="#"><img src={image3} alt="icon" className="img-fluid" /></a>
                                                <a href="#"><img src={image4} alt="icon" className="img-fluid" /></a>
                                                <a href="#"><img src={image5} alt="icon" className="img-fluid" /></a>
                                                <a href="#"><img src={image6} alt="icon" className="img-fluid" /></a>
                                            </div>
                                            <div className="partner-image">
                                                <a href="#"><img src={image7} alt="icon" className="img-fluid" /></a>
                                                <a href="#"><img src={image8} alt="icon" className="img-fluid" /></a>
                                                <a href="#"><img src={image9} alt="icon" className="img-fluid" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="red-border-gradient"></span>
                    <span className="green-border-gradient"></span>
                </div>

            </div>


            <div className="gamfi-previous-section project_pools_v3 pb-90 md-pb-50">
                <div className="container">
                    <div className="sec-inner align-items-center d-flex justify-content-between  mb-50">
                        <div className="sec-heading">
                            <div className="sub-inner mb-15">
                                <span className="sub-title">EXPLORE</span>
                                <img className="heading-left-image" src={image2} alt="Steps-Image" />
                            </div>
                            <h2 className="title mb-0 xs-pb-20">Essays</h2>
                        </div>
                        <div className="gamfi-btn-area">
                            <ul className="gamfi_v3_project_pools_btn">
                                <li className="v3_project_pools_tablinks m-0" onclick="openV3_ProjectPool(event, 'On_going')" id="V3_ProjectPool_Tab_defaultOpen">
                                    <button className="view-more black-shape">
                                        <span className="btn-text">1: Big Tent</span>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </button>
                                </li>
                                <li className="v3_project_pools_tablinks" onclick="openV3_ProjectPool(event, 'UPCOMING')">
                                    <button className="view-more black-shape">
                                        <span className="btn-text">2: Vaudeville</span>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </button>
                                </li>
                                <li className="v3_project_pools_tablinks" onclick="openV3_ProjectPool(event, 'ENDED')">
                                    <button className="view-more black-shape">
                                        <span className="btn-text">3: Dare Devils</span>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="v3_project_pools_tab_content_sect">
                            <div id="On_going" className="v3_project_pools_tab_content animate_opacity">

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                    <div className="previous-mainmenu mb-15">
                                        <ul className="menu-list">
                                            <li className="list1">Title</li>
                                            <li className="list3">Reading Time</li>
                                            <li className="list4">Total Words</li>
                                            <li className="list5">Remaining Tokens</li>
                                        </ul>
                                    </div>
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Introduction</h4>
                                                    <div className="dsc">Quinn DuPont, Paul Dylan-Ennis, & Donncha Kavanagh</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>19 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,400</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped"
                                                         role="progressbar" aria-valuenow="40"
                                                          aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">How to Infrastructure: Entering the Field of ‘Web3.0’</h4>
                                                    <div className="dsc">Kelsie Nabben</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>20 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,700</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: '73%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Web3 is the opportunity we had all along</h4>
                                                    <div className="dsc">Nathan Schneider</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>14 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>3,300</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: '89%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">A Progressive Web3: From Digital Polycentric Governance to Social Coproduction</h4>
                                                    <div className="dsc">Quinn DuPont</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>26 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>6,200</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="53" aria-valuemin="0" aria-valuemax="100" style={{width: '53%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">When Digital Carnival? Distributed Control of the Metaverse Asset Layer as Enabling Creative Digital Expression to Flourish</h4>
                                                    <div className="dsc">Eric Alston</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>17 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,000</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="61" aria-valuemin="0" aria-valuemax="100" style={{width: '61%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Mysterious Research Afoot...</h4>
                                                    <div className="dsc">Tara Merk</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>19 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,500</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100" style={{width: '58%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Hash, Bash, Cash</h4>
                                                    <div className="dsc">Paul Dylan-Ennis</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>11 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>2,700</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: '77%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div id="UPCOMING" className="v3_project_pools_tab_content animate_opacity">
                                <div className="col-md-12">
                                    <div className="previous-mainmenu mb-15">
                                        <ul className="menu-list">
                                            <li className="list1">Title</li>
                                            <li className="list3">Reading Time</li>
                                            <li className="list4">Total Words</li>
                                            <li className="list5">Remaining Tokens</li>
                                        </ul>
                                    </div>
                                    <a href="/comingsoon">

                                        <div className="col-md-12">
                                            <a href="/comingsoon">
                                                <div className="previous-item hover-shape-border hover-shape-inner">
                                                    <div className="previous-gaming">
                                                        <div className="previous-price">
                                                            <h4 className="mb-10">The Rise of Blockchain Egregores</h4>
                                                            <div className="dsc">Primavera de Filippi, Morshed Mannan, and Wessel Reijers</div>
                                                        </div>
                                                    </div>
                                                    <div className="previous-chaining">
                                                        <span>13 minutes</span>
                                                    </div>
                                                    <div className="previous-raise">
                                                        <span>3,200</span>
                                                        <div className="progress-inner">
                                                            <div className="progress">
                                                                <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100" style={{width: '88%'}}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="border-shadow shadow-1"></span>
                                                    <span className="border-shadow shadow-2"></span>
                                                    <span className="border-shadow shadow-3"></span>
                                                    <span className="border-shadow shadow-4"></span>
                                                    <span className="hover-shape-bg hover_shape1"></span>
                                                    <span className="hover-shape-bg hover_shape2"></span>
                                                    <span className="hover-shape-bg hover_shape3"></span>
                                                </div>
                                            </a>
                                        </div>

                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Political Economy of the Crypto-Art Craze</h4>
                                                    <div className="dsc">Geert Lovink</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>13 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>3,000</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100" style={{width: '99%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Mysterious Research Afoot...</h4>
                                                    <div className="dsc">Lana Swartz</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>20 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,700</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{width: '67%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Crypto Personalities as Carnivalesque Jesters</h4>
                                                    <div className="dsc">Alesha Sereda</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>18 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,200</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style={{width: '48%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Mysterious Research Afoot...</h4>
                                                    <div className="dsc">Bernhard Resch</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>20 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,700</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Mysterious Research Afoot...</h4>
                                                    <div className="dsc">Jason Potts</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>20 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,700</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100" style={{width: '37%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                            </div>

                            <div id="ENDED" className="v3_project_pools_tab_content animate_opacity">
                                <div className="col-md-12">
                                    <div className="previous-mainmenu mb-15">
                                        <ul className="menu-list">
                                            <li className="list1">Title</li>
                                            <li className="list3">Reading Time</li>
                                            <li className="list4">Total Words</li>
                                            <li className="list5">Remaining Tokens</li>
                                        </ul>
                                    </div>
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Immediate Gratuitousness, Squandered Energy, Useless Machines</h4>
                                                    <div className="dsc">Finn Brunton</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>17 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,000</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style={{width: '84%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Blockchain and Web3: Mirrors, “Jouissance” and Social & Personal Identity Formation</h4>
                                                    <div className="dsc">Victoria Lemieux</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>12 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>3,000</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style={{width: '84%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">The Gambler</h4>
                                                    <div className="dsc">Sandra Faustino</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>6 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>1,400</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Mysterious Research Afoot...</h4>
                                                    <div className="dsc">Donncha Kavanagh</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>23 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>5,600</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{width: '46%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Web3 as Decentralization Theater?</h4>
                                                    <div className="dsc">JP Vergne</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>18 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>4,300</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100" style={{width: '71%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12">
                                    <a href="/comingsoon">
                                        <div className="previous-item hover-shape-border hover-shape-inner">
                                            <div className="previous-gaming">
                                                <div className="previous-price">
                                                    <h4 className="mb-10">Blow That Mausoleum Down</h4>
                                                    <div className="dsc">Bill Maurer</div>
                                                </div>
                                            </div>
                                            <div className="previous-chaining">
                                                <span>8 minutes</span>
                                            </div>
                                            <div className="previous-raise">
                                                <span>2,000</span>
                                                <div className="progress-inner">
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style={{width: '89%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="border-shadow shadow-1"></span>
                                            <span className="border-shadow shadow-2"></span>
                                            <span className="border-shadow shadow-3"></span>
                                            <span className="border-shadow shadow-4"></span>
                                            <span className="hover-shape-bg hover_shape1"></span>
                                            <span className="hover-shape-bg hover_shape2"></span>
                                            <span className="hover-shape-bg hover_shape3"></span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="how_to_participate_sect">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="0.4s">
                            <div className="how_to_participate_left">
                                <div className="sec-heading">
                                    <div className="sub-inner mb-15">
                                        <span className="sub-title">3 EASY STEPS</span>
                                        <img className="heading-left-image" src={image2} alt="Steps-Image" />
                                    </div>
                                    <h2 className="title">How to Play Games</h2>
                                </div>
                                <div className="how_to_participate_left_content">
                                    <p>"Al-a-ga-zam. Here's a <a href="/contest">ducat</a>&mdash;we got plaster inside."</p>
                                    <div className="how_to_participate_left_btn">
                                        <a className="view-more black-shape" href="/contest">
                                            <span className="btn-text">Play games</span>
                                            <i className="icon-arrow_right"></i>
                                            <span className="hover-shape1"></span>
                                            <span className="hover-shape2"></span>
                                            <span className="hover-shape3"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="how_to_participate_right_content">
                                <div className="how_to_participate_right_card how_to_participate_right_card1 wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.4s">
                                    <div className="how_to_participate_right_card_number">
                                        <img src={image10} alt="img" className="img-fluid" />
                                    </div>
                                    <div className="how_to_participate_right_card_text">
                                        <h4>Connect Wallet</h4>
                                        <p>Currently, we only support "injectable" wallets like <a href="https://metamask.io/">Metamask</a> and <a href="https://www.core.app/">Core</a>.</p>
                                    </div>
                                </div>
                                <div className="how_to_participate_right_card how_to_participate_right_card2 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="0.5s">
                                    <div className="how_to_participate_right_card_number">
                                        <img src={image11} alt="img" className="img-fluid" />
                                    </div>
                                    <div className="how_to_participate_right_card_text">
                                        <h4>Get Tokens</h4>
                                        <p>Visit <a href="/contest">our faucet</a> to receive your daily allocation of free tokens.</p>
                                    </div>
                                </div>
                                <div className="how_to_participate_right_card how_to_participate_right_card3 wow fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.6s">
                                    <div className="how_to_participate_right_card_number">
                                        <img src={image12} alt="img" className="img-fluid" />
                                    </div>
                                    <div className="how_to_participate_right_card_text">
                                        <h4>Start Playing</h4>
                                        <p>You can <a href="/contest">play stupid on-chain games</a> or read a book of essays (<a href="/comingsoon">PDF</a>).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="moon_img_bg">
                    <img src={image13} alt="img" className="img-fluid" />
                </div>
            </div>
            <div className="gamfi-team-section gamfi_faq_sect gamfi_our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42">
                <div className="container">
                    <div className="sec-heading text-center mb-55">
                        <div className="sub-inner  mb-15">
                            <img className="heading-left-image" src={image16} alt="Steps-Image" />
                            <span className="ml-10 mr-10 sub-title">QUESTIONS & ANSWERS</span>
                            <img className="heading-right-image" src={image2} alt="Steps-Image" />
                        </div>
                        <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
                    </div>
                    <div className="faq_content_sect">
                        <div className="faq_questions">
                            <h2 id="Whatiscryptocarnival" className="accordion no-border">
                                What is Cryptocarnival?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>Cryptocarnival is a collection of 18 essays that reflect on, interrogate, and define web3 in 2022. Quinn DuPont, Paul Dylan-Ennis, and Donncha Kavanagh are the editors. The texts can be read online at <a href="/dashboard">cryptocarnival.wtf</a> or as a <a href="/comingsoon">PDF</a>. Additionally, on-chain games can be played as a carnivalesque diversion. Games were created by community members as part of a builders <a href="/contest">contest</a>.</p>
                            </div>

                            <h2 className="accordion">
                                How do I invest in Cryptocarnival?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span></h2>
                            <div className="accordion-panel">
                                <p>Cryptocarnival is an experiment in web3 public goods funding. We raised funds through a quadratic crowdfund mechanism on <a href="https://gitcoin.co/grants/4719/defining-web3-an-off-chain-collective-research-pr">gitcoin</a>. These funds were used as prizes for the <a href="/contest">contest</a> to design games and to hire an integration specialist. You can receive free tokens to play games, but you cannot buy or sell tokens and you cannot invest in the Cryptocarnival project.</p>
                            </div>

                            <h2 className="accordion">
                                Who made Cryptocarnival?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>Cryptocarnival was conceived by the editors, Quinn DuPont, Paul Dylan-Ennis, and Donncha Kavanagh. The editors worked closely with authors, who wrote essays reflecting on the carnivalesque nature of crypto in 2022. Quinn DuPont designed and built the website (cryptocarnival.wtf) and typeset the book (<a href="/comingsoon">PDF</a>, see the <a href="/about">colophon</a> for details). <a href="/contest">Contest submissions</a> were judged and selected by the editors with input from the community.</p>
                            </div>

                            <h2 id="tokenInfo" className="accordion">
                                How do I buy and sell Cryptocarnival tokens?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>You cannot buy or sell cryptocarnival tokens. They are used solely for access to the games on the <a href="/dashboard">cryptocarnival.wtf</a> website.</p>
                            </div>

                            <h2 className="accordion">
                                How do I play Cryptocarnival games?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p><a href="/comingsoon">As soon as they are available</a>, you can play games on the <a href="/dashboard">cryptocarnival.wtf</a> website. You will need a suitable web3 wallet for your daily allocation of tokens (available from our faucet). Once your wallet is connected and authenticated with our website, you can use tokens to play games.</p>
                            </div>

                            <h2 className="accordion">
                                What is the Cryptocarnival contest?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>Over the summer of 2022, we raised 1.1 eth through <a href="https://gitcoin.co/grants/4719/defining-web3-an-off-chain-collective-research-pr">gitcoin</a> to fund a novel form of publication. Details about the contest, including how to enter and win prizes in eth, are <a href="/contest">available here</a>.</p>
                            </div>

                            <h2 id="termsService" className="accordion">
                                What about privacy and terms of service?
                                <span>
                                    <img src={image14} alt="" className="img-fluid icon-plus" />
                                    <img src={image15} alt="" className="Img-fluid icon-minus" />
                                </span>
                            </h2>
                            <div className="accordion-panel">
                                <p>This website is for intended for educational purposes and is made available to the user "as is." Like everything in crypto, the user assumes full responsibility for their actions. Caveat emptor.</p>
                            </div>

                        </div>
                        <h6>Want to know more ? <a href="/about">Contact the editors !</a></h6>
                        <div className="FAQGalaxyImg">
                            <img src={image17} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
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

export default Temp;
