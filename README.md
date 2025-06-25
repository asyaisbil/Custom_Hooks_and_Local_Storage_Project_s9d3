Görev 1: Login Sayfasında UX Geliştirmesi
0%
Kullanıcıları sürekli login tutmak güvenlik sorunları oluşturabiliyor. Sürekli login olmalarını istemek de kullanıclar tarafından beğenilmiyor.

Kullanıcı deneyimini(UX) iyileştirmek ve güvenlik sorununu yol açmamak için:

kayıtlı olan kullanıcının email adresini localStorage'da tutabiliriz. (password değil dikkat!).
input alanlarının autoFocus attribute'unu kullanarak, doldurulacak input alanına mouse ile tıklamadan direk yazmaya başlamalarını sağlayabiliriz.
Örnek: Kullanıcı sayfaya ilk kez giriş yapacak ise autoFocus email input'unda form açılabilir. Eğer, kullanıcı daha önce giriş yapmış ve email adresi localStorage'da kayıtlı ise email alanı bu email ile dolu gelebilir, autoFocus password alanında iken form açılabilir.

Daha önce yaptığın alışveriş sitesinde bunu uygulamak istiyorsun. Hem emaili localStorage'da tutacaksın hem de kayıtlı email'e göre autoFocus'u email veya password input'una alacaksın.

[ ] öncelikle başarılı login işleminde localStorage'a email key'i ile email adresini kaydetmelisin.
[ ] sayfa yüklenirken initialForm bilgileri boş string. eğer localStorage'da email key'ine karşılık gelen bir değer varsa email alanını bu bilgi ile başlatabilirsin.
[ ] hem email, hem de password alanına autoFocus attibute'u ekleyebilir, bunların true veya false olmasını localStorage'daki email key'inin değerine bağlı oluşmasını sağlayabilirsin.

İpucu: input alanlarındaki autofocus attribute'una w3schools'dan bakabilirsin.
Çalışma dosyaları: src/components-1/Login.jsx




Gün Projesi: DarkMode localStorage kaydı
0%
Bir yatırım firması için yapılan bir uygulamada, kullanıcı deneyimini artırmak için -son zamanların popüler özelliği- darkMode'u eklemek istiyorlar.

UI tarafı ve css'leri projeye eklenmiş durumda. Yapılan ayarın kayıtlı kalması için backend geliştirilmesi yapılıyor. Ama, client tarafında da localstorage ile ayarların browserda saklanması bekleniyor.

Öncelikle, projeyi test ederken darkMode switch'inin düzgün çalışmadığını fark ettin. Bu switch App.jsx'deki geceModu state'ini güncelliyor ama App class'ı eklenmiş div'e dark-mode classını ekleyip çıkarmıyor. [ ] Bunu düzelterek başlayabilirsin.

Proje planında görevler paylaştırıldı ve sana şu görevler düşüyor: [ ] src klasörünün altında hooks adıyla bir klasör oluşturmak,
[ ] içinde useLocalStorage.jsx dosya ismiyle bir custom hook oluşturmak. Bu hook;

(1) 2 argüman almalı: key ve başlangıç değeri.
(2) eğer localStorage'da bu key'e karşılık kayıtlı bir değer varsa onu, yoksa başlangıç değerini kullanmalı.
(3) localStorage'da tutulan değeri ve onu güncelleyecek bir metodu dönmeli.
[ ] hooks klasörü içinde useDarkMode.jsx dosya ismi ile custom hook oluşturmak.

(1) Bu hook, useState gibi çalışmalı ve darkMode ayarını useLocalStorage hook'unu kullanarak localStorage üzerinden yönetmeli.
Çalışma dosyaları: src/hooks/useDarkMode.jsx, src/hooks/useLocalStorage.jsx, src/App.jsx