import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogle } from '../../store/menues/menuesSlice'
import './menues.css'
import {  Link } from "react-router-dom"

export default function Menues() {
    const fade = useSelector((state) => state.menues.value)
    const [zindex, setZindex] = useState(false)


    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(toogle(false))
        setTimeout(function () {
            setZindex(true)
        }, 1000);
    }


    useEffect(() => {
        if (fade === true) {
            setZindex(false)
        }
    }, [fade]);

    return (
        <section className={"menue position-fixed " + (fade === true ? 'fadeIn ' : ' ') + (zindex === true ? 'zindex ' : '')}  >
            <div className="menues-area bg-black border ">
                <div className="position-relative w-100 h-100">
                    <span className="py-2 menu-close-button text-white" onClick={() => { closeMenu() }}>
                        <span className="fs-3">X</span> <span className="ms-1">Menü</span>
                    </span>

                    <div className="row h-100">
                        <div className="col-4 my-auto">
                            <ul className="nav flex-column mx-auto ps-4">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" > <img src="./assets/icons/facebook.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/instagram.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/twitter.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/youtube.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/phone.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/email.svg" width="27px" className="my-auto me-3" /> <span>info@yigitotokiralama.com</span></a>
                                </li>

                            </ul>
                        </div>
                        <div className="col-4 my-auto d-flex">
                            <ul className="nav flex-column mx-auto">
                                <li className="nav-item">
                                    <li class="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >Araçlar</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Tüm Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Premium Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Prestij Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Business Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Plus Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Ekonomik Araçlar</a></li>
                                        </ul>
                                    </li>
                                </li>
                                <li className="nav-item">
                                    <Link to="/offices" className="nav-link" href="#" onClick={() => { closeMenu() }}>Ofisler</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" href="#" onClick={() => { closeMenu() }}>Hizmetler</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/campaigns" className="nav-link" href="#" onClick={() => { closeMenu() }}>Kampanyalar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/policies" className="nav-link" href="#" onClick={() => { closeMenu() }}>Kiralama Koşulları</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" href="#" onClick={() => { closeMenu() }}>İletişim</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="rigth-text text-muted bold fs-5 position-absolute">
                                Yiğit Oto Kiralama
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
