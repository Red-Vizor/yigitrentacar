import React from 'react'
import { PersonalForm, CorporateForm } from '../../Components'

import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../../store/reservation/reservationPageChangeSlice'


export default function ReservationForm() {

    const dispatch = useDispatch()
    return (
        <section className="reservation-form-area">
            <div className="header-area  py-4 bg-pink-powder ">

                <div className="header-title d-flex mb-3">
                    <span className="title-border-green px-5 py-2 mx-auto bold">
                        REZERVASYONUN ÖZETİ
                    </span>
                </div>
                <div className="header-content d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 mx-auto d-flex">
                            <img src="./assets/images/s3.png" className="mx-auto reservation-car-image w-50" />
                        </div>

                        <div className="col-lg-5 col-md-5 col-12 d-flex">
                            <div className="car-detail mx-auto my-auto ">
                                <span className="h4 bold">2021 MERCEDES CLA 180</span>
                                <div className="row ">
                                    <div className="col-6 bold mt-3 ">
                                        <span>GÜVENCE PAKETİ</span>
                                    </div>
                                    <div className="col-6 bold mt-3 ">
                                        <span>EK ÜRÜNLER</span>
                                    </div>
                                    <div className="col-6 ">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... <span className="bold">Tümünü Göster</span></span>
                                    </div>
                                    <div className="col-6 ">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı...  <span className="bold">Tümünü Göster</span></span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 car-detail d-flex my-auto">
                            <div className="my-auto ps-lg-5 reservation-date-detail">
                                <span className="bold h5">REZERVASYON TARİHİ</span>
                                <div className="mt-lg-3 mt-md-2">
                                    <span >Bodrum, Yalıkavak</span>
                                </div>
                                <div>
                                    <span className="bold">21.06.2021 <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1" /> 21.06.2021</span>
                                </div>
                                <span className="bold">340,37₺</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rezervasyon-uyari text-center p-3">
                <p>REZERVASYONUNUZU TAMAMLAMAK İÇİN AŞAĞIDAKİ BİLGİLERİ EKSİKSİZ TAMAMLAYINIZ.</p>
            </div>

            <div className="general-form-1 personal-form">
                <div className="rezervasyon-form container px-5 ">
                    <div className="container mt-5 mb-5 px-5 kisisel-bilgiler">
                        <h4 className="text-center mb-5 bold">Bireysel Üyelik Bilgileri</h4>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputEmail4" className="form-label">ADINIZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">SOYADINIZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputEmail4" className="form-label">DOĞUM TARİHİNİZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="GG/AA/YYYY" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">TC veya PASAPORT NO*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="T.C. No ya da Pasaport No*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputEmail4" className="form-label">CEP TELEFONUNUZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Cep Telefonunuz*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                    </span>
                                    <input type="password" className="form-control" id="inputPassword4" placeholder="Mail Adresiniz" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">MESAJINIZ</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div className=" general-form-1 " style={{ width: "100%" }}>
                <div className="bg-pink-powder py-4">
                    <div className="corporate-rental-form px-5 container " >

                        <div className="container" >
                            <h5 className="bold text-center fs-3 mt-5">FATURA BİLGİLERİ</h5>
                        </div>

                        <div className=" mt-5 mb-5 px-5 kisisel-bilgiler">
                            <form class="g-3">
                                <div class="input-group mb-3">
                                    <label for="inputEmail4" class="form-label">Firma Adı</label>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Firma Adını Giriniz" />
                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputEmail4" class="form-label">Vergi Numarası*</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Vergi Numarası*" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputPassword4" class="form-label">Araç Sayısı*</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/one.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Araç Sayısı*" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputState" class="form-label">İL</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                            </span>
                                            <select id="inputState" class="form-control">
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
                                            <select id="inputState" class="form-control">
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
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Yetkili Kişinin Adı" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputPassword4" class="form-label">SOYADINIZ</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Yetkili Kişinin Soyadı" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputEmail4" class="form-label">TELEFONUNUZ</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="Telefon Numarası" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group mb-3">
                                            <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ</label>
                                            <span class="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                            </span>
                                            <input type="password" class="form-control" id="inputPassword4" placeholder="Mail Adresiniz" />
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
                                        <textarea class="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>

                <div class="row px-5">
                    <div className="form-policy py-5 px-5 container w-75 mx-auto row">
                        <p className="pb-5"> Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Aydınlatma metni kapsamında kişisel verilerimin, pazarlama süreçlerinin planlanması ve icrası amacıyla; Otokoç Otomotiv Ticaret ve Sanayi Anonim Şirketi tarafından sunulan ürün ve hizmetlerin beğenilerime,
                                kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilmesi için işlenmesini ve bu kapsamda aşağıda belirtilen iletişim bilgilerime reklam, promosyon, kampanya ve benzeri ticari elektronik ileti gönderilmesini ve bu amaçla Şirketin hizmet aldığı tedarikçilerle paylaşılmasını kabul ediyorum.
                            </label>
                        </div>
                        <div class="form-check mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Aydınlatma metni  kapsamında kimlik, iletişim, finansal ve kullanım alışkanlıkları verilerimin, Otokoç Otomotiv Tic. ve San. A.Ş. tarafından sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilerek önerilmesi ve bu kapsamda iletişim bilgilerime reklam, promosyon,
                                kampanya ve benzeri ticari elektronik ileti gönderilmesi  amacıyla Emarsys İletişim Sistemleri Tic. Ltd. Şti aracılığıyla yurt dışında mukim Emarsys eMarketing Systems AG’ye ile paylaşılmasını kabul ediyorum.
                            </label>
                        </div>
                        <a className="btn btn-orange bold px-3 py-2 text-white mx-auto" onClick={() => { dispatch(changePage(5)) }} style={{ width: "30%" }} >
                            <span className="m-auto">REZERVASYONU TAMAMLAMA</span>
                        </a>
                    </div>
                </div>

            </div>



        </section>


    )

}






