const text = document.getElementById("text");
const countText = document.getElementById("count");
const button = document.getElementById("btn");

function countWords() {
  text.value = text.value
    .replace(/<span class="highlight">/g, "")
    .replace(/<\/span>/g, "");

  const textArray = text.value.split(" ");
  let wordsCountArray = [],
    longestWordIndex = 0,
    count = 0,
    longestWord = "";

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] != "") {
      count++;
      wordsCountArray.push(textArray[i].length);
    }
  }

  countText.innerHTML = count == 1 ? "1 Word" : `${count} Words`;

  longestWordIndex = Math.max(...wordsCountArray);
  longestWord = textArray[wordsCountArray.indexOf(longestWordIndex)];

  // Highlight the longest word
  let highlightedText = text.value.replace(
    longestWord,
    `<span class="highlight">${longestWord}</span>`
  );
  text.innerHTML = highlightedText;
}

button.addEventListener("click", countWords);
