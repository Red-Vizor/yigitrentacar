import React from 'react'

function CampaignsSingle() {
    return (
        <div className="campaign-single">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa / Kampanyalar / Kampanya Adı</p>
            </div>
            <div className="campaigns-header container-fluid"
                style={{ height: "65px", width: "750px" }}>
                <h4>Yiğit Oto Kiralama Ofislerinde %15 İNDİRİM!</h4>

            </div>

            <div class="campaign-single-area container">
                <div class="row">
                    <div class="col">
                        <img src="./assets/images/campaign-car.png" class="card-img-top" alt="..." />
                    </div>
                    <div class="col">
                        <h4>Yiğit Oto Kiralama Ofislerinde %15 İNDİRİM!</h4>
                        <p>Yiğit oto kiralama edindiği deneyim ve uzmanlık ile müşteri-lerine kısa ve uzun süreli araç kiralama hizmeti vermektedir. Yiğit oto kiralama, tüm gerçek kişilerin ve tüzel işletmelerin a-raç kiralama hizmeti ile karşılamanın yanı sıra, periyodik bakım ve  onarım, hızlı hasar yönetimi, ikame araç hizmeti ve lastik yenileme gibi müşterilerini rahat ve konfor sağlayıcı ek hizmet-lerde Sunmaktadır.</p>


                        <div class="dropdown campaign-single-dropdown">
                            <button class="btn btn-orange-outline bold px-4 dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Kampanya Katılım ve Araç Kiralama Koşulları
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button class="dropdown-item" type="button">Action</button></li>
                                <li><button class="dropdown-item" type="button">Another action</button></li>
                                <li><button class="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default CampaignsSingle
