function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function logOut() {
    console.log("signing out");
	if(firebase.auth().currentUser) {
		//	If user is signed in, sign them out
		firebase.auth().signOut();
		$("#login").show();
		$(".logout").hide();
		deleteAllCookies();
		window.location.href = "/login";
	}
}

firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
		$(".username").text(user.displayName);
		$(".dropdown").empty();
		var logout = $("<div>");
		logout.text("Logout");
		logout.attr("id", "logout");
		var profile = $("<div>");
		profile.text("Profile");
		$(".dropdown").append(logout, profile);
	} else {
		$(".username").text("Get Fit!");
		$(".dropdown").empty();
		var login = $("<div>");
		login.text("Log In");
		login.attr("id", "login");
		var signup = $("<div>");
		signup.text("Sign Up");
		signup.attr("id", "signup");
		$(".dropdown").append(login, signup);
	}
});

$(document).on("click", ".logout", logOut);