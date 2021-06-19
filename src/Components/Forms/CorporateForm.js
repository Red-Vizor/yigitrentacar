import React from 'react'

export default function CorporateForm(props) {
    return (

        <div className=" general-form-1 " style={{ width: "100%" }}>

            <div className="container" >
                <h5 className="bold text-center mt-5">FİRMA BİLGİLERİNİZİ DOLDURUNUZ</h5>
            </div>

            <div class="container corporate-text">
                <div class="row">
                    <div class="col ps-5">
                        <h4 className="bold mt-5 mb-3 ps-5">Formu Doldurun, Sizi Arayalım</h4>
                        <p className="bold ps-5">Kurumsal Kısa Dönem Araç Kiralamada mükemmel hizmet deneyimi arıyorsan, seni en iyi biz anlarız. Yiğit oto kiralama ile yolculukların senin için keyif olacaktır.</p>
                        <p className="bold ps-5">Aşağıdaki formda, aylık kiralama yapmak istiyorsan lütfen toplam ay süresini belirt. Kurumsal günlük kiralamaların için ise kutucuğu işaretleyip, formu doldur.</p>
                    </div>
                    <div class="col pe-3" >
                        <img src="./assets/images/services.png" className="corporate-img mt-5 mb-3 mr-5 pe-5" style={{ width: "92%" }} alt="..." />
                    </div>
                </div>
                <div class="row px-5">
                    <div class="col px-4" >
                        <p className="bold ps-4 pt-5">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz.</p>

                    </div>
                    <div class="col pe-3" >
                        <h5 className="bold mt-2 mb-3 ps-3" style={{ color: "#FF710F" }}>Kurumsal Üye Girişi</h5>
                        <p className="bold px-3 pe-5">Yiğit rent a car ile kurumsal kısa dönem araç kiralama ile aracını kiralamak için şirket yöneticinden sana özel şifeni almayı unutma! E-posta adresin ve şifren ile dilediğin yerden, dilediğin zaman kurumsal hesabınla kiralama yapabilirsin.</p>
                        <a href="#" className="btn btn-orange-outline bold px-4 py-2 ms-3 mt-3 member-login-button" style={{ width: "45%" }}>
                            <span className="m-auto">Giriş Yap</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="corporate-rental-form px-5 container" >
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
