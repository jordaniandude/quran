const ARABIC_NUMBERS_MAP = {0:"٠",1:"١", 2:"٢", 3:"٣", 4:"٤", 5:"٥", 6:"٦", 7:"٧", 8:"٨", 9:"٩"}

function getSuraName(id) {
    return  SURAS.find(sura => sura.id === id).name;
}

function getArabicNumber(number) {
    let result = "";
    number = String(number);
    for(let i=0; i< number.length; i++) {
        let digit =  number[i];
        result += ARABIC_NUMBERS_MAP[digit];
    }
    return result;
}