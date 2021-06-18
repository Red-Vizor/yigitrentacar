import React from 'react'
import { OfficesCard , ContactForm} from '../../Components'

export default function Contact() {
    return (
        <section className="contact-page">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa /  İletişim</p>
            </div>

            <div className="contact-jumbotron text-center position-relative pb-5" >
                <h4 className="py-3 bold">İLETİŞİM</h4>
            </div>
            <div className="container-fluid w-100 bg-image" style={{ height: "370px", backgroundImage: "url(./assets/images/contact.png)" }}> </div>
            <div className="py-5 px-5 bg-black container-fluid" >
                <div className="offices-list px-5 py-4 mx-4">
                    <div className="row mx-auto w-100">
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
            </div>
            <div className="container">
                <div className="mx-auto w-75 shadow-light py-3">

                </div>
                <ContactForm />
            </div>
        </section>
    )
}
