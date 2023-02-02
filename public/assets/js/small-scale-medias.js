let companyLogoPreview;
let companyBannerPreview;
let companyLogoId;
let companyBannerId;
let userImage;
let isAvatar;

companyLogoPreview = getId('companyLogoPreview');
companyBannerPreview = getId('companyBannerPreview');
companyLogoId = getId('companyLogoId');
companyBannerId = getId('companyBannerId');
userImage = getId('user-image');
isAvatar = getId('is_avatar');

$(function () {
    getUsersLogoAndBanner();
});

function getUsersLogoAndBanner() {
    $.ajax({
        url: '/api/get/users-logo-and-banners',
        type: 'GET',
        success: function (data) {
            if (data.length > 0) {
                if (data[0].banner) {
                    companyBannerPreview.src = host + '/uploads/users_upload_files/' + data[0].banner;
                } else {
                    companyBannerPreview.src = host + '/uploads/placeholder/banner-placeholder.png';
                }
                if (data[0].logo) {
                    companyLogoPreview.src = host + '/uploads/users_upload_files/' + data[0].logo;
                    userImage.src = host + '/uploads/users_upload_files/' + data[0].logo;
                    isAvatar.src = host + '/uploads/users_upload_files/' + data[0].logo;
                } else {
                    companyLogoPreview.src = host + '/uploads/placeholder/logo-placeholder.jpg';
                    userImage.src = host + '/uploads/placeholder/logo-placeholder.jpg';
                    isAvatar.src = host + '/uploads/placeholder/logo-placeholder.jpg';
                }
                companyLogoId.value = data[0].id;
                companyBannerId.value = data[0].id;

                let companyLogoImage = data[0].banner
                    ? '/uploads/users_upload_files/' + data[0].logo
                    : '/uploads/placeholder/logo-placeholder2.jpg';
                let companyBannerImage = data[0].banner
                    ? '/uploads/users_upload_files/' + data[0].banner
                    : '/uploads/placeholder/banner-placeholder2.jpg';
                testImage(host + companyLogoImage, isValidLogo);
                testImage(host + companyBannerImage, isValidBanner);
            } else {
                companyBannerPreview.src = host + '/uploads/placeholder/banner-placeholder.png';
                companyLogoPreview.src = host + '/uploads/placeholder/logo-placeholder.jpg';
                userImage.src = host + '/uploads/placeholder/logo-placeholder.jpg';
                isAvatar.src = host + '/uploads/placeholder/logo-placeholder.jpg';
            }
        },
    });
}

document.getElementById('companyLogo').onchange = (evt) => {
    const [file] = companyLogo.files;
    if (file) {
        companyLogoPreview.src = URL.createObjectURL(file);
        editcompanyLogo();
    }
};

document.getElementById('companyBanner').onchange = (evt) => {
    const [file] = companyBanner.files;
    if (file) {
        companyBannerPreview.src = URL.createObjectURL(file);
        editcompanyBanner();
    }
};

function editcompanyLogo() {
    // Get form
    let form = $('#editcompanyLogo')[0];

    // Create an FormData object
    let data = new FormData(form);

    $.ajax({
        type: 'POST',
        enctype: 'multipart/form-data',
        url: '/api/post/update-trader-company-logo',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 800000,
        success: function (data) {
            // some code here
        },
        error: function (e) {
            // some code here
        },
    });
}

function editcompanyBanner() {
    // Get form
    let form = $('#editcompanyBanner')[0];

    // Create an FormData object
    let data = new FormData(form);

    $.ajax({
        type: 'POST',
        enctype: 'multipart/form-data',
        url: '/api/post/update-trader-company-banner',
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 800000,
        success: function (data) {
            // some code here
        },
        error: function (e) {
            // some code here
        },
    });
}
