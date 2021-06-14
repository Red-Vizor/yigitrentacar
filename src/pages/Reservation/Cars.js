import React from 'react'
import {CarCard} from '../../Components'

export default function Cars() {
    return (
        <div className="cars my-4">
            <div className="row">
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard />
                </div>
                <div className="col-lg-4">
                    <CarCard/>
                </div>
                <div className="col-lg-4">
                    <CarCard/>
                </div>
                <div className="col-lg-4">
                    <CarCard/>
                </div>
                <div className="col-lg-4">
                    <CarCard/>
                </div>
            </div>
        </div>
    )
}
