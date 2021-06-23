import React from 'react'
import { CorporateRentalForm } from '../../Components'
import { Accordion } from '../../Components'

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
                    <div class="col-md-6  ps-lg-5">
                        <h4 className="bold mt-5 mb-3 ps-lg-5">Formu Doldurun, Sizi Arayalım</h4>
                        <p className="bold ps-lg-5">Kurumsal Kısa Dönem Araç Kiralamada mükemmel hizmet deneyimi arıyorsan, seni en iyi biz anlarız. Yiğit oto kiralama ile yolculukların senin için keyif olacaktır.</p>
                        <p className="bold ps-lg-5">Aşağıdaki formda, aylık kiralama yapmak istiyorsan lütfen toplam ay süresini belirt. Kurumsal günlük kiralamaların için ise kutucuğu işaretleyip, formu doldur.</p>
                    </div>
                    <div class="col-md-6  pe-lg-3" >
                        <img src="./assets/images/services.png" className="corporate-img mt-5 mb-lg-3 mr-lg-5 pe-lg-5" style={{ width: "92%" }} alt="..." />
                    </div>
                </div>
                <div class="row px-lg-5">
                    <div class="col-md-6  px-lg-4" >
                        <p className="bold ps-lg-4 pt-5">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz.</p>

                    </div>
                    <div class="col-md-6  pe-lg-3" >
                        <h5 className="bold mt-2 mb-3 ps-lg-3" style={{ color: "#FF710F" }}>Kurumsal Üye Girişi</h5>
                        <p className="bold px-lg-3 pe-lg-5">Yiğit rent a car ile kurumsal kısa dönem araç kiralama ile aracını kiralamak için şirket yöneticinden sana özel şifeni almayı unutma! E-posta adresin ve şifren ile dilediğin yerden, dilediğin zaman kurumsal hesabınla kiralama yapabilirsin.</p>
                        <a href="#" className="btn btn-orange-outline bold px-lg-4 py-lg-2 ms-lg-3 mt-3 member-login-button" style={{ width: "45%" }}>
                            <span className="m-auto">Giriş Yap</span>
                        </a>

                    </div>
                </div>
            </div>

            <CorporateRentalForm />
            <Accordion/>

        </div>
    )
}
