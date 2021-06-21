import React from 'react'
import './component.css'

export default function CarModal() {
    return (
        <div className="modal fade" id="carModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered car-modal rounded ">
                <div className="modal-content">
                    <div className="modal-header w-100 border-0 py-4">
                        <div className="mx-auto">
                            <span className="my-auto py-0 px-4 border-light border text-white semi-bold">
                                BUSINESS
                            </span>
                            <span className="my-auto ms-0 py-0 px-4 text-white bold">
                                2021 MERCEDES C200 CABRINO
                            </span>
                        </div>
                        <button type="button" className="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body w-100 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-indicators position-absolute">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active indicator-car bg-image" style={{ backgroundImage: "url(./assets/images/carphotoslider.jpg)" }} aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="indicator-car bg-image" style={{ backgroundImage: "url(./assets/images/carphotoslider.jpg)" }} aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="indicator-car bg-image" style={{ backgroundImage: "url(./assets/images/carphotoslider.jpg)" }} aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="indicator-car bg-image" style={{ backgroundImage: "url(./assets/images/carphotoslider.jpg)" }} aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className="indicator-car bg-image" style={{ backgroundImage: "url(./assets/images/carphotoslider.jpg)" }} aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./assets/images/carphotoslider.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/carphotoslider.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/carphotoslider.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/carphotoslider.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="./assets/images/carphotoslider.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <div className="buttons py-2 px-4 d-flex">
                                <div className="m-auto">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
                                        <input class="form-check-input bg-black" type="radio" name="color" id="flexRadioDefault1" />
                                        <input class="form-check-input bg-white" type="radio" name="color" id="flexRadioDefault1" />
                                        <input class="form-check-input bg-orange" type="radio" name="color" id="flexRadioDefault1" />
                                        <input class="form-check-input bg-primary" type="radio" name="color" id="flexRadioDefault1" />
                                        <input class="form-check-input bg-pink" type="radio" name="color" id="flexRadioDefault1" />
                                    </div>
                                </div>
                            </div>

                            <div class="w-100 d-flex mt-2">
                                <span className="preferences d-block text-white mx-auto">
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/oil.svg" className="icon my-auto ms-1" />
                                        <span className="my-auto ms-1">Benzinli</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">Otomatik</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">2 Çanta</span>
                                    </span>
                                </span>
                            </div>
                            <div class="w-100 d-flex mt-3 mb-5">
                                <span className="preferences d-block text-white mx-auto">
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/expand.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">4 Kişi</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/shifter.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">Otomatik</span>
                                    </span>
                                    <span className="preference">
                                        <img src="./assets/icons/carcard/bagagge.svg" className="icon my-auto ms-2" />
                                        <span className="my-auto ms-1">2 Çanta</span>
                                    </span>

                                </span>
                            </div>
                        </div>
                        <div className="area-2 py-3 semi-bold text-center d-flex">
                            <span className="m-auto"> <span>Yaş: 25+</span>   <span className="mx-3">Ehliyet Yaşı: +5</span> <span>Depozito: 3500 TL</span></span>
                        </div>
                        <div className="area-3 py-4 text-white">
                            <div className="w-75 ms-auto my-3">
                                <div className="row ">
                                    <div className="col-6 d-flex">
                                        <div className="my-auto text-center">
                                            <span><span>GÜNLÜK</span><span className="ms-4">TOPLAM</span></span> <br />
                                            <span> <span>₺ <span className="bold">1650</span>,00</span> <span className="ms-4">₺  <span className="bold">3450</span>,00</span></span>
                                        </div>
                                    </div>
                                    <div className="col-6 d-flex">
                                        <a className="btn float-end my-auto  text-white"><span className="h6 bold">SEÇ</span> <img src="./assets/icons/carcard/buttonright.svg" className="my-auto ms-1" width="40px" /> </a>
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
