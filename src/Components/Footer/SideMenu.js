import React from 'react'

export default function SideMenu(props) {
    return (
        <div className="menu text-white ">
            <p className="h5 mb-lg-3 bold ">{props.menuTitle}</p>
            {props.menues.map(menu => <div className="mt-lg-2 "><a href="#">{menu}</a></div>)}
        </div>
    )
}
