import React from 'react'

function IndividualRental() {
    return (
        <div className="individual-rental-form general-form-1 " style={{ backgroundColor: "#FFF5F1", width: "100%" }}>

            <div className="px-5 container" >
                <div className=" mt-5 mb-5 px-5 kisisel-bilgiler">
                    <h4 className="bold mb-5 pt-5">Formu Doldurun, Sizi Arayalım</h4>
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
                                <label for="inputPassword4" class="form-label">TC NO veya PASAPORT NO*</label>
                                <span class="input-group-text" id="basic-addon1">
                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                </span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="TC No veya Pasaport No" />
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

                        <div className="form-policy py-5 container ">
                            <p>Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
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
                            <span className="m-auto">FORMU GÖNDER</span>
                        </a>

                    </form>

                </div>
            </div>
        </div>



    )
}

export default IndividualRental
