import React from 'react'
import { CorporateRentalForm } from '../../Components'

export default function CorporateServices() {
    return (
        <div className="corporate-services">
            <h4 className="bold text-center">KURUMSAL KİRALAMA</h4>

            <div className="container corporate-header" style={{ backgroundColor: "#000000", height: "90px", width: "75%" }}>
                <h5 className="bold">Firmanızın günlük, aylık veya yıllık araç ihtiyaçlarınızı size özel çözümler
                    ile ekonomik, kurumsal ve hızlı çözümler için formu eksiksiz doldurunuz.</h5>
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
                    </div>
                </div>
            </div>

            <CorporateRentalForm />

        </div>
    )
}
