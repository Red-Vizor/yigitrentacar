import React from 'react'
import './picker.css'
export default function TimePicker() {
    const clocks = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
    const minutes = ["00", "10", "20", "30", "40", "50", "60"]
    return (

        <div className="timePicker w-50 mx-auto py-4 position-relative">
            <div className="row w-100 text-light mx-0 ">
                <div className="col-6 times position-relative">
                    <select className="form-select hours text-center" size="6" aria-label="size 3 select example">
                        {clocks.map(time => {
                            return (<option value={time} className=" semi-bold">{time}</option>);
                        })}
                    </select>
                </div>
                <div className="col-6 times position-relative">
                    <select className="form-select minutes mx-auto text-center" size="6" aria-label="size 3 select example">
                        {minutes.map(time => {
                            return (<option value={time} className="minute semi-bold">{time}</option>);
                        })}
                    </select>   
                </div>
                <div className="hide-scroll-left"></div>
                <div className="hide-scroll-rigth"></div>
            </div>
        </div>

    )
}
