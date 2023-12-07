
/*
function toggleTheme() {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        htmlElement.setAttribute('style', 'color-scheme: light;');
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
        localStorage.setItem("theme", "light");
    } else if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute('style', 'color-scheme: dark;');
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    } else {
        body.classList.remove("dark", "light");
        htmlElement.setAttribute('style', 'color-scheme: light;');
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    }
}

window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    const body = document.getElementsByTagName("body")[0];
    if (savedTheme === "dark") {
        body.classList.add("dark");
        body.classList.remove("light");
        htmlElement.setAttribute('style', 'color-scheme: dark;');
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    } else if (savedTheme === "light") {
        body.classList.add("light");
        body.classList.remove("dark");
        htmlElement.setAttribute('style', 'color-scheme: light;');
        localStorage.setItem("theme", "light");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    } else if (!body.classList.contains("light") && !body.classList.contains("dark")) {
        body.classList.add("light");
        body.classList.remove("dark");
        htmlElement.setAttribute('style', 'color-scheme: light;');
        localStorage.setItem("theme", "light");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    } else if (body.classList.contains("light")) {
        body.classList.add("light");
        body.classList.remove("dark");
        htmlElement.setAttribute('style', 'color-scheme: light;');
        localStorage.setItem("theme", "light");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    } else if (body.classList.contains("dark")) {
        body.classList.add("dark");
        body.classList.remove("light");
        htmlElement.setAttribute('style', 'color-scheme: dark;');
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    }
};
*/

var htmlElement = document.querySelector('html');
var darkIcon = document.getElementById("dark");
var lightIcon = document.getElementById("light");

if(darkIcon != undefined  && lightIcon != undefined){

window.onload = toggleTheme('onload');
function toggleTheme(type) {
    const body = document.getElementsByTagName("body")[0];
    if (type == 'onload') {
        if (localStorage.getItem("theme")) {
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme == "light") {
                theme('light');
            } else if (savedTheme == "dark") {
                theme('dark');
            }
        } else {
            if (body.classList.contains("dark")) {
                theme('dark');
            } else if (body.classList.contains("light")) {
                theme('light');
            } 
        }
    } else {
        if (body.classList.contains("dark")) {
            theme('light');
        } else if (body.classList.contains("light")) {
            theme('dark');
        } else {
            body.classList.remove("dark", "light");
            theme('light');
        }
    }

}
}

function theme(type) {
    const body = document.getElementsByTagName("body")[0];
    htmlElement.setAttribute('style', 'color-scheme: '+type+';');
    
    if(type == 'dark'){
        darkIcon.style.display = "none";
        body.classList.remove("light");
        lightIcon.style.display = "block";
    }else{
        lightIcon.style.display = "none";
        body.classList.remove("dark");
       darkIcon.style.display = "block";
    }
    body.classList.add(type);
    localStorage.setItem("theme", type);
}

window.addEventListener('load', function () {
    document.body.classList.remove('preload');
});



function ctheme(theme) {
    const body = document.getElementsByTagName("body")[0];
    if (theme == "dark") {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    } else if (theme == "light") {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    }
}


