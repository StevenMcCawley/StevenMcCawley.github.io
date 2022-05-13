let navbar = document.getElementById("navOptions");

let n = navbar.getElementsByClassName("nav-link");
console.log(n);
console.log(Array.from(n));

Array.from(n).forEach(element => {
    console.log(element);
    element.addEventListener("mouseover", () => {
        console.log("wow");
        element.classList.replace("border-dark", "border-primary");

        //element.classList.add("text-decoration-underline");
    })
    
    element.addEventListener("mouseout", () => {
        element.classList.replace("border-primary", "border-dark");
    })

});

//console.log(Array.from(options));