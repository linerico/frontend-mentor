const accordions = document.querySelectorAll(".accordion")
const panels = document.querySelectorAll(".panel")
const accordionIcon = document.querySelectorAll(".accordion-icon")

accordions.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = btn.getAttribute("index")
    panels.forEach((panel) => {
      if (panel.getAttribute("index") == index) {
        panel.classList.forEach((panelClass) => {
          if (panelClass == "hide") {
            panel.classList.remove("hide")
            accordionIcon.forEach((icon) => {
              if (icon.getAttribute("index") == index) {
                icon.src = "./assets/images/icon-minus.svg"
              }
            })
          } else {
            panel.classList.add("hide")
            accordionIcon.forEach((icon) => {
              if (icon.getAttribute("index") == index) {
                icon.src = "./assets/images/icon-plus.svg"
              }
            })
          }
        })
      }
      
    })
  });
})