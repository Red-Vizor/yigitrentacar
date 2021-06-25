import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'

export default function EndDate() {
    const dispatch = useDispatch()
    return (
        <div className="end-reservation bg-success-green py-5">
            <div className="container text-center">
                <span className="extra-bold fs-3 green-text-color">Rezervasyonunuz Tamamlandı</span>
                <div className="card  my-5 mx-auto" >
                    <div className="card-body text-start">
                        <h5 className="card-title text-center mb-4 green-text-color bold">Rezervasyon Detayları</h5>
                        <div className="row px-5">
                            <div className="col-12 col-lg-6">
                                <h6 className="bold mt-4">
                                    1. KİRALAMA | ALIŞ & İADE
                                </h6>
                                <p className="h7">Mercedes E200 AMG </p>
                                <p className="h7">Dizel Otomatik</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h6 className="bold mt-4">
                                    2. ARACINIZ
                                </h6>
                                <p className="h7">Mercedes E200 AMG </p>
                                <p className="h7">Dizel Otomatik</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-2">
                                <h6 className="bold mt-4">
                                    3. GÜVENCE PAKETLERİ
                                </h6>
                            </div>
                            <div className="col-12 col-lg-6 mt-2">
                                <h6 className="bold mt-4">
                                    4. EK ÜRÜNLER
                                </h6>
                                <p >Mini Hasar Sigortası 1500 Tl</p>
                                <p>Kapsamlı ...  <a className="h7 text-dark bold" data-bs-toggle="modal" data-bs-target="#packageModal">Tümünü göster</a></p>
                            </div>

                            <span className="text-center border total bold fs-4 mt-4 py-3"> TOPLAM: 99 TL </span>
                        </div>
                    </div>
                </div>

                <a href="/" className="text-dark fs-4 border home-button py-2 px-5"> Anasayfaya Geri Dön</a> 
            </div>
        </div>
    )
}
