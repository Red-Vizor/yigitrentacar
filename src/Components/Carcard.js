import React from 'react'
import './component.css'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../store/reservation/reservationPageChangeSlice'
import { setCarSelect } from '../store/reservation/dateSlice'
export default function Carcard() {
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.dateslice)
    const car = {
        name: "2021 MERCEDES CLA 180",
        class: "PRESTİJ",
        price: 300,
        threePrice: 300,
        threeSevenPrice: 270,
        sevenFifteenPrice: 240,
        fiftennTwentyPrice: 200,
        twentyThirtyPrice: 150,
        fuel: "Benzin",
        baggage: 2,
        gear: "Otomatik",
        seat: 4,
        colors: ['Beyaz', 'Siyah', 'Kırmızı']
    }


    const carSelect = () => {
        dispatch(setCarSelect(car))
    }
    return (
        <div className="ccard  mx-lg-5 mx-md-2 my-4">
            <div class="card car-card bg-white border-0 shadow-light">
                <div class="card-body">
                    <h5 class="card-title text-end bold"> {car.name} </h5>
                    <div className="text-end">
                        <span className="border py-1 px-3 bold ">{car.class}</span>
                    </div>
                    <div className="w-50 ms-auto my-3 car-card-text">
                        <div className="row ">
                            <div className="col-6 text-center">
                                <span>GÜNLÜK</span>
                            </div>
                            <div className="col-6 text-center">
                                <span>TOPLAM</span>
                            </div>
                            <div className="col-6 text-center">
                                <span>₺ <span className="bold">{car.threePrice}</span>,00</span>
                            </div>
                            <div className="col-6 text-center">
                                <span>₺  <span className="bold">{car.threePrice * dateValue.dateDayCount}</span>,00</span>
                            </div>
                        </div>
                        <a className="btn float-end" onClick={() => { carSelect(); dispatch(changePage(2)) }}><span className="h6 bold">SEÇ</span> <img src="./assets/icons/carcard/buttonright.svg" className="my-auto ms-1 w-50" /> </a>
                    </div>
                </div>
                <div className="card-bottom d-flex py-3 px-lg-4">
                    <span className="w-100 d-flex text-white">
                        <img src="./assets/icons/carcard/oil.svg" className="icon my-auto ms-1" />
                        <span className="my-auto ms-1">{car.fuel}</span>
                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                        <span className="my-auto ms-1">{car.gear}</span>
                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                        <span className="my-auto ms-1">{car.baggage} Çanta</span>
                        <img src="./assets/icons/carcard/expand.svg" className="icon my-auto ms-2" />
                        <span className="my-auto ms-1">{car.seat} Kişi</span>

                        <a href="#" className="ms-lg-auto mt-md-1 ms-md-2" onClick={() => {carSelect()}} data-bs-toggle="modal" data-bs-target="#carModal"> <span>Tüm Özellikler</span></a>
                    </span>
                </div>
                <img src="./assets/images/s3.png" className="images position-absolute" />
            </div>
            <div className="colors w-50  mx-auto px-lg-4 py-2 text-center shadow-light">
                <div className="d-flex justify-content-center">
                    <span className="my-auto">
                        RENKLER
                    </span>
                    <div className="car-colors d-inline my-auto">
                        <input class="form-check-input bg-black" type="radio" name="color" id="flexRadioDefault1" />
                        <input class="form-check-input bg-white" type="radio" name="color" id="flexRadioDefault1" />
                        <input class="form-check-input bg-orange" type="radio" name="color" id="flexRadioDefault1" />
                        <input class="form-check-input bg-primary" type="radio" name="color" id="flexRadioDefault1" />
                        <input class="form-check-input bg-pink" type="radio" name="color" id="flexRadioDefault1" />
                    </div>
                </div>
            </div>
        </div>

    )
}
