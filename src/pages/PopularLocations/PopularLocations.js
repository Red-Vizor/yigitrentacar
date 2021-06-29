import React from 'react'
import './popularlocations.css'
import PopularLocationsCard from './PopularLocationsCard'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function changeProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function PopularLocations() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="popular-location-area">
            <div className="menu-bar container pt-3" style={{ height: "55px", fontWeight: "bold" }}>
                <p><a href="/" className="text-dark">Anasayfa</a>   / Lokasyonlar</p>
            </div>
            <div className="campaigns-jumbotron position-relative"
                style={{ height: "346px", backgroundImage: "linear-gradient(rgb(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url('./assets/images/jumbotron/locations-jumbotron.png')" }}>
                <h1>POPÜLER LOKASYONLAR</h1>

                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-bar shadow-light" centered>
                    <Tab label="TÜM LOKASYONLAR" {...changeProps(0)} />
                    <Tab label="İSTANBUL" {...changeProps(1)} />
                    <Tab label="İZMİR" {...changeProps(2)} />
                    <Tab label="BODRUM" {...changeProps(3)} />
                </Tabs>
            </div>



            <div className="popular-location-cardpage ">
                <div className="container my-5">
                    <TabPanel value={value} index={0}>
                        <div className="row ">
                            <div className="col-lg-6">
                                <PopularLocationsCard id={1}
                                    metin1="Dünyada önemli ve sayılı müzeler arasında yer alan Bodrum Sualtı Arkeoloji Müzesi, Türkiye’de tek su altı arkeoloji müzesi olma özelliğini taşıyor. Bodrum Kalesi içerisinde yer alan bu müzede, Bodrum ve çevresindeki kazı çalışmalarından çıkarılan eserler ile birlikte su altı kazı araştırmalarından elde edilen kalıntılar sergileniyor."
                                    metin2="Müzenin içerisinde 14 adet sergi salonu bulunuyor ve sergilenen eserlerin çoğu amforalardan oluşuyor. Bu amforaların bazıları, süngercilik mesleğiyle ilgilenenlerin hediyesidir. Amforalar dışında, müzedeki en önemli parçanın batık gemi kalıntısı olduğunu söyleyebiliriz. 1025 yılında batan bir tekneye ait olan bu batık gemi kalıntısı, Serçe Limanı Cam Batığı Salonu’nda sergileniyor ve dünyanın en eski batık gemi kalıntısı olduğu biliniyor."
                                    metin3="İçerisinde daha birçok kalıntıya yer veren müze, Bodrum’da gezilecek yerler listenizde mutlaka olmalı! Sergilenen her salonda, ayrı bir kalıntıya, ayrı bir batığa ve ayrı tarihi dokuya rastlamanız mümkün…"
                                    map="https://goo.gl/maps/nUAudwn7KnYFNGnN6"
                                    workhour="Yaz: 08.30 – 19.00 / Kış: 08.30 – 18.30 **Pazartesi kapalı"
                                    imageName="sualti" imageUrl="./assets/images/locations/sualti6.jpg" head="Bodrum Sualtı Arkeoloji Müzesi" location="Bodrum" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={2}
                                    metin1="Merkeze 25 km mesafede yer alan Bodrum Tuzla Kuş Cenneti, 125 farklı kuş türünü içerisinde barındırıyor. Bodrum Tuzla Kuş Cenneti’nde; allı turna, meke, yaban kazı gibi daha pek çok sayıdaki farklı kuş türünü, yakından inceleme şansı yakalayabilirsiniz. Ayrıca tüm bu kuşlar içerisinde en dikkat çekenin flamingolar olduğunu da belirtmeliyiz. En çok ilgiyi onlar görüyor ki haksız da sayılmazlar"
                                    metin2="Fotoğraf tutkunlarının en çok tercih ettiği, hayvan sevenlerin bir numaralı adresi olan bu yere, Mart ve Nisan aylarında gelmenizi tavsiye ediyoruz. Çünkü bu aylarda kuşların ürüme mevsimi oluyor ve bu zamanlarda danslarıyla birlikte göç hareketlerine tanıklık edebiliyorsunuz. Denk geldiğinizde, fazlasıyla eğlenceli ve keyifli anlar yaşayacağınızdan emin olun!"
                                    metin3="Denk geldiğinizde, fazlasıyla eğlenceli ve keyifli anlar yaşayacağınızdan emin olun!"
                                    map="https://goo.gl/maps/rvoMQY3T1pPN6ijH7"
                                    workhour="Çalışma saatleri: 7/24"
                                    imageName="kus" imageUrl="./assets/images/locations/kus1.jpg" head="Bodrum Tuzla Kuş Cenneti" location="Bodrum" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={3}
                                    metin1="Sanat güneşimiz Müzikleri ile bilinen Zeki Müren, hayatının son dönemlerini Bodrum’daki iki katlı evinde geçiriyordu. Zeki Müren vefat ettikten sonra, yaşadığı bu ev müzeye dönüştürüldü ve Zeki Müren Sanat Müzesi olarak faaliyet göstermeye başladı."
                                    metin2="üzenin ön bahçesinde; Zeki Müren’in arabası ve bronz heykeli bulunuyor, üst katında ise; sahne kostümleri, takıları, tabloları, ödülleri, fotoğrafları ve bunun gibi kişisel eşyalar sergileniyor. Aynı zamanda hayranlarından gelen mektuplara bile bu müzede rastlayabiliyorsunuz.   "
                                    metin3="Zeki Müren’in hayatı ve eserleri ile ilgili belgeleri inceleyerek, onu daha yakından tanıma şansı yakalayabileceğiniz gibi, fotoğraflarını ve sahne kıyafetlerini gördüğünüzde de bir nostalji yaşayacağınızdan eminiz."
                                    map="https://goo.gl/maps/uD4fbNi1Y4nphT1F6"
                                    workhour="Çalışma saatleri: Yaz: 08.00 – 19.00 / Kış: 08.00 – 17.00 **Pazartesi günleri kapalı"
                                    imageName="zekimuren" imageUrl="./assets/images/locations/zekimuren1.jpg" head="Zeki Müren Sanat Müzesi" location="Bodrum" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={4}
                                    metin1="Belgrad Ormanı’nın güneydoğu yönünde; İstanbul Üniversitesi Orman Fakültesi’ne ait olsa da halk tarafından haftanın altı günü ziyaret edilebilen Atatürk Arboretumu var. Bini aşkın bitki türüne sahip bu cennet bahçesi açık ara öne geçiyor."
                                    metin2="Burada ağaçlar, odunsu bitkiler ve renk renk çiçekler bir araya geldiğinde ortaya adeta bir canlı bitki müzesi çıkıyor diyebiliriz. Özellikle çocuklu ailelerin burada hem eğitici hem de keyifli vakit geçirmesi mümkün."
                                    metin3="Arboretum’a ulaşmak için; Bahçeköy’den sonra Kemerburgaz Yolu’nu takip etmeniz gerekiyor. Orman Fakültesi öğrencilerine ücretsiz olan bu doğal güzellikten her kesimden doğa meraklılarının faydalanabilmesi gerçekten de büyük şans."
                                    map="https://goo.gl/maps/j9LLQCVVuEa9btAz8"
                                    workhour="    • 08.30-17.00 / Pazartesi kapalıdır.
                                 Giriş Ücreti: 7,5 TL (Hafta İçi), 20 TL (Hafta Sonu) – Öğrenci: 2,5 TL (Hafta İçi), 7,5 TL (Hafta Sonu)"
                                    imageName="ataturk" imageUrl="./assets/images/locations/ataturk1.jpg" head="Atatürk Arboretumu" location="İstanbul" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={5}
                                    metin1="İstanbul’un Beykoz ilçesinde yer alan Polonezköy; 1994 yılından bu yana bir doğa parkı statüsünde bulunuyor. 3 bin hektarın üzerinde alana yayılan park; benzerleri arasında İstanbul’un en büyüğü olarak gösterilebilir."
                                    metin2="Sabahın erken saatlerinden itibaren kalabalığa kalmadan parktaki yerinizi alabilirsiniz. Bisiklet, koşu, trekking, piknik ve doğa sporları Polonezköy ziyaretçilerinin favorileri arasında sayılıyor."
                                    metin3="Ziyaretiniz boyunca karayemişten fundaya, gürgenden sarıçama kadar onlarca farklı bitki de size eşlik edecek. Polonezköy Tabiat Parkı kapsamındaki tesislerin içinde Sülün-Keklik Üretme İstasyonu ve Geyik-Karaca Üretme İstasyonu da var"
                                    map="https://g.page/tabiat-park-polonezkoy?share"
                                    workhour="Giriş Ücreti: 5 TL – Otomobil Giriş Ücreti: 15 TL"
                                    imageName="polenezkoy" imageUrl="./assets/images/locations/polenezkoy.jpg" head="Polonezköy Tabiat Parkı" location="İstanbul" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={6}
                                    metin1="İstanbul’un göbeğindeki Beşiktaş ilçesinde konumlanan tarihi Yıldız Parkı; doğal güzellikleri kültür turu ile birleştirmek isteyenler için ideal. Parkın bir giriş Çırağan Caddesi üzerinde, diğer girişi ise Palanga Caddesi’nde yer alıyor. Parka ulaşmak için otobüs kullananların da Çırağan durağında inmeleri yerinde olur."
                                    metin2="Parkın içinde bulunan Malta Köşkü ve Çadır Köşkü özellikle kahvaltı keyfi için tercih edilen mekanlar. Hafta sonları sabah saatlerinde buraların dolup taştığını ise söylemeye bile gerek yok"
                                    metin3="Parkı ziyaret edebilmek için herhangi bir gün ya da süre sınırlaması bulunmuyor."
                                    map="https://goo.gl/maps/CpY9S6yacyCks2ak7"
                                    workhour="Giriş ücretsiz"
                                    imageName="yildiz" imageUrl="./assets/images/locations/yildiz1.jpg" head="Yıldız Parkı" location="İstanbul" />
                            </div>

                            <div className="col-lg-6">
                                <PopularLocationsCard id={7}
                                    metin1="1901 yılında II. Abdülhamid’in Osmanlı padişahı olarak tahta çıkışının 25. yıl dönümünü kutlamak adına inşa edilmiş bir yapı olan Saat Kulesi, Konak Meydanı’nda, Valilik binasının karşısında yer alıyor. 25 metre uzunluğunda dört katlı bir yapı olan İzmir Saat Kulesi, Osmanlı saat kuleleri arasında, görünüş açısından en estetik ve en zarif kule olarak kabul ediliyor. Saat Kulesi, günümüzde İzmir’in en önemli ve en ilgi çekici simgeleri arasında gösteriliyor."
                                    metin2=" İzmir gezilecek yerler denildiğinde akla ilk gelen yerlerden biri Konak Meydanı ve meşhur Saat Kulesi’dir. İzmir’de 1974 yılında yaşanan 5,2 büyüklüğündeki depremde hasar almış ve depremin başlangıç anı olan 02.04’te saati durmuş olan kule, 2016 yılını takip eden iki yıl içerisinde yeniden restore edilmiş ve saati çalışır duruma getirilmiştir"
                                    metin3="İzmir’de Saat Kulesi önünde güzel bir hatıra fotoğrafı çektirmeyi unutma!"
                                    map="https://goo.gl/maps/3HV8J5uotWPuhDWH7"
                                    workhour=""
                                    imageName="saat" imageUrl="./assets/images/locations/saat1.jpg" head="İzmir saat kulesi" location="İzmir" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={8}
                                    metin1="Kökleri 1600’lü yıllara kadar dayanan Kemeraltı Çarşısı, İzmir denildiğinde akla ilk gelen simgesel yapılardan biridir. Kurulduğu dönemlerden bu yana önemli bir ticaret merkezi olarak hizmet veren çarşı, günümüzde de bu işlevini sürdürmeye devam ediyor. 5 kilometrelik geniş bir alan yayılan çarşıda, 15 bin iş yeri hizmet veriyor. Kemeraltı Çarşısı, İzmir’in Mezarlıkbaşı semti ile Konak Meydanı arasında yer alıyor."
                                    metin2="zmir gezilecek yerler listesinin ilk sıralarında yerini alan Kemeraltı Çarşısı, dünyanın en eski çarşılarından biri olarak tarihi önem taşıyor. Çarşı içinde 16.yüzyıl mimarisini yansıtan hanlar, hamamlar, camiler, çeşmeler ve tarihi dükkanlar yer alıyor. Kemeraltı Çarşı’sında genel anlamda; tarihi kahveciler, şerbetçiler, kuyumcular, gelinlikçiler, baharatçılar, tarihi restoranlar, hediyelik eşya dükkanları, işportacılar ve hazır giyim mağazaları hizmet veriyor. Ayrıca çarşı alanında 19 han ve 13 cami bulunuyor. Abacıoğlu Hanı ve Tarihi Kızlarağası Hanı ise Kemeraltı Çarşısı’nda ziyaret etmeniz gereken yerlerin başında geliyor."
                                    metin3="Kemeraltı Çarşısı’nda İzmir’in en meşhur midyecilerini bulabileceğin gibi İzmir’e özgü tatlardan biri olan akide şekerinin en lezzetlilerini tatma imkanı elde edebilirsin!"
                                    map="https://goo.gl/maps/oaDAs2XGZkRATita7"
                                    workhour="Çalışma saatleri: 08.00-20.00 *Pazar kapalı"
                                    imageName="kemer" imageUrl="./assets/images/locations/kemer1.jpg" head="Kemeraltı Çarşısı" location="İzmir" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={9}
                                    metin1=" İzmirliler için en popüler buluşma noktalarından biri olan Kordon, Alsancak’ın kıyı şeridinde yer alıyor. Geçmişi 1850’li yıllara kadar dayanan Kordon boyu İzmir Limanı ile Cumhuriyet Meydanı arasındaki kıyı şeridini kapsıyor. Baharın müjdelenmesiyle cıvıl cıvıl bir atmosfere bürünen Kordon Boyu, üniversite öğrencilerinden, çocuklu ailelere, gençlerden, yaşlılara kadar her yaştan insanı içinde barındıran yoğun bir kalabalığa evini açıyor."
                                    metin2="Kafeler, barlar, restoranlar, balık lokantaları, şık mağazalar, yemyeşil çim alanlar ve parklarla döşenmiş uzun bir sahil şeridinden oluşan Kordon Boyu, İzmir’de ‘Kordon’da buluşalım’ kalıbının yerleşmesine vesile olacak kadar popüler bir yerdir. Kordon bir dönemler, cumbalı, mermer merdivenli levanten evlerin, İzmir’e özgü sakız yalıların süslediği bir sahil şeridi olarak; çok eski dönemlerden itibaren İzmir’de hafta sonunun en bilindik noktası oluyor. Zira Kordon’da masmavi denizin, yemyeşil çimlerin ve görenleri kendine hayran bırakan İzmir manzarasının en güzel haliyle tadı çıkarılabiliyor.
                                 Bunun yanı sıra Cumhuriyet Meydanı’nın hemen yanından hareket eden faytonlar, kordon boyunda gezintiye çıkmak için harika bir seçenek oluyor. Bu faytonlar yaz sezonu boyunca 23.00 sularına kadar hizmet veriyor. Çocuklu aileler için de mükemmel bir yer olan Kordon’da çocukların vakit geçirebilecekleri eğlenceli oyun parkları yer alıyor."
                                    metin3="Kordon boyunda gezintiye çıkmak için bisikletleri tercih edebilir, yürüyüş ve bisiklet için özel oluşturulmuş parkurlarda sahilin ve cıvıl cıvıl Kordon atmosferinin tadını çıkarabilirsin. İzmir Otogarı’ndan hareket eden 163 numaralı otobüsler vasıtasıyla, aktarmasız olarak İzmir’in incisi Kordon’a kolayca ulaşabilirsin. Gitmişken Kıbrıs Şehitleri Caddesi, Atatürk Evi Müzesi ve kordonun ilk iskelesi olan Pasaport İskelesi gibi turistik yapıları ve yerleri de görmek istersin diye buraya ekledim!"
                                    map="https://goo.gl/maps/kJCTsDmDJtCCsuKF7"
                                    workhour="Çalışma saatleri: 08.00-20.00 *Pazar kapalı"
                                    imageName="kordon" imageUrl="./assets/images/locations/kordon1.jpg" head="Kordon" location="İzmir" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row">
                            <div className="col-lg-6">
                                <PopularLocationsCard id={4} imageName="ataturk" imageUrl="./assets/images/locations/ataturk1.jpg" head="Atatürk Arboretumu" location="İstanbul" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={5} imageName="polenezkoy" imageUrl="./assets/images/locations/polenezkoy.jpg" head="Polonezköy Tabiat Parkı" location="İstanbul" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={6} imageName="yildiz" imageUrl="./assets/images/locations/yildiz1.jpg" head="Yıldız Parkı" location="İstanbul" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row">
                            <div className="col-lg-6">
                                <PopularLocationsCard id={7} imageName="saat" imageUrl="./assets/images/locations/saat1.jpg" head="İzmir saat kulesi" location="İzmir" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={8} imageName="kemer" imageUrl="./assets/images/locations/kemer1.jpg" head="Kemeraltı Çarşısı" location="İzmir" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={9} imageName="kordon" imageUrl="./assets/images/locations/kordon1.jpg" head="Kordon" location="İzmir" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className="row">
                            <div className="col-lg-6">
                                <PopularLocationsCard id={1} imageName="sualti" imageUrl="./assets/images/locations/sualti6.jpg" head="Bodrum Sualtı Arkeoloji Müzesi" location="Bodrum" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={2} imageName="kus" imageUrl="./assets/images/locations/kus1.jpg" head="Bodrum Tuzla Kuş Cenneti" location="Bodrum" />
                            </div>
                            <div className="col-lg-6">
                                <PopularLocationsCard id={3} imageName="zekimuren" imageUrl="./assets/images/locations/zekimuren1.jpg" head="Zeki Müren Sanat Müzesi" location="Bodrum" />
                            </div>
                        </div>
                    </TabPanel>


                </div>
            </div>

        </div>
    )
}

export default PopularLocations
