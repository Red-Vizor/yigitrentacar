import React from 'react'

export default function CarSlider() {
    return (
        <div className="car-slider row">
            <div className="col-lg-5 d-flex">
                <img src="./assets/images/car.png" className="w-100 my-auto" />
            </div>
            <div className="col-lg-7 ps-5 d-flex text-white"> 
                <div className="card-head my-auto">
                    <p className="h2 extra-bold">MERCEDES C200 AMG</p>
                    <p className="h6 bold">*İstanbul, İzmir & Bodrum Ofislerimizden Kiralanabilir.</p>
                    <button type="button" className="btn btn-dark mt-4 btn-orange py-2 px-5">Şimdi Kirala <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></button>
                </div>
            </div>
        </div>
    )
}
