/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// Select Menu Button
var menuButton = document.querySelector('.menu-button')

// Menu component creator
function menuCreator(arr) {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuUL = document.createElement('ul');
  menuUL.classList.add('menu--open');

  arr.forEach(element => {
    var newLi = document.createElement('li');
    newLi.textContent = element;
    menuUL.appendChild(newLi);
  });
  menu.appendChild(menuUL);

  menuButton.addEventListener("click", () => {
    menuUL.classList.toggle('menu--open');
  })

  return menu;
}

// Add menu component to body button
var body = document.querySelector('body');
body.appendChild(menuCreator(menuItems));

// GSAP toggle menu
var openClose = TweenLite.from(".menu", 0.1, {
  width: 0,
  paused: true,
  reversed: true
});

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (openClose.reversed()) {
    openClose.play();
  } else {
    openClose.reverse();
  }
}
