
// 1-Bakiye görüntüleme
// 2-Para çekme
// 3-Para yatırma
// 4-Çıkış



// ATM UYGULAMASI

let yeniSatir = "\r\n";

let metin = "1-Bakiye görüntüleme" +yeniSatir
+"2-Para çekme" +yeniSatir
+"3-Para yatırma" +yeniSatir
+"4-Çıkış" +yeniSatir
+"Lütfen seçim yapınız";



let secim = prompt(metin);

switch (secim) {
    case "1":
        (alert)("bakiyeniz : " + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz :"));
        if(cekilecekTutar<bakiye) {

        }else{
            alert("Bakiyenizden fazla para çekemezsiniz!"+yeniSatir
            +"Bakiyeniz : "+bakiye + " " + "Cekilecek Tutar : " + cekilecekTutar)
        }
        break;
    case "3":
        let yatirilacakTutar = Number(prompt("Yatırılacak tutarı giriniz :"));
        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel bakiyeniz:" + bakiye);
        break;
        
        
     case "4":
        alert("Sistemden çıkışınız yapıldı")
        break;
        
        default:
           alert(Lütfen 1-4 arasında değer giriniz!);
            break;
           
}