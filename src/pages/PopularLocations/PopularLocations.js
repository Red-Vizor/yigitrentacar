import React from 'react'
import './popularlocations.css'
import PopularLocationsCard from './PopularLocationsCard'


function PopularLocations() {
    return (
        <div className="campaigns">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa / Lokasyonlar</p>
            </div>
            <div className="campaigns-jumbotron"
                style={{ height: "346px", backgroundImage: "linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url('./assets/images/jumbotron/locations-jumbotron.png')" }}>
                <h1>POPÜLER LOKASYONLAR</h1>

            </div>


            <div className="container my-4">

                <div class="row">
                    <div class="col">
                        <PopularLocationsCard imageUrl="./assets/images/location1.png"/>
                    </div>
                    <div class="col">
                        <PopularLocationsCard imageUrl="./assets/images/location2.png"/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default PopularLocations
