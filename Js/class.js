// let home = document.getElementById("home");
// home.style.color = "red";

// let msg = document.querySelector(".message");
// msg.style.color = "green";

// // let msg = document.querySelector("#msg");
// // msg.style.color = "blue";

// let message = document.querySelectorAll("#msg");
// message.forEach((e) => (e.style.color = "yellow"));

// let paras = document.getElementsByTagName("li");
// paras[0].style.color = "red";
// paras[1].style.color = "yellow";
// paras[2].style.color = "purple";
// paras[3].style.color = "blue";
// paras[4].style.color = "black";

// // let title = document.getElementById("title");
// // let para = document.querySelector(".text");
// // let button = document.getElementById("btn");

// // button.addEventListener("click now", () => [(title.style.color = "blue")]);

// let button = document.getElementById("Submit");

// button.addEventListener("click", () => {
//   alert("who is there");
// });

function openMenu() {
  const menu = document.querySelector(".nav_menu-list");
  menu.classList.toggle("show");

  const links = menu.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
}

var countDownDate = new Date("October 7 2025 00:0:00").getTime();

var countDownInterval = setInterval(() => {
  var now = new Date().getTime();
  distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minute;
  document.getElementById("secs").innerHTML = seconds;
}, 1000);
