document.addEventListener("DOMContentLoaded", () => {
    let serviceTypeLabel = document.querySelectorAll(".services-types-label-container");

    Array.from(serviceTypeLabel).forEach((element)=> {
        element.addEventListener("click", ()=> {
            const activeElement = document.querySelector(".services-types-label-container.active");
            activeElement.classList.remove("active")
            activeElement.nextElementSibling.classList.remove("active")
            element.classList.add("active")
            element.nextElementSibling.classList.add("active")
        })
    })
});

