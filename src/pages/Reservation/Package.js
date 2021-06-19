import React from 'react'

export default function Package() {
    return (
        <section className="package">
            <div className="header-area py-4 bg-pink-powder d-flex justify-content-center">
                <img src="./assets/images/s3.png" width="250px" className="mx-4" />
                <div className="car-detail mx-5 my-auto">
                    <span className="h4 bold">2021 MERCEDES CLA 180</span>
                    <p className="mt-3">Bodrum, Yalıkavak</p>
                    <p className="bold">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1 h-50" /> 21.06.2021</p>
                    <p className="bold">340,37₺</p>
                </div>
                <button type="button" className="btn btn-dark btn-orange my-auto ms-4 px-4 py-3"> <span className="bold">REZERVASYONA DEVAM ET</span> <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></button>
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


                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Mini Hasar Sigortası 1500 TL Kapsamlı
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺29,00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto">
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
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Mini Hasar Sigortası 1500 TL Kapsamlı
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺29,00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto">
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
                            <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Mini Hasar Sigortası 1500 TL Kapsamlı
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺29,00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto">
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
                            <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Mini Hasar Sigortası 1500 TL Kapsamlı
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺29,00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto">
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
                            <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed px-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="row w-100 text-center">
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Mini Hasar Sigortası 1500 TL Kapsamlı
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                ₺29,00 / gün
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <span className="m-auto">
                                                Ayrıntılar
                                            </span>
                                        </div>
                                        <div className="col d-flex">
                                            <div className="m-auto">
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
                            <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex py-4">
                <button type="button" className="btn btn-dark btn-orange my-auto ms-auto px-4 py-3"> <span className="bold">REZERVASYONA DEVAM ET</span> <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></button>
            </div>
        </section>
    )
}