import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'
export default function LoginForm(props) {
    const [allValues, setAllValues] = useState({
        email: '',
        password: ''
    });

    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const history = useHistory()

    const login = () => {
        axios.post('http://panel.wocurrency.com/api/giris',{
            email: allValues.email,
            password: allValues.password
        }).then(function (response) {
                if (response.data.success === true) {
                    Cookies.set('user', response.data.name)
                    history.push("/")
                }
            })
    }

    return (
        <div className="general-form-1 personal-form login-form">
            <div className="rezervasyon-form px-4">
                <div className=" mt-5 mb-5 kisisel-bilgiler">
                    <h4 className="text-center mb-3 bold">{props.title}</h4>
                    <form  class={"login-form row mx-auto w-" + props.formWidth}>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                </span>
                                <input type="email" onChange={changeHandler} required name="email" class="form-control" id="email" placeholder="MAİL ADRESİNİZ" />
                            </div>
                        </div>
                        <div class="col-12 mb-2 ">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" onChange={changeHandler} required name="password" class="form-control" id="password" placeholder="ŞİFRENİZ" />
                            </div>
                        </div>
                        <button type="button" onClick={login} className="btn btn-dark btn-orange py-2 px-5" >  <span className="m-auto">Giriş Yapın</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
