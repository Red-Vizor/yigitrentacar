import React from 'react'
import './popularlocations.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectPopularLocation,selectPop1,selectPop2,selectPop3,selectMapPop, setImagePop ,selectPopHead,selectPopWorkHour} from '../../store/general/pageSlice'
import { useHistory } from 'react-router-dom'

function PopularLocationsCard(props) {
    const history = useHistory()

    const dispatch = useDispatch()

    const selectLocation= () =>{ 
        dispatch(selectPopularLocation(props.id))
        dispatch(setImagePop(props.imageName))
        dispatch(selectPop1(props.metin1))
        dispatch(selectPop2(props.metin2))
        dispatch(selectPop3(props.metin3))
        dispatch(selectMapPop(props.map))
        dispatch(selectPopHead(props.head))
        dispatch(selectPopWorkHour(props.workhour))
        history.push("/popularlocation")
    }


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
                        <a onClick={selectLocation} className="btn btn-orange-outline bold px-4 py-2 d-flex">
                            <span className="m-auto">DETAYLARI İNCELE</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}


export default PopularLocationsCard
