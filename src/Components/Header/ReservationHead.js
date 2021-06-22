import React from 'react'
import './header.css'

export default function ReservationHead() {
  
    return (
            <div className="container-fluid reservation-head bg-black">
                <div className="container py-3 reservation-head">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 d-flex justify-items-center px-lg-5">
                            <a href="/"><img src="./assets/images/logo.png" className="w-100 mx-auto" /></a>
                        </div>
                        <div className="col-lg-8 col-md-8 d-flex py-lg-2 ">
                            <button type="button" class="btn btn-outline-light rounded-0 my-auto py-lg-2 ms-auto">KİRALAMA KOŞULLARINI GÖRÜNTÜLE</button>
                            <div className="bg-gray d-flex text-white ms-4 px-lg-5">
                                <p className="h5 total-payment m-auto">
                                    Toplam: 99 TL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
