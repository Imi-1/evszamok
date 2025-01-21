/**
 * Létrehozza a <colgroup> elemet és hozzáadja a táblázathoz.
 */
function generateColgroup(){
    const tableId = document.getElementById("tableID")//Létrehozunk egy új változót, ami a tableID id-jú táblázatot (table) tárolja
    const colgroup = document.createElement('colgroup');  // Létrehozza a <colgroup> elemet
    tableId.appendChild(colgroup);  // Hozzáadja a <colgroup> elemet a táblázathoz

    for(let i = 0; i < 3; i++){  // Három oszlopot hoz létre a colgroup számára
        const col = document.createElement('col');  // Létrehozza a <col> elemet

        col.className = (i === 0 || i === 2) ? "colored-column" : "";  // A megfelelő indexeknél hozzáadja a "colored-column" osztályt

        colgroup.appendChild(col);  // Hozzáadja a <col> elemet a <colgroup> elemhez
    }
}


/**
 * Létrehozza a táblázat fejlécét a megadott címek alapján.
 */
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


/**
 * Létrehozza a táblázat sorait és celláit az array paraméter alapján.
 * Ha van megfelelő adat a második sorhoz, azt is létrehozza.
 * 
 * @param {Array} array - A táblázat sorainak adatait tartalmazó tömb. 
 */
function renderTable(array){//Függvény létrehozása. Bemeneti paraméter egy tömb lesz, jelen esetben ez az array.
    for (const i in array) { // Iterálunk végig az array elemein
        const row1 = document.createElement('tr'); // Létrehozunk egy új sort
        const tbodyId=document.getElementById("tbodyID");//Létrehozunk egy új változót, ami a tbodyID id-jú táblázat fejlécét tárolja
        tbodyId.appendChild(row1); // Hozzáadjuk az új sort a tbody-hoz
    
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

        if (array[i].cell5 !== undefined && array[i].cell6 !== undefined && array[i].cell7 !== undefined){// Megnézzük, hogy a valamelyik cella undefiened-e

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



/**
 * Validálja az input mezőt, és ha az üres, hibaüzenetet jelenít meg.
 * 
 * @param {HTMLElement} inputElement - Az input mező, amelyet validálni kell.
 * @param {string} errormessage - A hibaüzenet, amely akkor jelenik meg, ha az input mező üres.
 * @returns {boolean} - Visszaadja, hogy a validáció sikeres volt-e (true/false).
 */
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

/**
 * Validálja a három input mezőt. Ha bármelyik mező ki van töltve, a többi mezőt is ellenőrzi.
 * Ha valamelyik mező üres, hibaüzenetet jelenít meg.
 * 
 * @param {HTMLElement} inputElement1 - Az első input mező.
 * @param {HTMLElement} inputElement2 - A második input mező.
 * @param {HTMLElement} inputElement3 - A harmadik input mező.
 * @param {string} errormessage - A hibaüzenet, amely akkor jelenik meg, ha valamelyik mező üres.
 * @returns {boolean} - Visszaadja, hogy a validáció sikeres volt-e (true/false).
 */
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

/**
 * Létrehozza a <label> elemet a megadott címkével és az input elem id-jével.
 * 
 * @param {string} labelText - A <label> szövege.
 * @param {string} htmlFor - Az input elem id-ja, amelyhez a label tartozik.
 * @returns {HTMLElement} - A létrehozott <label> elem.
 */
function createLabel(labelText, htmlFor) { // Létrehozza a label elemet, amely tartalmazza a címkét és hozzárendeli az input mezőhöz
    const label = document.createElement('label'); // Létrehoz egy <label> elemet
    label.textContent = labelText; // Beállítja a label szövegét
    label.htmlFor = htmlFor; // Beállítja a "for" attribútumot, amely összekapcsolja a label-t és az inputot
    return label; // Visszaadja a létrehozott label elemet
}

/**
 * Létrehozza az <input> elemet a megadott típus, id és név alapján.
 * 
 * @param {string} inputType - Az input elem típusa
 * @param {string} inputId - Az input elem id-ja.
 * @param {string} inputName - Az input elem neve.
 * @returns {HTMLElement} - A létrehozott <input> elem.
 */
function createInput(inputType, inputId, inputName) { // Létrehozza az input elemet
    const input = document.createElement('input'); // Létrehoz egy <input> elemet
    input.type = inputType; // Beállítja az input típusát
    input.id = inputId; // Beállítja az input id-jét
    input.name = inputName; // Beállítja az input nevét
    return input; // Visszaadja a létrehozott input elemet
}

/**
 * Létrehozza a <select> elemet a megadott id, név és opciók alapján.
 * 
 * @param {string} selectId - A <select> elem id-ja.
 * @param {string} selectName - A <select> elem neve.
 * @param {Array} options - A legördülő lista opciói.
 * @returns {HTMLElement} - A létrehozott <select> elem.
 */
function createSelect(selectId, selectName, options) { // Létrehozza a select elemet és annak opcióit
    const select = document.createElement('select'); // Létrehoz egy <select> elemet
    select.id = selectId; // Beállítja az id-t
    select.name = selectName; // Beállítja a name attribútumot

    // Végigmegy az opciók listáján és hozzáadja őket a select elemhez
    for (const i of options) {
        const option = document.createElement('option'); // Létrehoz egy <option> elemet
        option.value = i.value; // Beállítja az opció értékét
        option.textContent = i.textContent; // Beállítja az opció szövegét
        select.appendChild(option); // Hozzáadja az opciót a <select>-hez
    }

    return select; // Visszaadja a létrehozott select elemet
}

/**
 * Létrehozza a hibát jelző <div> elemet, amely az "error" osztályú.
 * 
 * @returns {HTMLElement} - A létrehozott hibajelző <div> elem.
 */
function createErrorDiv() { // Létrehozza és visszaadja a hibát jelző div elemet
    const errorDiv = document.createElement('div'); // Létrehoz egy <div> elemet
    errorDiv.className = 'error'; // Beállítja az osztály nevét
    return errorDiv; // Visszaadja a hibadiv-et
}

/**
 * Létrehozza a formot az egyes mezők és a submit gomb hozzáadásával.
 */
function generateForm() { // Generálja a formot a mezők és a gombok hozzáadásával
    const form = document.createElement('form'); // Létrehoz egy új <form> elemet
    form.id = 'form'; // Beállítja a form id-ját
    form.action = '#'; // Beállítja a form action tulajdonságát (itt #, azaz nem küld el adatokat sehova)

    // A mezők adatai, minden mező egy objektum, amely tartalmazza a szükséges információkat
    const fields = [
        {
            label: 'Korszak megnevezés:', // A mező címkéje
            id: 'korszak', // Az input mező id-ja
            name: 'korszak', // Az input mező neve
            type: 'text' // Az input mező típusa (szöveg típusú)
        },
        {
            label: '1. esemény évszám:', // A mező címkéje
            id: 'evszam1', // Az input mező id-ja
            name: 'evszam1', // Az input mező neve
            type: 'text' // Az input mező típusa (szöveg típusú)
        },
        {
            label: '1. esemény megnevezés:', // A mező címkéje
            id: 'megnev1', // Az input mező id-ja
            name: 'megnev1', // Az input mező neve
            type: 'text' // Az input mező típusa (szöveg típusú)
        },
        {
            label: '1. esemény tananyag:', // A mező címkéje
            id: 'tan1', // Az input mező id-ja
            name: 'tan1', // Az input mező neve
            type: 'select', // A mező típusa (legördülő lista)
            options: [
                {
                    value: '', // Az opció értéke üres
                    textContent: '' // Az opció szövege üres
                },
                {
                    value: 'magyar', // Az űrlap elküldésekor "magyar" értéket fog visszaadni
                    textContent: 'Magyar történelem' // Az opció megjelenő szövege a felhasználónak
                },
                {
                    value: 'egyetemes', // Az űrlap elküldésekor "egyetemes" értéket fog visszaadni
                    textContent: 'Egyetemes történelem' // Az opció megjelenő szövege a felhasználónak
                }
            ]
        },
        {
            label: '2. esemény évszám:', // A mező címkéje
            id: 'evszam2', // Az input mező id-ja
            name: 'evszam2', // Az input mező neve
            type: 'text' // Az input mező típusa (szöveg típusú)
        },
        {
            label: '2. esemény megnevezés:', // A mező címkéje
            id: 'megnev2', // Az input mező id-ja
            name: 'megnev2', // Az input mező neve
            type: 'text' // Az input mező típusa (szöveg típusú)
        },
        {
            label: '2. esemény tananyag:', // A mező címkéje
            id: 'tan2', // Az input mező id-ja
            name: 'tan2', // Az input mező neve
            type: 'select', // A mező típusa (legördülő lista)
            options: [
                {
                    value: '', // Az opció értéke üres
                    textContent: '' // Az opció szövege üres
                },
                {
                    value: 'magyar', // Az űrlap elküldésekor "magyar" értéket fog visszaadni
                    textContent: 'Magyar történelem' // Az opció megjelenő szövege a felhasználónak
                },
                {
                    value: 'egyetemes', // Az űrlap elküldésekor "egyetemes" értéket fog visszaadni
                    textContent: 'Egyetemes történelem' // Az opció megjelenő szövege a felhasználónak
                }
            ]
            
        }
    ];

    
    for (const i of fields) {  // Végigiterálunk a fields tömbön
        const fieldDiv = document.createElement('div'); // Létrehoz egy div-et a mezőhöz
        fieldDiv.className = 'field'; // Beállítja az osztály nevét

        // Létrehozza a label-t és hozzáadja
        const label = createLabel(i.label, i.id);
        fieldDiv.appendChild(label);

        fieldDiv.appendChild(document.createElement('br')); // Sortörés

        
        if (i.type === 'select') { // Létrehozza az inputot vagy selectet, és hozzáadja
            const select = createSelect(i.id, i.name, i.options);
            fieldDiv.appendChild(select); // Ha select, akkor hozzáadjuk a selectet
        } else {
            const input = createInput(i.type, i.id, i.name);
            fieldDiv.appendChild(input); // Ha nem select, akkor hozzáadjuk az inputot
        }

        fieldDiv.appendChild(document.createElement('br')); // Sortörés
        fieldDiv.appendChild(document.createElement('br')); // További sortörés

        // Létrehozza és hozzáadja a hibadiv-et
        const errorDiv = createErrorDiv();
        fieldDiv.appendChild(errorDiv);

        form.appendChild(fieldDiv); // Hozzáadja a mező div-et a formhoz
    }

    // Létrehozza a submit gombot és hozzáadja a formhoz
    const button = document.createElement('button');
    button.type = 'submit'; // Beállítja a gomb típusát submit-ra
    button.textContent = 'Hozzáadás'; // Beállítja a gomb szövegét
    form.appendChild(button);

    document.body.appendChild(form); // Hozzáadja a formot a body-hoz
}
