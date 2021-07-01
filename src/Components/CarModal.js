import React, { useState, useEffect } from 'react'
import './component.css'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../store/reservation/reservationPageChangeSlice'
import { SRLWrapper } from "simple-react-lightbox"
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
window.jQuery = $;
export default function CarModal() {

    const [colorCar, setColorCar] = useState([]);
    const [carImages, setCarImages] = useState([]);
    const dispatch = useDispatch()
    const dateValue = useSelector((state) => state.dateslice)

    useEffect(() => {
        axios.post('http://panel.wocurrency.com/api/resimler', { car_id: colorCar })
            .then(function (response) {
                console.log(response.data)
                setCarImages(response.data)
            })
    }, [colorCar])
    useEffect(() => {
        axios.post('http://panel.wocurrency.com/api/resimler', { car_id: dateValue.carSelect.selectedColorCar })
            .then(function (response) {
                console.log(response.data)
                setCarImages(response.data)
            })
            setColorCar(dateValue.carSelect.selectedColorCar)
    }, [dateValue])



    const urlPanel = "http://panel.wocurrency.com/"

    var counter = 0
    var counter1 = 0


    const optionOwl = {
        loop: true,
        margin: 0.2,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 5,
            },
        },
    }

    return (
        <div className="modal fade" id="carModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered car-modal rounded ">
                <div className="modal-content">
                    <div className="modal-header w-100 border-0 py-4">
                        <div className="mx-auto">
                            <span className="my-auto py-0 px-4 border-light border text-white semi-bold">
                                {dateValue.carSelect.class}
                            </span>
                            <span className="my-auto ms-0 py-0 px-4 text-white bold">
                                {dateValue.carSelect.name}
                            </span>
                        </div>
                        <button type="button" className="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body w-100 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-indicators position-absolute">


                                <OwlCarousel className='owl-theme ' {...optionOwl}>
                                    {carImages.map((item) => counter === 0 ?
                                        <div class='item'>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={counter++} className="active indicator-car bg-image" style={{ backgroundImage: `url(` + urlPanel + item.image_url + `)` }} aria-current="true" aria-label="Slide 1"></button>
                                        </div>
                                        : <div class='item'>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={counter++} className="indicator-car bg-image" style={{ backgroundImage: `url(` + urlPanel + item.image_url + `)` }} aria-label="Slide 2"></button>
                                        </div>)}
                                </OwlCarousel>

                                
                            </div>
                            <div className="carousel-inner">
                                <SRLWrapper>
                                    {carImages.map((item) =>
                                        counter1 === 0 ?
                                            <div className="carousel-item active">
                                                <img src={urlPanel + item.image_url} className="d-block w-100" alt={counter1++} />
                                            </div>
                                            : <div className="carousel-item">
                                                <img src={urlPanel + item.image_url} className="d-block w-100" alt={counter1++} />
                                            </div>
                                    )}
                                </SRLWrapper>
                            </div>
                            <div className="buttons py-2 px-4 d-flex" >
                                <div className="m-auto">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon d-flex" aria-hidden="true"><i class="las la-angle-left text-dark my-auto"></i></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon d-flex" aria-hidden="true"><i class="las la-angle-right text-dark my-auto"></i></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 slider-space"></div>

                        <div className="area-1 py-1 text-white fs-6">
                            <div className="colors w-100 mx-auto px-4 py-2 text-center">
                                <div className="d-flex justify-content-center">
                                    <span className="my-auto">
                                        RENKLER
                                    </span>
                                    <div className="car-colors d-inline ms-2 my-auto">
                                        {dateValue.carSelect.colors ? dateValue.carSelect.colors.map((item) =>
                                            <input class="form-check-input" type="radio" name="color" style={{ backgroundColor: item.color_code }} onClick={() => { setColorCar(item.car_id) }} id="flexRadioDefault1" />) : ''}
                                    </div>
                                </div>
                            </div>

                            <div class="w-100 d-flex mt-2">
                                <span className="preferences d-block text-white mx-auto">
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/oil.svg" className="icon my-auto ms-1" />
                                        <span className="my-auto ms-1"> {dateValue.carSelect.fuel}</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">{dateValue.carSelect.gear}</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">{dateValue.carSelect.baggage} Çanta</span>
                                    </span>
                                </span>
                            </div>
                            <div class="w-100 d-flex mt-3 mb-5">
                                <span className="preferences d-block text-white mx-auto">
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/expand.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">{dateValue.carSelect.seat} Kişi</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">{dateValue.carSelect.gear}</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">{dateValue.carSelect.baggage} Çanta</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="area-2 py-3 semi-bold text-center d-flex">
                            <span className="m-auto"> <span>Yaş: {dateValue.carSelect.lisanceOwnAge}+</span>   <span className="mx-3">Ehliyet Yaşı: +{dateValue.carSelect.lisanceAge}</span> <span>Depozito: 3500 TL</span></span>
                        </div>
                        <div className="area-3 py-4 text-white">
                            <div className="w-100 mx-auto my-3">
                                <div className="row mx-auto">
                                    <div className="col-7 d-flex">
                                        <div className="row p-0 ms-auto my-auto text-center">
                                            <div className="col-6 text-center">
                                                <span>GÜNLÜK</span> <br />
                                                <span><span className="bold">₺ {dateValue.carSelect.amount}</span></span>
                                            </div>
                                            <div className="col-6 text-center">
                                                <span>TOPLAM</span> <br />
                                                <span><span className="bold">₺ {dateValue.carSelect.totalAmount}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex">
                                        <button className="btn float-end my-auto me-auto text-white" onClick={() => { dispatch(changePage(2)) }} data-bs-dismiss="modal" aria-label="Close" ><span className="h6 bold">SEÇ</span> <img src="./assets/icons/carcard/buttonright.svg" className="my-auto ms-1" width="40px" /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
