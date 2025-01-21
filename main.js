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


generateColgroup() //Függvény meghívása

createHeader() //Függvény meghívása

renderTable(array) //Függvény meghívása

generateForm()//Függvény meghívása


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

    //Ha "" lenne az értéka akkor undefined lesz
    const cell5Value = cell5HtmlElement.value === '' ? undefined : cell5HtmlElement.value; // 2. esemény évszáma
    const cell6Value = cell6HtmlElement.value === '' ? undefined : cell6HtmlElement.value; // 2. esemény megnevezése
    const cell7Value = cell7HtmlElement.value === '' ? undefined : cell7HtmlElement.value; // 2. esemény tananyaga


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
        renderTable(array); // Táblázat újrarenderelése
        thisForm.reset(); // A form mezőinek alaphelyzetbe állítása
    }

});