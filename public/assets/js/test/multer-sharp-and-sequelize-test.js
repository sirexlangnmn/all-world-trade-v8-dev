$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault();
  
      var formData = new FormData($(this)[0]);
  
      $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log('Image uploaded successfully!');
        }
      });
    });
  });
  