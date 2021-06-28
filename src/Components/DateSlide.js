import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { DateRange } from 'react-date-range'
import * as locales from 'react-date-range/dist/locale';
import Moment from 'moment';
import TimeKeeper from 'react-timekeeper';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { setEndDate, setDateDayCount, setStartDate, setEndTime, setStartTime, setCitySelect } from '../store/reservation/dateSlice'
import { changePage } from '../store/reservation/reservationPageChangeSlice'

export default function DateSlide() {

    const dateValue = useSelector((state) => state.dateslice)
    let history = useHistory()
    const dispatch = useDispatch()
    Moment.locale('tr')
    const [city, setCity] = useState(dateValue.citySelect)
    const [timeStart, setTimeStart] = useState(dateValue.startTime)
    const [timeEnd, setTimeEnd] = useState(dateValue.endTime)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [startRentDate, setStartRentDate] = useState(Moment(new Date()).format('DD.MM.yyy'))
    const [endRentDate, setEndRentDate] = useState(Moment(new Date()).format('DD.MM.yyy'))



    useEffect(() => {
        setStartRentDate(Moment(state[0].startDate).format('DD.MM.yyy'))
        setEndRentDate(Moment(state[0].endDate).format('DD.MM.yyy'))
        dispatch(setCitySelect(city))
        dispatch(setEndTime(timeEnd))
        dispatch(setStartTime(timeStart))
        dispatch(setStartDate(startRentDate))
        dispatch(setEndDate(endRentDate))
    }, [timeStart, timeEnd, state, city, startRentDate, endRentDate])





    const goReservation = () => {
        const today = new Date()
        var errorValue = true;
        var msDiff = state[0].endDate.getTime() - state[0].startDate.getTime()
        var dayCount = msDiff / (1000 * 60 * 60 * 24)

        var dd = String(today.getDate());
        var mm = String(today.getMonth() + 1); //January is 0!
        var yyyy = today.getFullYear();
        if (state[0].startDate.getDate() < dd) {
            if ((state[0].startDate.getMonth() + 1) <= mm) {
                if (state[0].startDate.getFullYear() <= yyyy) {
                    alert("Geçmiş Bir Tarih Seçtiniz")
                    errorValue = false
                }
            }
        }

        if ((dateValue.citySelect === null || dateValue.citySelect === "" || dateValue.citySelect === "İstanbul, İzmir, Bodrum") && errorValue) {
            alert("Lütfen şehir seçin")
            errorValue = false
        }
        if (dayCount < 3 && errorValue && errorValue) {
            alert("Minimum Kiralama Süresi 3 Gündür.")
            errorValue = false
        }
        if (dayCount >= 3 && errorValue) {
            history.push('/reservation')
            dispatch(setDateDayCount(dayCount))
            dispatch(changePage(1))
        }
    }


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

                                <div className="input-group ">
                                    <div className="dropdown">
                                        <a className="dropdown-toggle w-100 d-flex  bg-white  rounded py-3 semi-bold " href="#" style={{ color: "gray" }}>
                                            <span className="my-auto mx-auto">{city}</span>
                                            <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                        </a>
                                        <ul className="dropdown-menu w-100 bg-light position-absolute rounded" role="menu" aria-labelledby="dLabel">
                                            <li onClick={() => { setCity("İstanbul") }} className="rounded py-2 text-center semi-bold position-relative">
                                                <a>
                                                    İstanbul
                                                    <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                                </a>
                                            </li>
                                            <li onClick={() => { setCity("İzmir") }} className="rounded py-2 text-center semi-bold position-relative">
                                                <a>
                                                    İzmir
                                                    <img src="./assets/icons/location.svg" className="my-auto ms-auto me-4" />
                                                </a>
                                            </li>
                                            <li onClick={() => { setCity("Bodrum") }} className="rounded py-2 text-center semi-bold position-relative">
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
                                                {startRentDate}
                                            </span>
                                            <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 clock" data-bs-toggle="modal" data-bs-target="#endTimePicker">
                                        <p className="semi-bold ms-1 mb-1">Alış Saati</p>
                                        <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                            <span className="text">
                                                {timeStart}
                                            </span>
                                            <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 date" data-bs-toggle="modal" data-bs-target="#datePicker">
                                        <p className="semi-bold ms-1 mb-1">İade Tarihi</p>
                                        <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                            <span className="text">
                                                {endRentDate}
                                            </span>
                                            <img src="./assets/icons/date.svg" className="my-auto ms-auto me-1" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 clock" data-bs-toggle="modal" data-bs-target="#endTimePicker">
                                        <p className="semi-bold ms-1 mb-1">İade Saati</p>
                                        <div className="w-100 bg-white py-3 d-flex rounded position-relative">
                                            <span className="text">
                                                {timeEnd}
                                            </span>
                                            <img src="./assets/icons/clock.svg" className="my-auto ms-auto me-1" />
                                        </div>
                                    </div>
                                </div>

                                <Link onClick={() => { goReservation() }} className="btn btn-dark btn-orange position-absolute py-2 px-5">Araçları Listele <img src="./assets/icons/rightlong.svg" width="40px" className="ms-3 my-auto" /></Link>

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
                                locale={locales["tr"]}
                                ranges={state}
                            />
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange w-25 ms-auto  py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade datePicker" id="startTimePicker" tabindex="-1" aria-labelledby="datePicker" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content py-5 px-2 w-25 mx-auto">
                        <div className="modal-body d-flex">
                            <TimeKeeper className="mx-auto"
                                time={timeStart}
                                onChange={(newTime) => setTimeStart(newTime.formatted12)}
                                switchToMinuteOnHourSelect
                            />
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange w-25 ms-auto  py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade datePicker" id="endTimePicker" tabindex="-1" aria-labelledby="datePicker" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content py-5 px-2 w-25 mx-auto">
                        <div className="modal-body d-flex">
                            <TimeKeeper
                                time={timeEnd}
                                onChange={(newTime) => setTimeEnd(newTime.formatted12)}
                                switchToMinuteOnHourSelect
                            />
                        </div>
                        <div className="container px-5 d-flex justify-content-between">
                            <button type="button" className="btn btn-dark btn-orange w-25 ms-auto py-2 " data-bs-dismiss="modal" aria-label="Close">Seç</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
