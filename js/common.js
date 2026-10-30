// ========================================
// COMMON SYSTEM FUNCTIONS
// ========================================

// ========================================
// DARK MODE
// ========================================

function applySavedDarkMode() {

    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedDarkMode === "enabled") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}


applySavedDarkMode();


// ========================================
// MOBILE MENU
// ========================================

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNavigation =
    document.getElementById("mobileNavigation");


if (mobileMenuButton && mobileNavigation) {

    mobileMenuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        const menuIsOpen =
            mobileNavigation.classList.toggle("show");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });


    mobileNavigation.addEventListener("click", function (event) {

        if (event.target.tagName === "A") {

            mobileNavigation.classList.remove("show");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    document.addEventListener("click", function (event) {

        if (
            !mobileNavigation.contains(event.target) &&
            !mobileMenuButton.contains(event.target)
        ) {

            mobileNavigation.classList.remove("show");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// ========================================
// ADMIN PROFILE MENU
// ========================================

const adminProfileButton =
    document.getElementById("adminProfileButton");

const adminProfileMenu =
    document.getElementById("adminProfileMenu");


if (adminProfileButton && adminProfileMenu) {

    adminProfileButton.addEventListener("click", function (event) {

        event.stopPropagation();

        const menuIsOpen =
            adminProfileMenu.classList.toggle("show");

        adminProfileButton.setAttribute(
            "aria-expanded",
            menuIsOpen
        );

    });


    document.addEventListener("click", function (event) {

        if (
            !adminProfileMenu.contains(event.target) &&
            !adminProfileButton.contains(event.target)
        ) {

            adminProfileMenu.classList.remove("show");

            adminProfileButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}


// ========================================
// DARK MODE TOGGLE
// ========================================

const darkModeToggle =
    document.getElementById("darkModeToggle");


if (darkModeToggle) {

    darkModeToggle.checked =
        localStorage.getItem("darkMode") === "enabled";


    darkModeToggle.addEventListener("change", function () {

        if (darkModeToggle.checked) {

            localStorage.setItem("darkMode", "enabled");

        } else {

            localStorage.setItem("darkMode", "disabled");

        }

        applySavedDarkMode();

    });

}
