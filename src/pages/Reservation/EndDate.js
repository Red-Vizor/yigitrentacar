import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'

export default function EndDate() {
    const dispatch = useDispatch()

    const dateValue = useSelector((state) => state.dateslice)
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
                                <p className="h7">{dateValue.citySelect} </p>
                                <p className="h7">{dateValue.startDate} <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50 " /> {dateValue.endDate}</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h6 className="bold mt-4">
                                    2. ARACINIZ
                                </h6>
                                <p className="h7">{dateValue.carSelect.name}</p>
                                <p className="h7">{dateValue.totalAmount}₺</p>
                            </div>
                            <div className="col-12 col-lg-6 mt-2">
                                <h6 className="bold mt-4">
                                    3. GÜVENCE PAKETLERİ
                                </h6>
                                <a href="#" className="h7 text-dark text-end" data-bs-toggle="modal" data-bs-target={"#packageModalOne"}>Seçilenleri Göster</a>
                            </div>
                            <div className="col-12 col-lg-6 mt-2">
                                <h6 className="bold mt-4">
                                    4. EK ÜRÜNLER
                                </h6>  
                                <a href="#" className="h7 text-dark text-end" data-bs-toggle="modal" data-bs-target={"#packageModalTwo"}>Seçilenleri Göster</a>
                            </div>

                            <span className="text-center border total bold fs-4 mt-4 py-3"> {dateValue.totalAmount}₺ </span>
                        </div>
                    </div>
                </div>

                <a href="/" className="text-dark fs-4 border home-button py-2 px-5"> Anasayfaya Geri Dön</a> 
            </div>
        </div>
    )
}
