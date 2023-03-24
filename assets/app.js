let searchHome = document.getElementById("link-search-home");
let searchNu = document.getElementById("link-search-nutrition");
let searchRe = document.getElementById("link-search-recall");
let searchFacts = document.getElementById("link-search-facts");
let searchAbout = document.getElementById("link-search-about");
let nutritionalCon = document.querySelector(".nutritional-container");
let recallCon = document.querySelector(".recall-container");
let mainCont = document.getElementById("main-container");
let factsCont = document.querySelector(".faqs-container");

searchHome.addEventListener("click", () => {
    let homeImg = "./assets/images/home-page-loading.gif";
    swal ({
        title: "Home Page",
        icon: homeImg,
        button: false,
        timer: 2000
    }).then ((nutri) => {
        window.location.reload();
    })
})

searchNu.addEventListener("click", () => {
    let nutriImg = "./assets/images/nutri-page-loading.gif";
    swal ({
        title: "Nutritional Facts Page",
        icon: nutriImg,
        button: false,
        timer: 2000
    }).then ((nutri) => {
        nutritionalCon.style.display = "block";
        recallCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Nutritional Facts";
    })
})

searchRe.addEventListener("click", () => {
    let nutriImg = "./assets/images/recall-page-loading.gif";
    swal ({
        title: "Food Recall Page",
        icon: nutriImg,
        button: false,
        timer: 2000
    }).then ((nutri) => {
        recallCon.style.display = "block";
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Food Recalls";
    })
})

searchFacts.addEventListener("click", () => {
    let nutriImg = "./assets/images/facts-loading-image.gif";
    swal ({
        title: "Facts & FAQs Page",
        icon: nutriImg,
        button: false,
        timer: 2000
    }).then ((nutri) => {
        factsCont.style.display = "block";
        recallCon.style.display = "none";
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : Facts & FAQs";
    })
})

searchAbout.addEventListener("click", () => {
    let nutriImg = "./assets/images/about-us-loading.gif";
    swal ({
        title: "About Us Page",
        icon: nutriImg,
        button: false,
        timer: 2000
    }).then ((nutri) => {
        factsCont.style.display = "block";
        recallCon.style.display = "none";
        nutritionalCon.style.display = "none";
        mainCont.style.display = "none";
        document.getElementById("title").textContent = "Dirty Food : About Us";
    })
})

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


//////////////////////////////////////////////////////////////
// 3/21/23 adding searchBtnF() to the project
//////////////////////////////////////////////////////////////





      var resultCounterV = 0;
      var retryV = 0;

    async function searchBtnF() {
    console.log("search button clicked");

    // //adding button with all necessary attributes
    // // console.log("add submit button");
    // // submitBtn = document.getElementById("submit-button");
    // // submitBtn.setAttribute("onClick", "searchBtnF()");
    
      
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


    await fetch("https://api.fda.gov/food/enforcement.json?limit=1000").then((res) => res.json()).then(function (data) {

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


    // var body = document.getElementById("bodyEl");
    var cardCon = document.getElementById("cardContainer");
    var card = document.createElement("div");
    var proDesc = document.createElement("div");
    var reasonR = document.createElement("div");
    var st = document.createElement("div");
    var cit = document.createElement("div");
    var disP = document.createElement("div");
    var stats = document.createElement("div");
    var termDate = document.createElement("div");
    // var searchBtnEl = document.createElement("button");

    card.setAttribute("id", "cardEl" + i);
    /// added by brian
    card.classList.add("p-3", "card", "border", "border-danger", "rounded", "w-100", "align-items-center");
    ///
    proDesc.setAttribute("id", "proDescEl" + i);
    reasonR.setAttribute("id", "reasonREl" + i);
    st.setAttribute("id", "stEl" + i);
    cit.setAttribute("id", "citEl" + i);
    disP.setAttribute("id", "disP" + i);
    stats.setAttribute("id", "stats" + i);
    termDate.setAttribute("id", "termDateEl" + i);
    // searchBtnEl.setAttribute("id", "searchButton");

    cardCon.appendChild(card);
    card.appendChild(proDesc);
    card.appendChild(reasonR);
    card.appendChild(st);
    card.appendChild(cit);
    card.appendChild(disP);
    card.appendChild(stats);
    card.appendChild(termDate);
    // document.getElementById("searchContainer").appendChild(searchBtnEl);

    //////////////// all card styles i ended up commenting out 

   //card.style.display = "flex";
   //card.style.flexDirection = "column";
   //card.style.alignItems = "column";
   //card.style.flexWrap = "wrap";
   //card.style.width = "500px";
   //card.style.height = "400px";
   //card.style.margin = "70px";
   //card.style.border = "2px solid dodgerblue";
   //card.style.backgroundColor = "springgreen";
  

   // proDesc.style.backgroundColor = "pink";

   // reasonR.style.backgroundColor = "magenta";
/////////////// end of commented out ////


    console.log(searchResultArray);

    proDesc.textContent = searchResultArray[i].product_description;
    reasonR.textContent = searchResultArray[i].reason_for_recall;
    st.textContent = searchResultArray[i].state;
    cit.textContent = searchResultArray[i].city;
    disP.textContent = searchResultArray[i].distribution_pattern;
    stats.textContent = searchResultArray[i].status;
    termDate.textContent = searchResultArray[i].termination_date;
    console.log("result counter variable :" + resultCounterV);
      }
    }

    ).catch((error) => {SearchBtnF()})
  
  }


var resultCounterV2 = 0;

async function nutritionFactSearchBtnF() {

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


  await fetch("https://api.api-ninjas.com/v1/nutrition?query=" + searchInputValue2, 
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
    // var searchBtnEl = document.createElement("button");

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
    // searchBtnEl.setAttribute("id", "searchButton");

    cardCon.appendChild(card);
    card.appendChild(nameFood);
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
    // document.getElementById("searchContainer").appendChild(searchBtnEl);

    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "column";
    card.style.flexWrap = "wrap";
    card.style.width = "500px";
    card.style.height = "400px";
    card.style.margin = "70px";
    card.style.border = "2px solid dodgerblue";
    card.style.backgroundColor = "springgreen";

    nameFood.style.backgroundColor = "pink";

    servingSizeG.style.backgroundColor = "magenta";


    nameFood.textContent = "name :" + data[i].name;
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

