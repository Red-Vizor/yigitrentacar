import React from 'react'

function PopularLocationsCard(props) {
    return (
        <div className="locations-card " >
            <div className="locations-img shadow-light" style={{ backgroundImage:`url(`+ props.imageUrl +`)`}}>
                <span className="image-title">
                    İSTANBUL
                </span>
            </div>
            <div className="card-body">
                <h5 className="card-title">Boğazın Serin Sularında Huzur Dolu Bir Tur</h5>
                <a href="#" className="btn btn-orange-outline bold px-4 py-2">
                    <span className="m-auto">DETAYLARI İNCELE</span>
                </a>
            </div>
            
        </div>
        
    )
}


export default PopularLocationsCard
