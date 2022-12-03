function opentab(evt, name) {
    // Declare all variables
     var i, pages, tablinks;
   
     // Get all elements with class="tabcontent" and hide them
     pages = document.getElementsByClassName("pg");
     for (i = 0; i < pages.length; i++) {
       pages[i].style.display = "none";
     }
   
     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.querySelectorAll(".fl_type ul li");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" under", "");
     }
   
     // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(name).style.display = "block";
     evt.currentTarget.className += " under";
   }

document.getElementById("dfo").click();