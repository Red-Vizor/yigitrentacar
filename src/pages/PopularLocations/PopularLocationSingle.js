import React from 'react'

function PopularLocationsSingle() {
    return (
        <div className="location-single">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa / Lokasyonlar / Lokasyon Detay</p>
            </div>
            <div className="location-header container-fluid"
                style={{ height: "65px", width: "750px" }}>
                <h4>BOĞAZIN SERİN SULARINDA HUZUR DOLU BİR TUR</h4>

            </div>

            <div className="location-single-area container">
                <div className="row">
                    <div className="col">
                        <img src="./assets/images/location1.png" className="card-img-top" alt="..." />
                    </div>
                    <div className="col first-text">
                        <h4>Yiğit Ofislerinde Rixos Misafirlerine %15 İNDİRİM!</h4>
                        <p>Avrupa ile Asya kıtalarını birbirinden ayıran doğal sınırlardan biri olarak kabul edilen İstanbul Boğazı, aynı zamanda uluslararası su yoludur. İstanbul boğazının kıyıları tarih boyunca pek çok uygarlıklara ev sahipliği yapmıştır.
                            İstanbul’u ziyaret edenler için Boğaz turu mutlaka yapılması gereken bir etkinliktir. Boğaz’ın güzelliklerini, tarihi yapılarını denizden keşfederken, aynı zamanda deniz havasını solumak müthiş bir atmosfer oluşturmaktadır.
                        </p>
                    </div>
                </div>
                <div className="row continue-text my-5">
                    <div className="col border-end">
                        <p>Eminönü, Üsküdar, Kadıköy ve Bakırköy İskelelerimizden tarifeli olarak yaptığımız ve herkesin katılımına açık  olan, İstanbul Boğazının görsel zenginliği eşliğinde zamanın keyifle geçtiği tarifeli boğaz turlarımıza her zaman katılabilirsiniz.
                            <br /><br />
                            TURSAB ile yapılan Protokol ile belgelendirilen gemilerimizle, TURSAB bünyesinde bulunan turizm acenteleri tarafından İstanbul’a getirilen turist grupları yaklaşık %90’ı için, Boğaz Turları ve  Ada Turları düzenlenerek ülkemizin tanıtımına katkı sağlamaktayız.
                        </p>

                    </div>
                    <div className="col ps-5">
                        <p>Eminönü, Üsküdar, Kadıköy ve Bakırköy İskelelerimizden tarifeli olarak yaptığımız ve herkesin katılımına açık  olan, İstanbul Boğazının görsel zenginliği eşliğinde zamanın keyifle geçtiği tarifeli boğaz turlarımıza her zaman katılabilirsiniz.
                            <br /><br />
                            TURSAB ile yapılan Protokol ile belgelendirilen gemilerimizle, TURSAB bünyesinde bulunan turizm acenteleri tarafından İstanbul’a getirilen turist grupları yaklaşık %90’ı için, Boğaz Turları ve  Ada Turları düzenlenerek ülkemizin tanıtımına katkı sağlamaktayız.
                        </p>
                    </div>
                </div>
            </div>


            <div className="owl-carousel owl-carousel-popular owl-theme my-5">
                <div className="item">
                    <div className="location-owl-image bg-image" style={{ backgroundImage: "url(./assets/images/location-carousel1.png)" }}></div>
                </div>
                <div className="item">
                    <div className="location-owl-image bg-image" style={{ backgroundImage: "url(./assets/images/location-carousel2.png)" }}></div>
                </div>
                <div className="item">
                    <div className="location-owl-image bg-image" style={{ backgroundImage: "url(./assets/images/location-carousel3.png)" }}></div>
                </div>
                <div className="item">
                    <div className="location-owl-image bg-image" style={{ backgroundImage: "url(./assets/images/location-carousel4.png)" }}></div>
                </div>
            </div>
        </div>
    )
}

export default PopularLocationsSingle
