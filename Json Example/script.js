// Referencing the main div in the html
const main = document.getElementById("main");

/**
 * Function creates an element with the given parameters and returns the element
 * @param {string} tag - the suitable HTML tag for this element 
 * @param {string} className - the class of the element
 * @param {string} content - text content contained by the element if needed
 * @returns HTML element with the provided attributes
 */
const createElement = (tag, className, content) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
};

/**
 * Function that builds a card component. It calls the createElement function multiple times.
 * @param {object} data - object containing `logo`, `img`, `description` keys and values
 * @returns HTML element contain
 */
const cardBuilder = (data) => {
  const card = createElement("div", "card");

  const img = createElement("img", "logo");
  img.src = data.logo;
  img.alt = data.name;

  const title = createElement("h2", "title", data.name);

  const desc = createElement("p", "description", data.description);

  card.append(img, title, desc)
  return card;
};

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // You can work with the parsed JSON data here
    data.forEach(item => main.appendChild(cardBuilder(item)))
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });
