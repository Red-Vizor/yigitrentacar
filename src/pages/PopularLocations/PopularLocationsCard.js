import React from 'react'
import './popularlocations.css'

function PopularLocationsCard(props) {
    return (
        <div className="locations-card " >
            <div className="locations-img shadow-light" style={{ backgroundImage: `url(` + props.imageUrl + `)` }}>
                <span className="image-title">
                    {props.location}
                </span>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title">{props.head}</h5>
                    </div>
                    <div className="col">
                        <a href="/popularlocation" className="btn btn-orange-outline bold px-4 py-2 d-flex">
                            <span className="m-auto">DETAYLARI İNCELE</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default PopularLocationsCard
