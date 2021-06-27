import React from 'react'
import './component.css'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../store/reservation/reservationPageChangeSlice'
import { calculateTotalAmount, addPackageOneSelect, addPackageTwoSelect, removePackageOneSelect, removePackageTwoSelect } from '../store/reservation/dateSlice'
import $ from 'jquery';
window.jQuery = $;

export default function PackageModalTwo(props) {
    const dispatch = useDispatch()
    const page = useSelector((state) => state.reservationChange.value)
    const dateValue = useSelector((state) => state.dateslice)
    const removePackage = (packageValue) => {
            dispatch(addPackageTwoSelect(packageValue))
    }
    return (
        <div className="modal fade" id={props.modalName} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    {dateValue.packageTwo.map(item => <div className={"accordion-item item-" + item.id + "-modal2"}>
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
                                                        <div className="m-auto add-button" id={item.id} onClick={() => { removePackage(item) }}>
                                                            <button className="btn btn-add rounded-circle bg-orange text-white">
                                                                X
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                    </div>)}

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
