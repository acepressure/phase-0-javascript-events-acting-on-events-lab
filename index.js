const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        console.log('howdy')
        moveDodgerLeft();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        console.log('howdy')
        moveDodgerRight();
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 5) {
      dodger.style.left = `${left - 1}px`;
      console.log(left)
    }
  }
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 180) {
      dodger.style.left = `${left + 1}px`;
      console.log(left)
    }
  } 