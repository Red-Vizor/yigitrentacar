import React from 'react'
import { IndividualRentalForm } from '../../Components'


export default function PersonalServices() {
    return (
        <div className="personal-services bold">
            <h4 className="bold text-center">BİREYSEL KİRALAMA</h4>

            <div className="container personal-header" style={{ backgroundColor: "#FF710F", height: "90px", width: "75%" }}>
                <h5 className="bold">İstanbul, İzmir ve Bodrum ofislerimizden 7/24 Kesintisiz kiralama hizmeti
                    almak için bizi arayabilirsiniz.</h5>
            </div>
            <div className="container personal-text mt-4" style={{ width: "70%" }}>
                <p>Rent a car ya da araç kiralama hizmeti, bireyler için günümüzde önemli bir ihtiyaç haline gelmiştir.</p>
                <p>Bireyler, Yiğit oto kiralama' dan ihtiyaçları doğrultusunda ister günlük ister aylık araç kiralayabilmektedir. Günlük ve aylık araç kiralamalarında Yiğit oto kiralamayı tercih ederek, Türkiye’nin lüks ve ekonomik araç kiralamayı bünyesinde bulunduran en geniş araç filosundan yararlanma ayrıcalığına sahip olurlar.</p>
            </div>

            <IndividualRentalForm />
            
            <div className="container mt-4 mb-5 bold personal-bottom-text" style={{ width: "80%" }}> 
                <h4 className="mt-5 mb-4 bold">Günlük Araç Kiralama</h4>
                <p>Araç kiralama seçeneklerinden biri de günlük araç kiralamadır. Günlük araba kiralama işleminde dikkat edilmesi gereken nokta, araç kiralama şartlarını dikkatli bir şekilde incelemektir. 
                    Rent a car firmalarının çoğunda minimum 3 gün araba kiralama şartı koşulur. Bu araçlar için günlük araç kiralama seçeneği mümkün değildir. Günlük oto kiralama işlemi, teslim alınan tarih 
                    ve saatten tam 24 saat sonra aracın teslim edilmesi şeklinde gerçekleşir. Araba Kiralama sözleşmesinde bu tarih ve saatler açıkça belirtilir. Günlük araç kiralama fiyatları araçlara, sezona ve 
                    firmalara göre değişiklik gösterebilir. Minimum yaş ve ehliyet süresi de rent a car firmalarına göre değişiklik gösterebilir.
                </p>
                <h4 className="mt-5 mb-4 bold">Aylık Araç Kiralama</h4>
                <p>En kârlı araç kiralama seçeneklerinden biri de aylık araç kiralama hizmetidir. Aylık oto kiralama, 1 aydan 12 aya kadar yapılabilir. Aylık oto kiralama işlemlerinde sezonluk değişiklikler yaşanabildiğinden mümkün olduğunca erken rezervasyon yaptırmak oldukça önemlidir. 
                    Aylık oto kiralama işlemi yapılırken belirlenen teslim tarihine uymak gerekir. Özellikle 6 ay ve üzeri araba kiralamalarda çoğu rent a car firması hatırlatma yapar. Aylık araç kiralamalarda kullanıcılar tarafından en dikkat edilen noktalardan biri de, aracın kilometre başına yaktığı yakıt miktarıdır. 
                    Özellikle uygun fiyatlı yolculuk yapmak isteyenler, ekonomik sınıf araçlardan faydalanabilirler.
                </p>
                <h4 className="mt-5 mb-4 bold">Günlük Araç Kiralama ve Aylık Araç Kiralama Seçenekleri Arasındaki Farklar Nelerdir?</h4>
                <p>Günlük ve aylık araba kiralama işlemleri arasında büyük farklılıklar yoktur. Ehliyet süresi, yaş sınırı, depozito gibi unsurlar kiralamanın süresine göre değil aracın çeşidine göre değişir. Bu nedenle kiralama sözleşmesi ve şartlarında belirgin farklar yaşanmaz. 
                    Aylık kiralamalar günlük kiralamalara göre günlük olarak hesapladıklarında daha uygun fiyata gelebilirler. Özellikle araç kiralama kampanyalarından yararlanan kişiler hem günlük hem de aylık kiralamaların çok daha uygun bir fiyat ile gerçekleştirebilirler.
                    Sonuç olarak, araç kiralarken önemli olan nokta kullanıcının ihtiyaçlarıdır.
                </p>

            </div>
            
           
        </div>
    )
}
