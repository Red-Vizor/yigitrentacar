import React from 'react'

function PopularLocationsCard(props) {
    return (
        <div className="locations-card " >
            <div className="locations-img shadow-light" style={{ backgroundImage: `url(` + props.imageUrl + `)` }}>
                <span className="image-title">
                    İSTANBUL
                </span>
            </div>
            <div className="card-body">
            <div className="row">
             <div className="col">
                <h5 className="card-title">Boğazın Serin Sularında Huzur Dolu Bir Tur</h5>
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
