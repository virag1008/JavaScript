let string = "";
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      } else {
        console.log(e.target);
        string = string + e.target.innerHTML;
        console.log(string);
        document.querySelector("input").value = string;
      }
    } catch (error) {
      alert(error);
      string = "";
      document.querySelector("input").value = string;
    }
  });
});
