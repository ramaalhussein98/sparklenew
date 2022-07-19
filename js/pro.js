

function nextImg() {
  var img1 = document.getElementById('news').getElementsByTagName('img')[0].className;
  var img2 = document.getElementById('news').getElementsByTagName('img')[1].className;
  var img3 = document.getElementById('news').getElementsByTagName('img')[2].className;
  var img4 = document.getElementById('news').getElementsByTagName('img')[3].className;
  var img5 = document.getElementById('news').getElementsByTagName('img')[4].className;
  var img6 = document.getElementById('news').getElementsByTagName('img')[5].className;
  var img7 = document.getElementById('news').getElementsByTagName('img')[6].className;
  var div1 = document.getElementById('parentDiv').getElementsByTagName('div')[0].className;
  var div2 = document.getElementById('parentDiv').getElementsByTagName('div')[1].className;
  var div3 = document.getElementById('parentDiv').getElementsByTagName('div')[2].className;
  var div4 = document.getElementById('parentDiv').getElementsByTagName('div')[3].className;
  var div5 = document.getElementById('parentDiv').getElementsByTagName('div')[4].className;
  var div6 = document.getElementById('parentDiv').getElementsByTagName('div')[5].className;
  var div7 = document.getElementById('parentDiv').getElementsByTagName('div')[6].className;
  document.getElementById('news').getElementsByTagName('img')[0].setAttribute('class', img2);
  document.getElementById('news').getElementsByTagName('img')[1].setAttribute('class', img3);
  document.getElementById('news').getElementsByTagName('img')[2].setAttribute('class', img4);
  document.getElementById('news').getElementsByTagName('img')[3].setAttribute('class', img5);
  document.getElementById('news').getElementsByTagName('img')[4].setAttribute('class', img6);
  document.getElementById('news').getElementsByTagName('img')[5].setAttribute('class', img7);
  document.getElementById('news').getElementsByTagName('img')[6].setAttribute('class', img1);
  /////////
  document.getElementById('parentDiv').getElementsByTagName('div')[0].setAttribute('class', div2);
  document.getElementById('parentDiv').getElementsByTagName('div')[1].setAttribute('class', div3);
  document.getElementById('parentDiv').getElementsByTagName('div')[2].setAttribute('class', div4);
  document.getElementById('parentDiv').getElementsByTagName('div')[3].setAttribute('class', div5);
  document.getElementById('parentDiv').getElementsByTagName('div')[4].setAttribute('class', div6);
  document.getElementById('parentDiv').getElementsByTagName('div')[5].setAttribute('class', div7);
  document.getElementById('parentDiv').getElementsByTagName('div')[6].setAttribute('class', div1);

}


































////////////////////////////////////////////////////////////////////////////////////////////////////////////







// Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitcher = document.getElementById("theme-switcher");

  // When our button gets clicked
  themeSwitcher.onclick = function () {
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});
    ////////////////////////////////////////

