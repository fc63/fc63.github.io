Github pages üzerinde statik bir şekilde yer alan, javascript ile backenddeki c-sqlite3 server ile iletişim kuran, serverdan cevap alamadığında server kapalı sayfası döndüren, server açıksa login page döndüren, login pageten sonra uygulama içindeki diğer sayfaları kullanıcıya sunan bir proje uktesi.

bütün sayfalar statik olarak javascript kodunun içerisinde yer alacak, script serverdan hangi sayfayı döndüreceği bilgisini alacak ve ona göre ilgili sayfayı kullanıcıya gösterecek. döndürülen sayfada kullanıcıya gösterilmesi gereken kullanıcı bilgileri vs. backend serverda sql'de tutulacak ve sayfa döndürüldükten sonra javascript bu bilgileri serverdan isteyecek, aldığı cevaba göre bu bilgileri kullanıcıya gösterecek vs. vs.

![Onizleme Yuklenemedi](https://fc63.github.io/onizleme.png)
