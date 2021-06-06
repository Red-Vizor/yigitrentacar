import React from 'react'
import './homepage.css'

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
                            <p className="h2 extra-bold">KURUMSAL & BİREYSEL KİRALAMA</p>
                            <p className="h6 bold">*İstanbul, İzmir & Bodrum Ofislerimizden Kiralanabilir.</p>
                        </div>

                        <div className="form-card-date p-4 position-relative">
                            <div className="filter-date py-5 px-4">
                                <p className="h5 semi-bold mb-3 ">Alış Yeri</p>
                                <form>
                                    <div className="input-group ">
                                        <input type="text" className="form-control py-3 text-center" placeholder="" />
                                        <div className="input-group-append">
                                            <span className="input-group-text border-0 bg-white h-100"><i className="las la-map-marker"></i></span>
                                        </div>
                                    </div>
                                    <div className="row text-start mt-3">
                                        <div className="col-lg-3">
                                            <p className="semi-bold ms-1 mb-1">Alış Tarihi</p>
                                            <input type="date" id="birthday" className="form-control py-3 text-center" name="birthday"></input>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="semi-bold ms-1 mb-1">Alış Saati</p>
                                            <input type="date" id="birthday" className="form-control py-3 text-center" name="birthday"></input>

                                        </div>
                                        <div className="col-lg-3">
                                            <p className="semi-bold ms-1 mb-1">Dönüş Tarihi</p>
                                            <input type="date" id="birthday" className="form-control py-3 text-center" name="birthday"></input>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="semi-bold ms-1 mb-1">İade Saati</p>
                                            <input type="date" id="birthday" className="form-control py-3 text-center" name="birthday"></input>
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-dark btn-orange position-absolute py-2 px-5">Araçları Listele <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></button>
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
                        <div class="owl-carousel owl-theme my-4">
                            <div class="item">
                                <ListCard 
                                type="campaign" 
                                imageUrl="./assets/images/car1.jpg" 
                                title="YAZA MERHABA KAMPANYASI!"
                                btnText="REZERVASYON YAP"
                                content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim."  />
                            </div>
                            <div class="item">
                                <ListCard 
                                type="campaign" 
                                imageUrl="./assets/images/car2.jpg" 
                                title="YAZA MERHABA KAMPANYASI!" 
                                btnText="REZERVASYON YAP" 
                                content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim." />
                            </div>
                            <div class="item">
                                <ListCard 
                                type="campaign" 
                                imageUrl="./assets/images/car3.jpg" 
                                title="YAZA MERHABA KAMPANYASI!"
                                btnText="REZERVASYON YAP"
                                content="Yiğit Rent A Car yaza merhaba kampanyası! Tüm Araç Gruplarında %10 indirim."  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 bg-image"  style={{ backgroundImage: "linear-gradient(rgb(250, 250, 250,0.7), rgb(250, 250, 250,0.7)), url('./assets/images/road.png')" }}>
                <div className="container campaigns my-4">
                    <div className="content-area pt-4 ">
                        <Head headPosition="end" head="POPÜLER LOKASYONLAR" hrSize={8} />

                        <div class="owl-carousel owl-theme my-4">
                            <div class="item">
                                <ListCard type="location" 
                                imageUrl="./assets/images/city1.jpg" 
                                title="İSTANBUL" 
                                btnText="İSTANBUL LOKASYONLAR"
                                content="İstanbul' da mutlaka görmeniz gereken yerler." />
                            </div>
                            <div class="item">
                                <ListCard type="location" 
                                imageUrl="./assets/images/city2.jpg" 
                                title="İZMİR" 
                                btnText="İZMİR LOKASYONLAR"
                                content="İzmir' de mutlaka görmeniz gereken yerler."/>
                            </div>
                            <div class="item">
                                <ListCard type="location" 
                                imageUrl="./assets/images/city3.jpg" 
                                title="BODRUM" 
                                btnText="BODRUM LOKASYONLAR"
                                content="Bodrum' da mutlaka görmeniz gereken yerler."/>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}
