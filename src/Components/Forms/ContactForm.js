import React from 'react'

export default function ContactForm() {
    return (
        <div className="general-form-1">
            <div className="contact-form container px-5 ">
                <div className="container mt-5 mb-5 px-5 kisisel-bilgiler">
                    <h2 className="text-center mb-5">İletişim Formunu Doldurun</h2>
                    <p className="text-center mb-5">Her türlü soru, görüş ve önerinizi iletişim formu ile bize gönderebilirsiniz.</p>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">ADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">SOYADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">CEP TELEFONUNUZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Cep Telefonunuz" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Mail Adresiniz" />
                            </div>
                        </div>
                      
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                            <textarea class="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
