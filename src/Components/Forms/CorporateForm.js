import React, { useState } from 'react'
import axios from 'axios'

export default function CorporateForm(props) {
    const [allValues2, setAllValues2] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        birtdate: '',
        password: '',
        repassword: '',
        taxnumber: '',
        message: '',
        company: '',
        companycarcount: '',
        city: '',
        town: ''
    });
    const changeHandler = e => {
        setAllValues2({ ...allValues2, [e.target.name]: e.target.value })
    }
    const registerCompany = () => {
        alert('denem')
        if (allValues2.password === allValues2.repassword) {
            axios.post('http://127.0.0.1:8000/api/kayit', {
                name: allValues2.name,
                email: allValues2.email,
                password: allValues2.password,
                surname: allValues2.surname,
                birtdate: allValues2.birtdate,
                phone: allValues2.phone,
                message: allValues2.message,
                company: allValues2.company,
                companycarcount: allValues2.companycarcount,
                city: allValues2.city,
                town: allValues2.town,
                taxnumber: allValues2.taxnumber
            }).then(function (response) {
                    console.log(response.data)
                })
        }
        else {
            alert('Girdiğiniz şifreler birbiriyle eşleşmiyor.')
        }
    }

    return (

        <div className=" general-form-1 reservation-corporate-form " style={{ width: "100%" }}>
            <div className="container" >
                <h5 className="bold text-center mt-5">FİRMA BİLGİLERİNİZİ DOLDURUNUZ</h5>
            </div>

            <div class="container corporate-text">
                <div class="row">
                    <div class="col-md-6 ps-lg-5">
                        <h4 className="bold mt-5 mb-3 ps-lg-5">Formu Doldurun, Sizi Arayalım</h4>
                        <p className="bold ps-lg-5">Kurumsal Kısa Dönem Araç Kiralamada mükemmel hizmet deneyimi arıyorsan, seni en iyi biz anlarız. Yiğit oto kiralama ile yolculukların senin için keyif olacaktır.</p>
                        <p className="bold ps-lg-5">Aşağıdaki formda, aylık kiralama yapmak istiyorsan lütfen toplam ay süresini belirt. Kurumsal günlük kiralamaların için ise kutucuğu işaretleyip, formu doldur.</p>
                    </div>
                    <div class="col-md-6 pe-lg-3" >
                        <img src="./assets/images/services.png" className="corporate-img mt-5 mb-lg-3 mr-lg-5 pe-lg-5" style={{ width: "92%" }} alt="..." />
                    </div>
                </div>
                <div class="row px-lg-5">
                    <div class="col-md-6 px-lg-4" >
                        <p className="bold ps-lg-4 pt-5">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz.</p>

                    </div>
                    <div class="col-md-6 pe-lg-3" >
                        <h5 className="bold mt-2 mb-3 ps-lg-3" style={{ color: "#FF710F" }}>Kurumsal Üye Girişi</h5>
                        <p className="bold px-lg-3 pe-lg-5">Yiğit rent a car ile kurumsal kısa dönem araç kiralama ile aracını kiralamak için şirket yöneticinden sana özel şifeni almayı unutma! E-posta adresin ve şifren ile dilediğin yerden, dilediğin zaman kurumsal hesabınla kiralama yapabilirsin.</p>
                        <a href="/login" className="btn btn-orange-outline bold px-lg-4 py-lg-2 ms-lg-3 mt-3 member-login-button" style={{ width: "45%" }}>
                            <span className="m-auto">Giriş Yap</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="corporate-rental-form px-lg-5 container" >
                <div className=" mt-5 mb-5 px-lg-5 kisisel-bilgiler">

                    <form class="g-3">
                        <div class="input-group mb-3">
                            <label for="inputEmail4" class="form-label">Firma Adı</label>
                            <span class="input-group-text" id="basic-addon1">
                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                            </span>
                            <input onChange={changeHandler} required name="company" type="text" class="form-control" id="company" placeholder="Firma Adını Giriniz" />
                        </div>
                        <div className="row">
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputEmail4" class="form-label">Vergi Numarası*</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="taxnumber" type="text" class="form-control" id="taxnumber" placeholder="Vergi Numarası*" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputPassword4" class="form-label">Araç Sayısı*</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/one.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="companycarcount" type="text" class="form-control" id="companycarcount" placeholder="Araç Sayısı*" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputState" class="form-label">İL</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                    </span>
                                    <select onChange={changeHandler} required name="city" type="text" class="form-control" id="city">
                                        <option selected>İL</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputState" class="form-label">İlçe</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                    </span>
                                    <select onChange={changeHandler} required name="town" type="text" class="form-control" id="town" class="form-control">
                                        <option selected>İlçe Seçiniz</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputEmail4" class="form-label">ADINIZ</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="name" type="text" class="form-control" id="name" placeholder="Yetkili Kişinin Adı" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputPassword4" class="form-label">SOYADINIZ</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="surname" type="text" class="form-control" id="surname" placeholder="Yetkili Kişinin Soyadı" />
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputEmail4" class="form-label">TELEFONUNUZ</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="phone" type="text" class="form-control" id="phone" placeholder="Telefon Numarası" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="email" type="text" class="form-control" id="email" placeholder="Mail Adresiniz" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputPassword4" class="form-label">Şifreniz</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="password" type="password" class="form-control" id="password" placeholder="Şifreniz*" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group mb-3">
                                    <label for="inputPassword4" class="form-label">Şifreniz Tekrar</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input onChange={changeHandler} required name="repassword" type="password" class="form-control" id="repassword" placeholder="Şifreniz*" />
                                </div>
                            </div>
                            <div class="form-check mt-4 d-flex">
                                <span class="d-inline mx-auto"><input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Şoförlü kiralama ve transfer hizmeti teklifi de almak istiyorum.
                                    </label>
                                </span>
                            </div>

                            <div class="mb-3 mt-4">
                                <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                                <textarea onChange={changeHandler} name="message" type="text" class="form-control" id="message" class="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                            </div>


                            <div className="form-policy py-5 container ">
                                <p className="pb-5"> Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                                <div class="form-check mb-4">
                                    <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Aydınlatma metni kapsamında kişisel verilerimin, pazarlama süreçlerinin planlanması ve icrası amacıyla; Otokoç Otomotiv Ticaret ve Sanayi Anonim Şirketi tarafından sunulan ürün ve hizmetlerin beğenilerime,
                                        kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilmesi için işlenmesini ve bu kapsamda aşağıda belirtilen iletişim bilgilerime reklam, promosyon, kampanya ve benzeri ticari elektronik ileti gönderilmesini ve bu amaçla Şirketin hizmet aldığı tedarikçilerle paylaşılmasını kabul ediyorum.
                                    </label>
                                </div>
                                <div class="form-check mb-4">
                                    <input required class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Aydınlatma metni  kapsamında kimlik, iletişim, finansal ve kullanım alışkanlıkları verilerimin, Otokoç Otomotiv Tic. ve San. A.Ş. tarafından sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilerek önerilmesi ve bu kapsamda iletişim bilgilerime reklam, promosyon,
                                        kampanya ve benzeri ticari elektronik ileti gönderilmesi  amacıyla Emarsys İletişim Sistemleri Tic. Ltd. Şti aracılığıyla yurt dışında mukim Emarsys eMarketing Systems AG’ye ile paylaşılmasını kabul ediyorum.
                                    </label>
                                </div>

                                <button type="button" onClick={registerCompany} className="btn btn-orange-outline bold px-4 py-2 " style={{ width: "20%" }}>
                                    <span className="m-auto">FORMU GÖNDER</span>
                                </button>

                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
