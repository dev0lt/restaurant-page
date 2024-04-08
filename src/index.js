"use strict";
// import "./style.css";
import { header, background, text } from "./welcome.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

console.log("Hello");
const content = document.querySelector("#content");
content.appendChild(background());
content.appendChild(header());
content.appendChild(text());

const buttonHome = document.querySelector("#button_home");
const buttonMenu = document.querySelector("#button_menu");
const buttonAbout = document.querySelector("#button_about");

buttonHome.addEventListener("click", function () {
  content.innerHTML = "";

  content.appendChild(background());
  content.appendChild(header());
  content.appendChild(text());
});

buttonMenu.addEventListener("click", function () {
  content.innerHTML = "";

  content.appendChild(menuContent());
});

buttonAbout.addEventListener("click", function () {
  content.innerHTML = "";

  content.appendChild(aboutContent());
});
