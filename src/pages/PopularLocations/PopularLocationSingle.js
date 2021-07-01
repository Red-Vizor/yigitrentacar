import React, { useState, useEffect } from 'react'
import './popularlocations.css'
import { SRLWrapper } from "simple-react-lightbox";
import { useSelector, useDispatch } from 'react-redux'
import Owl from './Owl'
import { selectPopularLocation, selectPop1, selectPop2, selectPop3, selectMapPop, setImagePop } from '../../store/general/pageSlice'
import { useHistory } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function PopularLocationsSingle() {


    const optionOwl = {
        loop: true,
        margin: 0.2,
        nav: true,
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

    const page = useSelector((state) => state.page)

    const imagesses = [page.imagePop + "1.jpg", page.imagePop + "2.jpg", page.imagePop + "3.jpg", page.imagePop + "4.jpg", page.imagePop + "5.jpg"]


    console.log(imagesses)

    return (
        <div className="location-single">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>   / <a href="/popularlocations" className="text-dark">Anasayfa</a>   / Lokasyon Detay</p>
            </div>
            <div className="location-header container" style={{ height: "65px", width: "750px" }}>
                <h4>{page.pophead}</h4>
            </div>

            <div className="location-single-area">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={"./assets/images/locations/" + page.imagePop + "1.jpg"} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h4 className="bold text-center">Yiğit Ofislerinde Rixos Misafirlerine %15 İNDİRİM!</h4>
                            <p className="px-lg-4">
                                <h5 className="bold mb-2">Burası Neresi?</h5>
                                {page.pop1}
                            </p>
                        </div>
                    </div>
                    <div className="row my-lg-5 my-md-3 text-continue">
                        <div className="col-lg-6 border-end px-lg-3">
                            <p>
                                <h5 className="bold mb-2">Neden Gitmeliyim? </h5>
                                {page.pop2}
                            </p>
                        </div>
                        <div className="col-lg-6 ps-lg-5 mt-md-3">
                            <p className="mb-lg-3">
                                <h5 className="bold mb-2">Neden Gitmeliyim? </h5>
                                {page.pop3}
                            </p>
                        </div>
                    </div>
                    <div className="row text-center text-dark py-3">
                        <p><a href={page.mappop} className="text-dark" target="_blank">Google Haritalarda Görüntülemek İçin Tıklayın</a></p>
                        <p>{page.workHour}</p>
                    </div>
                </div>
            </div>



            <div className="my-4">
                <SRLWrapper>
                    <OwlCarousel className='owl-theme ' {...optionOwl} nav>
                        {imagesses.map((item) => <div class='item'>
                            <img src={"/assets/images/locations/" + item} height="350px" />
                        </div>)}
                    </OwlCarousel>
                </SRLWrapper>
            </div>
        </div>
    )
}

export default PopularLocationsSingle
