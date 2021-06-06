import React from 'react'
import './footer.css'
import SideMenu from './SideMenu'

export default function Footer() {
    return (
        <footer className="footer  bg-black">
            <div className="container-fluid c-padding py-4 ">
                <div className="logo row">
                    <div className="col-lg-6 d-flex px-5">
                        <img src="./assets/images/logo.png" className="w-50 ms-auto" />
                    </div>
                    <div className="col-lg-6 px-5 d-flex">
                        <div className="contact-area my-auto">
                            <div className="w-100">
                                <a href="#" className="bold h6">
                                    <img src="./assets/icons/phone.svg" width="30px" className="my-auto me-2" />
                                    +90 850 840 09 48
                                </a>
                            </div>
                            <div className="w-100 mt-2">
                                <a href="#" className="bold h6">
                                    <img src="./assets/icons/email.svg" width="30px" className="my-auto me-2" />
                                    info@yigitotokiralama.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-orange c-padding py-4">
                <div className="row">
                    <div className="col-lg-6 border-end px-4 social-media">
                        <div className="d-flex me-auto h-100 text-white">
                            <div className="ms-auto py-auto d-flex">
                                <span className="h5 me-4 my-auto">Bizi Takip Edin</span>
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
                    <div className="col-lg-6 d-flex px-1">
                        <div className="d-flex me-auto ps-5">
                            <a href="#" className="my-auto" >
                                <img src="./assets/icons/slack.svg" height="70%" className="my-auto me-2" />
                                yigitarackiralama
                            </a>
                            <img src="./assets/images/master.png" className="my-auto ms-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid c-padding py-4 footer-menu">
                <div className="d-flex justify-content-evenly px-5">
                    <a href="#">Araçlar</a>
                    <a href="#">Kampanyalar</a>
                    <a href="#">Ofisler</a>
                    <a href="#">Hizmetler</a>
                    <a href="#">Hakkımızda</a>
                    <a href="#">Kiralama Koşulları</a>
                    <a href="#">İletişim</a> 
                </div>
                <hr className="bg-orange mt-5" style={{ margin:"0 10%" , backgroundColor:"#EAEAEA" }} />
            </div>

            <div className="container-fluid c-padding py-4 mb-4 footer-menu">
                <div className="d-flex justify-content-evenly px-5">
                    <SideMenu menuTitle="MENÜ" menues={["Araçlar","Kampanyalar","Ofisler"]} />
                    <SideMenu menuTitle="ARAÇ SINIFI" menues={["Lüx","Prime","Business"]} />
                    <SideMenu menuTitle="OFİSLER" menues={["İSTANBUL","İZMİR","BODRUM"]} />
                    <SideMenu menuTitle="KAMPANYALAR" menues={["Yaz Kampanyası","Ağustos Ayı Kampanyası","Enterprise Fırsatları"]} />
                    <SideMenu menuTitle="POPÜLER LOKASYONLAR" menues={["İSTANBUL REHBERİ","İZMİR REHBERİ","BODRUM REHBERİ"]} />
                </div>
            </div>

            <div className="copyright text-center py-2 bg-gray text-white">
                <p>©2021 Yiğit Oto Kiralama Turizm Ltd. Şti. Tüm Hakları Saklıdır. Web Design <span className="bold">Seyo Medya</span>.</p>
            </div>
        </footer>
    )
}
