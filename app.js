// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();

document.addEventListener("DOMContentLoaded", function () {
    // Handle control button clicks
    const controlButtons = document.querySelectorAll(".control");
    if (controlButtons.length > 0) {
        controlButtons.forEach(button => {
            button.addEventListener("click", function () {
                // Remove active class from current button
                document.querySelector(".active-btn")?.classList.remove("active-btn");
                this.classList.add("active-btn");

                // Remove active class from current section
                document.querySelector(".active")?.classList.remove("active");

                // Add active class to target section
                const targetSection = document.getElementById(button.dataset.id);
                targetSection?.classList.add("active");
            });
        });
    }

    // Handle theme toggle
    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
        });
    }
});