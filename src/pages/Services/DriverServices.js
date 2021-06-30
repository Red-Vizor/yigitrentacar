import React, { useState } from 'react'
import axios from 'axios'

export default function DriverServices() {
    const [allValues, setAllValues] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        message: '',
    })
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }

    const sendSofor= () => {
        axios.get('http://wocurrency.com/sofor-mail', {
            params: {
                name: allValues.name,
                surname: allValues.surname,
                phone: allValues.phone,
                email: allValues.email,
                message: allValues.message,
            }, headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                alert("Talebiniz başarıyla alındı");
            })
            .catch(function (error) {
                alert("Talebiniz alınırken sorun oluştu");
            })

            alert("Talebiniz başarıyla alındı");
    }
    return (
        <div className="driver-services">
            <h4 className="bold text-center">ŞÖFÖRLÜ ARAÇ KİRALAMA & TRANSFER</h4>

            <div className="container corporate-header driver-header" style={{ backgroundColor: "#FF710F", height: "90px", width: "75%" }}>
                <h5 className="bold pt-md-4 ">İstanbul , İzmir ve Bodrum ofislerimizden 7/24 Kesintisiz kiralama hizmeti
                    almak için bizi arayabilirsiniz.</h5>
            </div>

            <div className="container driver-services-text mt-4 mb-5" style={{ width: "68%" }}>
                <p className="bold">Rent a car ya da araç kiralama hizmeti, bireyler için günümüzde önemli bir ihtiyaç haline gelmiştir.</p>
                <p className="bold">Bireyler, Yiğit oto kiralama' dan ihtiyaçları doğrultusunda ister günlük ister aylık araç kiralayabilmektedir. Günlük ve aylık araç kiralamalarında Yiğit oto kiralamayı tercih ederek, Türkiye’nin lüks ve ekonomik araç kiralamayı bünyesinde bulunduran en geniş araç filosundan yararlanma ayrıcalığına sahip olurlar.</p>
            </div>

            <div className="container driver-services-text mt-4 mb-5" style={{ width: "68%" }}>
                <p className="fs-2 bold">Şöförlü Araç Kiralama Hizmeti Nedir? </p>
                <p className="bold">Şoförlü araç kiralama, klasik araç kiralama hizmetinin yanı sıra aracı kiraladığınız süre boyunca aynı zamanda şoför hizmeti almanızı da sağlayan bir paket olarak tanımlanabilir. Özel günlerde araç kullanmak istemediğinizde veya yollarını bilmediğiniz bir şehre iş toplantısına gittiğinizde şoförlü araç kiralama ve transfer hizmetlerini tercih edebilirsiniz.</p>
            </div>

            <div className="container driver-services-text mt-4 mb-5" style={{ width: "68%" }}>
               <img src="./assets/images/soforlu.jpg" className="w-100" />
            </div>

            <div className="container driver-services-text mt-4 mb-5" style={{ width: "68%" }}>
                <p className="bold">Şoförlü araba kiralama hizmeti; günlük şoförlü araç kiralama veya daha uzun süreli olarak sağlanabilir. Bu durum tamamen hizmeti alacak kişinin tercihine göre belirlenir. Kendi şehrinizde şoförlü araç kiralayabileceğiniz gibi şehirler arası şoförlü araç kiralama seçeneğini de tercih edebilirsiniz. Tüm şartları belirledikten sonra hizmeti satın almak oldukça kolaydır. Her hizmette olduğu gibi şoförlü araç kiralamada da bazı şartlar bulunur. Ehliyet veya yaş sınır gibi koşullar rent a car firmaları tarafıdan belirlenirler. İşlemlerin ardından seçtiğiniz araç ile birlikte profesyonel şoförünüz size yönlendirilir.</p>
                
                <p className="fs-2 bold mt-3">Şöförlü Araç Kiralama Hizmeti Fiyatları Ne Kadardır? </p>
                <p className="bold">Fiyat bandı aracın modeline, gün sayısına veya firmaya göre değişkenlik gösterebilir. Klasik araç kiralama fiyatları ile şoförlü araç kiralama fiyatları arasında muhakkak bir fark vardır. Vip şoförlü araç kiralama ile şehirler arası şoförlü araç kiralama fiyatları da, şoförlü araç kiralama fiyatlarına oranla daha yüksek tutulabilir. Bunun sebebi hizmetin kalitesinin artmasıdır. Araç kiralama hizmeti alacağınız firmanın indirim zamanlarını takip etmek, daha makul fiyatlar ile hizmet almanızı sağlayabilir. Aynı zamanda yakıt, köprü, otoyol veya özel otoyol ücretleri gibi ekstra harcamaların kim tarafından karşılandığını bilmeniz gerekir. Bazı araç kiralama firmaları bu ücretleri total hizmet fiyatına dahil ederlerken bazıları ekstra ücret olarak sözleşmede belirtirler. Fiyatlar tek yön veya gidiş dönüş olarak iki kategoride incelenebilir. Tek yön seçeneğinde fiyat, gidiş dönüşe oranla daha uygun olsa da aracın geri dönüş yolu hesaba katılarak bir fiyat biçilir. Tüm bu şartlar doğrultusunda ortalama fiyat belirlenmiş olur. Bu nedenle şoförlü araç kiralama hizmeti için sabit bir fiyat belirlenemez.</p>
            
            </div>

            <div className="individual-rental-form general-form-1 ">

                <div className="px-5 container" >
                    <div className=" mt-5 mb-5 px-lg-5 kisisel-bilgiler">
                        <h4 className="bold  pt-5 text-center">İletişim Formu</h4>
                        <p className="fs-5 mb-5 mt-2 text-center">Fiyat ve Detaylar İçin Formu Doldurun</p>
                        <form onSubmit={sendSofor} className="row g-3">
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputEmail4" className="form-label">ADINIZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="text" onChange={changeHandler} required name="name" className="form-control" id="name" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">SOYADINIZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="text" onChange={changeHandler} required name="surname" className="form-control" id="surname" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputEmail4" className="form-label">CEP TELEFONUNUZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                    </span>
                                    <input type="phone" onChange={changeHandler} required name="phone" className="form-control" id="phone" placeholder="Cep Telefonunuz" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ*</label>
                                    <span className="input-group-text" id="basic-addon1">
                                        <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                    </span>
                                    <input type="text" onChange={changeHandler} required name="email" className="form-control" id="email" placeholder="Mail Adresiniz" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="input-group mb-3">
                                    <label for="inputPassword4" className="form-label">Mesajınız </label>
                                    <textarea onChange={changeHandler} name="message" type="text" className="form-control" id="message" className="form-control px-5" id="exampleFormControlTextarea1" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                                </div>
                            </div>


                            <div className="form-policy py-5 container ">
                                <p>Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                                <div className="form-check mb-4">
                                    <input required className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Aydınlatma metni kapsamında kişisel verilerimin, pazarlama süreçlerinin planlanması ve icrası amacıyla; Otokoç Otomotiv Ticaret ve Sanayi Anonim Şirketi tarafından sunulan ürün ve hizmetlerin beğenilerime,
                                        kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilmesi için işlenmesini ve bu kapsamda aşağıda belirtilen iletişim bilgilerime reklam, promosyon, kampanya ve benzeri ticari elektronik ileti gönderilmesini ve bu amaçla Şirketin hizmet aldığı tedarikçilerle paylaşılmasını kabul ediyorum.
                                    </label>
                                </div>
                                <div className="form-check mb-4">
                                    <input required className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Aydınlatma metni  kapsamında kimlik, iletişim, finansal ve kullanım alışkanlıkları verilerimin, Otokoç Otomotiv Tic. ve San. A.Ş. tarafından sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilerek önerilmesi ve bu kapsamda iletişim bilgilerime reklam, promosyon,
                                        kampanya ve benzeri ticari elektronik ileti gönderilmesi  amacıyla Emarsys İletişim Sistemleri Tic. Ltd. Şti aracılığıyla yurt dışında mukim Emarsys eMarketing Systems AG’ye ile paylaşılmasını kabul ediyorum.
                                    </label>
                                </div>

                            </div>

                            <button type="submit" className="btn btn-orange-outline bold px-4 py-2" style={{ width: "20%" }}>
                                <span className="m-auto">FORMU GÖNDER</span>
                            </button>

                        </form>

                    </div>
                </div>
            </div>



        </div>
    )
}
