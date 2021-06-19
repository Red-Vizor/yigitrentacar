import React from 'react'

function CorporateRental() {
    return (
        <div className="corporate-rental-form general-form-1 " style={{ width: "100%" }}>

            <div className="px-5 container" >
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

                            <div class="form-check mt-4">
                                <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Şoförlü kiralama ve transfer hizmeti teklifi de almak istiyorum.
                                </label>
                            </div>

                            <div class="mb-3 mt-4">
                                <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                                <textarea class="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                            </div>


                            <div className="form-policy py-5 container ">
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

                                <a href="#" className="btn btn-orange-outline bold px-4 py-2 " style={{ width: "20%" }}>
                                    <span className="m-auto">FORMU GÖNDER</span>
                                </a>

                            </div>



                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default CorporateRental
