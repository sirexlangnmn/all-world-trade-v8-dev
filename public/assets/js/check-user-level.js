$(function () {
    getUsersAccount();
});


// function getUsersAccount() {
//     $('#upgrade-account').prop('disabled', true);
//     document.getElementById('upgrade-account').style.display = 'none';

//     $.ajax({
//         url: '/api/get/users-account',
//         type: 'POST',
//         success: function (data) {
//             console.log('check-user-level', data);
//             console.log('getUsersAccount() | type: ' + data[0].type);
                    
//             if (data[0].type === 1) {
//                 $('#upgrade-account').prop('disabled', true);
//                 document.getElementById('upgrade-account').style.display = 'none';
//                 document.getElementById('user-type').innerHTML = 'Trader';
//             }
//             if (data[0].type === 2) {
//                 $('#upgrade-account').prop('disabled', false);
//                 document.getElementById('upgrade-account').style.display = 'block';
//                 document.getElementById('user-type').innerHTML = 'Large Scale';
//             }
//             if (data[0].type === 3) {
//                 $('#upgrade-account').prop('disabled', false);
//                 document.getElementById('upgrade-account').style.display = 'block';
//                 document.getElementById('user-type').innerHTML = 'Medium Scale';
//             }
//             if (data[0].type === 4) {
//                 document.getElementById('user-type').innerHTML = 'Small Scale';
//             }
            
//         },
//     });
// }




function getUsersAccount() {
    
}