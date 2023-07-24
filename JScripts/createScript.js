window.onload = run;

var count = 0;

function run() {
    document.getElementById("category2Content").style.display = "none";
    document.getElementById("category3Content").style.display = "none";
    document.getElementById("category4Content").style.display = "none";
    document.getElementById("generateLinkContent").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("extraDetails").style.display = "none";
    document.getElementById("nextCategory").onclick = function() {nextCategory(count)};
    document.getElementById("showAll").onclick = function() {showAll()};
}

function nextCategory(counter) {
    if (counter == 0) {
        if (document.getElementById("category1").value !== "" && document.getElementById("category1Answer1").value !== "" && document.getElementById("category1Answer2").value !== "" && document.getElementById("category1Answer3").value !== "" && document.getElementById("category1Answer4").value !== "") {
            document.getElementById("category1Content").style.display = "none";
            document.getElementById("category2Content").style.display = "block";
            count ++;
        } else {
            alert("Please fill all fields")
        }
    } else if (counter == 1) {
        if (document.getElementById("category2").value !== "" && document.getElementById("category2Answer1").value !== "" && document.getElementById("category2Answer2").value !== "" && document.getElementById("category2Answer3").value !== "" && document.getElementById("category2Answer4").value !== "") {
            document.getElementById("category2Content").style.display = "none";
            document.getElementById("category3Content").style.display = "block";
            count ++;
        } else {
            alert("Please fill all fields")
        }
    } else if (counter == 2) {
        if (document.getElementById("category3").value !== "" && document.getElementById("category3Answer1").value !== "" && document.getElementById("category3Answer2").value !== "" && document.getElementById("category3Answer3").value !== "" && document.getElementById("category3Answer4").value !== "") {
            document.getElementById("category3Content").style.display = "none";
            document.getElementById("category4Content").style.display = "block";
            count ++;
        } else {
            alert("Please fill all fields")
        }
    } else if (counter == 3) {
        if (document.getElementById("category4").value !== "" && document.getElementById("category4Answer1").value !== "" && document.getElementById("category4Answer2").value !== "" && document.getElementById("category4Answer3").value !== "" && document.getElementById("category4Answer4").value !== "") {
            document.getElementById("category4Content").style.display = "none";
            document.getElementById("extraDetails").style.display = "block";
            document.getElementById("nextCategory").style.backgroundColor = "green";
            document.getElementById("nextCategory").innerText = "Done";
            count ++;
        } else {
            alert("Please fill all fields")
        }
    } else {
        document.getElementById("ConnectionsBox").style.display = "none";
        document.getElementById("generateLinkContent").style.display = "block";
        count ++;
        //document.getElementById("lives").style.display = "none";
        //showAll()
        generateShortenedLink()
    }
}

function showAll() {
    document.getElementById("category1Content").style.display = "block";
    document.getElementById("category2Content").style.display = "block";
    document.getElementById("category3Content").style.display = "block";
    document.getElementById("category4Content").style.display = "block";
    document.getElementById("finish").style.display = "block";
    document.getElementById("nextCategory").style.display = "none";
    document.getElementById("showAll").style.display = "none";
}

function finishCategories() {
    document.getElementById("category1Content").style.display = "none";
    document.getElementById("category2Content").style.display = "none";
    document.getElementById("category3Content").style.display = "none";
    document.getElementById("category4Content").style.display = "none";
    document.getElementById("finish").style.display = "none";
    document.getElementById("extraDetails").style.display = "block";
    document.getElementById("nextCategory").style.display = "block";
    count = 4;
}

function copyLinkToClipboard() {
    const generatedLinkText = document.getElementById('generatedLink').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = generatedLinkText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Link copied to clipboard!');
  }

  function copyCodeToClipboard() {
    const generatedLinkText = document.getElementById('generatedCode').innerText;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = generatedLinkText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Link copied to clipboard!');
  }