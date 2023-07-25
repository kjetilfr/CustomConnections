window.onload = run;

var count = 0;
var category1Name;
var category1;
var category2Name;
var category2;
var category3Name;
var category3;
var category4Name;
var category4;
var amountOfLives;

var lostGame = false;
var selectedItems = [];

function run() {
    document.getElementById("submit").onclick = function() {submitCategory()};
    
    const urlParams = parseUrlParams();
    const encryptedData = decodeURIComponent(urlParams.data);
    if (encryptedData) {
        var decryptedData = decodeURIComponent(urlParams.data);
        decryptedData = decryptData(decryptedData)
        const stringedData = JSON.stringify(decryptedData)
        const jsonDataObject = JSON.parse(stringedData)
        category1 = [decryptedData.category1[1], decryptedData.category1[2], decryptedData.category1[3], decryptedData.category1[4]];
        category2 = [decryptedData.category2[1], decryptedData.category2[2], decryptedData.category2[3], decryptedData.category2[4]];
        category3 = [decryptedData.category3[1], decryptedData.category3[2], decryptedData.category3[3], decryptedData.category3[4]];
        category4 = [decryptedData.category4[1], decryptedData.category4[2], decryptedData.category4[3], decryptedData.category4[4]];
        category1Name = decryptedData.category1[0];
        category2Name = decryptedData.category2[0];
        category3Name = decryptedData.category3[0];
        category4Name = decryptedData.category4[0];

        amountOfLives = parseInt(decryptedData.lives);
        tableCreate()
    } else {
    document.getElementById('titlePage').innerText = 'Invalid or expired link.';
    }
    
    if (urlParams.data) {
      //const decryptedData = decryptData(decodeURIComponent(urlParams.data));
      document.getElementById('receivedData').innerText = `Received Data: ${JSON.stringify(decryptedData)}`;
    } else {
      document.getElementById('receivedData').innerText = 'Invalid or expired link.';
    }
    //Update lives at the bottom
    document.getElementById("amountOfLives").innerText = amountOfLives;
}


function parseUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      key: params.get('key'),
      data: params.get('data'),
    };
}


function decryptData(encryptedData) {
    // Simple decryption function (this is just for illustration purposes, not secure)
    let decryptedData = '';
    for (let i = 0; i < encryptedData.length; i++) {
      decryptedData += String.fromCharCode(encryptedData.charCodeAt(i) - 1);
    }
    return JSON.parse(decryptedData);
}


function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.getElementById("table");
    var tblBody = document.getElementById("tbody");
    
    var allElementsYouCanPickFrom = []

    for (var k = 0; k < 4; k++) {
        allElementsYouCanPickFrom.push(category1[k]);
        allElementsYouCanPickFrom.push(category2[k]);
        allElementsYouCanPickFrom.push(category3[k]);
        allElementsYouCanPickFrom.push(category4[k]);
    }
    console.log(allElementsYouCanPickFrom)

    // cells creation
    for (var j = 0; j < 4; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 0; i < 4; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var cell = document.createElement("td");
            
            var element = Math.floor(Math.random() * allElementsYouCanPickFrom.length)
            var cellText = document.createTextNode(allElementsYouCanPickFrom[element]);
            
            //Removed used element
            allElementsYouCanPickFrom.splice(element, 1)

            cell.appendChild(cellText);
            cell.addEventListener("click",function(){
                selectItem(this)
            });
            
            row.appendChild(cell);
        }
        //row added to end of table body
        tblBody.appendChild(row);
    }
}

function selectItem(cell) {
    //deselect cell
    if (cell.style.backgroundColor != "yellow") {
        if (cell.selected == true) {
        cell.style.backgroundColor = "white";
        cell.selected = false;
        var elementNumb = selectedItems.indexOf(cell)
        console.log(elementNumb)
        selectedItems.splice(elementNumb, 1);
        //select cell
        } else if (selectedItems.length <= 3) {
            cell.style.backgroundColor = "green";
            cell.selected = true;
            selectedItems.push(cell);
        //already at max selected cells
        } else {
            alert("You can only select 4 items")
        }
        console.log(selectedItems)
    }
}

function submitCategory() {
    if (selectedItems.length == 4) {
        allIsInSameCategory(selectedItems)
        var hasLostGame = lostdaGame();
        if (hasLostGame === true && lostGame === false) {
            alert("You lost, you can continue! But I just need you to know you lost.")
            lostGame = true;
        }
    } else {
        alert("Not selected 4 items")
    }
}

function allIsInSameCategory(items) {
    var [categories1, categories2, categories3, categories4] = checkCategories(items);

    if (categories1 == 4 || categories2 == 4 || categories3 == 4 || categories4 == 4) {
        correctCategory();
        if (categories1 === 4) {
            document.getElementById("category1").style.display = "block";
            document.getElementById("category1").innerText = category1Name + ": " + items[0].textContent + ", " + items[1].textContent + ", " + items[2].textContent + ", " + items[3].textContent;
        } else if (categories2 === 4) {
            document.getElementById("category2").style.display = "block";
            document.getElementById("category2").innerText = category2Name + ": " + items[0].textContent + ", " + items[1].textContent + ", " + items[2].textContent + ", " + items[3].textContent;
        } else if (categories3 === 4) {
            document.getElementById("category3").style.display = "block";
            document.getElementById("category3").innerText = category2Name + ": " + items[0].textContent + ", " + items[1].textContent + ", " + items[2].textContent + ", " + items[3].textContent;
        } else if (categories4 === 4) {
            document.getElementById("category4").style.display = "block";
            document.getElementById("category4").innerText = category2Name + ": " + items[0].textContent + ", " + items[1].textContent + ", " + items[2].textContent + ", " + items[3].textContent;
        }
        var amountCorrect = 0;
        let i = 0;
        var elements = document.getElementsByTagName("td");
        while (i < elements.length) {
            if (elements[i].style.backgroundColor === "yellow") {
                amountCorrect ++;
            }
            i++;
        }
        if (amountCorrect === 16) {
            victory();
        }
        amountCorrect = 0;
    } else if (categories1 == 3 || categories2 == 3 || categories3 == 3 || categories4 == 3) {
        minus1Life();
        alert("One away")
        deselectWrongGuess()
    } else {
        deselectWrongGuess()
        minus1Life();
    }
}

function checkCategories(items) {
    var elemsFoundCategory1 = 0;
    var elemsFoundCategory2 = 0;
    var elemsFoundCategory3 = 0;
    var elemsFoundCategory4 = 0;
    for (var i = 0; i < items.length; i++) {
        if (category1.includes(items[i].textContent)) {
            elemsFoundCategory1 ++;
        }
    }
    for (var i = 0; i < items.length; i++) {
        if (category2.includes(items[i].textContent)) {
            elemsFoundCategory2 ++;
        }
    }
    for (var i = 0; i < items.length; i++) {
        if (category3.includes(items[i].textContent)) {
            elemsFoundCategory3 ++;
        }
    }
    for (var i = 0; i < items.length; i++) {
        if (category4.includes(items[i].textContent)) {
            elemsFoundCategory4 ++;
        }
    }
    return [elemsFoundCategory1, elemsFoundCategory2, elemsFoundCategory3, elemsFoundCategory4];
}

function deselectWrongGuess() {
    for (var i = 0; i < selectedItems.length; i++) {
        selectedItems[i].style.backgroundColor = "white";
        selectedItems[i].selected = false;
    }
    selectedItems = [];
}

function minus1Life() {
    amountOfLives --;
    document.getElementById("amountOfLives").innerText = amountOfLives;
}

function lostdaGame() {
    if (amountOfLives <= 0) {
        return true;
    } else {
        return false;
    }
}

function correctCategory() {
    for (var i = 0; i < selectedItems.length; i++) {
        selectedItems[i].style.backgroundColor = "yellow";
        selectedItems[i].disabled = true;
        selectedItems[i].selected = false;
    }
    selectedItems = [];
}

function victory() {
    alert("YOU ARE VICTORIOUS!")
}