/*** 
        Event Listeners for Drop Down Links
***/
let firstDropdown = document.querySelector("#first-dropdown");
let secondDropdown = document.querySelector("#second-dropdown");
let thirdDropdown = document.querySelector("#third-dropdown");
let firstNavDropdown = document.querySelector(".first-nav-dropdown");
let secondNavDropdown = document.querySelector(".second-nav-dropdown");
let thirdNavDropdown = document.querySelector(".third-nav-dropdown");

/*firstDropdown.addEventListener("mouseover", () => {
    firstNavDropdown.style.display = "block";
})
firstDropdown.addEventListener("mouseout", () => {
    firstNavDropdown.style.display = "none";
})
*/
secondDropdown.addEventListener("mouseover", () => {
    secondNavDropdown.style.display = "block";
})
secondDropdown.addEventListener("mouseout", () => {
    secondNavDropdown.style.display = "none";
})

thirdDropdown.addEventListener("mouseover", () => {
    thirdNavDropdown.style.display = "block";
})
thirdDropdown.addEventListener("mouseout", () => {
    thirdNavDropdown.style.display = "none";
})