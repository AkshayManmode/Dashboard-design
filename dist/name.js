window.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://192.168.1.248:8080/api/user/getAllUser';
    const nameContainer = document.getElementById('nameContainer');
  
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const nameElement = htmlDoc.querySelector('h5.fs-6.mb-0 a');
  
        if (nameElement) {
          const name = nameElement.textContent;
          nameContainer.textContent = `Name: ${name}`;
        } else {
          nameContainer.textContent = 'Name not found';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        nameContainer.textContent = 'An error occurred while fetching the name';
      });
  });
  