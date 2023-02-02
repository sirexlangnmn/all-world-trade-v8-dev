function uploadBannerV2(inputElementId, validationElementId) {
    let form = document.getElementById(inputElementId);
    let formData = new FormData(form);

    console.log('formData', formData);

    $.ajax({
        url: '/api/v2/multer-sharp-and-sequelize-update-banner',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            companyBannerPreview.src = companyBannerPreviewSrc;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 413) {
                console.error('Request Entity Too Large');
                // Handle error response
            }
        },
    });
}
