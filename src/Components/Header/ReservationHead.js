import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'

export default function ReservationHead() {
  
    const dateValue = useSelector((state) => state.dateslice);
    return (
            <div className="container-fluid reservation-head bg-black">
                <div className="container py-3 reservation-head">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-6 d-flex justify-items-center px-lg-5">
                            <a href="/"><img src="./assets/images/logo.png" className="w-100 mx-auto" /></a>
                        </div>
                        <div className="col-lg-8 col-md-8 col-6 d-flex py-lg-2 ">
                            <a href="/policies" target="_blank"  class="btn btn-outline-light rounded-0 my-auto py-lg-2 ms-auto">KİRALAMA KOŞULLARINI GÖRÜNTÜLE</a>
                            <div className="bg-gray d-flex text-white ms-4 px-lg-5">
                                <p className="h5 total-payment m-auto bold px-md-3">
                                    Toplam: {dateValue.totalAmount} TL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
