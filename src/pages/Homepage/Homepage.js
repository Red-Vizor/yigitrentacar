import React from 'react'
import './homepage.css'
import { Link } from "react-router-dom"

import Head from '../../Components/ContentHead'
import Car from '../../Components/CarSlider'
import ListCard from '../../Components/ListCard'

export default function Homepage() {
    return (
        <div className="homepage">
            <div className="container-fluid date-slide" style={{ backgroundImage: "linear-gradient(rgb(232, 84, 30,0.4), rgb(232, 84, 30,0.4)), url('./assets/images/homepagebanner.png')" }}>
                <div className="container h-100 d-flex">
                    <div className="card-date my-auto mx-auto text-center w-75 text-white">
                        <div className="card-head mb-5">
                            <p className="h2 extra-bold title">KURUMSAL & BİREYSEL KİRALAMA</p>
                            <p className="h6 bold text">*İstanbul, İzmir & Bodrum Ofislerimizden Kiralanabilir.</p>
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
                                        <div className="col-lg-3 col-md-6 date">
                                            <p className="semi-bold ms-1 mb-1">Alış Tarihi</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.06.2021
                                                </span>
                                                <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 clock">
                                            <p className="semi-bold ms-1 mb-1">Alış Saati</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.30
                                                </span>
                                                <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 date">
                                            <p className="semi-bold ms-1 mb-1">İade Tarihi</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.06.2021
                                                </span>
                                                <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-12 clock">
                                            <p className="semi-bold ms-1 mb-1">İade Saati</p>
                                            <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                                <span className="text">
                                                    10.30
                                                </span>
                                                <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                            </div>
                                        </div>
                                    </div>

                                    <Link to="/reservation" type="button" className="btn btn-dark btn-orange position-absolute py-2 px-5 bold">ARAÇLARI LİSTELE<img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid bg-black p-5">
                <div className="container popular-cars p-3 my-4">
                    <div className="content-area bg-black pt-4 px-1">
                        <Head headPosition="start" head="POPÜLER ARAÇLAR" hrSize={9} />
                        <div id="carouselExampleDark" className="carousel carousel-light slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active slide-button" aria-current="true" aria-label="Slide 1"><div className="circle-active m-auto"></div></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="slide-button" aria-label="Slide 2"><div className="circle-active m-auto"></div></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="slide-button" aria-label="Slide 3"><div className="circle-active m-auto"></div> </button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" className="slide-button" aria-label="Slide 3"><div className="circle-active m-auto"></div> </button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" className="slide-button" aria-label="Slide 3"><div className="circle-active m-auto"></div> </button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" className="slide-button" aria-label="Slide 3"><div className="circle-active m-auto"></div> </button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <Car />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <Car />
                                </div>
                                <div className="carousel-item">
                                    <Car />
                                </div>
                                <div className="carousel-item">
                                    <Car />
                                </div>
                                <div className="carousel-item">
                                    <Car />
                                </div>
                                <div className="carousel-item">
                                    <Car />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container campaigns">
                    <div className="content-area pt-4 ">
                        <Head headPosition="start" head="KAMPANYALAR" hrSize={9} />
                        <div className="owl-carousel owl-carousel-home owl-theme my-4">
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car1.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car2.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car3.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-image" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 250,0.7), rgb(250, 250, 250,0.7)), url('./assets/images/road.png')" }}>
                <div className="container campaigns my-4">
                    <div className="content-area pt-4 ">
                        <Head headPosition="end" head="POPÜLER LOKASYONLAR" hrSize={8} />

                        <div className="owl-carousel owl-carousel-home owl-theme my-4">
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city1.jpg"
                                    title="İSTANBUL"
                                    btnText="İSTANBUL LOKASYONLAR"
                                    content="İstanbul' da mutlaka görmeniz gereken yerler." />
                            </div>
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city2.jpg"
                                    title="İZMİR"
                                    btnText="İZMİR LOKASYONLAR"
                                    content="İzmir' de mutlaka görmeniz gereken yerler." />
                            </div>
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city3.jpg"
                                    title="BODRUM"
                                    btnText="BODRUM LOKASYONLAR"
                                    content="Bodrum' da mutlaka görmeniz gereken yerler." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
