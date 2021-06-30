import React, { useState } from 'react'
import axios from 'axios'


export default function CorporateServices() {


    const [allValues, setAllValues] = useState({
        mounth: 1,
        comname: '',
        taxnum: '',
        comcarcount: '',
        city: '',
        town: '',
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: '',
    })
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    const sendKurumsal = () => {
        axios.get('http://127.0.0.1:8000/kurumsal-mail', {
            params: {
                comname: allValues.comname,
                taxnum: allValues.taxnum,
                comcarcount: allValues.comcarcount,
                city: allValues.city,
                town: allValues.town,
                mounth: allValues.mounth,
                name: allValues.name,
                surname: allValues.surname,
                phone: allValues.phone,
                email: allValues.email,
                message: allValues.message
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
        <div className="corporate-services">
            <h4 className="bold text-center">KURUMSAL KİRALAMA</h4>

            <div className="container corporate-header" style={{ backgroundColor: "#000000", height: "90px", width: "75%" }}>
                <h5 className="bold">Firmanızın günlük, aylık veya yıllık araç ihtiyaçlarınızı size özel çözümler
                    ile ekonomik, kurumsal ve hızlı çözümler için formu eksiksiz doldurunuz.
                </h5>
            </div>

            <div className="container corporate-text">
                <div className="row">
                    <div className="col-md-6    ps-lg-5">
                        <h4 className="bold mt-5 mb-3 ps-lg-5">Formu Doldurun, Sizi Arayalım</h4>
                        <p className="bold ps-lg-5">Kurumsal Kısa Dönem Araç Kiralamada mükemmel hizmet deneyimi arıyorsan, seni en iyi biz anlarız. Yiğit oto kiralama ile yolculukların senin için keyif olacaktır.</p>
                        <p className="bold ps-lg-5">Aşağıdaki formda, aylık kiralama yapmak istiyorsan lütfen toplam ay süresini belirt. Kurumsal günlük kiralamaların için ise kutucuğu işaretleyip, formu doldur.</p>
                    </div>
                    <div className="col-md-6 pe-lg-3" >
                        <img src="./assets/images/services.png" className="corporate-img mt-5 mb-lg-3 mr-lg-5 pe-lg-5" style={{ width: "92%" }} alt="..." />
                    </div>
                </div>
                <div className="row px-lg-5">
                    <div className="col-md-6  px-lg-4" >
                        <p className="bold ps-lg-2 pt-2">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz.</p>
                        <div className="input-group">
                            <label for="customRange3" className="form-label d-inline">Kiralama Süresi</label>
                            <div className="row w-100 py-3">
                                <div className="col-1">
                                    <span>
                                        {allValues.mounth}
                                    </span>
                                </div>
                                <div className="col-11">
                                    <input type="range" onChange={changeHandler} name="mounth" className="form-control" id="mounth" className="form-range d-inline-block" min="1" max="12" step="1" id="customRange3" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6  pe-lg-3" >
                        <h5 className="bold mt-2 mb-3 ps-lg-3" style={{ color: "#FF710F" }}>Kurumsal Üye Girişi</h5>
                        <p className="bold px-lg-3 pe-lg-5">Yiğit rent a car ile kurumsal kısa dönem araç kiralama ile aracını kiralamak için şirket yöneticinden sana özel şifeni almayı unutma! E-posta adresin ve şifren ile dilediğin yerden, dilediğin zaman kurumsal hesabınla kiralama yapabilirsin.</p>
                        <a href="/login" className="btn btn-orange-outline bold px-lg-4 ms-lg-3 mt-3 member-login-button" style={{ width: "45%" }}>
                            Giriş Yap
                        </a>
                    </div>
                </div>
            </div>
            <div className="corporate-rental-form general-form-1 " style={{ width: "100%" }}>
                <div className="px-5 container" >
                    <div className=" mt-5 mb-5 px-lg-5 kisisel-bilgiler">
                        <form onSubmit={sendKurumsal} className="g-3">
                            <div className="input-group mb-3">
                                <label for="inputEmail4" className="form-label">Firma Adı</label>
                                <span className="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="text" onChange={changeHandler} required name="comname" className="form-control" id="comname" placeholder="Firma Adını Giriniz" />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">Vergi Numarası*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="taxnum" className="form-control" id="taxnum" placeholder="Vergi Numarası*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">Araç Sayısı*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/one.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="comcarcount" className="form-control" id="comcarcount" id="inputPassword4" placeholder="Araç Sayısı*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputState" className="form-label">İL</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="city" className="form-control" id="city" placeholder="İl*" />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputState" className="form-label">İlçe</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="town" className="form-control" id="town" placeholder="İlçe*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">ADINIZ</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="name" className="form-control" id="name" placeholder="Yetkili Kişinin Adı" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">SOYADINIZ</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="surname" className="form-control" id="surname" placeholder="Yetkili Kişinin Soyadı" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">TELEFONUNUZ</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="phone" className="form-control" id="phone" placeholder="Telefon Numarası" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                        </span>
                                        <input type="text" onChange={changeHandler} required name="email" className="form-control" id="email" placeholder="Mail Adresiniz" />
                                    </div>
                                </div>



                                <div className="mb-3 mt-4">
                                    <label for="exampleFormControlTextarea1" className="form-label">MESAJINIZ</label>
                                    <textarea type="text" onChange={changeHandler} name="message" className="form-control" id="message" className="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                                </div>


                                <div className="form-policy py-5 container ">
                                    <p className="pb-lg-5 pb-md-3"> Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
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

                                    <button type="submit" className="btn btn-orange-outline bold px-4 py-2 " style={{ width: "20%" }}>
                                        <span className="m-auto">FORMU GÖNDER</span>
                                    </button>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
