var age = 20;
age = 65;
console.log(age);

var username = "simhq";
var password = "password";
var isMale = true;
var isLoggedIn = false;

var blog_posts = ["hello, how are you", "i am well", "thank you"];
console.log(blog_posts);
console.log(isMale);

if (isMale == false) {
    console.log("You are male");
}
else {
    console.log("You are a girl");
}

while (age < 70) {
    console.log("My age is " + age)
    age++;
}

function showAge() {
    var user_input = document.getElementById("user-input").value;
    document.getElementById("header-age").textContent = user_input;
}