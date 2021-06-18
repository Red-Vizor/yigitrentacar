import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogle } from '../../store/menues/menuesSlice'
import './menues.css'

export default function Menues() {
    const fade = useSelector((state) => state.menues.value)
    const dispatch = useDispatch()
    return (
        <section className={"menue position-fixed  " + (fade === true ? 'd-block' : 'd-none')} >
            <div className="menues-area bg-black border ">
                <div className="position-relative w-100 h-100">
                    <span className="py-2 menu-close-button text-white" onClick={() => { dispatch(toogle(false)) }}>
                        <span className="fs-3">X</span> <span className="ms-1">Menü</span>
                    </span>

                    <div className="row h-100">
                        <div className="col-4 my-auto">
                            <ul className="nav flex-column mx-auto ps-4">

                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <img src="./assets/icons/facebook.svg" width="27px" className="my-1 me-3" /> <span>+90 850 840 09 48</span></a>
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
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Araçlar</a>
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
                                    <a className="nav-link" href="#">Ofisler</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hizmetler</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kampanyalar</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Kiralama Koşulları</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">İletişim</a>
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
