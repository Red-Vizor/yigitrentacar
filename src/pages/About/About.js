import React from 'react'
import { OfficesCard } from '../../Components/'

export default function About() {
    return (
        <section className="about-page">
            <div className="menu-bar container-fluid pt-3 m" style={{ height: "55px", fontWeight: "bold" }}>
                <div className="container">
                    <p>Anasayfa  /  Hakkımızda</p>
                </div>
            </div>


            <div className="container mb-5">
                <h4 className="text-center my-5 extra-bold">HAKKIMIZDA</h4>
                <div className="text-area">
                    <h5 className=" my-3 bold"> Yiğit Oto Kiralama</h5>
                    <p>
                        Yiğit Oto Kiralama Edindiği Deneyim Ve Uzmanlık İle Müşterilerine Kısa Ve Uzun Süreli Araç Kiralama Hizmeti Vermektedir.Yiğit Oto Kiralama,Tüm Gerçek Kişilerin Ve Tüzel İşletmelerin Araç Kiralama Hizmeti İle Karşılamanın Yanısıra,Periyodik Bakım Ve Onarım,Hızlı Hasar Yönetimi,İkame Araç Hizmeti Ve Lastik Yenileme Gibi Müşterilerini Rahat Ve Konfor Sağlayıcı Ek Hizmetlerde Sunmaktadır.Uzman Kadrosu Ve Sektörde Uzun YıllardırTecrübesi Güveni İle Kiralanan Araçların Tamir Bakım İşlemleri Firma Güvencesinde Yetkili Servislerde Gerçekleştirmekte Kiralanan Araçlar Rent A Car Kasko Ve Sigortalarla Güvence Altına Alınmaktadır..Yiğit Oto Kiralama Sektöründe Otomobiller,Yat Kiralama,Hafif Ticari Araçlar Olmak Üzere Uzun Dönem de Araç Kiralama Hizmeti Sunmaktadır.Müşteri Yenilikçi Esnek Güvenli Filo Çözümleri Ve Kiralama Hizmetleri Sunan Yiğit Oto Kiralama Müşterileri İstanbul,İzmir Ve Bodrum da Hizmet Vermektedir.Her Yolda Her Zaman Yanınızdayız.Unutmayınız Kalite Asla Tesadüf Değildir.
                    </p>
                </div>

            </div>

            <div className="container-fluid bg-black mb-5">
                <div className="row mx-auto py-5 w-100 office-list">
                    <div className="col-lg-4 mb-md-5">
                        <OfficesCard name="İstanbul" phone="0532 409 14 84" adress="Cumhuriyet Mahallesi Gürpınar Yolu Caddesi Beykent İş Merkezi B2 Blok No:347 Büyükçekmece/İSTANBUL" />
                    </div>
                    <div className="col-lg-4 mb-md-5">
                        <OfficesCard name="İzmir" phone="0549 405 35 35" adress="Mansuroğlu Mahallesi 1593/1 Sokak No:4/B Kat:4 D:37 Lider Centrio Bayraklı/İzmir " />
                    </div>
                    <div className="col-lg-4 mb-md-5">
                        <OfficesCard name="Bodrum" phone="0545 571 48 48" adress="Dirmil Mahallesi İnönü Cadddesi No:49/1 İç Kapı No:4 Bodrum/Muğla/Yalıkavak " />
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <div className="text-area">
                    <p>
                        Uzman kadrosu ve sektörde uzun yıllardır tecrübesi güveni ile kiralanan araçların tamir bakım işlemleri firma  güvencesi yetkili servislerde gerçekleştirmekte kiralanan araçlar rent a car kasko ve sigortalarla güvence altına  alınmaktadır...

                        Yiğit oto kiralama sektöründe otomobiller, yat kiralama, hafif ticari araçlar olmak üzere uzun dönem de araç  kiralama hizmeti sunmaktadır. Müşteri yenilikçi esnek güvenli filo çözümleri ve kiralama hizmetleri sunan yiğit oto kiralama  müşterileri istanbul, izmir ve bodrum da hizmet vermektedir. Her yolda her zaman yanınızdayız. Unutmayınız kalite asla tesadüf değildir.
                    </p>
                </div>

            </div>
        </section>
    )
}
