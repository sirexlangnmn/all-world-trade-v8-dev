let btnTestForm = getId('btnTestForm');
let testNameValidation = getId('testNameValidation');

btnTestForm.addEventListener('click', (event) => {
    event.preventDefault();
    //testSubmitFileAndInputText1();
    //testSubmitFileAndInputText2();
    testSubmitFileAndInputText3();
    //testSubmitInputText();
});

function testSubmitFileAndInputText1() {
    var formData = new FormData();
    formData.append('file', $('#testBanner')[0].files[0]);
    formData.append('file', $('#testLogo')[0].files[0]);
    formData.append('textfield', $('#testName').val());

    console.log('formData', formData);
    $.ajax({
        url: '/api/v2/test/post/file-and-input-test',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            if (response.message[0].msg) {
                testNameValidation.innerHTML = response.message[0].msg;
            } else {
                testNameValidation.innerHTML = '';
            }
        },
    });
}


function testSubmitFileAndInputText2() {
    //let form = getId('testForm');
    let form = document.getElementById('testForm');
    const form2 = $('#testForm');
    let formData = new FormData(form);
    formData.append('file', document.getElementById('testBanner').files[0]);
    console.log('form', form);
    console.log('form2', form2);
    console.log('formData', formData);
    console.log('form2.serialize', form2.serialize());

    $.ajax({
        url: '/api/v2/test/post/file-and-input-test',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            if (response.message[0].msg) {
                testNameValidation.innerHTML = response.message[0].msg;
            } else {
                testNameValidation.innerHTML = '';
            }
        },
    });
}

function testSubmitFileAndInputText3() {
    var formData = new FormData();
    formData.append('testBanner', $('#testBanner')[0].files[0]);
    formData.append('testLogo', $('#testLogo')[0].files[0]);
    formData.append('testName', $('#testName').val());


    $.ajax({
        url: '/api/v2/test/post/file-and-input-test',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            if (response.message[0].msg) {
                testNameValidation.innerHTML = response.message[0].msg;
            } else {
                testNameValidation.innerHTML = '';
            }
        },
    });
}

function testSubmitInputText() {
    const testForm = $('#testForm');
    console.log('testForm', testForm);
    console.log('testForm.serialize', testForm.serialize());

    $.ajax({
        url: '/api/v2/test/post/file-and-input-test',
        type: 'post',
        data: testForm.serialize(),
        success: function (response) {
            console.log(response);
            if (response.message[0].msg) {
                testNameValidation.innerHTML = response.message[0].msg;
            } else {
                testNameValidation.innerHTML = '';
            }
        },
    });
}
