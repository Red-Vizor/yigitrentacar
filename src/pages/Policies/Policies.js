import React from 'react'

function Policies() {
    return (
        <div className="policies">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p>Anasayfa /  Koşullar, Şartlar ve Politikalar</p>
            </div>

            <div className="policies-jumbotron text-center" style={{ height: "120px", fontWeight: "bold", backgroundColor:"#CCCCCC" }}>
                <h4>KOŞULLAR, ŞARTLAR ve POLİTİKALAR</h4>
                <ul className="nav nav-pills nav-fill container policies-tabs" style={{fontWeight: "bold", backgroundColor:"#FFF" }}>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">GİZLİLİK POLİTİKASI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">KİRALAMA KOŞULLARI</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">AYDINLATMA METNİ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"  >ÜYELİK SÖZLEŞMESİ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >KİŞİSEL VERİLEN KORUNMASI</a>
                    </li>
                </ul>
            </div>









        </div>
    )
}

export default Policies
