import React from 'react'
import './campaigns.css'
import CampaignsCard from './CampaignsCard'
import CampaignsSingle from './CampaignsSingle'


function Campaigns() {
    return (
        <div className="campaigns">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa / Kampanyalar</p>
            </div>
            <div className="campaigns-jumbotron"
                style={{ height: "346px", backgroundImage: "linear-gradient(rgb(232, 84, 30,0.4), rgb(232, 84, 30,0.4)), url('./assets/images/jumbotron/compaigns-jumbotron.png')" }}>
                <h1>KAMPANYALAR</h1>

            </div>


            <div className="container" >

                <div className="row">
                    <div className="col">
                        <CampaignsCard imageUrl="./assets/images/campaign-car.png" />
                    </div>
                    <div className="col">
                        <CampaignsCard imageUrl="./assets/images/campaign-car.png"/>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Campaigns

