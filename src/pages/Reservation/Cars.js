import React, { useState, useEffect } from 'react'
import './reservation.css'
import { CarCard, CarModal } from '../../Components'
import axios from 'axios'
import $ from 'jquery';
window.jQuery = $;

export default function Cars() {
    const [carsGet, setCarsGet] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.post('http://panel.yigitotokiralama.com/api/arabalar')
            .then(function (response) {
                setCarsGet(response.data)
                setInterval(function () {
                    $('.loadingImage').addClass('fade');
                    setInterval(function () {
                        setloading(false);
                    }, 500)
                }, 500)
            })
    }, [])
    return (
        <div className="cars my-4 ms-5">



            {loading ? <div className="row">
                <img src="./assets/loading.gif" className="loadingImage mx-auto my-5" style={{ width: "10%" }} />
            </div> : <div className="row">
                {carsGet.map((item) => item.car_active == 1 ? !item.root_car_id ? <div className="col-lg-4  col-md-6">
                    <CarCard carsValues={item} />
                </div> : '' : '')}
            </div>}

            <CarModal />
        </div>
    )
}
