"use strict";

const container = document.getElementsByClassName("container")[0];

let isXIcon = false;

const moveHamburgerIcon = () => {
  const one = document.getElementsByClassName("one")[0];
  const two = document.getElementsByClassName("two")[0];
  const three = document.getElementsByClassName("three")[0];
  
  if (isXIcon) {
    one.classList.remove("moveOne");
    one.classList.add("moveOneBack");
    two.classList.remove("moveTwo");
    two.classList.add("moveTwoBack");
    three.classList.remove("moveThree");
    three.classList.add("moveThreeBack");
  } else {
    one.classList.remove("moveOneBack");
    one.classList.add("moveOne");
    two.classList.remove("moveTwoBack");
    two.classList.add("moveTwo");
    three.classList.remove("moveThreeBack");
    three.classList.add("moveThree");
  }

  isXIcon = !isXIcon;
}

container.addEventListener("click", moveHamburgerIcon);



