document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
  
    fetch('/test/two-file-and-text-input-multer-sharp-sequelize', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(text => {
        console.log(text);
      });
  });
  