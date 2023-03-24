let searchHome = document.getElementById("link-search-home");
let searchNu = document.getElementById("link-search-nutrition");
let searchRe = document.getElementById("link-search-recall");
let searchFacts = document.getElementById("link-search-facts");
let searchAbout = document.getElementById("link-search-about");
let nutritionalCon = document.querySelector(".nutritional-container");
let recallCon = document.querySelector(".recall-container");
let mainCont = document.getElementById("main-container");
let factsCont = document.querySelector(".faqs-container");
let aboutCont = document.querySelector(".about-us-container")

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
        aboutCont.style.display = "none"
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
        aboutCont.style.display = "none"
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
        aboutCont.style.display = "none"
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
        aboutCont.style.display = "block"
        factsCont.style.display = "none";
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




function testBtnF() {
    console.log("test btn");
}

      var resultCounterV = 0;

    function searchBtnF() {
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
    })
  
  }