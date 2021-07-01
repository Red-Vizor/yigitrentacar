import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleMobile } from '../../store/menues/mobileMenuesSlice'
import './menues.css'
import { Link } from "react-router-dom"

export default function MobileMenues() {
    const fade = useSelector((state) => state.mobilemenues.value)
    const [zindex, setZindex] = useState(false)


    const dispatch = useDispatch()

    const closeMenu = () => {
        dispatch(toogleMobile(false))
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
        <section className={"menue mobile position-fixed " + (fade === true ? 'fadeIn ' : ' ') + (zindex === true ? 'zindex ' : '')}  >
            <div className="menues-area bg-black border ">
                <div className="position-relative w-100 h-100">
                    <span className="py-2 menu-close-button text-white" onClick={() => { closeMenu() }}>
                        <span className="fs-3">X</span> <span className="ms-1"> Menü</span>
                    </span>

                    <div className="row h-100">

                        <div className="col-12 my-auto d-flex">
                            <ul className="nav flex-column mx-auto">

                                <li className="nav-item">
                                    <div className="dropdown ms-3">
                                        <a className="dropdown-toggle " data-toggle="dropdown" href="#">Araçlar</a>
                                        <ul className="dropdown-menu  bg-black ms-4" role="menu" aria-labelledby="dLabel">
                                            <li><Link to="/cars" onClick={() => { closeMenu() }}>Tüm Araçlar</Link></li>
                                            <li><Link to="/cars" onClick={() => { closeMenu() }}>Premium Araçlar</Link></li>
                                            <li><Link to="/cars" onClick={() => { closeMenu() }}>Prestij Araçlar</Link></li>
                                            <li><Link to="/cars" onClick={() => { closeMenu() }}>Business Araçlar</Link></li>
                                            <li><Link to="/cars" onClick={() => { closeMenu() }}>Ekonomik Araçlar</Link></li>
                                            <li className="divider"></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" href="#" onClick={() => { closeMenu() }}>Hakkımızda</Link>
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
                                    <Link to="/popularlocations" className="nav-link" href="#" onClick={() => { closeMenu() }}>Lokasyonlar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/policies" className="nav-link" href="#" onClick={() => { closeMenu() }}>Kiralama Koşulları</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" href="#" onClick={() => { closeMenu() }}>İletişim</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 my-auto d-flex">
                            <ul className="nav flex-column mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="tel:908508400948"> <img src="./assets/icons/phone.svg" width="27px" className="my-1 me-3" /> +90 850 840 09 48</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:info@yigitotokiralama.com"> <img src="./assets/icons/email.svg" width="27px" className="my-auto me-3" /> info@yigitotokiralama.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12  px-1 social-media my-auto">
                            <div className="d-flex-inline text-center">
                                <a href="https://www.youtube.com/channel/UCbx9W45x_NlM5oo-HdKn5Yg" target="_blank" className="my-auto " >
                                    <img src="./assets/icons/youtube.svg" width="38px" className="my-auto me-3" />
                                </a>
                                <a href="https://www.instagram.com/yigitotokiralama" target="_blank" className="my-auto" >
                                    <img src="./assets/icons/twitter.svg" width="30px" className="my-auto me-3" />
                                </a>
                                <a href="https://www.facebook.com/yigitcarrent" target="_blank" className="my-auto" >
                                    <img src="./assets/icons/instagram.svg" width="28px" className="my-auto me-3" />
                                </a>
                                <a href="https://twitter.com/yigitrentacar" target="_blank" className="my-auto" >
                                    <img src="./assets/icons/facebook.svg" width="15xpx" className="my-auto me-3" />
                                </a>
                            </div>
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
