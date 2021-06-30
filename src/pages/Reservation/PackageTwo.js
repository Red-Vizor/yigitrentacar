import React, { useState, useEffect } from 'react'
import './reservation.css'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'
import { addPackageTwoSelect, setHPT } from '../../store/reservation/dateSlice'
import $ from 'jquery';
window.jQuery = $;

export default function PackageTwo(props) {

    const dispatch = useDispatch()
    const page = useSelector((state) => state.reservationChange.value)
    const dateValue = useSelector((state) => state.dateslice)



    const changePackage = (packageValue) => {
        dispatch(addPackageTwoSelect(packageValue))
    }
    return (
        <section className="package">
            <div className="package-header header-area py-4 bg-pink-powder d-flex justify-content-center">
                <img src={dateValue.carSelect.car_image_one} width="250px" className="mx-4 package-car-image" />
                <div className="car-detail mx-lg-5 my-auto ">
                    <span className="h4 bold">{dateValue.carSelect.name}</span>
                    <p className="mt-3">{dateValue.citySelect}</p>
                    <p className="bold">{dateValue.startDate} <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50 " /> {dateValue.endDate}</p>
                    <p className="bold">{dateValue.totalAmount}₺</p>
                </div>
                <button type="button" className="btn btn-dark btn-orange my-auto ms-4 px-lg-4 py-lg-3" onClick={() => { dispatch(changePage(page + 1)) }}> <span className="bold">REZERVASYONA DEVAM ET</span> <img src="./assets/icons/rightlong.svg" width="40px" className="ms--lg3 my-auto" /></button>
            </div>
            <div className="package-body container py-4">
                <div className="d-flex my-4">
                    <span className="title-border px-5 py-2 mx-auto bold">
                        ARAÇ KORUMA
                    </span>
                </div>
                <div className="table-package">
                    <div className="row table-titles  mt-4 pb-2 mx-1">
                        <div className="col d-flex">
                            <span className="mx-auto bold fs-5">
                                KORUMA
                            </span>
                        </div>
                        <div className="col d-flex">
                            <span className="mx-auto bold fs-5">
                                FİYAT
                            </span>
                        </div>
                        <div className="col d-flex">
                            <span className="mx-auto bold fs-5">
                                DETAYLAR
                            </span>
                        </div>
                        <div className="col d-flex">
                            <span className="mx-auto bold fs-5">
                                EKLE
                            </span>
                        </div>
                    </div>

                    <div className="row py-2 px-2">
                        <a href="#" className="h7 text-dark text-end" data-bs-toggle="modal" data-bs-target={"#" + props.modalName}>Seçilenleri Göster</a>
                    </div>

                    <div className="accordion accordion-flush" id="accordionFlushExample">

                        {dateValue.homePackageTwo.map(item => <div className={"accordion-item item-" + item.id + "-" + props.packages}>
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-" + item.id} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center bold">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺{item.price},00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto add-button" id={item.id} onClick={() => { changePackage(item) }}>
                                                <button className="btn btn-add rounded-circle bg-orange text-white">
                                                    +
                                                </button>
                                                <span className="bold ms-3 fs-6">
                                                    EKLE
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div id={"flush-collapse-" + item.id} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body bold">{item.detail}</div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>

            <div className="container d-flex py-4">
                <button type="button" className="btn btn-dark btn-orange my-auto ms-auto px-lg-4 py-lg-3" onClick={() => { dispatch(changePage(page + 1)) }}> <span className="bold">REZERVASYONA DEVAM ET</span> <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></button>
            </div>
        </section>
    )
}
