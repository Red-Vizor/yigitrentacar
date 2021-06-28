import React from 'react'
import './footer.css'
import SideMenu from './SideMenu'

export default function Footer() {
    return (
        <footer className="footer  bg-black">
            <div className="container c-padding py-4 ">
                <div className="logo row">
                    <div className="col-lg-4 col-md-4  col-12  d-flex ">
                        <img src="./assets/images/logo.png" className="w-100 ms-auto logo" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-12  d-flex pt-4">
                        <div className="contact-area my-auto mx-auto">
                            <div className="w-100 ">
                                <a href="#" className="bold h6">
                                    <img src="./assets/icons/phone.svg" width="30px" className="my-auto me-3 me-md-1" />
                                    <span>+90 850 840 09 48</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12  d-flex pt-4 " >
                        <div className="contact-area my-auto pt-md-1 mx-auto">
                            <div className="w-100">
                                <a href="#" className="bold h6 d-flex">
                                    <img src="./assets/icons/email.svg" width="30px" className="my-auto me-3 me-md-1" />
                                    <span>info@yigitotokiralama.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid bg-orange c-padding py-4">
                <div className="row">
                    <div className="col-lg-6 col-sm-6 col-12 border-end px-lg-4 social-media-footer">
                        <div className="d-flex me-auto h-100 text-white">
                            <div className="ms-auto py-auto d-flex">
                                <span className="h5 me-4 my-auto text-center">Bizi Takip Edin</span>
                                <a href="#" className="my-auto h-100 d-flex">
                                    <img src="./assets/icons/youtube.svg" height="80%" className="my-auto me-5" />
                                </a>
                                <a href="#" className="my-auto h-100 d-flex" >
                                    <img src="./assets/icons/twitter.svg" height="80%" className="my-auto me-5" />
                                </a>
                                <a href="#" className="my-auto h-100 d-flex" >
                                    <img src="./assets/icons/instagram.svg" height="80%" className="my-auto me-5" />
                                </a>
                                <a href="#" className="my-auto h-100 d-flex " >
                                    <img src="./assets/icons/facebook.svg" height="80%" className="my-auto me-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12 d-flex px-1">
                        <div className="d-flex me-auto ps-lg-5 ps-md-3 footer-mail mx-auto">
                            <a href="#" className="my-auto " >
                                <img src="./assets/icons/slack.svg" height="70%" className="my-auto me-2 mail-img" />
                                <span>yigitrentacar</span>
                            </a>
                            <img src="./assets/images/master.png" className="my-auto ms-lg-5 ms-md-3 master-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid c-padding py-4  footer-menu">
                <div className="row px-lg-5 text-center">
                    <div className="col-lg col-md col footer-mini-menu ">
                        <a href="/cars">Araçlar</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="/campaigns">Kampanyalar</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="/offices">Ofisler</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="/services">Hizmetler</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="/about">Hakkımızda</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="/policies">Kiralama Koşulları</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="/contact">İletişim</a>
                    </div>
                </div>

                <hr className="bg-orange mt-4" style={{ margin: "0 10%", backgroundColor: "#EAEAEA" }} />
            </div>

            <div className="container-fluid c-padding py-lg-4 py-md-3 mb-4 footer-menu">
                <div className="row px-lg-5">
                    <div className="col-lg col-md col-4 ">
                        <div className="menu text-white ">
                            <p className="h5 mb-lg-3 bold ">Menü</p>
                            <div className="mt-lg-2 "><a href="/cars">Araçlar</a></div>
                            <div className="mt-lg-2 "><a href="/campaigns">Kampanyalar</a></div>
                            <div className="mt-lg-2 "><a href="/offices">Ofisler</a></div>
                        </div>
                    </div>
                    <div className="col-lg col-md col-4">
                        <div className="menu text-white ">
                            <p className="h5 mb-lg-3 bold ">ARAÇ SINIFI</p>
                            <div className="mt-lg-2 "><a href="/cars">Lüx</a></div>
                            <div className="mt-lg-2 "><a href="/cars">Prime</a></div>
                            <div className="mt-lg-2 "><a href="/cars">Business</a></div>
                        </div>
                    </div>
                    <div className="col-lg col-md col-4">
                        <div className="menu text-white ">
                            <p className="h5 mb-lg-3 bold ">OFİSLER</p>
                            <div className="mt-lg-2 "><a href="/offices">İSTANBUL</a></div>
                            <div className="mt-lg-2 "><a href="/offices">İZMİR</a></div>
                            <div className="mt-lg-2 "><a href="/offices">BODRUM</a></div>
                        </div>
                    </div>
                    <div className="col-lg col-md col-12 mobile-footer-menu">
                        <div className="menu text-white ">
                            <p className="h5 mb-lg-3 bold ">KAMPANYALAR</p>
                            <div className="mt-lg-2 "><a href="/campaings">Yaz Kampanyası</a></div>
                            <div className="mt-lg-2 "><a href="/campaings">Ağustos Ayı Kampanyası</a></div>
                            <div className="mt-lg-2 "><a href="/campaings">Enterprise Fırsatları</a></div>
                        </div>
                    </div>
                    <div className="col-lg col-md col-12 mobile-footer-menu">
                        <div className="menu text-white ">
                            <p className="h5 mb-lg-3 bold ">POPÜLER LOKASYONLAR</p>
                            <div className="mt-lg-2 "><a href="/popularlocations">İSTANBUL REHBERİ</a></div>
                            <div className="mt-lg-2 "><a href="/popularlocations">İZMİR REHBERİ</a></div>
                            <div className="mt-lg-2 "><a href="/popularlocations">BODRUM REHBERİ</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright text-center py-2 bg-gray text-white footer-bottom-text">
                <p>©2021 Yiğit Oto Kiralama Turizm Ltd. Şti. Tüm Hakları Saklıdır. Web Design <span className="bold">Seyo Medya</span>.</p>
            </div>
        </footer>
    )
}
