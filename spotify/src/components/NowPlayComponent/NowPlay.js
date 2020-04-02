import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Jumbotron,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownToggle
} from "reactstrap";
import "./NowPlay.css";

import { NavLink, Redirect } from "react-router-dom";
class NowPlay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      modal: false,
      isModalOpen: false,
      collapsed: true,
      Premium: false,
      tempId: this.props.id.id
    };
    this.state.toggleNav = this.toggleNav.bind(this);
    // this.togglemodal = this.togglemodal.bind(this);
    // this.handlePremiumT = this.handlePremiumT.bind(this);
    // this.handlePremiumF = this.handlePremiumF.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed
    });
  }

  render() {
    let playlistsActive = "";
    let albumsActive = "";
    let artistsActive = "";
    let currentURL = window.location.href;
    if (
      currentURL === "http://localhost:3000/webplayer/librarypage/playlists"
    ) {
      playlistsActive = " activeButton";
      albumsActive = "";
      artistsActive = "";
    } else if (
      currentURL === "http://localhost:3000/webplayer/librarypage/albums"
    ) {
      playlistsActive = "";
      artistsActive = "";
      albumsActive = " activeButton";
    } else if (
      currentURL === "http://localhost:3000/webplayer/librarypage/artists"
    ) {
      playlistsActive = "";
      albumsActive = "";
      artistsActive = " activeButton";
    }
    return (
      <div>
        <div className="LibraryPageBody">
          <Navbar expand="md" className="customizedNavbar">
            <div className="container customizedContainer">
              <Row className="flexRowOfLibraryPage">
                <Col>
                  <Nav navbar className="flexRowOfLibraryPage">
                    <NavItem className="customizedNavitems">
                      <Button className="customizedButton">
                        <NavLink className="nav-link customizedArrows" to="/">
                          <svg className="customizedSvg" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
                            ></path>{" "}
                          </svg>
                        </NavLink>
                      </Button>
                    </NavItem>
                    <NavItem className="customizedNavitems">
                      <Button className="customizedButton">
                        <NavLink className="nav-link customizedArrows" to="/">
                          <svg className="customizedSvg" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
                            ></path>
                          </svg>
                        </NavLink>
                      </Button>
                    </NavItem>

                    <Nav className="ml-auto" navbar>
                      <NavItem className=" customizedNavLink ">
                        <UncontrolledDropdown nav inNavbar>
                          <Button className="AccountItself">
                            <DropdownToggle
                              nav
                              caret
                              className="profileNavItem"
                            >
                              <i class="fa fa-user-secret"></i>
                              Profile
                            </DropdownToggle>
                          </Button>
                          <DropdownMenu className="StaticNav" right>
                            <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                              <NavLink
                                className="StaticNavChild"
                                to="accountoverview"
                              >
                                Account
                              </NavLink>{" "}
                            </DropdownItem>
                            <DropdownItem className="StaticNavChildContainer DisappearFromDropDowm">
                              <NavLink className="StaticNavChild " to="">
                                Log out
                              </NavLink>{" "}
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </NavItem>
                    </Nav>
                  </Nav>
                </Col>
              </Row>
            </div>
          </Navbar>
          <section className="Jumbostyle">
            <div className="MainViewContainer">
              <section className="contentSection">
                <div className="container fluid">
                  <div className="row general">
                    <div className="col-xs-12 col-lg-3 col-xl-4">
                      <div>
                        <header className="TrackListHeader">
                          <div>
                            <div draggable="true">
                              <div className="TrackListHeader media object">
                                <div
                                  class=" TrackListHeader media object hoverable "
                                  aria-hidden="true"
                                >
                                  <div
                                    className="cover art shadow"
                                    aria-hidden="true"
                                  >
                                    <div class=" cover art icon">
                                      <svg
                                        width="80"
                                        height="81"
                                        viewBox="0 0 80 81"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <title>Playlist Icon</title>
                                        <path
                                          d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="OneOpacity">
                                      <img
                                        className="cover art image"
                                        src="https://i.scdn.co/image/ab67706f000000021b75b1478680dcb9448d3395"
                                      />
                                      <div className="overlay"></div>
                                      <button class="cover art playback ButtonHover">
                                        <svg
                                          class="cover art playback icon play"
                                          viewBox="0 0 85 100"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"
                                          >
                                            <title>PLAY</title>
                                          </path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="TrackListHeader mo info">
                                <div clasName="textMenuWrapper">
                                  <div className="TrackListHeader mo info Name">
                                    <span dir="auto">Today's Top Hits</span>
                                  </div>
                                  <div className="mo meta ellipsis-one-line">
                                    <span>
                                      <a dir="auto" href="/user/spotify">
                                        Spotify
                                      </a>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <div className=" TrackListHeader Body">
                            <div className="TrackListHeader Body entity Name">
                              <h2>Today's Top Hits</h2>
                              <span className="TrackListHeader Body by">
                                <a
                                  data-owner-uri="spotify:user:spotify"
                                  href="/user/spotify"
                                >
                                  By Spotify
                                </a>
                              </span>
                            </div>
                            <div className="TrackListHeader Body Inverter">
                              <div className="TrackListHeader Body Inverter Actions">
                                <button className="signupbtn" type="submit">
                                  PLAY
                                </button>
                                <div className="TrackListHeader ExtraButtons">
                                  <Button className="Jumbostyle">
                                    <i class="fa fa-heart"></i>
                                  </Button>
                                  <Button className="Jumbostyle">
                                    <i class="fa fa-ellipsis-h"></i>
                                  </Button>
                                </div>
                                <p>50 songs</p>
                              </div>
                            </div>
                          </div>
                        </header>
                      </div>
                    </div>
                    <div class="col-xs-12 col-lg-9 col-xl-8">
                      Ahmed13213213213213213213213213131
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default NowPlay;
