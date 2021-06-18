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
                        Yiğit oto kiralama edindiği deneyim ve uzmanlık ile müşterilerine kısa ve uzun süreli araç kiralama hizmeti vermektedir. Yiğit oto kiralama, tüm gerçek kişilerin ve tüzel işletmelerin araç kiralama hizmeti ile karşılamanın yanı sıra, periyodik bakım ve  onarım, hızlı hasar yönetimi, ikame araç hizmeti ve lastik yenileme gibi müşterilerini rahat ve konfor sağlayıcı ek hizmetlerde
                        Sunmaktadır.
                        <br />
                        Üstelik şuanlık İstanbul, Bodrum ve İzmir şubelerimiz ile hizmetinizdeyiz.
                    </p>
                </div>

            </div>

            <div className="container-fluid bg-black mb-5">
                <div className="row mx-auto py-5 w-100 office-list">
                    <div className="col">
                        <OfficesCard />
                    </div>
                    <div className="col">
                        <OfficesCard />
                    </div>
                    <div className="col">
                        <OfficesCard />
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
