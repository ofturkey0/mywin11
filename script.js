let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let chrome = document.getElementsByClassName("chrome")[0]
let chrome_sayfa = document.getElementsByClassName("chrome_sayfa")[0]

taskbar.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

// chidro web browser
chrome.addEventListener("click", ()=>{
    console.log("clicked");
    if(chrome_sayfa.style.bottom == "50px"){
        chrome_sayfa.style.bottom = "-655px"
    }
    else{
        chrome_sayfa.style.bottom = "50px"
    }
})
