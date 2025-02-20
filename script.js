document.getElementById("language-toggle").addEventListener("click", function() {
    let aboutText = document.getElementById("about-text");
    if (aboutText.innerText === "Я занимаюсь созданием крутых мобильных видео и постоянно развиваюсь в этой сфере.") {
        aboutText.innerText = "I create cool mobile videos and constantly improve in this field.";
    } else {
        aboutText.innerText = "Я занимаюсь созданием крутых мобильных видео и постоянно развиваюсь в этой сфере.";
    }
});
