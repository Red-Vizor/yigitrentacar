import React, {useState} from 'react'
import axios from 'axios'


function IndividualRental() {
    const [allValues, setAllValues] = useState({
        name: '',
        surname:'',
        birthdate:'',
        tcnumber: '',
        phone: '',
        email: '',
    })
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    const sendBireysel= () => {
        axios.get('http://127.0.0.1:8000/bireysel-mail', {
            params: {
                name: allValues.name,
                surname: allValues.surname,
                birthdate: allValues.birthdate,
                tcnumber: allValues.tcnumber,
                phone: allValues.phone,
                email: allValues.email
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
    }

    return (
        <div className="individual-rental-form general-form-1 " style={{ backgroundColor: "#FFF5F1", width: "100%" }}>

            <div className="px-5 container" >
                <div className=" mt-5 mb-5 px-lg-5 kisisel-bilgiler">
                    <h4 className="bold mb-5 pt-5">Formu Doldurun, Sizi Arayalım</h4>
                    <form onSubmit={sendBireysel} className="row g-3">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputEmail4" className="form-label">ADINIZ*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="name" className="form-control" id="name"  placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputPassword4" className="form-label">SOYADINIZ*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input  type="text" onChange={changeHandler} required name="surname" className="form-control" id="surname"  placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputEmail4" className="form-label">DOĞUM TARİHİNİZ*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="birthdate" className="form-control" id="birthdate"  placeholder="GG/AA/YYYY" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputPassword4" className="form-label">TC NO veya PASAPORT NO*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="tcnumber" className="form-control" id="tcnumber"  placeholder="TC No veya Pasaport No" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputEmail4" className="form-label">CEP TELEFONUNUZ*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="phone" onChange={changeHandler} required name="phone" className="form-control" id="phone"  placeholder="Cep Telefonunuz" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ*</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="email" className="form-control" id="email"  placeholder="Mail Adresiniz" />
                            </div>
                        </div>

                        <div className="form-policy py-5 container ">
                            <p>Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                            <div className="form-check mb-4">
                                <input required className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Aydınlatma metni kapsamında kişisel verilerimin, pazarlama süreçlerinin planlanması ve icrası amacıyla; Otokoç Otomotiv Ticaret ve Sanayi Anonim Şirketi tarafından sunulan ürün ve hizmetlerin beğenilerime,
                                    kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilmesi için işlenmesini ve bu kapsamda aşağıda belirtilen iletişim bilgilerime reklam, promosyon, kampanya ve benzeri ticari elektronik ileti gönderilmesini ve bu amaçla Şirketin hizmet aldığı tedarikçilerle paylaşılmasını kabul ediyorum.
                                </label>
                            </div>
                            <div className="form-check mb-4">
                                <input required className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Aydınlatma metni  kapsamında kimlik, iletişim, finansal ve kullanım alışkanlıkları verilerimin, Otokoç Otomotiv Tic. ve San. A.Ş. tarafından sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilerek önerilmesi ve bu kapsamda iletişim bilgilerime reklam, promosyon,
                                    kampanya ve benzeri ticari elektronik ileti gönderilmesi  amacıyla Emarsys İletişim Sistemleri Tic. Ltd. Şti aracılığıyla yurt dışında mukim Emarsys eMarketing Systems AG’ye ile paylaşılmasını kabul ediyorum.
                                </label>
                            </div>

                        </div>

                        <button type="submit" className="btn btn-orange-outline bold px-4 py-2" style={{ width: "20%" }}>
                            <span className="m-auto">FORMU GÖNDER</span>
                        </button>

                    </form>

                </div>
            </div>
        </div>



    )
}

export default IndividualRental
