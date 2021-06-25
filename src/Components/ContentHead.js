import React from 'react'
import './component.css'

export default function ContentHead(props) {
    return (
        <div className="head-content text-orange">
            <div className="row">
                {props.headPosition === "end" && (
                    <div className={"d-flex " + (props.hrSize)}>
                        <div className="w-100 hr bg-orange my-auto"> </div>
                    </div>
                )}
                <div className={props.headSize +" text-" + props.headPosition}>
                    <p className="h5 extra-bold"> {props.head}</p>
                </div>

                {props.headPosition === "start" && (
                    <div className={"d-flex " + (props.hrSize)}>
                        <div className="w-100 hr bg-orange my-auto"> </div>
                    </div>
                )}
            </div>
        </div>
    )
}
