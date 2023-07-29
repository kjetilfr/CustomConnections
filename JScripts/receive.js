window.onload = run;

let selectedItems = [];

function run() { 
  runData()
  shuffleItems();
  const items = document.querySelectorAll('.item');
  const submitButton = document.getElementById('submit-btn');
  
  const closeLostButton = document.querySelector("#closeLost")
  const defeatModal = document.getElementById("lost");
  closeLostButton.addEventListener ("click", () => {
    defeatModal.close();
  })

  const closeWinButton = document.querySelector("#closeWon")
  const victoryModal = document.getElementById("won");
  closeWinButton.addEventListener ("click", () => {
    victoryModal.close();
  })

  items.forEach(item => {
    item.addEventListener('click', selectItem);
  });

    submitButton.addEventListener('click', handleButtonClick);
}

function shuffleItems() {
  const grid = document.querySelector('.grid');
  const items = Array.from(grid.querySelectorAll('.item'));
  items.sort(() => Math.random() - 0.5);
  items.forEach(item => grid.appendChild(item));
}

function selectItem(event) {
  const selectedItem = event.target;
  const selectedCategory = selectedItem.dataset.category;
console.log(selectedItems)
  if (selectedItem.classList.contains('selected')) {
    selectedItem.classList.remove('selected');
    var selectedElements = document.getElementsByClassName("selected");
    selectedItems = [];
    for (var s = 0; s < selectedElements.length; s++) {
      selectedItems.push(selectedElements[s].dataset.category);
    }
    console.log(selectedItems)
    //selectedItems = selectedItems.filter(item => item !== selectedCategory);
  } else if (selectedItems.length < 4) {
    selectedItem.classList.add('selected');
    selectedItems.push(selectedCategory);
    selectedItem.classList.add("cell-animation-selected");
    //item.classList.remove('selected');
    setTimeout(() => {
      selectedItem.classList.remove("cell-animation-selected");
    }, 100);
  }
}

function checkAndRemoveItems() {
  const categoriesCount = {};

  for (const category of selectedItems) {
    categoriesCount[category] = (categoriesCount[category] || 0) + 1;
  }

  var itemsRemoved = [];
  for (const category in categoriesCount) {
    if (categoriesCount[category] >= 4) {
      const grid = document.querySelector('.grid');
      const items = Array.from(grid.querySelectorAll('.item'));
      items.forEach(item => {
        if (item.dataset.category === category) {
            item.classList.add("cell-animation");
            setTimeout(() => {
                item.classList.remove("cell-animation")
                item.remove();
            }, 500);
            itemsRemoved.push(item)
        }
      });

      // Reset the selected items and reattach event listeners
      selectedItems = [];
      items.forEach(item => {
        item.classList.remove('selected');
        item.addEventListener('click', selectItem);
      });

      // Check for completion
      const remainingCategories = new Set(items.map(item => item.dataset.category));
      if (remainingCategories.size === 0) {
        // Do something when the grid is empty
        console.log('Grid is empty!');
      }
    }
  }
    
    var container = document.createElement("div");
    if (typeof(itemsRemoved[0].dataset.category) === "string") {
        container.innerHTML += (itemsRemoved[1].dataset.category).bold() + ": ";
    } else {
        console.log("HAHA!");
    }

    for (var i = 0; i < itemsRemoved.length; i++ ) {
        var itemText = document.createTextNode(itemsRemoved[i].innerHTML);
        container.classList.add("full-row");
        container.style.backgroundColor = itemsRemoved[0].dataset.difficulty;
        //container.style.backgroundColor = "yellow";
        if (i < itemsRemoved.length -1) {
            container.innerHTML += itemText.textContent + ", ";
        } else {
            container.appendChild(itemText);
        }
        
    }
    var grid = document.getElementById("correctGrid");

    container.classList.add("cell-animation-reverse");
            setTimeout(() => {
                document.body.insertBefore(container, grid);
                container.classList.remove("cell-animation-reverse")
            }, 500);
}

function handleButtonClick() {
  const categoriesCount = {};

  // Count occurrences of each category in selectedItems
  for (const category of selectedItems) {
    categoriesCount[category] = (categoriesCount[category] || 0) + 1;
  }

  // Check if any category has exactly four occurrences
  if (Object.values(categoriesCount).some(count => count === 4)) {
    // Your logic for successful selection of four items goes here
    console.log("You have selected four of the same category!");
    checkAndRemoveItems();
    checkVictory()
  } else {
    if (selectedItems.length === 4) {
      // Deselect the items and show "HAHA" alert
      const items = document.querySelectorAll('.item');
      items.forEach(item => {
        if (item.classList.contains('selected')) {
          item.classList.add("cell-animation-shake");
          //item.classList.remove('selected');
          setTimeout(() => {
            item.classList.remove("cell-animation-shake");
          }, 200);
        }

      });
      //alert("HAHA");
      //selectedItems = [];
      amountOfLives --;
      document.getElementById("amountOfLives").innerHTML = amountOfLives;
      if (amountOfLives === 0) {
        const defeatModal = document.getElementById("lost");
        defeatModal.showModal();
      }
    } else {
      console.log(selectedItems);
      alert("Please choose 4");
    }
  }
}

function checkVictory() {
  var completedCategories = document.getElementsByClassName("full-row");
  if (completedCategories.length +1 >= 4) {
    setTimeout(() => {
      const victoryModal = document.getElementById("won");
      victoryModal.showModal()
      victoryModal.classList.add("cell-animation-reverse");
    }, 500);
  }
}