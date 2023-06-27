var overlay = document.getElementById("overlay");

var closeButtonListItem = document.getElementById("close-btn");
var closeButtonLink = closeButtonListItem.getElementsByTagName("a")[0];

var openButtonLink = document.getElementById("open-btn");
var openButtonContent = openButtonLink.getElementsByTagName("i")[0];

/* Code sourced from W3 Schools (https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp) */
function openNav() {
  overlay.style.transition = "0.5s";
  overlay.style.width = "100%";

  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.position = "fixed";

  closeButtonListItem.ariaHidden = "false";
  closeButtonLink.ariaHidden = "false";

  openButtonLink.ariaHidden = "true";
  openButtonContent.ariaHidden = "true";
}

function closeNav() {
  overlay.style.width = "0%";

  document.getElementsByTagName("body")[0].style.overflow = "visible";
  document.getElementsByTagName("body")[0].style.position = "static";

  closeButtonListItem.ariaHidden = "true";
  closeButtonLink.ariaHidden = "true";

  openButtonLink.ariaHidden = "false";
  openButtonContent.ariaHidden = "false";
}
/* End of sourced code */

function manageMobileNav(){
  var overlayLinks = overlay.getElementsByTagName("a");

  if(window.innerWidth >= 700){
    overlay.removeAttribute("style");

    for(i = 0; i < overlayLinks.length; i++){
      overlayLinks[i].style.transition = "background-color 0.25s ease-in-out, color 0.25s ease-in-out";
    }

    document.getElementsByTagName("body")[0].style.overflow = "visible";
    document.getElementsByTagName("body")[0].style.position = "static";

    closeButtonListItem.ariaHidden = "true";
    closeButtonLink.ariaHidden = "true";

    openButtonLink.ariaHidden = "true";
    openButtonContent.ariaHidden = "true";
  }
  else {
    openButtonLink.ariaHidden = "false";
    openButtonContent.ariaHidden = "false";

    for(i = 0; i < overlayLinks.length; i++){
      overlayLinks[i].removeAttribute("style");
    }
  }
}

screen.orientation.addEventListener("change", manageMobileNav());