import React, { useState, useEffect } from 'react'
import './component.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { changePage } from '../store/reservation/reservationPageChangeSlice'
import { calculateTotalAmount, setCarSelect } from '../store/reservation/dateSlice'
export default function Carcard(props) {
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.dateslice)

    const urlSite = "http://panel.yigitotokiralama.com/"
    const [carColors, setCarColors] = useState([]);
    useEffect(() => {
        axios.post('http://panel.yigitotokiralama.com/api/renkler', { id: props.carsValues.id })
            .then(function (response) {
                setCarColors(response.data)
            })
    }, [])
    const getCarClass = (carclass) => {
        switch (carclass) {
            case "1":
                return "Ekonomik"
                break;

            case "2":
                return "Orta"
                break;

            case "3":
                return "Prestij"
                break;

            case "4":
                return "Premium"
                break;

            case "5":
                return "Business"
                break;
            default:
                return ""
                break;
        }
    }


    const getCarFuel = (value) => {
        switch (value) {
            case "1":
                return "Benzin"
                break;

            case "2":
                return "Dizel"
                break;

            case "3":
                return "Elektrik"
                break;

            default:
                return ""
                break;
        }
    }
    const getGear = (value) => {
        switch (value) {
            case "1":
                return "Manuel"
                break;

            case "2":
                return "Otomatik"
                break;

            case "3":
                return "Yarı Otomatik"
                break;

            default:
                return ""
                break;
        }
    }



    const car = {
        name: props.carsValues.car_name,
        class: getCarClass(props.carsValues.car_class),
        price: props.carsValues.car_price,
        threePrice: props.carsValues.car_price_three,
        threeSevenPrice: props.carsValues.car_price_three_seven,
        sevenFifteenPrice: props.carsValues.car_price_seven_fifteen,
        fiftennTwentyPrice: props.carsValues.car_price_fifteen_twenty,
        twentyThirtyPrice: props.carsValues.car_price_twenty_thirty,
        car_image_one: urlSite + props.carsValues.car_image_one,
        lisanceOwnAge: props.carsValues.customer_age,
        lisanceAge: props.carsValues.customer_driver_licence_age,
        fuel: getCarFuel(props.carsValues.car_fuel),
        baggage: props.carsValues.car_baggage,
        gear: getGear(props.carsValues.car_gearbox),
        seat: props.carsValues.car_armchair,
        colors: carColors,
        amount: 0,
        totalAmount: 0,
        selectedColorCar: props.carsValues.id,
        selectedColor: []
    }

 
    const calCulateAmount = () => {
        if (dateValue.citySelect === "Bodrum") {
            const percentValue = 0.4;
            car.threePrice = (car.threePrice * percentValue) + car.threePrice
            car.threeSevenPrice = (car.threeSevenPrice * percentValue) + car.threeSevenPrice
            car.sevenFifteenPrice = (car.sevenFifteenPrice * percentValue) + car.sevenFifteenPrice
            car.fiftennTwentyPrice = (car.fiftennTwentyPrice * percentValue) + car.fiftennTwentyPrice
            car.twentyThirtyPrice = (car.twentyThirtyPrice * percentValue) + car.twentyThirtyPrice
        }
        if (dateValue.dateDayCount === 3) {
            car.totalAmount = car.threePrice * dateValue.dateDayCount
            car.amount = car.threePrice
        }
        else if (dateValue.dateDayCount > 3 && dateValue.dateDayCount < 7) {
            car.totalAmount = car.threeSevenPrice * dateValue.dateDayCount
            car.amount = car.threeSevenPrice
        }
        else if (dateValue.dateDayCount >= 7 && dateValue.dateDayCount < 15) {
            car.totalAmount = car.sevenFifteenPrice * dateValue.dateDayCount
            car.amount = car.sevenFifteenPrice
        }
        else if (dateValue.dateDayCount >= 15 && dateValue.dateDayCount < 20) {
            car.totalAmount = car.fiftennTwentyPrice * dateValue.dateDayCount
            car.amount = car.fiftennTwentyPrice
        }
        else if (dateValue.dateDayCount >= 20) {
            car.totalAmount = car.twentyThirtyPrice * dateValue.dateDayCount
            car.amount = car.twentyThirtyPrice
        }

    }

    calCulateAmount()

    const carSelect = () => {
        dispatch(setCarSelect(car))
        dispatch(calculateTotalAmount())
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
                        <div className="row p-0 m-0">
                            <div className="col-12 col-lg-10 text-end ms-auto">
                                <span className="me-auto">GÜNLÜK </span>
                                <span> ₺ <span className="bold">{car.amount}</span>,00</span>
                            </div>
                            <div className="col-12 col-lg-10 text-end ms-auto">
                                <span className="me-auto">Toplam </span>
                                <span> ₺ <span className="bold">{car.totalAmount}</span>,00</span>
                            </div>
                        </div>
                        <a className="btn float-end px-0" onClick={() => { carSelect(); dispatch(changePage(2)) }}>
                            <span className="h6 ms-auto me-2 bold">SEÇ
                            </span>
                            <img src="./assets/icons/carcard/buttonright.svg" className="my-auto ms-auto w-50" />
                        </a>
                    </div>
                </div>
                <div className="card-bottom d-flex py-3 px-4">
                    <span className="w-100 d-flex text-white">
                        <img src="./assets/icons/carcard/oil.svg" className="icon my-auto ms-1" />
                        <span className="my-auto ms-1">{car.fuel}</span>
                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                        <span className="my-auto ms-1">{car.gear}</span>
                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                        <span className="my-auto ms-1">{car.baggage} Çanta</span>

                        <a href="#" className="ms-auto mt-md-1 bold" onClick={() => { carSelect() }} data-bs-toggle="modal" data-bs-target="#carModal"> <span>Tüm Özellikler</span></a>
                    </span>
                </div>
                <img src={urlSite + props.carsValues.car_image_one} className="images position-absolute" />
            </div>
            <div className="colors w-50  mx-auto px-lg-4 py-2 text-center shadow-light">
                <div className="d-flex justify-content-center">
                    <span className="my-auto">
                        RENKLER
                    </span>
                    <div className="car-colors d-inline my-auto">
                        {car.colors.map((item) =>
                            <input class="form-check-input" type="radio" name="color" style={{ backgroundColor: item.color_code }} onClick={() => { car.selectedColorCar = item.car_id }} id="flexRadioDefault1" />)}
                    </div>
                </div>
            </div>
        </div>

    )
}
