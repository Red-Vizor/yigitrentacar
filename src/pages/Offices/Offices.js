import React from 'react'
import './offices.css'
import { OfficesCard } from '../../Components'

export default function Offices() {
    return (
        <section className="offices">
            <div className="menu-bar container-fluid pt-3 m" style={{ height: "55px", fontWeight: "bold" }}>
                <div className="container">
                    <p>Anasayfa  /  Ofisler </p>
                </div>
            </div>
            <div className="header-bar py-3 text-center text-white">
                <h4 className="extra-bold">
                    OFİSLER
                </h4>
            </div>
            <div className="container-fluid py-5 d-flex">
                <img src="./assets/images/turkey.png" className="w-25 mx-auto" />
            </div>
            <div className="container-fluid offices-contact py-5 d-flex">
                <div className="offices-list">
                    <div className="row mx-auto w-100">
                        <div className="col">
                            <OfficesCard />
                        </div>
                        <div className="col">
                            <OfficesCard />
                        </div>
                        <div className="col">
                            <OfficesCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
