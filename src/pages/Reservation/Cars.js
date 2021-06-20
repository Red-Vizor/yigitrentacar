import React from 'react'
import { CarCard, CarModal } from '../../Components'

export default function Cars() {
    return (
        <div className="cars my-4 ms-5">
            <div className="row">
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
            </div>

            <CarModal />
        </div>
    )
}
