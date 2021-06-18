import React from 'react'

export default function CorporateForm(props) {
    return (
        <div className="general-form-1">

            <div className="fatura-bilgileri p-5">
                <div className="container px-5">
                    <h2 className="text-center mt-3 mb-5 bold">FATURA BİLGİLERİ</h2>
                    <form class="row g-3 px-5">
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="formGroupExampleInput" class="form-label">ADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="input-group mb-3">
                                <label for="formGroupExampleInput" class="form-label">SOYADINIZ*</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi) *" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group mb-3">
                                <label for="formGroupExampleInput" class="form-label">TC KİMLİK NO</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group mb-3">
                                <label for="formGroupExampleInput2" class="form-label">ADRESİNİZ</label>
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="ADRES BİLGİLERİNİZ" />
                            </div>
                        </div>

                        {
                            props.policy === true &&
                            <div className="form-policy py-5 bg-danger">
                                Buraya Aydınlatma metni chek gelecek
                            </div>
                        }

                    </form>

                </div>
            </div>



        </div>
    )
}
