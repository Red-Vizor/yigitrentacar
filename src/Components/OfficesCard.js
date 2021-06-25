import React from 'react'

export default function OfficesCard() {
    return (
        <div className="office">
            <h4 className="extra-bold text-white mb-2 text-center">İSTANBUL</h4>

            <div className="card office-card">
                <p className="bold text-white mb-2 text-center">Aramak için tıklayın</p>
                <div className="row">
                    <div className="col">
                        <div className="phone mb-2">
                            <a> <img src="./assets/images/phone.svg" width="20px" className="me-1 my-auto" />+90 532 409 14 84</a>
                        </div>
                        <div className="email mb-2">
                            <img src="./assets/images/email.svg" width="20px" className="me-1 my-auto" /> <a> info@yigitotokiralama.com</a>
                        </div>
                        <div className="adress mb-2">
                            <a> <img src="./assets/images/location.svg" width="20px" className="me-1 my-auto" />Cumhuriyet Mahallesi Gürpınar Yolu Caddesi Beykent İş Merkezi B2 Blok No:347 Büyükçekmece / İSTANBUL</a>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-6 px-1">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Ad Soyad" />
                                </div>
                                <div className="col-6 px-1">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email Adresi" />
                                </div>
                                <div className="col-12 px-1 mt-2">
                                    <textarea className="form-control border-0"></textarea>
                                </div>
                                <button type="button" className="btn btn-dark btn-orange mx-auto mt-2 py-2 px-5my-2">Mesajı Gönder</button>
                            </div>
                        </form>
                    </div>
                    <div className="col maps bg-image " style={{ backgroundImage: "url(./assets/images/istanbul.png" }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
