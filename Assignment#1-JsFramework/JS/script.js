// script.js
window.onload = function() {
    fetch('sample.txt')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n');
            const outputDiv = document.getElementById('output');
            lines.forEach(line => {
                const paragraph = document.createElement('p');
                paragraph.textContent = line;
                outputDiv.appendChild(paragraph);
            });
        })
        .catch(error => console.error('Error fetching the file:', error));
}
