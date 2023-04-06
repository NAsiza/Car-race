// !==================drift==================
let body = document.querySelector("body");
let car1 = document.querySelector("#car1");
let car2 = document.querySelector("#car2");
let car1Gaz = 950;
let car2Gaz = 950;

body.addEventListener("keydown", (event) => {
  //! ---------------Car1-------------
  // console.log(event.key);
  if (event.key === "ArrowRight") {
    if (car1Gaz > 0) {
      car1Gaz -= 50;
      car1.style.right = car1Gaz + "px";
    }
  } else if (event.key === "ArrowLeft") {
    if (car1Gaz < 950) {
      car1Gaz += 50;
      car1.style.right = car1Gaz + "px";
    }
  }

  //! ----------------Car2-------------
  // console.log(event.key);
  if (event.key === "d") {
    if (car2Gaz > 0) {
      car2Gaz -= 50;
      car2.style.right = car2Gaz + "px";
    }
  } else if (event.key === "a") {
    if (car2Gaz < 950) {
      car2Gaz += 50;
      car2.style.right = car2Gaz + "px";
    }
  }
});
