'use strict';

const btnToolbar = document.querySelectorAll(".btn-text");
const content = document.querySelector('.editor__content');
const counter = document.getElementById("count");
const uploadButton = document.getElementById("uploadButton");
let selectedElement = null;

content.addEventListener("input", function () {
    const text = this.innerText.trim();
    const currentLength = text.length;
    counter.textContent = currentLength;
});

btnToolbar.forEach(button => button.addEventListener("click", ()=>{
    formatText(button.value);
}))

content.addEventListener('click', function(event) {
    const element = event.target;
    selectedElement = element;
});

uploadButton.addEventListener("click", ()=> {
    const image_upload = document.getElementById("image_upload");
    image_upload.click();
    
    image_upload.onchange = function() {
        const image_upload_files = image_upload.files;
        const formData = new FormData();
        const xhr = new XMLHttpRequest();


        for(let i = 0; i < image_upload_files.length; i++) {
            formData.append("file[]", image_upload_files[i]);
            const newImage = document.createElement("img");
            newImage.src = URL.createObjectURL(image_upload_files[i]);
            content.appendChild(newImage);
        }

        xhr.open("POST", "Post_Processing.php", true);
        xhr.send(formData);
    }
})

function formatText(tag) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // Verificar se o texto selecionado pertence à div .content
    if (content.contains(range.commonAncestorContainer)) {
        const element = document.createElement(tag);
        element.textContent = selection.toString();
        range.deleteContents();
        range.insertNode(element);
        content.focus();
    }
}

function changeElementPosition(pos) {
    selectedElement.style.textAlign = pos;
}