import React from 'react'

export default function ListCard(props) {
    return (
        <div class="card list-card w-100 px-5 my-5 border-0 bg-transparent position-relative" >
            <div class="w-100 bg-image position-relative" style={{ height: "170px", backgroundImage: `url(` + props.imageUrl + `)` }}></div>

            <div class="w-50 hr position-absolute"></div>

            <div class="card-body shadow pt-5 pb-4 mx-3 text-center bg-light">
                {props.type == "campaign" && (
                    <p class="card-title bold h6 mb-3">{props.title}</p>
                )}
                {props.type == "location" && (
                    <p class="card-title bold py-2 border-title h6 mb-3 mx-3" style={{ border: "3px solid #000" }}>{props.title}</p>
                )}
                <p class="card-text mb-4">{props.content}</p>
                {props.type == "campaign" && (
                    <a href="#" class="btn btn-orange-outline extra-bold position-absolute px-4 py-1 d-flex">
                        <span class="m-auto">{props.btnText}</span>
                        <i class="las la-long-arrow-alt-right my-auto ms-1"></i>
                    </a>
                )}
                {props.type == "location" && (
                    <a href="#" class="btn btn-orange-outline extra-bold position-absolute px-4 py-2 d-flex">
                        <span class="m-auto">{props.btnText}</span>
                    </a>
                )}
            </div>
        </div>
    )
}
