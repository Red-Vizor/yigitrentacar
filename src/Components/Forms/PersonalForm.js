import React from 'react'

export default function PersonalForm() {
    return (
        <div className="general-form-1">
            <div className="rezervasyon-form container px-5 ">
                <div className="container mt-5 mb-5 px-5 kisisel-bilgiler">
                    <h2 className="text-center mb-5">KİŞİSEL BİLGİLER</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">ADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">SOYADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">CEP TELEFONUNUZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Cep Telefonunuz" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">MAİL ADRESİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Mail Adresiniz" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputEmail4" class="form-label">DOĞUM TARİHİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="GG/AA/YYYY" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputPassword4" class="form-label">EHLİYET ALIŞ TARİHİNİZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="GG/AA/YYYY" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <label for="inputState" class="form-label">KİMLİK BİLGİSİ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <select id="inputState" class="form-select">
                                    <option selected>TC KİMLİK NO</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <label for="inputZip" class="form-label">TC KİMLİK NO*</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="inputState" class="form-label">LOKASYONUNUZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <select id="inputState" class="form-select">
                                    <option selected>İL</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">MESAJINIZ</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        
        
        </div>
    )
}
