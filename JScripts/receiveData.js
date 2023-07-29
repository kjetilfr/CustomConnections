var count = 0;
var category1Name;
var category1Color;
var category1;
var category2Name;
var category2Color;
var category2;
var category3Name;
var category3Color;
var category3;
var category4Name;
var category4Color;
var category4;
var amountOfLives;

var correctCats = 0;
var cellNb = 0;

var lostGame = false;
//var selectedItems = [];

function runData() {
    const urlParams = parseUrlParams();
    const encryptedData = decodeURIComponent(urlParams.data);
    console.log(encryptedData);
    if (encryptedData) {
        var decryptedData = decodeURIComponent(urlParams.data);
        decryptedData = decryptData(decryptedData)
        category1 = [decryptedData.category1[1], decryptedData.category1[2], decryptedData.category1[3], decryptedData.category1[4]];
        category2 = [decryptedData.category2[1], decryptedData.category2[2], decryptedData.category2[3], decryptedData.category2[4]];
        category3 = [decryptedData.category3[1], decryptedData.category3[2], decryptedData.category3[3], decryptedData.category3[4]];
        category4 = [decryptedData.category4[1], decryptedData.category4[2], decryptedData.category4[3], decryptedData.category4[4]];
        category1Name = decryptedData.category1[0];
        category1Color = getHashColor(decryptedData.category1Color);
        category2Name = decryptedData.category2[0];
        category2Color = getHashColor(decryptedData.category2Color);
        category3Name = decryptedData.category3[0];
        category3Color = getHashColor(decryptedData.category3Color);
        category4Name = decryptedData.category4[0];
        category4Color = getHashColor(decryptedData.category4Color);
        amountOfLives = parseInt(decryptedData.lives);
        tableCreate()
    } else {
    document.getElementById('titlePage').innerText = 'Invalid or expired link.';
    }
    //Update lives at the bottom
    document.getElementById("amountOfLives").innerText = amountOfLives;
}

function getHashColor(normColor) {
    if (normColor === "yellow") {
        return "#FBD400";
    } else if (normColor === "green") {
        return "#B5E352";
    } else if (normColor === "blue") {
        return "#729EEB";
    } else if (normColor === "purple") {
        return "#BC70C4";
    }
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
    // create elements <table> and a <tbody>
    var grid = document.getElementById("grid");
    
    var allElementsYouCanPickFrom = []

    for (var k = 0; k < 4; k++) {
        allElementsYouCanPickFrom.push(category1[k]);
        allElementsYouCanPickFrom.push(category2[k]);
        allElementsYouCanPickFrom.push(category3[k]);
        allElementsYouCanPickFrom.push(category4[k]);
    }
    
    // cells creation
    for (var j = 0; j < 4; j++) {
        // table row creation
        //var row = document.createElement("row");

        for (var i = 0; i < 4; i++) {
            // create element <td> and text node 
            //Make text node the contents of <td> element
            // put <td> at end of the table row
            var div = document.createElement("div");
            div.classList.add("item");
            var element = Math.floor(Math.random() * allElementsYouCanPickFrom.length)
            var divText = document.createTextNode(allElementsYouCanPickFrom[element]);
            //console.log(category1);
                if (allElementsYouCanPickFrom[element] === category1[i]) {
                    div.dataset.difficulty = category1Color;
                    div.dataset.category = category1Name;
                } else if (allElementsYouCanPickFrom[element] === category2[i]) {
                    div.dataset.difficulty = category2Color;
                    div.dataset.category = category2Name;
                } else if (allElementsYouCanPickFrom[element] === category3[i]) {
                    div.dataset.difficulty = category3Color;
                    div.dataset.category = category3Name;
                } else if (allElementsYouCanPickFrom[element] === category4[i]) {
                    div.dataset.difficulty = category4Color;
                    div.dataset.category = category4Name;
                }
            
            
            //Removed used element
            allElementsYouCanPickFrom.splice(element, 1)

            div.appendChild(divText);
            //cell.addEventListener("click",function(){
            //    selectItem(this)
            //});
            
            grid.appendChild(div);
        }
        //row added to end of table body
        //grid.appendChild(row);
    }
}