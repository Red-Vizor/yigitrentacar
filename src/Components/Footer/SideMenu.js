import React from 'react'

export default function SideMenu(props) {
    return (
        <div className="menu text-white">
            <p className="h5 mb-3 bold">{props.menuTitle}</p>
            {props.menues.map(menu => <div className="mt-2"><a href="#">{menu}</a></div>)}
        </div>
    )
}
