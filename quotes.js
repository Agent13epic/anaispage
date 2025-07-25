const quotes = [
  `"every set back is a set up for greater thing" – Anais`,
  `"les fous ne marchent pas avec les sages" – Anais`,
  `"live love laugh wicked" – Anais`,
  `"we can only be wicked together" – Anais`
];

function scatterQuotes() {
  const container = document.getElementById("quoteContainer");

  quotes.forEach((quote) => {
    const span = document.createElement("span");
    span.textContent = quote;
    span.style.top = `${Math.random() * 90 + 5}%`;
    span.style.left = `${Math.random() * 90 + 5}%`;
    span.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
    span.style.animationDuration = `${8 + Math.random() * 4}s`;
    container.appendChild(span);
  });
}

window.onload = scatterQuotes;
