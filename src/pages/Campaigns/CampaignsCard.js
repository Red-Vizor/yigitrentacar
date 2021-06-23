import React from 'react'
import './campaigns.css'


function CampaignsCard(props) {
    return (
        <div className="campaign-card">
            <div className="campaign-img shadow-light" style={{ backgroundImage: `url(` + props.imageUrl + `)` }}> </div>
            
            <div className="card-body">
                <h5 className="card-title">Yiğit Ofislerinde Rixos Misafirlerine %15 İNDİRİM!</h5>
                <a href="/campaign" className="btn btn-orange-outline bold px-4 py-2">
                    <span className="m-auto">DETAYLARI İNCELE</span>
                </a>
            </div>
        </div>
    )
}

export default CampaignsCard
