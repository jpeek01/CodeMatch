$(document).ready(function () {
    var cookieArray = document.cookie.split(";");
    var cookieUserName = cookieArray[0];
    var userName = cookieUserName.replace("userName=","");
    console.log(userName);
    $("#userName").val(userName);

});