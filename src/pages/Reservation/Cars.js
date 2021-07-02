import React, { useState, useEffect } from 'react'
import './reservation.css'
import { CarCard, CarModal } from '../../Components'
import axios from 'axios'

export default function Cars() {
    const [carsGet, setCarsGet] = useState([]);
    useEffect(() => {
        axios.post('http://panel.yigitotokiralama.com/api/arabalar')
            .then(function (response) {
                setCarsGet(response.data)
            })
    }, [])
    return (
        <div className="cars my-4 ms-5">
            <div className="row">
                {carsGet.map((item) => item.car_active == 1 ? !item.root_car_id ? <div className="col-lg-4  col-md-6">
                    <CarCard carsValues={item} />
                </div> : '' : '')}

            </div>
            <CarModal />
        </div>
    )
}
