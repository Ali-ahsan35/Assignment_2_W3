const hearts = document.querySelectorAll(".heart_icon");


let likedCards = JSON.parse(localStorage.getItem("likedCards")) || [];

// restore liked hearts on page load
hearts.forEach((heart) => {
  const cardId = heart.dataset.id;

  if (likedCards.includes(cardId)) {
    heart.src = "Assets/heart-full.svg";
  }


  heart.addEventListener("click", () => {
    if (likedCards.includes(cardId)) {

      likedCards = likedCards.filter(id => id !== cardId);
      heart.src = "Assets/heart-empty.svg";
    } else {

      likedCards.push(cardId);
      heart.src = "Assets/heart-full.svg";
    }

    localStorage.setItem("likedCards", JSON.stringify(likedCards));
  });
});
