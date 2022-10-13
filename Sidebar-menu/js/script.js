let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let btnExpand = document.querySelectorAll(".btn-expand");
let btnExpand2 = document.querySelectorAll(".btn-expand-2");

closeBtn.addEventListener("click", () => {
  const showMenu = document.querySelectorAll(".show-menu");
  const showMenu2 = document.querySelectorAll(".show-menu-2");

  showMenu.forEach((x) => x.classList.remove("show-menu"));
  showMenu2.forEach((x) => x.classList.remove("show-menu-2"));
  sidebar.classList.toggle("open");

  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

//*** Hover items navbar. Posicionar os tooltip em cada item li ***//
$(".nav-list a").not(".nav-list li .submenu li a").hover(
  function (e) {
    const menuItem = $(this),
      tooltip = $(".tooltip");
      submenu = $(".submenu");

    const menuItemPos = menuItem.position();

    HideSubMenu(e,"show-menu");
    HideSubMenu(e,"show-menu-2");

    tooltip.css({
      top: menuItemPos.top + Math.round(menuItem.outerHeight() * 0.7),
      left: menuItemPos.left + Math.round(menuItem.outerWidth() + 17),
    });

    submenu.css({
      top: menuItemPos.top + Math.round(menuItem.outerHeight() * 0.7),
    });
  },
  function () {
    PositionTooltip();
  }
);

function PositionTooltip() {
  var menuItem = $(".nav-list > li"),
    tooltip = $(".tooltip");
  menuItem.each(function (index, element) {
    menuItemPos = $(element).position();
    $(tooltip[index]).css({
      top: menuItemPos.top - 20,
    });
  });
}

function ShowSubMenu(event, classTarget) {
  const expandParent =
    event.target.nodeName === "A"
      ? event.target.parentElement
      : event.target.parentElement.parentElement;
  expandParent.classList.toggle(classTarget);
}

function HideSubMenu(event, classTarget) {
  const item =
    event.target.nodeName === "A"
      ? event.target.parentElement
      : event.target.parentElement.parentElement;
  const className = $(item)[0].className;
  if(className !== 'show-menu' && className !== 'show-menu-2'){
    const showMenu = document.querySelectorAll(`.${classTarget}`);
    showMenu.forEach((x) => x.classList.remove(classTarget));
  }
}

for (let i = 0; i < btnExpand.length; i++) {
  $(btnExpand[i]).click((e) => ShowSubMenu(e, "show-menu"));
  $(btnExpand2[i]).click((e) => ShowSubMenu(e, "show-menu-2"));
}

PositionTooltip();
