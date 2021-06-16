import React from 'react'

export default function ReservationForm() {
    return (
        <section className="container-fluid">
            <div className="header-area py-4 bg-pink-powder ">
                <div className="header-title d-flex mb-3">
                    <span className="title-border-green px-5 py-2 mx-auto bold">
                        REZERVASYONUN ÖZETİ
                    </span>
                </div>
                <div className="header-content d-flex justify-content-center">
                    <div className="row">
                        <div className="col d-flex">
                            <img src="./assets/images/s3.png" className="ms-auto w-50" />
                        </div>

                        <div className="col d-flex">
                            <div className="car-detail mx-auto my-auto">
                                <span className="h4 bold">2021 MERCEDES CLA 180</span>
                                <div className="row">
                                    <div className="col-6">
                                        <span>GÜVENCE PAKETİ</span>
                                    </div>
                                    <div className="col-6">
                                        <span>EK ÜRÜNLER</span>
                                    </div>
                                    <div className="col-6">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... Tümünü Göster</span>
                                    </div>
                                    <div className="col-6">
                                        <span>Mini Hasar Sigortası 1500 TL
                                            Kapsamlı... Tümünü Göster</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex">


                        </div>
                    </div>

                </div>

            </div>

            <div className="rezervasyon-uyari text-center p-3">
                    <p>REZERVASYONUNUZU TAMAMLAMAK İÇİN AŞAĞIDAKİ BİLGİLERİ EKSİKSİZ TAMAMLAYINIZ.</p>    
            </div>

            <div className="rezervasyon-form">
            <div className="container mt-5 mb-5 kisisel-bilgiler">
                <h2  className="text-center mb-5">KİŞİSEL BİLGİLER</h2>

            <form class="row g-3">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">ADINIZ*</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">SOYADINIZ*</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*"/>
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">CEP TELEFONUNUZ*</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Cep Telefonunuz"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ*</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Mail Adresiniz"/>
            </div>
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">DOĞUM TARİHİNİZ*</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="GG/AA/YYYY"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">EHLİYET ALIŞ TARİHİNİZ*</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="GG/AA/YYYY"/>
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">KİMLİK BİLGİSİ*</label>
                <select id="inputState" class="form-select">
                <option selected>TC KİMLİK NO</option>
                <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">TC KİMLİK NO*</label>
                <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">LOKASYONUNUZ*</label>
                <select id="inputState" class="form-select">
                <option selected>İL</option>
                <option>...</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            </form>
            </div>

            <div className="fatura-bilgileri p-5">
                <h2 className="text-center mt-3 mb-5">FATURA BİLGİLERİ</h2>  

            <div className="container">

            <form class="row g-3">
            <div class="col-md-6">
            <   label for="formGroupExampleInput" class="form-label">ADINIZ*</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*"/>
            </div>
            <div class="col-md-6">
                <label for="formGroupExampleInput" class="form-label">SOYADINIZ*</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi) *"/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">TC KİMLİK NO</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder=""/>
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">ADRESİNİZ</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="ADRES BİLGİLERİNİZ"/>
            </div>
            </form>

            </div>
            </div>

            </div>
            
        </section>
        
    
    )
    
}




    

    