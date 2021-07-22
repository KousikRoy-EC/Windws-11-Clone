let taskbar = document.getElementsByClassName("taskbar")[0];

let start = document.getElementsByClassName("starter")[0];

taskbar.addEventListener("click",()=>{
if (start.style.bottom == "50px") {
    start.style.bottom = "-650px"
} else {
    start.style.bottom = "50px"
}
})