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
    count ++;
    if (counter == 0) { //No fields are empty
        document.getElementById("category1Content").style.display = "none";
        document.getElementById("category2Content").style.display = "block";
    } else if (counter == 1) {
        document.getElementById("category2Content").style.display = "none";
        document.getElementById("category3Content").style.display = "block";
    } else if (counter == 2) {
        document.getElementById("category3Content").style.display = "none";
        document.getElementById("category4Content").style.display = "block";
    } else if (counter == 3) {
        document.getElementById("category4Content").style.display = "none";
        document.getElementById("extraDetails").style.display = "block";
    } else {
        //document.getElementById("ConnectionsBox").style.display = "none";
        document.getElementById("generateLinkContent").style.display = "block";
        //document.getElementById("lives").style.display = "none";
        showAll()
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
