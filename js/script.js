function openPage(htmlFileName) {
  window.location.href = "pages/" + htmlFileName + ".html";
}

document.addEventListener("DOMContentLoaded", function () {
  var currentActiveElement = document.querySelector(".sidebar-item.active");

  function toggleActive(clickedElement) {
    if (currentActiveElement !== null) {
      currentActiveElement.classList.remove("active");
    }

    clickedElement.classList.add("active");

    currentActiveElement = clickedElement;
  }

  var sidebarItems = document.querySelectorAll(".sidebar-item");
  sidebarItems.forEach(function (item) {
    item.addEventListener("click", function () {
      toggleActive(this);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var sidebarItems = document.querySelectorAll(".sidebar-item");

  window.addEventListener("scroll", function () {
    var fromTop = window.scrollY + 105; // Adjusted to 105px from the top

    var container = document.querySelector(".container");
    var containerTop = container.offsetTop;
    var containerHeight = container.offsetHeight;

    if (fromTop > containerTop && fromTop < containerTop + containerHeight) {
      sidebarItems.forEach(function (item) {
        item.classList.remove("active");
      });
    } else {
      sidebarItems.forEach(function (item) {
        var section = document.getElementById(
          item.getAttribute("href").substring(1)
        );

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          sidebarItems.forEach(function (item) {
            item.classList.remove("active");
          });

          item.classList.add("active");
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loginDiv = document.querySelector(".login");
  const signupDiv = document.querySelector(".signup");

  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");

  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginDiv.style.display = "flex";
    signupDiv.style.display = "none";
  });

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginDiv.style.display = "none";
    signupDiv.style.display = "flex";
  });
});

function scrollToTop() {
  var container = document.querySelector(".container");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

window.onscroll = function () {
  toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  var containerHeight = document.querySelector(".container").offsetHeight;

  if (
    document.body.scrollTop > containerHeight - 150 ||
    document.documentElement.scrollTop > containerHeight - 150
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function showMenu(level) {
  hideAllLevels();

  const levelElement = document.querySelector(`.${level}`);
  levelElement.style.display = "flex";
}

function hideMenu(level) {
  // hideAllLevels();
  const levelElement = document.querySelector(`.${level}`);
  levelElement.style.display = "none";
}

function hideAllLevels() {
  document.querySelector(".web").style.display = "none";
  document.querySelector(".soft").style.display = "none";
}

function activeParent(level) {
  const levelElement = document.querySelector(`.${level}`);
  levelElement.style.backgroundColor = "rgba(5, 86, 243, 0.2)";
}

function deactiveParent(level) {
  const levelElement = document.querySelector(`.${level}`);
  levelElement.style.backgroundColor = "transparent";
}
