import React , {useEffect} from 'react'
import './component.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { calculateTotalAmount, setCarSelect } from '../store/reservation/dateSlice'

export default function CarcardList(props) {
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.dateslice)

    var carColors= []
    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/renkler', { id: props.carsValues.id })
        .then(function (response) {
            response.data.map((item) => carColors.push(item))
        })
    },[])
    const getCarClass = (carclass) => {
        switch (carclass) {
            case 1:
                return "Ekonomik"
                break;

            case 2:
                return "Orta"
                break;

            case 3:
                return "Prestij"
                break;

            case 4:
                return "Premium"
                break;

            case 5:
                return "Business"
                break;
            default:
                return ""
                break;
        }
    }


    const getCarFuel = (value) => {
        switch (value) {
            case 1:
                return "Benzin"
                break;

            case 2:
                return "Dizel"
                break;

            case 3:
                return "Elektrik"
                break;

            default:
                return ""
                break;
        }
    }
    const getGear = (value) => {
        switch (value) {
            case 1:
                return "Manuel"
                break;

            case 2:
                return "Otomatik"
                break;

            case 3:
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
        threePrice: props.car_price_three,
        threeSevenPrice: props.car_price_three_seven,
        sevenFifteenPrice: props.car_price_seven_fifteen,
        fiftennTwentyPrice: props.car_price_fifteen_twenty,
        twentyThirtyPrice: props.car_price_twenty_thirty,

        lisanceOwnAge: props.carsValues.customer_age,
        lisanceAge: props.carsValues.customer_driver_licence_age,
        fuel: getCarFuel(props.carsValues.car_fuel),
        baggage: props.carsValues.car_baggage,
        gear: getGear(props.carsValues.car_gearbox),
        seat: props.carsValues.car_armchair,
        colors: carColors,
        amount: 0,
        totalAmount: 0,
        selectedColor: ""
    }


    const calCulateAmount = () => {
        car.amount = car.price
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
                            <div className="col-6 text-center">
                                <div className="">
                                    <span>AYLIK</span> <br />
                                    <span>₺ <span className="bold">{car.amount}</span>,00</span>
                                </div>
                            </div>
                        </div>
                        <a className="btn float-end d-flex" href="/reservation"><span className="h6 bold my-auto me-1">Reservation</span> <img src="./assets/icons/carcard/buttonright.svg" className="my-auto ms-1 w-50" /> </a>
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
                        <a href="#" className="ms-lg-auto mt-md-1 ms-md-2" onClick={() => { carSelect() }} data-bs-toggle="modal" data-bs-target="#carModal"> <span>Tüm Özellikler</span></a>
                    </span>
                </div>
                <img src={"http://localhost:8000/" + props.carsValues.car_image_one} className="images position-absolute" />
            </div>
            <div className="colors w-50  mx-auto px-lg-4 py-2 text-center shadow-light">
                <div className="d-flex justify-content-center">
                    <span className="my-auto">
                        RENKLER
                    </span>
                    <div className="car-colors d-inline my-auto">
                        {console.log(car.colors)}
                        {car.colors.map((item) => <p>{item.color_name}</p>)}
                    </div>
                </div>
            </div>
        </div>

    )
}