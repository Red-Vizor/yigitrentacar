import React from 'react'

export default function ReservationForm() {
    return (
        <section className="container-fluid">
            <div className="header-area py-4 bg-pink-powder ">
                <div className="header-title d-flex mb-3">
                    <span className="title-border-green px-5 py-2 mx-auto bold">
                        REZERVASYONUN ÖZETİ
                    </span>
                </div>
                <div className="header-content d-flex justify-content-center">
                    <div className="row">
                        <div className="col d-flex">
                            <img src="./assets/images/s3.png" className="ms-auto w-50" />
                        </div>

                        <div className="col d-flex">
                            <div className="car-detail mx-auto my-auto">
                                <span className="h4 bold">2021 MERCEDES CLA 180</span>
                                <div className="row">
                                    <div className="col-6">
                                        <span>GÜVENCE PAKETİ</span>
                                    </div>
                                    <div className="col-6">
                                        <span>EK ÜRÜNLER</span>
                                    </div>
                                    <div className="col-6">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... Tümünü Göster</span>
                                    </div>
                                    <div className="col-6">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... Tümünü Göster</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">


                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
