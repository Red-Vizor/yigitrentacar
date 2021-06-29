import React from 'react'
import './offices.css'
import { OfficesCard } from '../../Components'

export default function Offices() {
    return (
        <section className="offices">
            <div className="menu-bar container-fluid pt-3 m" style={{ height: "55px", fontWeight: "bold" }}>
                <div className="container">
                    <p><a href="/" className="text-dark">Anasayfa</a>    /  Ofisler </p>
                </div>
            </div>
            <div className="header-bar py-3 text-center text-white">
                <h4 className="extra-bold">
                    OFİSLER
                </h4>
            </div>
            <div className="container-fluid py-5 d-flex offices-map">
                <img src="./assets/images/turkey.png" className="w-25 mx-auto" />
            </div>
            <div className="container-fluid offices-contact py-5 d-flex px-md-5">
                <div className="offices-list px-md-5">
                    <div className="row mx-auto w-100 px-md-5">
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="İstanbul" phone="0532 409 14 84" adress="Cumhuriyet Mahallesi Gürpınar Yolu Caddesi Beykent İş Merkezi B2 Blok No:347 Büyükçekmece/İSTANBUL"/>
                        </div>
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="İzmir" phone="0549 405 35 35" adress="Mansuroğlu Mahallesi 1593/1 Sokak No:4/B Kat:4 D:37 Lider Centrio Bayraklı/İzmir "/>
                        </div>
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="Bodrum" phone="0545 571 48 48" adress="Dirmil Mahallesi İnönü Cadddesi No:49/1 İç Kapı No:4 Bodrum/Muğla/Yalıkavak "/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
