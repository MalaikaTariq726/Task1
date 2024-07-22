import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font/simple-line-icons/css/simple-line-icons.css';
import '../css/main.css';
import "../font/iconsmind-s/css/iconsminds.css";
import "../css/vendor/bootstrap.min.css";
import "../css/vendor/bootstrap.rtl.only.min.css";
import "../css/vendor/fullcalendar.min.css";
import "../css/vendor/dataTables.bootstrap4.min.css";
import "../css/vendor/datatables.responsive.bootstrap4.min.css";
import "../css/vendor/select2.min.css";
import "../css/vendor/perfect-scrollbar.css";
import "../css/vendor/glide.core.min.css";
import "../css/vendor/bootstrap-stars.css";
import "../css/vendor/nouislider.min.css";
import "../css/vendor/bootstrap-datepicker3.min.css";
import "../css/vendor/component-custom-switch.min.css";
import "../css/navbar.css";
import "../css/dore.dark.bluenavy.min.css"

import profileImage1 from '../img/profiles/l-1.jpg';
import profileImage2 from '../img/profiles/l-2.jpg';
import notificationImage1 from '../img/notifications/1.jpg';
import notificationImage2 from '../img/notifications/2.jpg';
import notificationImage3 from '../img/notifications/3.jpg';

function Navbar() {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDrop2, setIsOpenDrop2] = useState(false);
    const [isOpenDrop3, setIsOpenDrop3] = useState(false);

    const dropdownRef = useRef(null);
    const notificationRef = useRef(null);
    const dropdown3Ref = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const toggleDropdown2 = () => setIsOpenDrop2(!isOpenDrop2);
    const toggleDropdown3 = () => setIsOpenDrop3(!isOpenDrop3);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsOpenDrop2(false);
            }
            if (dropdown3Ref.current && !dropdown3Ref.current.contains(event.target)) {
                setIsOpenDrop3(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleFullScreenToggle = () => {
        if (!isFullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <nav className="navbar fixed-top">
            <div className="d-flex align-items-center navbar-left">
                {/* Menu Buttons */}
                <a href="#" className="menu-button d-none d-md-block">
                    <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                        <rect x="0.48" y="0.5" width="7" height="1" />
                        <rect x="0.48" y="7.5" width="7" height="1" />
                        <rect x="0.48" y="15.5" width="7" height="1" />
                    </svg>
                    <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                        <rect x="1.56" y="0.5" width="16" height="1" />
                        <rect x="1.56" y="7.5" width="16" height="1" />
                        <rect x="1.56" y="15.5" width="16" height="1" />
                    </svg>
                </a>

                <a href="#" className="menu-button-mobile d-xs-block d-sm-block d-md-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                        <rect x="0.5" y="0.5" width="25" height="1" />
                        <rect x="0.5" y="7.5" width="25" height="1" />
                        <rect x="0.5" y="15.5" width="25" height="1" />
                    </svg>
                </a>

                <div className="search" data-search-path="Pages.Search.html?q=">
                    <input placeholder="Search..." />
                    <span className="search-icon">
                        <i className="simple-icon-magnifier"></i>
                    </span>
                </div>

                <a className="btn btn-sm btn-outline-primary ml-3 d-none d-md-inline-block" href="https://1.envato.market/5kAb">
                    &nbsp;BUY&nbsp;
                </a>
            </div>

            <a className="nabarlogo" href="Dashboard.Default.html">
                <span className="logo d-none d-xs-block"></span>
                <span className="logo-mobile d-block d-xs-none"></span>
            </a>

            <div className="navbar-right">
                <div className="header-icons d-inline-block align-middle">
                    <div className="d-none d-md-inline-block align-text-bottom mr-3">
                        <div className="custom-switch custom-switch-primary-inverse custom-switch-small pl-1" data-toggle="tooltip" data-placement="left" title="Dark Mode">
                            <input className="custom-switch-input" id="switchDark" type="checkbox" defaultChecked />
                            <label className="custom-switch-btn" htmlFor="switchDark"></label>
                        </div>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="position-relative d-none d-sm-inline-block" ref={dropdownRef}>
            <button
                className="header-icon btn btn-empty"
                type="button"
                onClick={toggleDropdown3}
                aria-haspopup="true"
                aria-expanded={isOpenDrop3}
            >
                <i className="simple-icon-grid"></i>
            </button>
            {isOpenDrop3 && (
                <div className="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="iconMenuDropdown">
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-equalizer d-block"></i>
                        <span>Settings</span>
                    </a>
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-male-female d-block"></i>
                        <span>Users</span>
                    </a>
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-puzzle d-block"></i>
                        <span>Components</span>
                    </a>
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-bar-chart-4 d-block"></i>
                        <span>Profits</span>
                    </a>
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-file d-block"></i>
                        <span>Surveys</span>
                    </a>
                    <a href="#" className="icon-menu-item">
                        <i className="iconsminds-suitcase d-block"></i>
                        <span>Tasks</span>
                    </a>
                </div>
            )}
        </div>
                    {/* Notifications */}
                    <div className="position-relative d-inline-block" ref={notificationRef}>
                        <button
                            className="header-icon btn btn-empty"
                            type="button"
                            id="notificationButton"
                            onClick={toggleDropdown2}
                            aria-haspopup="true"
                            aria-expanded={isOpenDrop2}
                        >
                            <i className="simple-icon-bell"></i>
                            <span className="count">3</span>
                        </button>
                        {isOpenDrop2 && (
                            <div className="dropdown-menu dropdown-menu-right mt-3 position-absolute show" id="notificationDropdown">
                                <div className="scroll">
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img
                                                src={profileImage2}
                                                alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                                            />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img
                                                src={notificationImage1}
                                                alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                                            />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">1 item is out of stock!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                                        <a href="#">
                                            <img
                                                src={notificationImage2}
                                                alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                                            />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">New order received! It is total $147,20.</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mb-3 pb-3">
                                        <a href="#">
                                            <img
                                                src={notificationImage3}
                                                alt="Notification Image"
                                                className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                                            />
                                        </a>
                                        <div className="pl-3">
                                            <a href="#">
                                                <p className="font-weight-medium mb-1">3 items just added to wish list by a user!</p>
                                                <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Fullscreen Button */}
                    <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton" onClick={handleFullScreenToggle}>
                        {isFullScreen ? (
                            <i className="simple-icon-size-actual"></i>
                        ) : (
                            <i className="simple-icon-size-fullscreen"></i>
                        )}
                    </button>
                </div>

                {/* User Dropdown */}
                <div className="user-dropdown" ref={dropdownRef}>
                    <button className="btn btn-empty p-0" onClick={toggleDropdown}>
                        <span className="name">Sarah Kortney</span>
                        <span>
                            <img alt="Profile Picture" src={profileImage1} className="profile-image" />
                        </span>
                    </button>
                    {isOpen && (
                        <div className="dropdown-menu show">
                            <a className="dropdown-item" href="#">Account</a>
                            <a className="dropdown-item" href="#">Features</a>
                            <a className="dropdown-item" href="#">History</a>
                            <a className="dropdown-item" href="#">Support</a>
                            <a className="dropdown-item" href="#">Sign out</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
