import React from 'react'

export default function PersonalForm() {
    return (
        <div className="general-form-1 personal-form">
            <div className="rezervasyon-form container px-lg-5 ">
                <div className="container mt-5 mb-5 px-lg-5 kisisel-bilgiler">
                    <h4 className="text-center mb-5 bold">Bireysel Üyelik Bilgileri</h4>
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
                                <label for="inputEmail4" class="form-label">DOĞUM TARİHİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="GG/AA/YYYY" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">TC veya PASAPORT NO*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="T.C. No ya da Pasaport No*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">CEP TELEFONUNUZ*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Cep Telefonunuz*" />
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
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">ŞİFRENİZ</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Şifreniz" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">ŞİFRENİZİ TEKRAR YAZIN</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/password.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Şifrenizi Tekrar Yazın" />
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <div className="form-policy py-5 container ">
                            <p className="pb-5 "> Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Üyelik Sözleşmesini okudum kabul ediyorum.
                                </label>
                            </div>
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
                        </div>
                        <a href="#" className="btn btn-orange-outline bold px-4 py-2" style={{ width: "20%" }}>
                            <span className="m-auto">ÜYE OL</span>
                        </a>
                    </form>
                </div>
            </div>


        </div>
    )
}
