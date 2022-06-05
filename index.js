$(document).ready(function(){
    var proje = {
        "ad" : null,
        "projesahibi": null,
        "konusu" : null
    };

    var veri = JSON.stringify(proje);
    var jsonVeri = JSON.parse(veri);
    
    var sayac = 1;

    $("#pBtn").click(function(){
        jsonVeri.ad = $("#pAdi").val();
        jsonVeri.projesahibi = $("#pSahibi").val();
        jsonVeri.konusu = $("#konu").val();

        var satir = "<tr>";

        satir += "<th>" + (sayac++) + "</th>";
        satir += "<td>" + jsonVeri.ad + "</td>";
        satir += "<td>" + jsonVeri.projesahibi + "</td>";
        satir += "<td>" + jsonVeri.konusu + "</td>";

        satir += "</tr>";

        $("#tablo").append(satir);
    });
});