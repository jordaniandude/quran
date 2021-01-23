function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function buildSuraText(data) {
    let result = "";
     data.forEach((ayah,index) => {
        let num = getArabicNumber(index+1);
        result+=ayah + `<span style='color: #daa520;'>&#xFD3F;${num}&#xFD3E;</span>`
    });
    return result+"<span style='opacity:0.0'>0</span>";
}

let suraParagraph = document.getElementById("sura");
const id = getParameterByName("id");
let suraText = buildSuraText(QURAN[id]);
suraParagraph.innerHTML = suraText;

let h1 = document.getElementById("sura-name");

h1.innerHTML = "سورة "+getSuraName(id);
