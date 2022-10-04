const tabs     = document.querySelectorAll(".tabsSimple");
const contents = document.querySelectorAll(".tabsContent");


tabs.forEach((tab,index) => {
    tab.addEventListener("click", () => {
        contents.forEach( (content) => {
            content.classList.remove("active");
        });
        tabs.forEach((el)=> {
            el.classList.remove("active");
        });

        tabs[index].classList.add("active");
        contents[index].classList.add("active");
    });
})

