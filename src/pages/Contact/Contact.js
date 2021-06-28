import React from 'react'
import './contact.css'
import { OfficesCard, ContactForm } from '../../Components'

export default function Contact() {
    return (
        <section className="contact-page">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa /  İletişim</p>
            </div>

            <div className="contact-jumbotron text-center position-relative pb-5" >
                <h4 className="py-lg-3 bold">İLETİŞİM</h4>
            </div>
            <div className="container-fluid w-100 bg-image contact-map" style={{ height: "370px", backgroundImage: "url(./assets/images/contact.png)" }}> </div>
            <div className="py-5 px-5 bg-black container-fluid" >
                <div className="offices-list px-lg-5 px-md-5 py-4 mx-lg-4 mx-md-5">
                    <div className="row mx-auto w-100">
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="İstanbul" phone="0532 409 14 84" adress="Cumhuriyet Mahallesi Gürpınar Yolu Caddesi Beykent İş Merkezi B2 Blok No:347 Büyükçekmece/İSTANBUL" />
                        </div>
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="İzmir" phone="0549 405 35 35" adress="Mansuroğlu Mahallesi 1593/1 Sokak No:4/B Kat:4 D:37 Lider Centrio Bayraklı/İzmir " />
                        </div>
                        <div className="col-lg-4 mb-md-5">
                            <OfficesCard name="Bodrum" phone="0545 571 48 48" adress="Dirmil Mahallesi İnönü Cadddesi No:49/1 İç Kapı No:4 Bodrum/Muğla/Yalıkavak " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="phone-mail-area mx-auto mt-5 w-50 shadow-light py-3 text-center">
                    <a href="#" className="my-auto" >
                        <img src="./assets/icons/phone-orange.svg" height="100%" className="my-auto me-2" />
                        <span>+90 850 840 09 48</span>
                    </a>
                    <a href="#" className="my-auto ms-lg-3 ms-md-5" >
                        <img src="./assets/icons/email-orange.svg" height="100% " className="my-auto me-2" />
                        <span>info@yigitotokiralama.com</span>
                    </a>


                </div>
                <ContactForm />
            </div>
        </section>
    )
}
