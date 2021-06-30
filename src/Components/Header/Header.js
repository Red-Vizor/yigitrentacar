import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './header.css'
import { useLocation } from 'react-router-dom'
import { updatePage } from '../../store/general/pageSlice'
import { toogle } from '../../store/menues/menuesSlice'
import { toogleMobile } from '../../store/menues/mobileMenuesSlice'
import { Menues, MobileMenues } from '../'
import LoginPopup from '../../pages/Crud/LoginPopup'

import Cookies from 'js-cookie'
import $ from 'jquery';
window.jQuery = $;

export default function Header() {
    const location = useLocation()
    const dispatch = useDispatch()

    dispatch(updatePage(location.pathname))
    const page = useSelector((state) => state.page.value)


    const $menu = $('.login-dropdown-menu');
    const $toogleMenu = $('.dropdown-menu');
    $(document).on('mouseup',e => {
        if (!$menu.is(e.target) // if the target of the click isn't the container...
            && $menu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $menu.slideUp();
        }
    });

    $(document).mouseup(e => {
        if (!$toogleMenu.is(e.target) // if the target of the click isn't the container...
            && $toogleMenu.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $toogleMenu.slideUp();
        }
    });

    if (page !== "/reservation") {
        return (
            <div className="header">
                <Menues />
                <MobileMenues />
                <div className="container-fluid header-top">
                    <div className="container">
                        <div className="row py-2">
                            <div className="col-lg-4 col-md-4  px-1 social-media my-auto">
                                <div className="d-flex-inline text-center">
                                    <a href="#" className="my-auto " >
                                        <img src="./assets/icons/youtube.svg" height="100%" className="my-auto me-3" />
                                    </a>
                                    <a href="#" className="my-auto" >
                                        <img src="./assets/icons/twitter.svg" height="100%" className="my-auto me-3" />
                                    </a>
                                    <a href="#" className="my-auto" >
                                        <img src="./assets/icons/instagram.svg" height="100%" className="my-auto me-3" />
                                    </a>
                                    <a href="#" className="my-auto" >
                                        <img src="./assets/icons/facebook.svg" height="100%" className="my-auto me-3" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4  d-flex px-1">
                                <div className="d-flex-inline row mx-auto">
                                    <a href="#" className="my-auto" >
                                        <img src="./assets/icons/slack.svg" height="100%" className="my-auto me-2" />
                                        yigitrentacar
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4  d-flex px-1">
                                <div className="d-flex-inline row mx-auto">
                                    <a href="mailto:info@yigitotokiralama.com" className="my-auto" >
                                        <img src="./assets/icons/email.svg" height="80%" className="my-auto me-2" />
                                        info@yigitotokiralama.com
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid  header-bottom">
                    <div className="container py-3">
                        <div className="row m-0">
                            <div className="col-lg-3 col-md-3 col-4 d-flex call-line">
                                <img src="./assets/icons/phone.svg" className="my-auto me-2 h-50" />
                                <div className="my-auto call-header">
                                    <p >7/24 ÇAĞRI HATTI </p>
                                    <a href="tel:908508400948">+90 850 840 0 948 <span className="text-orange">(YGT)</span></a>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4  col-6 d-flex justify-items-center px-lg-5 logo-area-a  my-auto">
                                <a href="/" className="logo"><img src="./assets/images/logo.png" className="w-100 mx-auto my-auto" /></a>
                            </div>

                            <div className="col-lg-4 col-md-5 px-0  col-2 d-flex justify-content-end">
                                <div className="login-drop my-auto login-drop-button">
                                    <a className="dropdown-toggle login-dropdown btn btn-outline-light rounded-0  m-auto">
                                       <span className="mobile-login-hide"> <span>{Cookies.get('user') ? Cookies.get('user').split(" ")[0] + " Hoşgeldin" : 'Üye Girişi'}</span> </span><i class="las la-user" ></i> <i class="las la-angle-down"></i>
                                    </a>
                                </div>
                                {Cookies.get('user') ? '' : <div className="login-dropdown-menu dropdown-menu bg-light position-absolute rounded" role="menu" aria-labelledby="dLabel">
                                    <LoginPopup formWidth="100" />
                                </div>}


                                <button type="button" class="btn btn-outline-light border-0 my-auto search-button"><i class="las la-search"></i></button>
                                
                                <div class="menu-button mobile-tablet">
                                    <button type="button" class="btn btn-outline-light  my-auto border-0 menu-button" style={{ height: "100%" }} onClick={() => { dispatch(toogleMobile(true)) }}>
                                        <div className="my-auto">
                                            <i class="las la-bars d-inline"></i>
                                            <span className="d-inline ms-1">Menü</span>
                                        </div>  
                                    </button>
                                </div>
                                <div class="menu-button web my-auto">
                                    <button type="button" class="btn btn-outline-light my-auto border-0 menu-button " onClick={() => { dispatch(toogle(true)) }}><i class="las la-bars"></i><span className="ps-1">Menü</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
    else {
        return null
    }
}
