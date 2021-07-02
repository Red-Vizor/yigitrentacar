
import React, {useState} from 'react'
import axios from 'axios'

export default function ContactForm() {

    const [allValues, setAllValues] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: ''
    })
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    const sendContact= () => {
        axios.get('http://panel.yigitotokiralama.com/contact-page-mail', {
            params: {
                name: allValues.name,
                surname: allValues.surname,
                phone: allValues.phone,
                email: allValues.email,
                message: allValues.message,
            }, headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                alert("Talebiniz başarıyla alındı");
            })
            .catch(function (error) {
                alert("Talebiniz alınırken sorun oluştu");
            })

            alert("Talebiniz başarıyla alındı");
    }
    return (
        <div className="general-form-1">
            <div className="contact-form container px-lg-5 ">
                <div className="container mt-5 mb-5 px-lg-5 kisisel-bilgiler">
                    <h2 className="text-center mb-5">İletişim Formunu Doldurun</h2>
                    <p className="text-center mb-5">Her türlü soru, görüş ve önerinizi iletişim formu ile bize gönderebilirsiniz.</p>
                    <form onSubmit={sendContact} class="row g-3">
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">ADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="name" class="form-control" id="name" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">SOYADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="surname" class="form-control" id="surname" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">CEP TELEFONUNUZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="phone" class="form-control" id="phone" placeholder="Cep Telefonunuz" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                </span>
                                <input type="email" onChange={changeHandler} required name="email" class="form-control" id="email" placeholder="Mail Adresiniz" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                            <textarea  onChange={changeHandler} required name="message" class="form-control" id="message" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-orange-outline bold px-4 py-2 " style={{ width: "20%" }}>
                            <span className="m-auto">FORMU GÖNDER</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}
