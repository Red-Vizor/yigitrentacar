import React from 'react'
import './component.css'

export default function PackageModal() {
    return (
        <div className="modal fade" id="packageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered w-75 rounded ">
                    <div className="modal-content px-4 ">
                        <div className="modal-header w-100 border-0">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body w-100">
                            <div className="package-body container py-4">
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
                                                ÇIKAR
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
                                                                <button className="btn btn-add mx-auto rounded-circle bg-orange text-white">
                                                                    +
                                                                </button>
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
                                                                <button className="btn btn-add mx-auto rounded-circle bg-orange text-white">
                                                                    +
                                                                </button>

                                                                
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
                                                                <button className="btn btn-add mx-auto rounded-circle bg-orange text-white">
                                                                    +
                                                                </button>

                                                                
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
                                                                <button className="btn btn-add mx-auto rounded-circle bg-orange text-white">
                                                                    +
                                                                </button>

                                                                
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
                                                                <button className="btn btn-add mx-auto rounded-circle bg-orange text-white">
                                                                    +
                                                                </button>

                                                                
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


                        </div>
                    </div>
                </div>
            </div>
    )
}
