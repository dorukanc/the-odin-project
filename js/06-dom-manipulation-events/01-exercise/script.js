// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.setAttribute("style", "color:red;");
redParagraph.textContent = "Hey I’m red!";
container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border: 5px solid black; background-color: pink;");
container.appendChild(pinkDiv);

const heading = document.createElement("h1");
heading.textContent = "I'm in a div";
pinkDiv.appendChild(heading);

const paragraphInDiv = document.createElement("p");
paragraphInDiv.textContent = "ME TOO!";
pinkDiv.appendChild(paragraphInDiv);



