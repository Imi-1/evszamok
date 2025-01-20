const array = [
    {
        cell1: "XVI. század", // Időszak
        cell2: "1514",        // Első esemény évszám
        cell3: "Dózsa-féle parasztháború", // Első esemény megnevezése
        cell4: "magyar",      // Tananyag (magyar történelem)
        cell5: "1519-1522",   // Második esemény évszám
        cell6: "Magellán körülhajózza a földet", // Második esemény megnevezése
        cell7: "egyetemes"    // Tananyag (egyetemes történelem)
    },
    {
        cell1: "XVII. század", // Időszak
        cell2: "1664",         // Esemény évszám
        cell3: "vasvári béke", // Esemény megnevezése
        cell4: "magyar",       // Tananyag (magyar történelem)
    },
    {
        cell1: "XVIII. század", // Időszak
        cell2: "1701-1714",     // Első esemény évszám
        cell3: "spanyol örökösödési háború", // Első esemény megnevezése
        cell4: "egyetemes",     // Tananyag (egyetemes történelem)
        cell5: "1703-1711",     // Második esemény évszám
        cell6: "Rákóczi szabadságharc", // Második esemény megnevezése
        cell7: "magyar"         // Tananyag (magyar történelem)
    },
    {
        cell1: "XIX. század",   // Időszak
        cell2: "1812",          // Első esemény évszám
        cell3: "Napóleon oroszországi hadjárata", // Első esemény megnevezése
        cell4: "egyetemes",     // Tananyag (egyetemes történelem)
        cell5: "1809",          // Második esemény évszám
        cell6: "győri csata",   // Második esemény megnevezése
        cell7: "magyar"         // Tananyag (magyar történelem)
    }
];



const table = document.createElement('table'); // Táblázat létrehozása
table.id="tableID"; //Id-t adok a tablenek
document.body.appendChild(table); // Táblázat hozzáadása a dokumentum törzséhez

const tbody = document.createElement('tbody'); // Táblázat törzs részének létrehozása
tbody.id="tbodyID"; //Id-t adok a tbodynak
table.appendChild(tbody); // Törzs hozzáadása a táblázathoz

function createHeader(){

    const headerObj = {
        cell1: "Időszak",  // Az első oszlop neve
        cell2: "Évszám",   // A második oszlop neve
        cell3: "Esemény",   // A harmadik oszlop neve
        cell4: "Tananyag"   // A negyedik oszlop neve
    };
    
    const tableId = document.getElementById("tableID")//Létrehozunk egy új változót, ami a tableID id-jú táblázatot (table) tárolja
    const thead = document.createElement('thead'); // Létrehozom a táblázat fejlécét
    tableId.appendChild(thead); // Hozzáadom a fejlécet a táblázathoz
    
    const headerRow = document.createElement('tr'); // Létrehozok egy sort a fejléc számára
    thead.appendChild(headerRow); // Hozzáadom a sort a táblázat fejlécéhez
    
    for(const i in headerObj){ // Végigiterál a headerObj objektumon
        const headerCell = document.createElement('th'); // Létrehozom a cellát a fejlécben
        headerCell.innerHTML = headerObj[i]; // Beállítom a cella szövegét a tömb segítségével
        headerRow.appendChild(headerCell); // Hozzáadom a cellát a fejléc sorához
    }
}



function renderTable(array){//Függvény létrehozása. Bemeneti paraméter egy tömb lesz, jelen esetben ez az array.
    for (const i in array) { // Iterálunk végig az array elemein
        const row1 = document.createElement('tr'); // Létrehozunk egy új sort
        tbody.appendChild(row1); // Hozzáadjuk az új sort a tbody-hoz
    
        const cell1 = document.createElement('td'); // Létrehozunk egy új cellát az első oszlophoz
        cell1.innerHTML = array[i].cell1; // Beállítjuk a cella tartalmát az array[i].cell1 értékére
        row1.appendChild(cell1); // Hozzáadjuk az első cellát a sorhoz

        const cell2 = document.createElement('td'); // Létrehozunk egy új cellát a második oszlophoz
        cell2.innerHTML = array[i].cell2; // Beállítjuk a cella tartalmát az array[i].cell2 értékére
        row1.appendChild(cell2); // Hozzáadjuk a második cellát a sorhoz
    
        const cell3 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
        cell3.innerHTML = array[i].cell3; // Beállítjuk a cella tartalmát az array[i].cell3 értékére
        row1.appendChild(cell3); // Hozzáadjuk a harmadik cellát a sorhoz

        const cell4 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
        cell4.innerHTML = array[i].cell4; // Beállítjuk a cella tartalmát az array[i].cell4 értékére
        row1.appendChild(cell4); // Hozzáadjuk a harmadik cellát a sorhoz

        if (array[i].cell5 !== undefined && array[i].cell6 !== undefined && array[i].cell7 !== undefined){ // Megnézzük, hogy a valamelyik cella undefiened-e

            cell1.rowSpan = "2"; // Rowspant adunk a cell1-nek

            const row2 = document.createElement('tr'); // Létrehozunk egy új sort
            tbody.appendChild(row2); // Hozzáadjuk az új sort a tbody-hoz

            const cell5 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cell5.innerHTML = array[i].cell5; // Beállítjuk a cella tartalmát az array[i].cell5 értékére
            row2.appendChild(cell5); // Hozzáadjuk a harmadik cellát a sorhoz

            const cell6 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cell6.innerHTML = array[i].cell6; // Beállítjuk a cella tartalmát az array[i].cell6 értékére
            row2.appendChild(cell6); // Hozzáadjuk a harmadik cellát a sorhoz

            const cell7 = document.createElement('td'); // Létrehozunk egy új cellát a harmadik oszlophoz
            cell7.innerHTML = array[i].cell7; // Beállítjuk a cella tartalmát az array[i].cell5 értékére
            row2.appendChild(cell7); // Hozzáadjuk a harmadik cellát a sorhoz
        }
    }
  
}






//generateColgroup() //Függvény meghívása

createHeader() //Függvény meghívása

renderTable(array) //Függvény meghívása

//generateForm()//Függvény meghívása



const form = document.getElementById('form'); // A form elemet kérjük le az ID alapján
form.addEventListener('submit', function(e) { // Eseményfigyelőt adunk a submit eseményre
  e.preventDefault(); // Megakadályozzuk az alapértelmezett form beküldését

  const thisForm = e.currentTarget; // Az esemény által kiváltott formot eltároljuk egy változóban.
  const errorElements = thisForm.querySelectorAll('.error'); // Lekérjük az összes elemet, amely rendelkezik "error" osztállyal.
  for (const i of errorElements) { // Iterálunk az "error" osztályú elemek felett.
      i.innerHTML = ""; // Kitöröljük ezek tartalmát.
  }
  let valid = true; // Kezdőértékként igazra állítjuk a validációs változót.

  // Hozzáadott form elemek ID-ja alapján szerzem meg az értékeket
    const cell1HtmlElement = document.getElementById('korszak'); // Korszak input mezője
    const cell2HtmlElement = document.getElementById('evszam1'); // 1. esemény évszám input mezője
    const cell3HtmlElement = document.getElementById('megnev1'); // 1. esemény megnevezés input mezője
    const cell4HtmlElement = document.getElementById('tan1'); // 1. esemény tananyag select mezője

    const cell5HtmlElement = document.getElementById('evszam2'); // 2. esemény évszám input mezője
    const cell6HtmlElement = document.getElementById('megnev2'); // 2. esemény megnevezés input mezője
    const cell7HtmlElement = document.getElementById('tan2'); // 2. esemény tananyag select mezője

    // A mezők értékeinek összegyűjtése
    const cell1Value = cell1HtmlElement.value; // Korszak értéke
    const cell2Value = cell2HtmlElement.value; // 1. esemény évszáma
    const cell3Value = cell3HtmlElement.value; // 1. esemény megnevezése
    const cell4Value = cell4HtmlElement.value; // 1. esemény tananyaga

    const cell5Value = cell5HtmlElement.value; // 2. esemény évszáma
    const cell6Value = cell6HtmlElement.value; // 2. esemény megnevezése
    const cell7Value = cell7HtmlElement.value; // 2. esemény tananyaga

    if(!validateFormInputFields(cell1HtmlElement, "Kötelező megadni a korszak nevét!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFields(cell2HtmlElement, "Kötelező megadni az esemény évszámát!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFields(cell3HtmlElement, "Kötelező megadni az esemény megnevezését!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFields(cell4HtmlElement, "Kötelező kiválasztani az esemény tananyagát!")){ //Megnézi, hogy a validateFormInputFields false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    //2. esemény

    if(!validateFormInputFieldsExtra(cell5HtmlElement, cell6HtmlElement, cell7HtmlElement,  "Kötelező megadni az esemény évszámát!")){ //Megnézi, hogy a validateFormInputFieldsExtra false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };
    
    if(!validateFormInputFieldsExtra(cell6HtmlElement, cell5HtmlElement, cell7HtmlElement, "Kötelező megadni az esemény megnevezését!")){ //Megnézi, hogy a validateFormInputFieldsExtra false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };

    if(!validateFormInputFieldsExtra(cell7HtmlElement, cell5HtmlElement, cell6HtmlElement, "Kötelező megadni az esemény tananyagát!")){ //Megnézi, hogy a validateFormInputFieldsExtra false értékkel tért-e vissza
    valid = false; // Amennyiben false volt a valid értékét false-ra állítja
    };



    if (valid) { // Ha a valid true
        const newElement = { // Új objektumot hozunk létre az adatokkal
        cell1: cell1Value, // Korszak
        cell2: cell2Value, // 1. esemény évszáma
        cell3: cell3Value, // 1. esemény megnevezése
        cell4: cell4Value, // 1. esemény tananyaga
        cell5: cell5Value, // 2. esemény évszáma
        cell6: cell6Value, // 2. esemény megnevezése
        cell7: cell7Value // 2. esemény tananyaga
        };

        array.push(newElement); // Új objektum hozzáadása az array-hez
        tbody.innerHTML = ''; // Táblázat tartalmának törlése
        renderTable(); // Táblázat újrarenderelése
        thisForm.reset(); // A form mezőinek alaphelyzetbe állítása
    }

});







function validateFormInputFields(inputElement, errormessage){  //Függvény létrehozása 2 bemeneti paraméterrel. Input elem amit validálunk és a hibaüzenet
    let validation = true;  // Kezdőértékként igazra állítjuk a validációs változót
    if(inputElement.value === ""){  // Ellenőrizzük, hogy az input mező üres-e
        const parentElement = inputElement.parentElement;  // Megkeressük az input mező szülőelemét
        const error = parentElement.querySelector('.error');  // Hibát keresünk a szülőelemben
        error.innerHTML = errormessage;  // Beállítjuk a hibaüzenetet
        validation = false;  // Hamisra állítjuk a validációs változót
    }
    return validation;  // Visszaadjuk az érvényességi állapotot
}


function validateFormInputFieldsExtra(inputElement1, inputElement2, inputElement3, errormessage)  {//Függvény létrehozása 3 bemeneti paraméterrel. Input elemek amit validálunk és a hibaüzenet. Mindig az első bemeneti érték a jelenleg ellenőrzött input.
    let validation = true; // Kezdőértékként igazra állítjuk a validációs változót
    if (inputElement1.value !== "" || inputElement2.value !== "" || inputElement3.value !== "") {// Ha legalább egy mező ki van töltve, akkor a többit is ellenőrizzük

        if (inputElement1.value === "" || inputElement2.value === "" || inputElement3.value === "") {// Ha legalább az egyik mező ki van töltve
            // Ha van üres mező a kitöltött mezők mellett, akkor hibaüzenet jelenik meg
            const parentElement = inputElement1.parentElement;  // Megkeressük az első input mező szülőelemét
            const error = parentElement.querySelector('.error'); // Az első input mező szülőelemében keresünk egy "error" osztályú elemet
            error.innerHTML = errormessage; // Beállítjuk a hibaüzenetet
            validation = false; // A validáció hamisra állítása
        }
    }

    //Errormessage törlése ha ki van töltve
    if(inputElement1.value !== ""){  // Ellenőrizzük, hogy az input1 mező üres-e
        const parentElement = inputElement1.parentElement;  // Megkeressük az input mező szülőelemét
        const error = parentElement.querySelector('.error');  // Hibát keresünk a szülőelemben
        error.innerHTML = "";  // Beállítjuk a hibaüzenetet
    }

    return validation; // Visszatérünk a validáció eredményével
}

