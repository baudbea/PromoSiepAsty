document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("code-loader");

    const mediaElements = [...document.images, ...document.querySelectorAll("video")];
    let loadedCount = 0;

    const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === mediaElements.length) {
            loader.classList.add("hidden"); // Applique le fade-out
            setTimeout(() => {
                loader.style.display = "none"; // Cache complètement après l'animation
            }, 250); // 1s = durée de l'animation CSS
        }
    };

    mediaElements.forEach((element) => {
        if (element.tagName === "IMG") {
            if (element.complete) {
                checkAllLoaded();
            } else {
                element.addEventListener("load", checkAllLoaded);
                element.addEventListener("error", checkAllLoaded);
            }
        } else if (element.tagName === "VIDEO") {
            element.addEventListener("loadeddata", checkAllLoaded);
            element.addEventListener("error", checkAllLoaded);
        }
    });

    if (mediaElements.length === 0) {
        loader.classList.add("hidden");
        setTimeout(() => {
            loader.style.display = "none";
        }, 250);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const contents = document.querySelectorAll(".content");
    const progressBar = document.getElementById("progressBar");
    let activeIndex = -1;

    steps.forEach((step, index) => {
        step.addEventListener("click", function () {
            if (activeIndex === index) {
                contents[index].classList.remove("active");
                activeIndex = -1;
                progressBar.style.height = "0%";
            } else {
                if (activeIndex !== -1) {
                    contents[activeIndex].classList.remove("active");
                }
                contents[index].classList.add("active");
                activeIndex = index;
                progressBar.style.height = ((index + 1) / steps.length) * 100 + "%";
            }
        });
    });
});