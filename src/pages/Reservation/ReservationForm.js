import React from 'react'
import { PersonalForm, CorporateForm } from '../../Components'


export default function ReservationForm() {
    return (
        <section className="reservation-form-area">
            <div className="header-area  py-4 bg-pink-powder ">

                <div className="header-title d-flex mb-3">
                    <span className="title-border-green px-5 py-2 mx-auto bold">
                        REZERVASYONUN ÖZETİ
                    </span>
                </div>
                <div className="header-content d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 mx-auto d-flex">
                            <img src="./assets/images/s3.png"  className="mx-auto reservation-car-image w-50" />
                        </div>

                        <div className="col-lg-5 col-md-5 d-flex">
                            <div className="car-detail mx-auto my-auto ">
                                <span className="h4 bold">2021 MERCEDES CLA 180</span>
                                <div className="row ">
                                    <div className="col-6 bold mt-3 ">
                                        <span>GÜVENCE PAKETİ</span>
                                    </div>
                                    <div className="col-6 bold mt-3 ">
                                        <span>EK ÜRÜNLER</span>
                                    </div>
                                    <div className="col-6 ">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... <span className="bold">Tümünü Göster</span></span>
                                    </div>
                                    <div className="col-6 ">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı...  <span className="bold">Tümünü Göster</span></span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 car-detail d-flex my-auto">
                            <div className="my-auto ps-lg-5">
                                <span className="bold h5">REZERVASYON TARİHİ</span>
                                <div className="mt-lg-3 mt-md-2">
                                <span >Bodrum, Yalıkavak</span>
                                </div>
                                <div>
                                <span className="bold">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1" /> 21.06.2021</span>
                                </div>
                                <span className="bold">340,37₺</span>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rezervasyon-uyari text-center p-3">
                <p>REZERVASYONUNUZU TAMAMLAMAK İÇİN AŞAĞIDAKİ BİLGİLERİ EKSİKSİZ TAMAMLAYINIZ.</p>
            </div>

            <PersonalForm />
            <CorporateForm />


        </section>


    )

}






