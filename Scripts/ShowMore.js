
  const description = document.getElementById("description");
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", () => {
    description.classList.toggle("expanded");

    if (description.classList.contains("expanded")) {
      toggleBtn.innerText = "SHOW LESS";
    } else {
      toggleBtn.innerText = "SHOW MORE";
    }
  });

