const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImageBtn");
const deleteImageBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

/* ACTIVAR SELECCIÓN EN IMÁGENES INICIALES */
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => selectImage(img));
});

/* AGREGAR IMAGEN */
addImageBtn.addEventListener("click", () => {
    const imageUrl = imageUrlInput.value.trim();

    if (imageUrl === "") {
        alert("Por favor ingresa una URL válida.");
        return;
    }

    const img = document.createElement("img");
    img.src = imageUrl;

    img.addEventListener("click", () => selectImage(img));

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

/* SELECCIONAR IMAGEN */
function selectImage(img) {
    document.querySelectorAll(".gallery img").forEach(image => {
        image.classList.remove("selected");
    });

    img.classList.add("selected");
    selectedImage = img;
}

/* ELIMINAR IMAGEN */
deleteImageBtn.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    } else {
        alert("Selecciona una imagen para eliminar.");
    }
});

/* TECLA DELETE */
document.addEventListener("keydown", (event) => {
    if (event.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

