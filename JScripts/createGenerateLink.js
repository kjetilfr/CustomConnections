function generateLinkWithKeyAndData() {
    const data = getData();
    const encryptedData = encryptData(data);
    const shortKey = generateShortKey();
    const baseUrl = "https://kjetilfr.github.io/CustomConnections/"; // Change this to your actual domain
    const link = `${baseUrl}/receive.html?key=${shortKey}&data=${encodeURIComponent(encryptedData)}`;
    const code = `key=${shortKey}&data=${encodeURIComponent(encryptedData)}`;
    document.getElementById('generatedLinkPreText').innerText = `Link: `;
    document.getElementById('generatedLink').innerText = link;
    document.getElementById('generatedCodePreText').innerText = `Code: `;
    document.getElementById('generatedCode').innerText = code;
  }
  
function encryptData(data) {
    // Simple encryption function (this is just for illustration purposes, not secure)
    const jsonString = JSON.stringify(data);
    let encryptedData = '';
    for (let i = 0; i < jsonString.length; i++) {
      encryptedData += String.fromCharCode(jsonString.charCodeAt(i) + 1);
    }
    return encryptedData;
}
  
function generateShortKey() {
    // Simple hash function to generate a short key (this is just for illustration purposes, not secure)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function getData() {
    var data = {};
    var category1 = [];
    category1.push(document.getElementById("category1").value);
    category1.push(document.getElementById("category1Answer1").value);
    category1.push(document.getElementById("category1Answer2").value);
    category1.push(document.getElementById("category1Answer3").value);
    category1.push(document.getElementById("category1Answer4").value);
    data.category1 = category1;
    var category2 = [];
    category2.push(document.getElementById("category2").value);
    category2.push(document.getElementById("category2Answer1").value);
    category2.push(document.getElementById("category2Answer2").value);
    category2.push(document.getElementById("category2Answer3").value);
    category2.push(document.getElementById("category2Answer4").value);
    data.category2 = category2;
    var category3 = [];
    category3.push(document.getElementById("category3").value);
    category3.push(document.getElementById("category3Answer1").value);
    category3.push(document.getElementById("category3Answer2").value);
    category3.push(document.getElementById("category3Answer3").value);
    category3.push(document.getElementById("category3Answer4").value);
    data.category3 = category3;
    var category4 = [];
    category4.push(document.getElementById("category4").value);
    category4.push(document.getElementById("category4Answer1").value);
    category4.push(document.getElementById("category4Answer2").value);
    category4.push(document.getElementById("category4Answer3").value);
    category4.push(document.getElementById("category4Answer4").value);
    data.category4 = category4;
    data.lives = document.getElementById("lives").value;
    return data
}