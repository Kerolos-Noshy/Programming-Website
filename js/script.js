function openPage(htmlFileName) {
  window.location.href = "/pages/" + htmlFileName + ".html";
}

document.addEventListener("DOMContentLoaded", function () {
  var currentActiveElement = document.querySelector(".sidebar-item.active");

  // Function to toggle active class
  function toggleActive(clickedElement) {
    // Remove 'active' class from the previously active element
    if (currentActiveElement !== null) {
      currentActiveElement.classList.remove("active");
      // change the margin of active element by subtranging 5 from it
      currentActiveElement.style.paddingLeft = "30px";
    }

    // Add 'active' class to the clicked element
    clickedElement.classList.add("active");
    clickedElement.style.paddingLeft = "25px";

    // Update the currently active element
    currentActiveElement = clickedElement;
  }

  // Add click event listeners to all sidebar items
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
    var fromTop = window.scrollY + 105; // Adjusted to 100px from the top

    var container = document.querySelector(".container");
    var containerTop = container.offsetTop;
    var containerHeight = container.offsetHeight;

    // Check if scroll position is within the container
    if (fromTop > containerTop && fromTop < containerTop + containerHeight) {
      // Remove 'active' class from all items
      sidebarItems.forEach(function (item) {
        item.classList.remove("active");
      });
    } else {
      // Check for section visibility and update 'active' class accordingly
      sidebarItems.forEach(function (item) {
        var section = document.getElementById(
          item.getAttribute("href").substring(1)
        );

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          // Remove 'active' class from all items
          sidebarItems.forEach(function (item) {
            item.classList.remove("active");
          });

          // Add 'active' class to the current item
          item.classList.add("active");
        }
      });
    }
  });
});
