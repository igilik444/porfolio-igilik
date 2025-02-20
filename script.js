document.getElementById("language-toggle").addEventListener("click", function() {
    let aboutText = document.getElementById("about-text");
    let currentText = aboutText.innerText;

    if (currentText === "Я занимаюсь созданием крутых мобильных видео и постоянно развиваюсь в этой сфере.") {
        aboutText.innerText = "Мен мобильді бейнелер жасаумен айналысамын және осы салада үнемі дамып келемін.";
    } else if (currentText === "Мен мобильді бейнелер жасаумен айналысамын және осы салада үнемі дамып келемін.") {
        aboutText.innerText = "I create cool mobile videos and constantly improve in this field.";
    } else {
        aboutText.innerText = "Я занимаюсь созданием крутых мобильных видео и постоянно развиваюсь в этой сфере.";
    }
});
