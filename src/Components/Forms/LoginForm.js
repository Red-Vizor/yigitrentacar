import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../../store/user/userSlice'
export default function LoginForm(props) {
    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
        token: '8b1f59c5c8a9e4568bf43308da754525947bd40751a8e6f2fb1121b01c9e3ed8'
    });

    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }


    const dispatch = useDispatch()

    const login = () => {
        alert("deneme")
        const json = JSON.stringify(allValues)
        axios.post('http://127.0.0.1:8000/api/giris',{ token: allValues.token , email: allValues.email , password: allValues.password})
            .then(function (response) {
                if(response.data.success === true) {
                    dispatch(setUser(response.data))
                }
            })
    }
    return (
        <div className="general-form-1 personal-form login-form">
            <div className="rezervasyon-form px-4">
                <div className=" mt-5 mb-5 kisisel-bilgiler">
                    <h4 className="text-center mb-3 bold">{props.title}</h4>
                    <form onSubmit={() => {login()}} class={"login-form row mx-auto w-" + props.formWidth}>
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
                        <button type="submit" className="btn btn-dark btn-orange py-2 px-5" >  <span className="m-auto">Giriş Yapın</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
