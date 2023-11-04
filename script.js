function toggleTheme() {
    const body = document.getElementById("body");
    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
        localStorage.setItem("theme", "light");
    } else if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    } else {
        body.classList.remove("dark", "light");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.getElementById("body").classList.add("dark");
        document.getElementById("body").classList.remove("light");
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    } else {
        document.getElementById("body").classList.add("light");
        document.getElementById("body").classList.remove("dark");
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    }
};
