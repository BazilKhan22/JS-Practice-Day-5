// Local Storage

// ✅ Step 1: Check if a theme is saved in localStorage
let savedTheme = localStorage.getItem("theme"); 

// ✅ Step 2: If saved, apply it; otherwise, set default "light"
if (savedTheme) {
    document.body.className = savedTheme;
} else {
    localStorage.setItem("theme", "light"); // Default theme set kar di
}

// ✅ Step 3: Toggle Button for Changing Theme
document.getElementById("toggleTheme").addEventListener("click", function () {
    let currentTheme = document.body.className;
    let newTheme = currentTheme === "light" ? "dark" : "light";

    document.body.className = newTheme; // ✅ Theme Apply
    localStorage.setItem("theme", newTheme); // ✅ Theme Save in localStorage
});s

// get set exercise by local storage

localStorage.setItem("name", "Ali");
let userName = localStorage.getItem("name");
console.log(userName); // Expected Output: "Ali"


// next exercise

localStorage.setItem("age", "25");
console.log(localStorage.getItem("age")); // Expected Output: "25"

localStorage.removeItem("age");
console.log(localStorage.getItem("age")); // Expected Output: null
