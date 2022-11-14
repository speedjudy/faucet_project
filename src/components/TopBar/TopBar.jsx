import { AppBar, Toolbar, Box, Button, SvgIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ReactComponent as MenuIcon } from "../../assets/icons/hamburger.svg";
import Logo from "../../assets/images/logo.png";
import Image1 from "../../assets/images/megaMenu/border-buttomShape.png";
import Image2 from "../../assets/images/megaMenu/index-V1.png";
import Image3 from "../../assets/images/megaMenu/index-V2.png";
import Image4 from "../../assets/images/megaMenu/index-V3.png";
import Image5 from "../../assets/images/megaMenu/index-V4.png";
import Image6 from "../../assets/images/logo-dark.png";



import OhmMenu from "./OhmMenu.jsx";
import ThemeSwitcher from "./ThemeSwitch.jsx";
import ConnectMenu from "./ConnectMenu.jsx";
import "./topbar.scss";

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      padding: "10px",
    },
    justifyContent: "flex-end",
    alignItems: "flex-end",
    background: "transparent",
    backdropFilter: "none",
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("981")]: {
      display: "none",
    },
  },
}));

function TopBar({ theme, toggleTheme, handleDrawerToggle }) {
  const classes = useStyles();
  const isVerySmallScreen = useMediaQuery("(max-width: 355px)");

  return (
    <AppBar position="sticky" className={classes.appBar} elevation={0}>
      <Toolbar disableGutters className="dapp-topbar">
      <header id="gamfi-header" className="gamfi-header-section transparent-header">
            <div className="menu-area menu-sticky">
                <div className="container">
                    <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                        <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                            <div className="logo">
                                <a href="/dashboard"><img src={Logo} alt="logo"/></a>
                            </div>
                            <div className="header-menu">
                                <ul className="nav-menu">
                                <li className="mega_menu_hov"><a href="#" style={{fontSize:"17px"}}>Table of Contents +</a>
                                    <div className="gamfi_mega_menu_sect">
                                        <div className="gamfi_mega_menu">
                                            <div className="container">
                                                <div className="mega_menu_content">
                                                    <div className="mega_menu_left_sect">
                                                        <div className="mega_menu_left_bg_sect">
                                                            <div className="mega_menu_left_bg">
                                                                <div className="mega_menu_left_bg_color">

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="home_menu_list">
                                                            <div className="home_menu_list_headings">
                                                                <h2>Games</h2>
                                                                <span><img src={Image1} alt="" className="img-fluid"/></span>
                                                            </div>
                                                            <ul>
                                                                <li>
                                                                    <a href="/contest">Punch the Ape <span><img src={Image2} alt="Index V1" className="img-fluid"/></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="/contest">Muskpisser <span><img src={Image3} alt="Index V2" className="img-fluid"/></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="/contest">Horserace <span><img src={Image4} alt="Index V3" className="img-fluid"/></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="/contest">Tornado Spinner <span><img src={Image5} alt="Index V3" className="img-fluid"/></span></a>
                                                                </li>
                                                                <li>
                                                                    <a href="/contest">Your Game Here! <span><img src={Image2} alt="Index V3" className="img-fluid"/></span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="home_menu_right_sect">
                                                        <div className="">

                                                        </div>
                                                        <div className="menu_column project_column">
                                                            <ul>
                                                                <li><a href="/comingsoon">Dupont, Dylan-Ennis, <br/>&amp; Kavanagh</a></li>
                                                            </ul>
                                                            <div className="menu_headings">
                                                                <h2>Part 1: Big Tent</h2>
                                                                <span><img src={Image1} alt="" className="img-fluid"/></span>
                                                            </div>
                                                            <ul>
                                                                <li><a href="/comingsoon">Kelsie Nabben</a></li>
                                                                <li><a href="/comingsoon">Nathan Schneider</a></li>
                                                                <li><a href="/comingsoon">Quinn DuPont</a></li>
                                                                <li><a href="/comingsoon">Eric Alston</a></li>
                                                                <li><a href="/comingsoon">Tara Merk</a></li>
                                                                <li><a href="/comingsoon">Paul Dylan-Ennis</a></li>
                                                            </ul>
                                                        </div>

                                                        <div className="two_menu_column">
                                                            <div className="menu_column project_column">
                                                                <div className="menu_headings">
                                                                    <h2>Part 2: Vaudeville</h2>
                                                                    <span><img src={Image1} alt="" className="img-fluid"/></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="/comingsoon">de Filippi, Mannan, &amp; Reijers</a></li>
                                                                    <li><a href="/comingsoon">Geert Lovink</a></li>
                                                                    <li><a href="/comingsoon">Lana Swartz</a></li>
                                                                    <li><a href="/comingsoon">Alesha Sereda</a></li>
                                                                    <li><a href="/comingsoon">Bernhard Resch</a></li>
                                                                    <li><a href="/comingsoon">Jason Potts</a></li>
                                                                </ul>
                                                            </div>
                                                            
                                                            <div className="menu_column project_column">
                                                                <div className="menu_headings">
                                                                    <h2>Part 3: Dare Devils</h2>
                                                                    <span><img src={Image1} alt="" className="img-fluid"/></span>
                                                                </div>
                                                                <ul>
                                                                    <li><a href="/comingsoon">Finn Brunton</a></li>
                                                                    <li><a href="/comingsoon">Victoria Lemieux</a></li>
                                                                    <li><a href="/comingsoon">Sandra Faustino</a></li>
                                                                    <li><a href="/comingsoon">Donncha Kavanagh</a></li>
                                                                    <li><a href="/comingsoon">JP Vergne</a></li>
                                                                    <li><a href="/comingsoon">Bill Maurer</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>


                                                        <div className="menu_column project_column">
                                                            <div className="menu_headings">
                                                                <h2>Meta</h2>
                                                                <span><img src={Image1} alt="" className="img-fluid"/></span>
                                                            </div>
                                                            <ul>
                                                                <li><a href="/connect-wallet">Connect Wallet</a></li>
                                                                <li><a href="/contest" data-bs-toggle="modal" data-bs-target="#exampleModal">Play Games</a><span className="hot">HOT</span></li>
                                                                <li><a href="/comingsoon">Download PDF</a><span className="soon">SOON</span></li>
                                                                <li><a href="/about">Colophon</a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="gamfi-btn-area">
                            <ul>
                                <li>
                                    <a id="nav-expander" className="nav-expander bar" href="#">
                                        <div className="bar">
                                            <span className="dot1"></span>
                                            <span className="dot2"></span>
                                            <span className="dot3"></span>
                                        </div>
                                    </a>
                                </li>
                                <li className="buy-token">
                                    <a className="readon black-shape" href="/faucet" style={{marginTop: '7px'}}>
                                        <span className="btn-text">Get Tokens </span>
                                        <i className="icon-arrow_down"></i>
                                        <span className="hover-shape1"></span>
                                        <span className="hover-shape2"></span>
                                        <span className="hover-shape3"></span>
                                    </a>
                                </li>
                                <Box display="flex">
                                  {/* {!isVerySmallScreen && <OhmMenu />} */}

                                  <ConnectMenu theme={theme} />

                                  {/* <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} /> */}
                                </Box>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                <div className="close-btn hash-has-sub">
                    <a id="nav-close2" className="nav-close hash">
                        <div className="line">
                            <span className="line1"></span>
                            <span className="line2"></span>
                        </div>
                    </a>
                </div>
                <div className="sidebar-logo mb-30 hash-has-sub">
                    <a href="/dashboard" className="hash"><img src={Image6} alt=""/></a>
                </div>
                <ul className="nav-menu">

                    <li className="current-menu-item menu-item-has-children has-sub hash-has-sub"><span className="submenu-button"><em></em></span><a href="#" className="hash">Read Essays</a>
                        <ul className="sub-menu menu-item-has-children has-sub" style={{display: "none"}}><span className="submenu-button"><em></em></span>
                            <li className="hash-has-sub"><a href="/comingsoon" className="hash">DuPont, Dylan-Ennis, <br/>&amp; Kavanagh</a></li>
                            <li className="hash-has-sub"><a href="/dashboard" className="hash">Big Tent</a></li>
                                <ul className="sub-menu" style={{display: "none"}}>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Kelsie Nabben</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Nathan Schneider</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Quinn DuPont</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Eric Alston</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Tara Merk</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Paul Dylan-Ennis</a></li>
                                </ul>
                        </ul>
                        <ul className="sub-menu menu-item-has-children has-sub" style={{display: "none"}}><span className="submenu-button"><em></em></span>
                            <li className="hash-has-sub"><a href="index2.html" className="hash">Vaudeville</a></li>
                                <ul className="sub-menu" style={{display: "none"}}>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">de Filippi, Mannan, &amp; Reijers</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Geert Lovink</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Lana Swartz</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Alesha Sereda</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Bernhard Resch</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Jason Potts</a></li>
                                </ul>
                            </ul>
                        
                            <ul className="sub-menu menu-item-has-children has-sub" style={{display: "none"}}><span className="submenu-button"><em></em></span>
                            <li className="hash-has-sub"><a href="index3.html" className="hash">Dare Devils</a></li>
                                <ul className="sub-menu" style={{display: "none"}}>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Finn Brunton</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Victoria Lemieux</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Sandra Faustino</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Donncha Kavanagh</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">JP Vergne</a></li>
                                    <li className="hash-has-sub"><a href="/comingsoon" className="hash">Bill Maurer</a></li>
                            </ul>
                        </ul>
                    </li>

                    <li className="menu-item-has-children has-sub hash-has-sub"><span className="submenu-button"><em></em></span><a href="project.html" className="hash">Play Games</a>
                        <ul className="sub-menu" style={{display: "none"}}>
                            <li className="hash-has-sub"><a href="/contest" className="hash">Punch the Ape</a></li>
                            <li className="hash-has-sub"><a href="/contest" className="hash">Muskpisser</a></li>
                            <li className="hash-has-sub"><a href="/contest" className="hash">Horserace</a></li>
                            <li className="hash-has-sub"><a href="/contest" className="hash">Tornado Spinner</a></li>
                            <li className="hash-has-sub"><a href="/contest" className="hash">Your Game Here!</a></li>
                        </ul>
                    </li>

                    <li className="menu-item-has-children has-sub hash-has-sub"><span className="submenu-button"><em></em></span>
                        <a href="#" className="hash">Meta</a>
                        <ul className="sub-menu" style={{display: "none"}}>
                            <li className="hash-has-sub"><a href="connect-wallet.html" className="hash">Connect Wallet</a></li>
                            <li className="hash-has-sub"><a href="/contest" data-bs-toggle="modal" data-bs-target="#exampleModal" className="hash">Play Games</a></li>
                            <li className="hash-has-sub"><a href="/comingsoon" className="hash">Download PDF</a></li>
                            <li className="hash-has-sub"><a href="/about" className="hash">Colophon</a></li>
                        </ul>
                    </li>

                    <li className="hash-has-sub">
                        <a href="/comingsoon" className="hash">Get Token</a>
                    </li>
                    <li>
                      
                    </li>
                </ul>

            </nav>
        </header>
        {/* <Button
          id="hamburger"
          aria-label="open drawer"
          edge="start"
          size="large"
          variant="contained"
          color="secondary"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <SvgIcon component={MenuIcon} />
        </Button> */}

        
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
