
let surasTable = document.getElementById("suras");
SURAS.forEach(sura => {
    let tr = document.createElement("tr");
    let tdNumber = document.createElement("td");
    let tdName = document.createElement("td");
    let tdAyat = document.createElement("td");
    let tdType = document.createElement("td");

    tdNumber.innerHTML = getArabicNumber(sura.id);
    tdName.innerHTML = sura.name;
    tdAyat.innerHTML = sura.ayat;
    tdType.innerHTML = sura.type;
    tr.appendChild(tdType);
    tr.appendChild(tdAyat);
    tr.appendChild(tdName);
    tr.appendChild(tdNumber);
    tr.addEventListener("click", ()=> {
        window.location = "./index.html?id="+sura.id;
    })
    surasTable.appendChild(tr);
});

function searchSuras() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value;
    table = document.getElementById("suras");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }