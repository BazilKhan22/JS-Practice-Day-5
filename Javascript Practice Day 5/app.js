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
});
