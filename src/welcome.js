"use strict";

const header = function () {
  const element = document.createElement("h1");

  element.textContent = "Super restaurant";

  return element;
};

const background = function () {
  const element = new Image();
  element.src = "/img/background-food.jpg";

  return element;
};

const text = function () {
  const element = document.createElement("p");
  element.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eaquemaiores! Nobis distinctio animi vitae voluptatem possimus numquamreiciendis nesciunt veniam optio ducimus suscipit molestiae hic, laboriosam laborum maxime nam?";

  return element;
};

export { header, background, text };
