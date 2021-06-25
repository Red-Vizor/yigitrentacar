import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { TimePicker } from './'
import { DateRange } from 'react-date-range'

export default function DateSlide() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    return (
        <div className="home-slide-area">
            <div className="container-fluid date-slide" style={{ backgroundImage: "linear-gradient(rgb(232, 84, 30,0.4), rgb(232, 84, 30,0.4)), url('./assets/images/homepagebanner.png')" }}>
                <div className="container h-100 d-flex">
                    <div className="card-date my-auto mx-auto text-center w-75 text-white">
                        <div className="card-head mb-5">
                            <p className="h2 extra-bold">KURUMSAL & BİREYSEL KİRALAMA</p>
                            <p className="h6 bold">*İstanbul, İzmir & Bodrum Ofislerimizden Kiralanabilir.</p>
                        </div>

                        <div className="form-card-date p-4 position-relative">
                            <div className="filter-date py-5 px-4">
                                <p className="h5 semi-bold mb-3 ">Alış Yeri</p>
                                <form>
                                    <div className="input-group ">
                                        <div className="dropdown">
                                            <a className="dropdown-toggle w-100 d-flex  bg-white  rounded py-3 semi-bold " href="#" style={{ color: "gray" }}>
                                                <span className="my-auto mx-auto">İstanbul, İzmir, Bodrum</span>
                                                <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                            </a>
                                            <ul className="dropdown-menu w-100 bg-light position-absolute rounded" role="menu" aria-labelledby="dLabel">
                                                <li className="rounded py-2 text-center semi-bold position-relative">
                                                    <a>
                                                        İstanbul
                                                        <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                                    </a>
                                                </li>
                                                <li className="rounded py-2 text-center semi-bold position-relative">
                                                    <a>
                                                        İzmir
                                                        <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                                    </a>
                                                </li>
                                                <li className="rounded py-2 text-center semi-bold position-relative">
                                                    <a>
                                                        Bodrum
                                                        <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="row text-start date-inputs-area mt-3" >
                                        <div className="col-lg-3 date" data-bs-toggle="modal" data-bs-target="#datePicker">

                                            <p className="semi-bold ms-1 mb-1">Alış Tarihi</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.06.2021
                                                </span>
                                                <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 clock" data-bs-toggle="modal" data-bs-target="#endTimePicker">
                                            <p className="semi-bold ms-1 mb-1">Alış Saati</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.30
                                                </span>
                                                <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 date" data-bs-toggle="modal" data-bs-target="#datePicker">
                                            <p className="semi-bold ms-1 mb-1">İade Tarihi</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.06.2021
                                                </span>
                                                <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 clock" data-bs-toggle="modal" data-bs-target="#endTimePicker">
                                            <p className="semi-bold ms-1 mb-1">İade Saati</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.30
                                                </span>
                                                <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/reservation" type="button" className="btn btn-dark btn-orange position-absolute py-2 px-5">Araçları Listele <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade datePicker" id="datePicker" tabindex="-1" aria-labelledby="datePicker" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content py-5 px-2 w-25 mx-auto">
                        <div className="modal-body d-flex">
                            <DateRange
                                className="mx-auto"
                                editableDateInputs={true}
                                onChange={item => setState([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={state}
                            />
                            
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange-outline w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Bugün</button>
                            <button type="button" className="btn btn-dark btn-orange w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade datePicker" id="startTimePicker" tabindex="-1" aria-labelledby="datePicker" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content py-5 px-2 w-25 mx-auto">
                        <div className="modal-body d-flex">
                            <TimePicker />
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange-outline w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Bugün</button>
                            <button type="button" className="btn btn-dark btn-orange w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade datePicker" id="endTimePicker" tabindex="-1" aria-labelledby="datePicker" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content py-5 px-2 w-25 mx-auto">
                        <div className="modal-body d-flex">
                            <TimePicker />
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange-outline w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Bugün</button>
                            <button type="button" className="btn btn-dark btn-orange w-25  py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
