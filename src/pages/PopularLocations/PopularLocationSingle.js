import React from 'react'
import './popularlocations.css'

function PopularLocationsSingle() {
    return (
        <div className="location-single">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa / Lokasyonlar / Lokasyon Detay</p>
            </div>
            <div className="location-header container"
                style={{ height: "65px", width: "750px" }}>
                <h4>BOĞAZIN SERİN SULARINDA HUZUR DOLU BİR TUR</h4>

            </div>

            <div className="location-single-area">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="./assets/images/location1.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="col-lg-6">
                            <h4 className="bold text-center">Yiğit Ofislerinde Rixos Misafirlerine %15 İNDİRİM!</h4>
                            <p className="bold px-lg-4">Avrupa ile Asya kıtalarını birbirinden ayıran doğal sınırlardan biri olarak kabul edilen İstanbul Boğazı, aynı zamanda uluslararası su yoludur. İstanbul boğazının kıyıları tarih boyunca pek çok uygarlıklara ev sahipliği yapmıştır.
                                İstanbul’u ziyaret edenler için Boğaz turu mutlaka yapılması gereken bir etkinliktir. Boğaz’ın güzelliklerini, tarihi yapılarını denizden keşfederken, aynı zamanda deniz havasını solumak müthiş bir atmosfer oluşturmaktadır.
                            </p>
                        </div>
                    </div>
                    <div className="row my-lg-5 my-md-3 text-continue">
                        <div className="col-lg-6 border-end px-lg-3">
                            <p className="mb-lg-3 bold">Eminönü, Üsküdar, Kadıköy ve Bakırköy İskelelerimizden tarifeli olarak yaptığımız ve herkesin katılımına açık  olan, İstanbul Boğazının görsel zenginliği eşliğinde zamanın keyifle geçtiği tarifeli boğaz turlarımıza her zaman katılabilirsiniz. </p>
                            <p className="bold">TURSAB ile yapılan Protokol ile belgelendirilen gemilerimizle, TURSAB bünyesinde bulunan turizm acenteleri tarafından İstanbul’a getirilen turist grupları yaklaşık %90’ı için, Boğaz Turları ve  Ada Turları düzenlenerek ülkemizin tanıtımına katkı sağlamaktayız.</p>

                        </div>
                        <div className="col-lg-6 ps-lg-5 mt-md-3">
                            <p className="mb-lg-3 bold">Eminönü, Üsküdar, Kadıköy ve Bakırköy İskelelerimizden tarifeli olarak yaptığımız ve herkesin katılımına açık  olan, İstanbul Boğazının görsel zenginliği eşliğinde zamanın keyifle geçtiği tarifeli boğaz turlarımıza her zaman katılabilirsiniz.</p>
                            <p className="bold mb-lg-5">TURSAB ile yapılan Protokol ile belgelendirilen gemilerimizle, TURSAB bünyesinde bulunan turizm acenteleri tarafından İstanbul’a getirilen turist grupları yaklaşık %90’ı için, Boğaz Turları ve  Ada Turları düzenlenerek ülkemizin tanıtımına katkı sağlamaktayız.</p>
                        </div>
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
