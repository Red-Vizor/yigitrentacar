import React, { useState, useEffect } from 'react'
import { PersonalForm, CorporateForm } from '../../Components'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { changePage } from '../../store/reservation/reservationPageChangeSlice'
import axios from 'axios'
import $ from 'jquery';
window.jQuery = $;


function TabPanelForm(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanelForm.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    };
}

export default function ReservationForm() {
    const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ]

    const dateValue = useSelector((state) => state.dateslice)
    const [allValues, setAllValues] = useState({
        name: '',
        surname: '',
        birthdate: '',
        tcnumber: '',
        phone: '',
        mail: '',
        message: '',
        invoiceName: '',
        invoiceLastname: '',
        invoiceTcNumber: '',
        invoiceAdress: '',
        invoiceCompanyName: '',
        invoiceCompanyTaxNumber: '',
        invoiceCompanyCarCount: '',
        invoiceCompanyCity: '',
        invoiceCompanyTown: '',
        invoiceCompanyAuthName: '',
        invoiceCompanyAuthSurname: '',
        invoiceCompanyPhone: '',
        invoiceCompanyMail: '',
        invoiceCompanyDriverLisance: '',
        invoiceCompanyMessage: '',
        dateInformation: dateValue
    });
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const dispatch = useDispatch()

    const sendMail = () => {
        const json = JSON.stringify(allValues)
        axios.get('http://panel.wocurrency.com/send-mail', {
            params: {
                json
            }, headers: {
                // Overwrite Axios's automatically set Content-Type
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {

            });
        alert("deneme")
        $('.reservation-tab-area').addClass('d-none')
        dispatch(changePage(5))
    }

    return (
        <section className="reservation-form-area">
            <div className="header-area  py-5 bg-pink-powder ">

                <div className="header-title d-flex mb-3">
                    <span className="title-border-green px-5 py-2 mx-auto bold">
                        REZERVASYONUN ÖZETİ
                    </span>
                </div>
                <div className="header-content d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 mx-auto d-flex">
                            <img src={dateValue.carSelect.car_image_one} width="250px" className="mx-4 package-car-image" />
                        </div>

                        <div className="col-lg-5 col-md-5 col-12 d-flex">
                            <div className="car-detail mx-auto my-auto ">
                                <span className="h4 bold">{dateValue.carSelect.name}</span>
                                <div className="row ">
                                    <div className="col-6 bold mt-3 ">
                                        <span>GÜVENCE PAKETİ</span>
                                    </div>
                                    <div className="col-6 bold mt-3 ">
                                        <span>EK ÜRÜNLER</span>
                                    </div>
                                    <div className="col-6 ">
                                        <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModalOne">Seçilenleri göster</a>
                                    </div>
                                    <div className="col-6 ">
                                        <a className="h7 text-dark" data-bs-toggle="modal" data-bs-target="#packageModalTwo">Seçilenleri göster</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12 car-detail d-flex my-auto">
                            <div className="my-auto ps-lg-5 reservation-date-detail">
                                <span className="bold h5">REZERVASYON TARİHİ</span>
                                <div className="mt-lg-3 mt-md-2">
                                    <span >{dateValue.citySelect}</span>
                                </div>
                                <div>
                                    <span className="bold">{dateValue.startDate} <img src="./assets/icons/arrow-circle.svg" className="my-auto ms-1" /> {dateValue.endDate}</span>
                                </div>
                                <span className="bold">{dateValue.totalAmount}₺</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rezervasyon-uyari text-center p-3">
                <p>REZERVASYONUNUZU TAMAMLAMAK İÇİN AŞAĞIDAKİ BİLGİLERİ EKSİKSİZ TAMAMLAYINIZ.</p>
            </div>
            <form onSubmit={() => { sendMail() }}>
                <div className="general-form-1 personal-form">
                    <div className="rezervasyon-form container px-5 ">
                        <div className="container mt-5 mb-5 px-5 kisisel-bilgiler">
                            <h4 className="text-center mb-5 bold">Bireysel Üyelik Bilgileri</h4>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label" onClick={() => { alert(allValues.dateInformation.carSelect.name) }} >ADINIZ*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="name" type="text" className="form-control" id="name" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">SOYADINIZ*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="surname" type="text" className="form-control" id="surname" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">DOĞUM TARİHİNİZ*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="birthdate" type="text" className="form-control" id="birthdate" placeholder="GG/AA/YYYY" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">TC veya PASAPORT NO*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="tcnumber" type="text" className="form-control" id="tcnumber" placeholder="T.C. No ya da Pasaport No*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">CEP TELEFONUNUZ*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="phone" type="phone" className="form-control" id="phone" placeholder="Cep Telefonunuz*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-3">
                                        <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ*</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="mail" type="text" className="form-control" id="mail" placeholder="Mail Adresiniz" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">MESAJINIZ</label>
                                    <textarea name="message" onChange={changeHandler} className="form-control" id="message" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" general-form-1 " style={{ width: "100%" }}>
                    <div className="bg-pink-powder py-4">
                        <div className="corporate-rental-form px-5 container " >

                            <div className="container" >
                                <h5 className="bold text-center fs-3 mt-5">FATURA BİLGİLERİ</h5>
                            </div>

                            <AppBar position="static" className="bg-transparent" >
                                <Tabs value={value} onChange={handleChange} className="bg-transparent" aria-label="simple tabs example">
                                    <Tab label="Bireysel" {...a11yProps(0)} />
                                    <Tab label="Kurumsal" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <TabPanelForm value={value} index={0}>
                                <div className="row g-3 mt-4">
                                    <div className="col-md-6">
                                        <div className="input-group mb-3">
                                            <label for="inputEmail4" className="form-label">ADINIZ*</label>
                                            <span className="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input onChange={changeHandler} required name="invoiceName" type="text" className="form-control" id="invoiceName" placeholder="Adınız (ehliyetinizde yer aldığı gibi)*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-group mb-3">
                                            <label for="inputPassword4" className="form-label">SOYADINIZ*</label>
                                            <span className="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input onChange={changeHandler} required name="invoiceLastname" type="text" className="form-control" id="invoiceLastname" placeholder="Soyadınız (ehliyetinizde yer aldığı gibi)*" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-group mb-3">
                                            <label for="inputPassword4" className="form-label">TC veya PASAPORT NO*</label>
                                            <span className="input-group-text" id="basic-addon1">
                                                <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                            </span>
                                            <input onChange={changeHandler} required name="invoiceTcNumber" type="text" className="form-control" id="invoiceTcNumber" placeholder="T.C. No ya da Pasaport No*" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Adresiniz</label>
                                        <textarea required name="invoiceAdress" className="form-control" id="invoiceAdress" rows="3"></textarea>
                                    </div>
                                </div>
                            </TabPanelForm>
                            <TabPanelForm value={value} index={1}>
                                <div className=" mt-5 mb-5 px-5 kisisel-bilgiler">
                                    <div className="input-group mb-3">
                                        <label for="inputEmail4" className="form-label">Firma Adı</label>
                                        <span className="input-group-text" id="basic-addon1">
                                            <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                        </span>
                                        <input onChange={changeHandler} required name="invoiceCompanyName" type="text" className="form-control" id="invoiceCompanyName" placeholder="Firma Adını Giriniz" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputEmail4" className="form-label">Vergi Numarası*</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyTaxNumber" type="text" className="form-control" id="invoiceCompanyTaxNumber" placeholder="Vergi Numarası*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputPassword4" className="form-label">Araç Sayısı*</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/one.svg" height="45%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyCarCount" type="text" className="form-control" id="invoiceCompanyCarCount" placeholder="Araç Sayısı*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputState" className="form-label">İl</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyCity" type="text" className="form-control" id="invoiceCompanyCity" placeholder="İl*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputState" className="form-label">İlçe</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/location.svg" height="50%" className="my-auto px-3" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyTown" type="text" className="form-control" id="invoiceCompanyTown" placeholder="İlçe*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputEmail4" className="form-label">ADINIZ</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyAuthName" type="text" className="form-control" id="invoiceCompanyAuthName" placeholder="Yetkili Kişinin Adı" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputPassword4" className="form-label">SOYADINIZ</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/name.svg" height="45%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyAuthSurname" type="text" className="form-control" id="invoiceCompanyAuthSurname" placeholder="Yetkili Kişinin Soyadı" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputEmail4" className="form-label">TELEFONUNUZ</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/phone-gray.svg" height="45%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyPhone" type="text" className="form-control" id="invoiceCompanyPhone" placeholder="Telefon Numarası" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group mb-3">
                                                <label for="inputPassword4" className="form-label">MAİL ADRESİNİZ</label>
                                                <span className="input-group-text" id="basic-addon1">
                                                    <img src="./assets/icons/@.svg" height="50%" className="my-auto px-2" />
                                                </span>
                                                <input onChange={changeHandler} required name="invoiceCompanyMail" type="text" className="form-control" id="invoiceCompanyMail" placeholder="Mail Adresiniz" />
                                            </div>
                                        </div>

                                        <div className="form-check mt-4 d-flex">
                                            <span className="d-inline mx-auto">
                                                <input onChange={changeHandler} required name="invoiceCompanyDriverLisance" className="form-check-input " type="checkbox" value="" id="invoiceCompanyDriverLisance" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Şoförlü kiralama ve transfer hizmeti teklifi de almak istiyorum.
                                                </label>
                                            </span>
                                        </div>

                                        <div className="mb-3 mt-4">
                                            <label for="exampleFormControlTextarea1" className="form-label">MESAJINIZ</label>
                                            <textarea className="form-control px-5" name="invoiceCompanyMessage" id="invoiceCompanyMessage" placeholder="İLETMEK İSTEDİĞİNİZ MESAJINIZI BURAYA YAZABİLİRSİNİZ." rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </TabPanelForm>
                        </div>
                    </div>

                    <div className="row px-5">
                        <div className="form-policy py-5 px-5 container w-75 mx-auto row">
                            <p className="pb-5"> Kişisel verilerinizin korunması ve işlenmesine ilişkin aydınlatma metni için tıklayınız.</p>
                            <div className="form-check mb-4">
                                <input onChange={changeHandler} required name="" className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Aydınlatma metni kapsamında kişisel verilerimin, pazarlama süreçlerinin planlanması ve icrası amacıyla; Otokoç Otomotiv Ticaret ve Sanayi Anonim Şirketi tarafından sunulan ürün ve hizmetlerin beğenilerime,
                                    kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilmesi için işlenmesini ve bu kapsamda aşağıda belirtilen iletişim bilgilerime reklam, promosyon, kampanya ve benzeri ticari elektronik ileti gönderilmesini ve bu amaçla Şirketin hizmet aldığı tedarikçilerle paylaşılmasını kabul ediyorum.
                                </label>
                            </div>
                            <div className="form-check mb-4">
                                <input onChange={changeHandler} required name="" className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Aydınlatma metni  kapsamında kimlik, iletişim, finansal ve kullanım alışkanlıkları verilerimin, Otokoç Otomotiv Tic. ve San. A.Ş. tarafından sunulan ürün ve hizmetlerin beğeni, kullanım alışkanlıklarıma ve ihtiyaçlarıma göre özelleştirilerek önerilmesi ve bu kapsamda iletişim bilgilerime reklam, promosyon,
                                    kampanya ve benzeri ticari elektronik ileti gönderilmesi  amacıyla Emarsys İletişim Sistemleri Tic. Ltd. Şti aracılığıyla yurt dışında mukim Emarsys eMarketing Systems AG’ye ile paylaşılmasını kabul ediyorum.
                                </label>
                            </div>
                            <button type="button" onClick={() => { sendMail() }} className="btn btn-orange bold px-3 py-2 text-white mx-auto" style={{ width: "30%" }} >
                                <span className="m-auto">REZERVASYONU TAMAMLAMA</span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )

}






