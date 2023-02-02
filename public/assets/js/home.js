// document.onreadystatechange = function () {
//     if (document.readyState === "complete") {
//         // setInterval(function () {
//             var myElement = document.getElementById("my-element");
//             myElement.style.visibility = "visible";
//         // }, 2000);
        
//     }
// }

let numberOfTraderMembers;
let numberOfVisitorMembers;
numberOfTraderMembers = getId('numberOfTraderMembers');
numberOfVisitorMembers = getId('numberOfVisitorMembers');


window.onload = function () {
    getNumberOfTraderMembers();
    getNumberOfVisitorMembers();
};

function getNumberOfTraderMembers() {
    $.ajax({
        url: '/api/v2/get/number-of-trader-members',
        type: 'GET',
        success: function (data) {
            numberOfTraderMembers.innerHTML = 'Number of Trader Members: ' + data.length;
        },
    });
}

function getNumberOfVisitorMembers() {
    $.ajax({
        url: '/api/v2/get/number-of-visitor-members',
        type: 'GET',
        success: function (data) {
            numberOfVisitorMembers.innerHTML = 'Numbers of Visitor Members: ' + data.length;
        },
    });
}