import React from 'react'
import './component.css'

export default function CarModal() {
    return (
        <div class="modal fade" id="carModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered car-modal rounded ">
                <div class="modal-content">
                    <div class="modal-header w-100 border-0 py-4">
                        <div class="mx-auto">
                            <span className="my-auto py-0 px-4 border-light border text-white semi-bold">
                                BUSINESS
                            </span>
                            <span className="my-auto ms-0 py-0 px-4 text-white bold">
                                2021 MERCEDES C200 CABRINO
                            </span>
                        </div>
                        <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body w-100">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="..." class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
