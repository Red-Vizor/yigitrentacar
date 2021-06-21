import React from 'react'

export default function LoginForm(props) {
    return (
        <div className="general-form-1 personal-form">
            <div className="rezervasyon-form container">
                <div className=" mt-5 mb-5 kisisel-bilgiler">
                    <h4 className="text-center mb-3 bold">{props.title}</h4>
                    <form class={"row mx-auto w-" + props.formWidth}>
                        <div class="col-12">
                            <div class="input-group mb-2">
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="MAİL ADRESİNİZ" />
                            </div>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="ŞİFRENİZ" />
                            </div>
                        </div>
                        <a href="#" type="button" className="btn btn-dark btn-orange py-2 px-5"> <span className="m-auto">Giriş Yapın</span></a>
                    </form>
                </div>
            </div>


        </div>
    )
}
