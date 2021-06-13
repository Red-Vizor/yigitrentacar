import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './header.css'
import { useLocation } from 'react-router-dom'
import { updatePage } from '../../store/general/pageSlice'
export default function Header() {

    const location = useLocation()
    const dispatch = useDispatch() 
    dispatch(updatePage(location.pathname))
    const page= useSelector((state) => state.page.value)
    

    if(page != "/reservation"){
        return (
            <div className="header">
                <div className="container-fluid header-top">
                    <div className="container">
                        <div className="row py-2">
                            <div className="col-lg-3 border-end px-4 social-media">
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
                            <div className="col-lg-4 d-flex border-end px-1">
                                <div className="d-flex-inline mx-auto">
                                    <a href="#" className="my-auto" >
                                        <img src="./assets/icons/slack.svg" height="100%" className="my-auto me-2" />
                                    yigitarackiralama
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 px-4">
                                <div className="d-flex-inline text-center">
                                    <div className="contact-area d-inline">
                                        <a href="#" className="my-auto" >
                                            <img src="./assets/icons/phone.svg" height="100%" className="my-auto me-2" />
                                        +90 850 840 09 48
                                        </a>
                                    </div>
                                    <div className="contact-area d-inline ms-3">
                                        <a href="#" className="my-auto" >
                                            <img src="./assets/icons/email.svg" height="100%" className="my-auto me-2" />
                                        info@yigitotokiralama.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     
                <div className="container-fluid  header-bottom">
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-lg-4 d-flex">
                                <img src="./assets/icons/phone.svg" className="my-auto me-2 h-50" />
                                <div className=" my-auto">
                                    <p>7/24 ÇAĞRI HATTI </p>
                                    <a href="#"> +90 850 840 09 48 </a>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex justify-items-center px-5">
                                <img src="./assets/images/logo.png" className="w-100 mx-auto" />
                            </div>
                            <div className="col-lg-4 d-flex justify-content-end">
                                <button type="button" class="btn btn-outline-light rounded-0 my-auto">Üye Girişi <i class="las la-user" ></i> <i class="las la-angle-down"></i></button>
                                <button type="button" class="btn btn-outline-light border-0 my-auto search-button ms-3"><i class="las la-search"></i></button>
                                <button type="button" class="btn btn-outline-light border-0 my-auto menu-button ms-2"><i class="las la-bars"></i> Menü</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return null
    }
}
