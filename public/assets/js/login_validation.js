var displayName = "";
var uid = "";
var email = "";

$(document).ready(function () {
    //	user login event listener
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            displayName = user.displayName;
            uid = user.uid;
            email = user.email;
      
            //	usersInfo event listener
            db.ref("users/" + uid + "/userInfo").on("value", function (snapshot) {
                if (snapshot) {
                    // if user info exists, create the following cookies 
                    document.cookie = "userName=" + displayName + ";";
                    document.cookie = "email=" + email + ";";
                    document.cookie = "userId=" + uid + ";";
                }
            }, function (error) {
                console.log("Error: " + error.code);
            });
        } else {
            console.log("else do nothing");
        }
    });
});	
