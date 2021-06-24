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
                                <span>yigitarackiralama</span>
                            </a>
                            <img src="./assets/images/master.png" className="my-auto ms-lg-5 ms-md-3 master-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid c-padding py-4  footer-menu">
                <div className="row px-lg-5">
                    <div className="col-lg col-md col footer-mini-menu ">
                        <a href="#">Araçlar</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="#">Kampanyalar</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="#">Ofisler</a>
                    </div>
                    <div className="col-lg col-md col footer-mini-menu">
                        <a href="#">Hizmetler</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="#">Hakkımızda</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="#">Kiralama Koşulları</a>
                    </div>
                    <div className="col-lg col-md col-4 footer-mini-menu">
                        <a href="#">İletişim</a>
                    </div>
                </div>

                <hr className="bg-orange mt-4" style={{ margin: "0 10%", backgroundColor: "#EAEAEA" }} />
            </div>

            <div className="container-fluid c-padding py-lg-4 py-md-3 mb-4 footer-menu">
                <div className="row px-lg-5">
                    <div className="col-lg col-md col-4 ">
                        <SideMenu menuTitle="MENÜ" menues={["Araçlar", "Kampanyalar", "Ofisler"]} />
                    </div>
                    <div className="col-lg col-md col-4">
                        <SideMenu menuTitle="ARAÇ SINIFI" menues={["Lüx", "Prime", "Business"]} />
                    </div>
                    <div className="col-lg col-md col-4">
                        <SideMenu menuTitle="OFİSLER" menues={["İSTANBUL", "İZMİR", "BODRUM"]} />
                    </div>
                    <div className="col-lg col-md col-12 mobile-footer-menu">
                        <SideMenu menuTitle="KAMPANYALAR" menues={["Yaz Kampanyası", "Ağustos Ayı Kampanyası", "Enterprise Fırsatları"]} />
                    </div>
                    <div className="col-lg col-md col-12 mobile-footer-menu">
                        <SideMenu menuTitle="POPÜLER LOKASYONLAR" menues={["İSTANBUL REHBERİ", "İZMİR REHBERİ", "BODRUM REHBERİ"]} />
                    </div>






                </div>
            </div>

            <div className="copyright text-center py-2 bg-gray text-white footer-bottom-text">
                <p>©2021 Yiğit Oto Kiralama Turizm Ltd. Şti. Tüm Hakları Saklıdır. Web Design <span className="bold">Seyo Medya</span>.</p>
            </div>
        </footer>
    )
}
