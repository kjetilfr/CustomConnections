window.onload = run;

var count = 0;

function run() {
    document.getElementById("category2Content").style.display = "none";
    document.getElementById("category3Content").style.display = "none";
    document.getElementById("category4Content").style.display = "none";
    document.getElementById("generateLinkContent").style.display = "none";
    document.getElementById("nextCategory").onclick = function() {nextCategory(count)};
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
    } else {
        document.getElementById("category4Content").style.display = "none";
        document.getElementById("nextCategory").style.display = "none";
        document.getElementById("generateLinkContent").style.display = "block";
        generateShortenedLink()
    }
}
