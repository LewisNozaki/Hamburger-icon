"use strict";

const container = document.getElementsByClassName("container")[0];

let isXIcon = false;

const moveHamburgerIcon = () => {
  const one = document.getElementsByClassName("one")[0];
  const two = document.getElementsByClassName("two")[0];
  const three = document.getElementsByClassName("three")[0];

  if (isXIcon) {
    // one.classList.remove("moveOne");
    one.classList.add("moveOneBack");
  } else {
    one.classList.add("moveOne");
    two.classList.add("moveTwo");
    three.classList.add("moveThree");
  }

  isXIcon = !isXIcon;

  console.log(isXIcon);
}

container.addEventListener("click", moveHamburgerIcon);



