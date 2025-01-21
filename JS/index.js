document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("code-loader");

    // Sélectionner toutes les images et vidéos
    const mediaElements = [...document.images, ...document.querySelectorAll("video")];
    let loadedCount = 0;

    const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === mediaElements.length) {
            loader.style.display = "none"; // Cache le loader
        }
    };

    mediaElements.forEach((element) => {
        if (element.tagName === "IMG") {
            if (element.complete) {
                checkAllLoaded();
            } else {
                element.addEventListener("load", checkAllLoaded);
                element.addEventListener("error", checkAllLoaded); // Gérer les erreurs
            }
        } else if (element.tagName === "VIDEO") {
            element.addEventListener("loadeddata", checkAllLoaded);
            element.addEventListener("error", checkAllLoaded); // Gérer les erreurs
        }
    });

    // Si aucun média n'est présent
    if (mediaElements.length === 0) {
        loader.style.display = "none";
    }
});
