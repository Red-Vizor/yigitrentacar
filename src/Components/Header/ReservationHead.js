import React from 'react'

export default function ReservationHead() {
  
    return (
            <div className="container-fluid reservation-head bg-black">
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-items-center px-5">
                            <a href="/"><img src="./assets/images/logo.png" className="w-100 mx-auto" /></a>
                        </div>
                        <div className="col-lg-8 d-flex py-2">
                            <button type="button" class="btn btn-outline-light rounded-0 my-auto py-2 ms-auto">KİRALAMA KOŞULLARINI GÖRÜNTÜLE</button>
                            <div className="bg-gray d-flex text-white ms-4 px-5">
                                <p className="h5 m-auto">
                                    Toplam: 99 TL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
