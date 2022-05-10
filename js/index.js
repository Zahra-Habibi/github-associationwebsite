$(document).ready(function () {
  $("#overlay").fadeOut();
  keepTheme();

  // the  owl carousel for the partners company
  var owl = $(".partnerCarousel");
  owl.owlCarousel({
    items: 4,
    rtl: true,
    margin: 25,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });
});

// handling the dark mood

const keepTheme = () => {
  const toNight = () => {
    $("body").addClass("darkMod");
    $(".DayIcon").removeClass("isDay");
    $(".NightIcon").addClass("isNight");
  };
  const toDay = () => {
    $("body").removeClass("darkMod");
    $(".DayIcon").addClass("isDay");
    $(".NightIcon").removeClass("isNight");
  };
  const Data = window.localStorage.getItem("DayNight");
  if (Data === null) {
    window.localStorage.setItem("DayNight", "Day");
  }
  if (Data === "Day") {
    toDay();
    window.localStorage.setItem("DayNight", "Day");
  } else {
    toNight();
    window.localStorage.setItem("DayNight", "Night");
  }
};

// *********************  end of dark mood **************************//

// show menubar
const showMenu = () => {
  document.querySelector(".menubar_sm").classList.remove("smMenu");
  document.querySelector(".menubar_sm").classList.add("showMenu");
  let myArray = document.querySelectorAll(".myList");
  addListItem(myArray);
};

// close menubar in small devices
const closeIcon = () => {
  document.querySelector(".menubar_sm").classList.remove("showMenu");
  document.querySelector(".menubar_sm").classList.add("smMenu");
  let myArray = document.querySelectorAll(".showList");
  removeListItem(myArray);
};

// addList function
const addListItem = (array) => {
  for (let x of array) {
    x.classList.remove("myList");
    x.classList.add("showList");
  }
};
// remove function
const removeListItem = (array) => {
  for (let x of array) {
    x.classList.remove("showList");
    x.classList.add("myList");
  }
};

// the Form validation
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
// os scriopt
AOS.init();