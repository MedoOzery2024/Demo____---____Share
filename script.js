const fileList = document.getElementById('fileList');
const fileInput = document.getElementById('fileInput');
let files = [];

function uploadFiles() {
    const selectedFiles = fileInput.files;
    for (let i = 0; i < selectedFiles.length; i++) {
        files.push(selectedFiles[i]);
    }
    displayFiles();
}

function displayFiles() {
    fileList.innerHTML = '';
    files.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'حذف';
        deleteButton.onclick = () => deleteFile(index);
        listItem.appendChild(deleteButton);

        fileList.appendChild(listItem);
    });
}

function deleteFile(index) {
    files.splice(index, 1);
    displayFiles();
}

function clearList() {
    files = [];
    displayFiles();
}

function downloadFiles() {
    files.forEach(file => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(file);
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
