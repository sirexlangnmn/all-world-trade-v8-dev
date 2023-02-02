// $(document).ready(function () {
//     $('form').submit(function (e) {
//         e.preventDefault();

//         let formData = new FormData($(this)[0]);
//         console.log(formData);

//         $.ajax({
//             url: '/upload2',
//             type: 'POST',
//             data: formData,
//             async: false,
//             cache: false,
//             contentType: false,
//             processData: false,
//             success: function (data) {
//                 console.log('Image uploaded successfully!');
//             },
//         });
//     });
// });

$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();

       
        //let formData = new FormData($(this)[0]);

        // ayaw
        var form = document.getElementById("form1");
        let formData = new FormData(form);

        console.log(formData);

        $.ajax({
            url: '/upload2',
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log('Image uploaded successfully!');
            },
        });
    });
});

function uploadBannerOrLogo(inputElementId, validationElementId) {


    let form = document.getElementById(inputElementId);
    let formData = new FormData(form);

    // let formData = new FormData($('#'+inputElementId)[0]);
    // let inputFieldId = document.getElementById(inputElementId);
    // let formData = new FormData($(inputFieldId)[0]);
    
    console.log('formData', formData);

    $.ajax({
        url: '/upload2',
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
}
