import React from 'react'
import './component.css'

export default function Carcard() {
    return (
        <div class="card car-card bg-white mx-5 my-4 border-0 shadow ">
            <div class="card-body">
                <h5 class="card-title text-end">2021 MERCEDES CLA 180</h5>
                <div className="text-end">
                    <span className="border py-1 px-3">PRESTİJ</span>
                </div>
                <div className="w-50 ms-auto my-3">
                    <div className="row ">
                        <div className="col-6 text-center">
                            <span>GÜNLÜK</span>
                        </div>
                        <div className="col-6 text-center">
                            <span>TOPLAM</span>
                        </div>
                        <div className="col-6 text-center">
                            <span>₺ <span className="bold">1650</span>,00</span>
                        </div>
                        <div className="col-6 text-center">
                            <span>₺  <span className="bold">3450</span>,00</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-bottom py-4">

            </div>
            <img src="./assets/images/s3.png" className="images position-absolute w-75" />
        </div>
    )
}
