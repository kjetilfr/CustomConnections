var category1;
var category2;
var category3;
var category4;
//var category1 = ["Milk", "Water", "Coffee", "Tea"]
//var category2 = ["Volvo", "Nissan", "Merzedes", "BMW"]
//var category3 = ["League of legends", "Dota2", "CS:GO", "Smite"]
//var category4 = ["Staff", "Longsword", "Bow", "Crossbow"]

function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return params.get('key');
}

function decryptData(encryptedData) {
  // Simple decryption function (this is just for illustration purposes, not secure)
  let decryptedData = '';
  for (let i = 0; i < encryptedData.length; i++) {
    decryptedData += String.fromCharCode(encryptedData.charCodeAt(i) - 1);
  }
  return JSON.parse(decryptedData);
}

const shortKey = parseUrlParams();
const encryptedData = localStorage.getItem(shortKey);
if (encryptedData) {
    const decryptedData = decryptData(encryptedData);
    const stringedData = JSON.stringify(decryptedData)
    const jsonDataObject = JSON.parse(stringedData)
    document.getElementById('receivedData').innerHTML = `Received Data: ${JSON.stringify(decryptedData)}`;
    document.getElementById('data1').innerText = decryptedData.firstName;
    category1 = [decryptedData.category1[1], decryptedData.category1[2], decryptedData.category1[3], decryptedData.category1[4]];
    category2 = [decryptedData.category2[1], decryptedData.category2[2], decryptedData.category2[3], decryptedData.category2[4]];
    category3 = [decryptedData.category3[1], decryptedData.category3[2], decryptedData.category3[3], decryptedData.category3[4]];
    category4 = [decryptedData.category4[1], decryptedData.category4[2], decryptedData.category4[3], decryptedData.category4[4]];
    tableCreate()
} else {
  document.getElementById('receivedData').innerText = 'Invalid or expired link.';
}

function tableCreate() {
    //body reference 
    var body = document.getElementsByTagName("body")[0];

    // create elements <table> and a <tbody>
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
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

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody);
    // put <table> in the <body>
    body.appendChild(tbl);
    // tbl border attribute to 
    tbl.setAttribute("border", "2");
}

var selectedItems = [];

function selectItem(cell) {
    if (cell.selected == true) {
        cell.style.backgroundColor = "white";
        cell.selected = false;
        selectedItems.slice(selectedItems.indexOf(cell), 1);
    } else if (selectedItems.length <= 3) {
        cell.style.backgroundColor = "green";
        cell.selected = true;
        selectedItems.push(cell);
    } else {
        alert("You can only select 4 items")
    }
    console.log(selectedItems)
}