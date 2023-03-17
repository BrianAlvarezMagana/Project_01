let searchNu = document.getElementById("search-nutritions");
let searchRe = document.getElementById("search-recalls");
let nutritionalCon = document.querySelector(".nutritional-container");
let recallCon = document.querySelector(".recall-container");
let mainCont = document.getElementById("main-container");

searchNu.addEventListener("click", () => {
    swal ({
        title: "Redirecting Page",
        icon: "warning",
        text: " ",
        button: false,
        timer: 2000
    }).then ((nutri) => {
        nutritionalCon.style.display = "block";
        mainCont.style.display = "none";
    })
})

searchRe.addEventListener("click", () => {
    swal ({
        title: "Redirecting Page",
        icon: "warning",
        text: " ",
        button: false,
        timer: 2000
    }).then ((nutri) => {
        recallCon.style.display = "block";
        mainCont.style.display = "none";
    })
})




