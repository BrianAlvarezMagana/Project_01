let searchHome = document.getElementById("link-search-home");
let searchNu = document.getElementById("link-search-nutrition");
let searchRe = document.getElementById("link-search-recall");
let searchFacts = document.getElementById("link-search-facts");
let searchAbout = document.getElementById("link-search-about");
let nutritionalCon = document.querySelector(".nutritional-container");
let recallCon = document.querySelector(".recall-container");
let mainCont = document.getElementById("main-container");
let factsCont = document.querySelector(".faqs-container");
let aboutCont = document.querySelector(".about-us-container");
let submitBtn = document.getElementById("submit-buttonben10");
let searchBar = document.getElementById("form1ben10");
let clearHistory = document.getElementById("clear-history");
let cityList = document.getElementById("city-list");
let searchNutri = document.getElementById("search-nf");
let searchFood = document.getElementById("search-fr");
let searchUs = document.getElementById("about-us-page");
let searchFaqs = document.getElementById("facts-and-faqs");
var cardCon = document.getElementById("cardContainer");
var cardCon1 = document.getElementById("cardContainer1");
var cardCon2 = document.getElementById("cardContainer2");
let savedCities = JSON.parse(localStorage.getItem("data")) || [];

// Nutritional Facts Landing Page
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Food Recall Landing Page
let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}

// Loading Pages for each click on each page
searchHome.addEventListener("click", () => {
    let homeImg = "./assets/Images/home-page-loading.gif";
    swal ({
        title: "Home Page",
        icon: homeImg,
        button: false,
        closeOnClickOutside: false,
        timer: 2000
    }).then ((nutri) => {
        window.location.reload();
    })
})

searchNutri.addEventListener("click", () => {
  let nutriImg = "./assets/Images/nutri-page-loading.gif";
  swal ({
      title: "Nutritional Facts Page",
      icon: nutriImg,
      button: false,
      closeOnClickOutside: false,
      timer: 2000
  }).then ((nutri) => {
      aboutCont.style.display = "none"
      factsCont.style.display = "none"
      nutritionalCon.style.display = "block";
      recallCon.style.display = "none";
      mainCont.style.display = "none";
      document.getElementById("title").textContent = "Dirty Food : Nutritional Facts";
  })
})

searchNu.addEventListener("click", () => {
    let nutriImg = "./assets/Images/nutri-page-loading.gif";
    swal ({
        title: "Nutritional Facts Page",
        icon: nutriImg,
        button: false,
        closeOnClickOutside: false,
        timer: 2000
    }).then ((nutri) => {
        aboutCont.style.display = "none"
        factsCont.style.display = "none"
        nutritionalCon.style.display = "block";
        recallCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Nutritional Facts";
    })
})

searchFood.addEventListener("click", () => {
  let nutriImg = "./assets/Images/recall-page-loading.gif";
  swal ({
      title: "Food Recall Page",
      icon: nutriImg,
      button: false,
      closeOnClickOutside: false,
      timer: 2000
  }).then ((nutri) => {
      aboutCont.style.display = "none"
      recallCon.style.display = "block";
      factsCont.style.display = "none"
      nutritionalCon.style.display = "none";
      mainCont.style.display = "none";
      document.getElementById("title").textContent = "Dirty Food : Food Recalls";
  })
})

searchRe.addEventListener("click", () => {
    let nutriImg = "./assets/Images/recall-page-loading.gif";
    swal ({
        title: "Food Recall Page",
        icon: nutriImg,
        button: false,
        closeOnClickOutside: false,
        timer: 2000
    }).then ((nutri) => {
        aboutCont.style.display = "none"
        recallCon.style.display = "block";
        factsCont.style.display = "none"
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Food Recalls";
    })
})

searchFaqs.addEventListener("click", () => {
  let nutriImg = "./assets/Images/facts-loading-image1.gif";
  swal ({
      title: "Facts & FAQs Page",
      icon: nutriImg,
      button: false,
      closeOnClickOutside: false,
      timer: 2000
  }).then ((nutri) => {
      aboutCont.style.display = "none"
      factsCont.style.display = "block";
      recallCon.style.display = "none";
      nutritionalCon.style.display = "none";
      mainCont.style.display = "none";
      document.getElementById("title").textContent = "Dirty Food : Facts & FAQs";
  })
})

searchFacts.addEventListener("click", () => {
    let nutriImg = "./assets/Images/facts-loading-image1.gif";
    swal ({
        title: "Facts & FAQs Page",
        icon: nutriImg,
        button: false,
        closeOnClickOutside: false,
        timer: 2000
    }).then ((nutri) => {
        aboutCont.style.display = "none"
        factsCont.style.display = "block";
        recallCon.style.display = "none";
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Facts & FAQs";
    })
})

searchUs.addEventListener("click", () => {
  let nutriImg = "./assets/Images/about-us-loading.gif";
  swal ({
      title: "About Us Page",
      icon: nutriImg,
      button: false,
      closeOnClickOutside: false,
      timer: 2000
  }).then ((nutri) => {
      aboutCont.style.display = "block"
      factsCont.style.display = "none";
      recallCon.style.display = "none";
      nutritionalCon.style.display = "none";
      mainCont.style.display = "none";
      document.querySelector(".tap-target").close();
      document.getElementById("title").textContent = "Dirty Food : About Us";
  })
})

searchAbout.addEventListener("click", () => {
    let nutriImg = "./assets/Images/about-us-loading.gif";
    swal ({
        title: "About Us Page",
        icon: nutriImg,
        button: false,
        closeOnClickOutside: false,
        timer: 2000
    }).then ((nutri) => {
        aboutCont.style.display = "block"
        factsCont.style.display = "none";
        recallCon.style.display = "none";
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : About Us";
    })
})

// Materialize Tools for Sidebar, dropdowns, collapsible, carousel
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.sidenav');
    M.Sidenav.init(elems);
  }); 

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  });

  let instances = null;
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    instances = M.TapTarget.init(elems, {});
  });

  function openCorner() {
    instances[0].open();
  }
  

// local storage function that happens after a search button is click
// stores user input value to local storage and content persist after click
  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let userInput = searchBar.value;
    if(userInput === "") {
        swal ({
            title: 'Cannot Be Blank! Please Try Again!',
            icon: 'warning',
            button: false,
            text: ' ',
            timer: 2000
        })
        document.getElementById("suggestions").innerHTML = "Brand Suggestions:"
        return;
    } else {
        searchBar.value = " ";
        document.getElementById("suggestions").innerHTML = "Top Brand Results:";
        var li = document.createElement("a");
        if(savedCities.indexOf(userInput) == -1){
            savedCities.push(userInput);
            li.textContent = userInput;
            li.className = "hover-effect";
            cityList.appendChild(li);
            localStorage.setItem("data", JSON.stringify(savedCities));

            li.addEventListener("click", () => {
              let result = li.textContent;
              searchBar.value = result;
            })
    }
    }
})

  for(let i=0; i < savedCities.length; i++){
      let itemStored = document.createElement("a");
      if(savedCities[i] === " "){
        savedCities[i].innerHTML = "";
      } else {
      itemStored.textContent = savedCities[i];
      itemStored.className = "hover-effect";
      cityList.appendChild(itemStored);
      itemStored.addEventListener("click", () => {
        let result1 = itemStored.textContent;
        searchBar.value = result1;
      })
    }
  }
  clearHistory.addEventListener("click", ()=> {
      localStorage.removeItem("data");
      cityList.innerHTML = " ";
  })


  
//////////////////////////////////////////////////////////////
// 3/21/23 adding searchBtnF() to the project
//////////////////////////////////////////////////////////////





      var resultCounterV = 0;
      var retryV = 0;

    function searchBtnF() {
    console.log("search button clicked");

    
      
    var searchResultArray = [];
    var searchInputValue = document.getElementById("form1ben10").value;
    console.log(searchResultArray);

    if (resultCounterV > 0) {
      console.log("result count if statement procced");
      for (let s=0; s<resultCounterV; s++) {
        console.log("resultCounterV :" + resultCounterV);
        document.getElementById("cardContainer").removeChild(document.getElementById("cardEl" + s));
        console.log("remove child :" + ("cardEl" + s));
      }
      resultCounterV = 0;
    }


    fetch("https://api.fda.gov/food/enforcement.json?limit=1000").then((res) => res.json()).then(function (data) {

      for(x=0;x<data.results.length; x++) {
        if (data.results[x].status == "Terminated") {
          if (data.results[x].state == searchInputValue) {
          searchResultArray.push(data.results[x]);
          console.log(data.results[x]);
          resultCounterV++;
          }
        }
      }



    for(i=0;i<searchResultArray.length; i++) {
    let proDesc = searchResultArray[i].product_description;
    let card = document.createElement("div");
    card.className = "card-el";
    cardCon.appendChild(card);
    

    card.setAttribute("id", "cardEl" + i);
    /// added by brian
    card.classList.add("p-3", "card", "border", "border-danger", "rounded", "w-100");

    let proDescEl = document.createElement("div");
    proDescEl.textContent = proDesc;
    card.appendChild(proDescEl);
    
    card.addEventListener("click", () => {
      for(i=0;i<searchResultArray.length; i++){
      if(card.textContent === searchResultArray[i].product_description){
        cardCon1.innerHTML = " ";
        cardCon2.innerHTML = " ";
        let codeSeparator = "./assets/Images/separator-image.png";
        let proDesc = searchResultArray[i].product_description;
        let proType = searchResultArray[i].product_type;
        let compName = searchResultArray[i].recalling_firm;
        let currentStatus = searchResultArray[i].status;
        let termDate = searchResultArray[i].termination_date;
        let whyRecall = searchResultArray[i].reason_for_recall;
        let lotNumber = searchResultArray[i].code_info;
        let conductedBy = "Food and Drug Administration (FDA)"
        let currentCity = searchResultArray[i].city;
        let currentState = searchResultArray[i].state;
        let letsClassify = searchResultArray[i].classification;
        let card1 = document.createElement("div");
        let card2 = document.createElement("div");
        cardCon2.appendChild(card2);
        cardCon1.appendChild(card1);

        let currentCityEl = document.createElement("div");
        currentCityEl.textContent = currentCity + "," + " " + currentState;
        card2.appendChild(currentCityEl);

        let letsClassifyEl = document.createElement("div");
        letsClassifyEl.textContent = letsClassify;
        card2.appendChild(letsClassifyEl);

        let codeSeparatorEl = document.createElement("img");
        codeSeparatorEl.src = codeSeparator;
        codeSeparatorEl.className = "too-much";
        card1.appendChild(codeSeparatorEl);

        let proDescEl = document.createElement("div");
        let proDescLi = document.createElement("div");
        proDescEl.className = "color-effect1";
        proDescLi.className = "color-effect";
        proDescLi.textContent = "Brand:"
        proDescEl.textContent = proDesc;
        card1.appendChild(proDescLi);
        card1.appendChild(proDescEl);

        let codeSeparatorEl1 = document.createElement("img");
        codeSeparatorEl1.src = codeSeparator;
        codeSeparatorEl1.className = "too-much";
        card1.appendChild(codeSeparatorEl1);

        let proTypeEl = document.createElement("div");
        let proTypeLi = document.createElement("div");
        proTypeEl.className = "color-effect1";
        proTypeLi.className = "color-effect";
        proTypeLi.textContent = "Product Type:"
        proTypeEl.textContent = proType;
        card1.appendChild(proTypeLi);
        card1.appendChild(proTypeEl);
    
        let compNameEl = document.createElement("div");
        let compNameLi = document.createElement("div");
        compNameEl.className = "color-effect1";
        compNameLi.className = "color-effect";
        compNameLi.textContent = "Company Name:"
        compNameEl.textContent = compName;
        card1.appendChild(compNameLi);
        card1.appendChild(compNameEl);
    
        let currentStatusEl = document.createElement("div");
        let currentStatusLi = document.createElement("div");
        currentStatusEl.className = "color-effect1";
        currentStatusLi.className = "color-effect";
        currentStatusLi.textContent = "Status:";
        currentStatusEl.textContent = currentStatus;
        card1.appendChild(currentStatusLi);
        card1.appendChild(currentStatusEl);
    
        let termDateEl = document.createElement("div");
        let termDateLi = document.createElement("div");
        termDateEl.className = "color-effect1";
        termDateLi.className = "color-effect";
        termDateLi.textContent = "Termination Date:"
        termDateEl.textContent = termDate;
        card1.appendChild(termDateLi);
        card1.appendChild(termDateEl);
    
        let whyRecallEl = document.createElement("div");
        let whyRecallLi = document.createElement("div");
        whyRecallEl.className = "color-effect1";
        whyRecallLi.className = "color-effect";
        whyRecallLi.textContent = "Reason:";
        whyRecallEl.textContent = whyRecall;
        card1.appendChild(whyRecallLi);
        card1.appendChild(whyRecallEl);
    
        let lotNumberEl = document.createElement("div");
        let lotNumberLi = document.createElement("div");
        lotNumberEl.className = "color-effect1";
        lotNumberLi.className = "color-effect";
        lotNumberLi.textContent = "UPC:";
        lotNumberEl.textContent = lotNumber;
        card1.appendChild(lotNumberLi);
        card1.appendChild(lotNumberEl);
    
        let conductedByEl = document.createElement("div");
        let conductedByLi = document.createElement("div");
        conductedByEl.className = "color-effect1";
        conductedByLi.className = "color-effect";
        conductedByLi.textContent = "Conducted By:";
        conductedByEl.textContent = conductedBy;
        card1.appendChild(conductedByLi);
        card1.appendChild(conductedByEl);
        

      }
    }
    })
      }
    }

    ).catch((error) => {searchBtnF()})
  
  }

//nutrition facts search function 
//3/25/23

var resultCounterV2 = 0;
document.getElementById("cardContainerNutritionError").style.display = "none";

function nutritionFactSearchBtnF() {

var searchInputValue2 = document.getElementById("form1").value;

document.getElementById("cardContainerNutritionError").style.display = "none";

        if (resultCounterV2 > 0) {
      console.log("result count if statement procced")
      for (let s=0; s<resultCounterV2; s++) {
        console.log("resultCounterV2 :" + resultCounterV2);
        document.getElementById("cardContainerNutrition").removeChild(document.getElementById("cardEl" + s));
        console.log("remove child :" + ("cardEl" + s));
      }
      resultCounterV2 = 0;
    }


  fetch("https://api.api-ninjas.com/v1/nutrition?query=" + searchInputValue2, 
  {headers:{"X-Api-Key":"EylXzrZXiY+QZVYcYKkVGg==N5f12J1v0qB2Gly9"}}) 
  .then((res) => res.json())
  .then(function (data) {

    console.log(data);
    console.log("name :" + data[0].name);
    console.log("serving size :" + data[0].serving_size_g + " g");
    console.log("calories :" + data[0].calories);
    console.log("fat total :" + data[0].fat_total_g + " g");
    console.log("cholesterol :" + data[0].cholesterol_mg + " mg");
    console.log("sodium :" + data[0].sodium_mg + " mg");
    console.log("carbohydrates :" + data[0].carbohydrates_total_g + " g");
    console.log("fiber :" + data[0].fiber_g + " g");
    console.log("sugar :" + data[0].sugar_g + " g");
    console.log("protein :" + data[0].protein_g + " g");
    console.log("potassium :" + data[0].potassium_mg + " mg");
 

    for(i=0;i<data.length; i++) {
    var cardCon = document.getElementById("cardContainerNutrition");
    let foodName = document.getElementById("food-name");
    var card = document.createElement("div");
    var nameFood = document.createElement("div");
    var servingSizeG = document.createElement("div");
    var calories = document.createElement("div");
    var fatTotal = document.createElement("div");
    var cholesterol = document.createElement("div");
    var sodium = document.createElement("div");
    var carbohydrates = document.createElement("div");
    var fiber = document.createElement("div");
    var sugar = document.createElement("div");
    var protein = document.createElement("div");
    var potassium = document.createElement("div");
    card.className = "color-effect2";

    /// added by brian
    card.classList.add("p-3", "card", "rounded", "w-100", "align-items-center");
    ///

    card.innerHTML = " ";
    card.setAttribute("id", "cardEl" + i);
    nameFood.setAttribute("id", "nameFoodEl" + i);
    servingSizeG.setAttribute("id", "servingSizeGEl" + i);
    calories.setAttribute("id", "caloriesEl" + i);
    fatTotal.setAttribute("id", "fatTotalEl" + i);
    cholesterol.setAttribute("id", "cholesterolEl" + i);
    sodium.setAttribute("id", "sodium" + i);
    carbohydrates.setAttribute("id", "carbohydratesEl" + i);
    fiber.setAttribute("id", "fiberEl" + i);
    sugar.setAttribute("id", "fiberEl" + i);
    protein.setAttribute("id", "fiberEl" + i);
    potassium.setAttribute("id", "fiberEl" + i);


    cardCon.appendChild(card);
    card.appendChild(servingSizeG);
    card.appendChild(calories);
    card.appendChild(fatTotal);
    card.appendChild(cholesterol);
    card.appendChild(sodium);
    card.appendChild(carbohydrates);
    card.appendChild(fiber);
    card.appendChild(sugar);
    card.appendChild(protein);
    card.appendChild(potassium);


    foodName.textContent = data[i].name;
    servingSizeG.textContent = "serving size :" + data[i].serving_size_g + " g";
    calories.textContent = "calories :" + data[i].calories;
    fatTotal.textContent = "fat total :" + data[i].fat_total_g + " g";
    cholesterol.textContent = "cholesterol :" + data[i].cholesterol_mg + " mg";
    sodium.textContent = "sodium :" + data[i].sodium_mg + " mg";
    carbohydrates.textContent = "carbohydrates :" + data[i].carbohydrates_total_g + " g";
    fiber.textContent = "fiber :" + data[i].fiber_g + " g";
    sugar.textContent = "sugar :" + data[i].sugar_g + " g";
    protein.textContent = "protein :" + data[i].protein_g + " g";
    potassium.textContent = "potassium :" + data[i].potassium_mg + " mg";


    resultCounterV2++;

    console.log("result Counter V2 :" + resultCounterV2);

}

}

).catch((error) => {
    
    if (retryV < 10) {
    retryV++;
    nutritionFactSearchBtnF();
} else {
    document.getElementById("cardContainerNutritionError").style.display = "flex";
    retryV = 0;
}

}
);

}


/////////////////////////////////////////////////////
// 3/26/23 adding local storage for nutrition facts
/////////////////////////////////////////////////////

var userInput = document.getElementById("form1");
var foundMatchArray = [];

var searchhb = document.getElementById("searchHistoryNutrition");

// searchhb.style.margin = "40px";

searchhb.style.textAlign = "center";
searchhb.style.justifyContent = "center";


function searchNutriBtnF () {
 console.log("search btn clicked");
 console.log(userInput.value);

 foundMatchArray = [];

  for (let i=0; i<localStorage.length; i++) {
  data = JSON.parse(localStorage.getItem(localStorage.key(i)));

console.log(data.searchNumberIDAlphaSigma);

  if (data.searchNumberIDAlphaSigma > 0) {
   console.log("search number id :" + data.searchNumberIDAlphaSigma);
   console.log("found match");
   foundMatchArray.push(data);
  }

 }

 obj = {
  "searchedValueAlphaSigma" : userInput.value,
  "searchNumberIDAlphaSigma" : (foundMatchArray.length + 1)
 }

 localStorage.setItem("searchFieldEntryAlphaSigma" + (foundMatchArray.length + 1) , JSON.stringify(obj));

 console.log("set item to storage :" + JSON.stringify(obj));

}

//must sort the previous 10 searches so they are in order from top to bottom
function searchHistoryBtnF () {

 historyD = document.createElement("div");
 historyD.setAttribute("id", "dropDownDisplay");

 document.getElementById("containerBen10").appendChild(historyD);

 historyD.style.display = "flex";
 historyD.style.flexDirection = "column";
 historyD.style.alignItems = "center";
 historyD.style.justifyContent = "center";

  var foundMatchArray = [];


 for (let i=0; i<localStorage.length; i++) {
  data = JSON.parse(localStorage.getItem(localStorage.key(i)));

console.log(data.searchNumberIDAlphaSigma);

  if (data.searchNumberIDAlphaSigma > 0) {
   console.log("search number id :" + data.searchNumberIDAlphaSigma);
   console.log("found match");
   foundMatchArray.push(data);
  }

 }

console.log("length :" + foundMatchArray.length)
//need another for loop

 if (foundMatchArray.length != 0) {

 if (foundMatchArray.length < 10) {
  console.log("found match array is less than 10");

  searchhb.style.display = "none";

  console.log("found match array is less than 10");
  var nutritionSearched = document.createElement("button");
  var clearHistoryBtn = document.createElement("button");


  nutritionSearched.setAttribute("id", "nS");
  nutritionSearched.setAttribute("onClick", "foodSearchedF()")
  clearHistoryBtn.setAttribute("id", "chb");
  clearHistoryBtn.setAttribute("onClick", "clearHistoryF()")

  nutritionSearched.innerHTML = "Food Searched:";
  clearHistoryBtn.innerHTML = "Clear History";

  nutritionSearched.style.backgroundColor = "green";
  nutritionSearched.style.width = "100%";
  nutritionSearched.style.height = "40px";
  nutritionSearched.style.background = "linear-gradient(to bottom, springgreen 0%, white 100%)";
  nutritionSearched.style.border = "0px";

  clearHistoryBtn.style.backgroundColor = "red";
  clearHistoryBtn.style.width = "100%";
  clearHistoryBtn.style.height = "40px";
  clearHistoryBtn.style.background = "linear-gradient(to bottom, red 0%, white 100%)";
  clearHistoryBtn.style.border = "0px";

  historyD.style.border = "1px solid black";


  historyD.appendChild(nutritionSearched);


  var searchHCounterV = foundMatchArray.length;

  while (searchHCounterV > 0) {
  for(let x=0;x<foundMatchArray.length;x++) {
  
   for (let i=0;i<foundMatchArray.length;i++) {
   if (foundMatchArray[x].searchNumberIDAlphaSigma == searchHCounterV) {
    console.log("it is found :" + foundMatchArray[x].searchNumberIDAlphaSigma);
    cardHistoryEl = document.createElement("button");
    cardHistoryEl.setAttribute("class", "historyBtnEl");
    cardHistoryEl.setAttribute("id", "cardHistoryEl" + searchHCounterV);
    cardHistoryEl.setAttribute("onClick", "previousHistoryBtn"+ searchHCounterV +"()");

    cardHistoryEl.style.width = "100%";
    cardHistoryEl.style.height = "40px";
    cardHistoryEl.style.border = "0px";
    cardHistoryEl.style.backgroundColor = "white";
    cardHistoryEl.style.fontSize = "20px";

  historyD.appendChild(cardHistoryEl);
    cardHistoryEl.innerHTML = foundMatchArray[x].searchedValueAlphaSigma;
    searchHCounterV--;
   }
   }


  }
 }
  historyD.appendChild(clearHistoryBtn);

 }


//finish up search history function btn for if the array is longer than or equal to 10

if (foundMatchArray.length > 9) {

 searchhb.style.display = "none";

  console.log("found match array is less than 10");
  var nutritionSearched = document.createElement("button");
  var clearHistoryBtn = document.createElement("button");


  nutritionSearched.setAttribute("id", "nS");
  nutritionSearched.setAttribute("onClick", "foodSearchedF()")
  clearHistoryBtn.setAttribute("id", "chb");
  clearHistoryBtn.setAttribute("onClick", "clearHistoryF()")

  nutritionSearched.innerHTML = "Food Searched:";
  clearHistoryBtn.innerHTML = "Clear History";

  nutritionSearched.style.backgroundColor = "green";
  nutritionSearched.style.width = "100%";
  nutritionSearched.style.height = "40px";
  nutritionSearched.style.background = "linear-gradient(to bottom, springgreen 0%, white 100%)";
  nutritionSearched.style.border = "0px";

  clearHistoryBtn.style.backgroundColor = "red";
  clearHistoryBtn.style.width = "100%";
  clearHistoryBtn.style.height = "40px";
  clearHistoryBtn.style.background = "linear-gradient(to bottom, red 0%, white 100%)";
  clearHistoryBtn.style.border = "0px";

  historyD.style.border = "1px solid black";


  historyD.appendChild(nutritionSearched);
  


  var searchHCounterV = foundMatchArray.length;
  var topTenCountdown = 10;

  while (topTenCountdown > 0) {
  for(let x=0;x<foundMatchArray.length;x++) {

   for (let i=0;i<foundMatchArray.length;i++) {
   if (foundMatchArray[x].searchNumberIDAlphaSigma == searchHCounterV) {
    if(topTenCountdown > 0) {
    console.log("it is found :" + foundMatchArray[x].searchNumberIDAlphaSigma);
    cardHistoryEl = document.createElement("button");
    cardHistoryEl.setAttribute("id", "cardHistoryEl" + topTenCountdown);
    cardHistoryEl.setAttribute("class", "historyBtnEl");
    cardHistoryEl.setAttribute("onClick", "previousHistoryBtn"+ topTenCountdown +"()");

    cardHistoryEl.style.width = "100%";
    cardHistoryEl.style.height = "40px";
    cardHistoryEl.style.border = "0px";
    cardHistoryEl.style.backgroundColor = "white";
    cardHistoryEl.style.fontSize = "20px";

    historyD.appendChild(cardHistoryEl);
    cardHistoryEl.innerHTML = foundMatchArray[x].searchedValueAlphaSigma;
    searchHCounterV--;
    topTenCountdown--;
    console.log("top ten countdown :" + topTenCountdown);
    
   }
   }
  }

  }

 }

 historyD.appendChild(clearHistoryBtn);

}

}

else {

 searchhb.style.display = "none";

  console.log("found match array is less than 10");
  var nutritionSearched = document.createElement("button");
  var clearHistoryBtn = document.createElement("button");


  nutritionSearched.setAttribute("id", "nS");
  nutritionSearched.setAttribute("onClick", "foodSearchedF()")
  clearHistoryBtn.setAttribute("id", "chb");
  clearHistoryBtn.setAttribute("onClick", "clearHistoryF()")

  nutritionSearched.innerHTML = "Food Searched:";
  clearHistoryBtn.innerHTML = "Clear History";

  nutritionSearched.style.backgroundColor = "green";
  nutritionSearched.style.width = "100%";
  nutritionSearched.style.height = "40px";
  nutritionSearched.style.background = "linear-gradient(to bottom, springgreen 0%, white 100%)";
  nutritionSearched.style.border = "0px";

  clearHistoryBtn.style.backgroundColor = "red";
  clearHistoryBtn.style.width = "100%";
  clearHistoryBtn.style.height = "40px";
  clearHistoryBtn.style.background = "linear-gradient(to bottom, red 0%, white 100%)";
  clearHistoryBtn.style.border = "0px";

  historyD.style.border = "1px solid black";


  historyD.appendChild(nutritionSearched);
  historyD.appendChild(clearHistoryBtn);

}

 console.log(foundMatchArray);

}

function foodSearchedF() {
 console.log("food searched btn pressed");
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

//finish clear history function and then create a new branch to add to project

function clearHistoryF() {
 console.log("Clear History btn pressed");

 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";


var foundMatchArray = [];

 for (let i=0; i<localStorage.length; i++) {
  data = JSON.parse(localStorage.getItem(localStorage.key(i)));

console.log(data.searchNumberIDAlphaSigma);

  if (data.searchNumberIDAlphaSigma > 0) {
   console.log("search number id :" + data.searchNumberIDAlphaSigma);
   console.log("found match");
   foundMatchArray.push(data);
  }

 }

for (let x=0; x<foundMatchArray.length; x++) {
  console.log("searchFieldEntryAlphaSigma" + (x + 1))
  localStorage.removeItem(["searchFieldEntryAlphaSigma" + (x + 1)]);
}
 
}


function previousHistoryBtn1() {
 console.log("previous history btn 1 clicked");
 userInput.value = document.getElementById("cardHistoryEl1").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
 
}

function previousHistoryBtn2() {
 console.log("previous history btn 2 clicked");
 userInput.value = document.getElementById("cardHistoryEl2").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn3() {
 console.log("previous history btn 3 clicked");
 userInput.value = document.getElementById("cardHistoryEl3").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn4() {
 console.log("previous history btn 4 clicked");
 userInput.value = document.getElementById("cardHistoryEl4").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn5() {
 console.log("previous history btn 5 clicked");
 userInput.value = document.getElementById("cardHistoryEl5").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn6() {
 console.log("previous history btn 6 clicked");
 userInput.value = document.getElementById("cardHistoryEl6").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn7() {
 console.log("previous history btn 7 clicked");
 userInput.value = document.getElementById("cardHistoryEl7").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn8() {
 console.log("previous history btn 8 clicked");
 userInput.value = document.getElementById("cardHistoryEl8").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn9() {
 console.log("previous history btn 9 clicked");
 userInput.value = document.getElementById("cardHistoryEl9").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function previousHistoryBtn10() {
 console.log("previous history btn 10 clicked");
 userInput.value = document.getElementById("cardHistoryEl10").innerHTML;
 nutritionFactSearchBtnF();
 document.getElementById("containerBen10").removeChild(document.getElementById("dropDownDisplay"));
 searchhb.style.display = "flex";
}

function nutritionTwoF() {
  searchNutriBtnF();
  nutritionFactSearchBtnF();
}

