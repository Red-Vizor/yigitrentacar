import React, {useState} from 'react'
import axios from 'axios'

export default function OfficesCard(props) {
    const [allValues, setAllValues] = useState({
        namesurname: '',
        email: '',
        message: ''
    })
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    const sendContact= () => {
        axios.get('http://panel.wocurrency.com/contact-mail', {
            params: {
                namesurname: allValues.namesurname,
                email: allValues.email,
                message: allValues.message
            }, headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            })

            alert("Mesajınız Başarıyla İletildi.")

    }


    return (
        <div className="office">
            <h4 className="extra-bold text-white mb-2 text-center">{props.name}</h4>
            <div className="card office-card">
                <div className="row">
                    <div className="col">
                        <div className="phone mb-2">
                            <a href={"tel:" + props.phone}> <img src="./assets/images/phone.svg" width="20px" className="me-1 my-auto" />{props.phone}</a>
                        </div>
                        <div className="email mb-2">
                            <img src="./assets/images/email.svg" width="20px" className="me-1 my-auto" /> <a href="mailto:info@yigitotokiralama.com"> info@yigitotokiralama.com</a>
                        </div>
                        <div className="adress mb-2">
                            <a> <img src="./assets/images/location.svg" width="20px" className="me-1 my-auto" />{props.adress}</a>
                        </div>
                        <form onSubmit={sendContact}>   
                            <div className="row">
                                <div className="col-6 px-1">
                                    <input type="text" onChange={changeHandler} required name="namesurname" class="form-control" id="namesurname" placeholder="Ad Soyad" />
                                </div>
                                <div className="col-6 px-1">
                                    <input type="text" onChange={changeHandler} required name="email" class="form-control" id="email"  placeholder="Email Adresi" />
                                </div>
                                <div className="col-12 px-1 mt-2">
                                    <textarea type="text" onChange={changeHandler} required name="message" id="message"  className="form-control border-0"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark btn-orange mx-auto mt-2 py-2 px-5my-2">Mesajı Gönder</button>
                            </div>
                        </form>
                    </div>
                    <div className="col maps bg-image " style={{ backgroundImage: "url(./assets/images/istanbul.png" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
