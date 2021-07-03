import React from 'react'

export default function CarSlider(props) {
    return (
        <div className="car-slider row">
            <div className="col-12 col-lg-5 d-flex">
                <img src={"./assets/images/popular/" + props.name +".png"} className="w-100 my-auto" />
            </div>
            <div className="col-12 col-lg-7 d-flex text-white"> 
                <div className="card-head my-auto">
                    <p className="h2 extra-bold">{props.name}</p>
                    <p className="h6 bold">*İstanbul, İzmir & Bodrum Ofislerimizden Kiralanabilir.</p>
                    <a href="/reservation" type="button" className="btn btn-dark mt-4 btn-orange py-2 px-5">Şimdi Kirala <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></a>
                </div>
            </div>
        </div>
    )
}
