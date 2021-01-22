
let arabicNumbersTranslator = {0:"٠",1:"١", 2:"٢", 3:"٣", 4:"٤", 5:"٥", 6:"٦", 7:"٧", 8:"٨", 9:"٩"}
let suraParagraph = document.getElementById("sura");
let suraText = buildSuraText(altarik);


//<span style="color: gold;">&#xFD3F;١&#xFD3E;</span>
function buildSuraText(data) {
    let result = "";
     data.forEach((ayah,index) => {
        let num = getArabicNumber(index+1);
        result+=ayah + `<span style='color: #daa520;'>&#xFD3F;${num}&#xFD3E;</span>`
    });
    return result+"<span style='opacity:0.0'>0</span>";
}

function getArabicNumber(number) {
    let result = "";
    number = String(number);
    console.log(number.length);
    for(let i=0; i< number.length; i++) {
        let digit =  number[i];
        result += arabicNumbersTranslator[digit];
    }
    return result;
}

suraParagraph.innerHTML = suraText;