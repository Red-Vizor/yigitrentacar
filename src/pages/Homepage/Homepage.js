import React from 'react'
import './homepage.css'
import { Link } from "react-router-dom"
import DateSlide from '../../Components/DateSlide'
import Head from '../../Components/ContentHead'
import Car from '../../Components/CarSlider'
import ListCard from '../../Components/ListCard'
import $ from 'jquery';
window.jQuery = $;

export default function Homepage() {

    $(window).on('load', function() {
        $('#alertModal').modal('show');
    });
    
    return (
        <div className="homepage">

            <DateSlide />

            <div className="container-fluid bg-black p-5">
                <div className="container popular-cars p-3 my-4">
                    <div className="content-area bg-black pt-4 px-1">
                        <Head headPosition="start" head="POPÜLER ARAÇLAR" hrSize="col-5 col-md-9" headSize="col-7 col-md-3" />
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
                                    <Car name="Mercedes CLA 180 D Amg" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <Car name="Mercedes E 200 d FL Edition 1 Amg"/>
                                </div>
                                <div className="carousel-item">
                                    <Car name="Mercedes G 400 d Stronger Than Time Edition"/>
                                </div>
                                <div className="carousel-item">
                                    <Car name="Mercedes-GLB-200-Amg-1.33"/>
                                </div>
                                <div className="carousel-item">
                                    <Car name="Porsche Cayenne 3.0 V6"/>
                                </div>
                                <div className="carousel-item">
                                    <Car name="Volkswagen Passat Business 1.5 Tsi DSG"/>
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
                        <Head headPosition="start" head="KAMPANYALAR" hrSize="col-8 col-md-9" headSize="col-4 col-md-3" />
                        <div className="owl-carousel owl-carousel-home owl-theme my-4">
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car1.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    adress="campaign"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car2.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    adress="campaign"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                            <div className="item">
                                <ListCard
                                    type="campaign"
                                    imageUrl="./assets/images/car3.jpg"
                                    title="YAZA MERHABA KAMPANYASI!"
                                    btnText="REZERVASYON YAP"
                                    adress="campaign"
                                    content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-image" style={{ backgroundImage: "linear-gradient(rgb(250, 250, 250,0.7), rgb(250, 250, 250,0.7)), url('./assets/images/road.png')" }}>
                <div className="container campaigns my-4">
                    <div className="content-area pt-4 ">
                        <Head headPosition="end" head="POPÜLER LOKASYONLAR" hrSize="col-5 col-md-8" headSize="col-7 col-md-4" />

                        <div className="owl-carousel owl-carousel-home owl-theme my-4">
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city1.jpg"
                                    title="İSTANBUL"
                                    btnText="İSTANBUL LOKASYONLAR"
                                    adress="popularlocations"
                                    content="İstanbul' da mutlaka görmeniz gereken yerler." />
                            </div>
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city2.jpg"
                                    title="İZMİR"
                                    btnText="İZMİR LOKASYONLAR"
                                    adress="popularlocations"
                                    content="İzmir' de mutlaka görmeniz gereken yerler." />
                            </div>
                            <div className="item">
                                <ListCard type="location"
                                    imageUrl="./assets/images/city3.jpg"
                                    title="BODRUM"
                                    btnText="BODRUM LOKASYONLAR"
                                    adress="popularlocations"
                                    content="Bodrum' da mutlaka görmeniz gereken yerler." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="modal modal-dialog-centered  fade" id="alertModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row ">
                           <img src="./assets/images/web-uyari.jpg" className="w-100  mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
