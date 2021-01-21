var myURL = window.location.href;

if(myURL.indexOf("Launch.html") !== -1) {
    var URL = myURL;
    URL = URL.split("Launch.html")[0];
} else {
    var URL = myURL;
    URL = URL.split("data/html")[0];
}

var token = sessionStorage.getItem("authToken");
var cartURL = myURL.indexOf("data/html/cart.html");
var profileURL = myURL.indexOf("data/html/profile.html");
var paymentURL = myURL.indexOf("data/html/payment.html");
var adminURL = myURL.indexOf("data/html/admin.html");
var productURL = myURL.indexOf("data/html/editProd.html");
var alpha = "hbgbkjbkutddvn58s22kk21zzrb3";
var beta = "bbb5aa888jjvccsakksdg4j5ssg";
if ((cartURL !== -1 || profileURL !== -1 || paymentURL !== -1) && !token) {
    window.location.href = URL + "Launch.html";
}

var noShowLogin = document.getElementById("loggedin-menu");
var noShowLogout = document.getElementById("logout-menu");
var title = document.getElementsByClassName("title-2");
var searchElement = document.getElementById("searchInput");
var header = document.getElementById("header-section");

var thisKey = getUserKey();
var thisUser = JSON.parse(localStorage.getItem(thisKey));
if ((adminURL !== -1 && !token) || (adminURL !== -1 && thisUser?.type == "customer")) {
    window.location.href = URL + "Launch.html";
}
if ((thisUser?.type == "admin" && token) && !(adminURL !== -1 || profileURL !== -1 || productURL !== -1)) {
    window.location.href = URL + "data/html/admin.html";
}
if ((thisUser?.type == "admin" && token) && (adminURL !== -1 || profileURL !== -1)) {
    if (noShowLogin) {
        noShowLogin.style.display = "none";
    }
    if (noShowLogin) {
        noShowLogout.style.display = "none";
    }
    if (header) {
        header.style.height = "auto";
    }
    if (searchElement) {
        searchElement.style.display = "none";
    }
    if (title) {
        for (i = 0; i < title.length; i++) {
            title[i].style.background = "rgb(233, 229, 229)";
            if (title[1]) {
                title[1].style.background = "black";
                title[1].style.padding = "5px";
                title[1].style.margin = "15px 0";
            }
        }
    }
}

var loggedIn = document.getElementsByName("loggedIn");
var loggedOut = document.getElementsByName("loggedOut");
var cart_btns = document.getElementsByClassName("cart-button");

if (!token) {
    for (i = 0; i < cart_btns.length; i++) {
        cart_btns[i].hidden = true;
    }
}

if (token && token.indexOf("hbgbkjbkutddvn58s22kk21zzrb3") !== -1 && token.indexOf("bbb5aa888jjvccsakksdg4j5ssg") !== -1) {
    loggedOut.forEach(hiddenItems);
} else {
    loggedIn.forEach(hiddenItems);
}

function hiddenItems(item, index) {
    item.hidden = true;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-accordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 18px";
        } else {
            panel.style.maxHeight = "max-content";
            panel.style.padding = "20px 40px";
        }
    });
}

function generateToken() {
    var temp1 = Math.random().toString(36).substring(2, 22) + Math.random().toString(36).substring(3, 26);
    var temp2 = Math.random().toString(36).substring(3, 15) + Math.random().toString(36).substring(2, 25);
    var token = temp1 + alpha + temp2 + beta;
    sessionStorage.setItem("authToken", token);
}

function login() {
    var l_success_message = document.getElementById("l_success_message");
    var l_error_message = document.getElementById("l_error_message");

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var temp = email.split("");
    var key = "_id:";
    var sum = 0;
    for (i = 0; i < temp.length; i++) {
        string = temp[i].charCodeAt().toString();
        code = temp[i].charCodeAt();
        sum = sum + code;
        key = key + sum;
    }

    var id = localStorage.getItem(key);
    if (id) {
        var user = JSON.parse(id);
    }


    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");

    if (email != "" && password != "") {
        if (!(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length)) {
            if (user?.email == email) {
                if (password == user.password) {
                    generateToken();
                    sessionStorage.setItem("email", email);
                    l_error_message.innerHTML = "";
                    l_success_message.innerHTML = "Login successful!";
                    snackbar();
                    setTimeout(function () { location.reload(); }, 2000);
                } else {
                    l_error_message.innerHTML = "Invalid Password!";
                    snackbar();
                }
            } else {
                l_error_message.innerHTML = "Email not registered!";
                snackbar();
            }
        } else {
            l_error_message.innerHTML = "Enter a valid email!";
            snackbar();
        }
    } else {
        l_error_message.innerHTML = "All fields mandatory!";
        snackbar();
    }
}

function currentUser(user) {
    var admin_options = document.getElementById("admin-options");
    if (user == "admin") {
        admin_options.style.display = "";
    } else if (user == "customer") {
        admin_options.style.display = "none";
    }
}

function register() {
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var reg_email = document.getElementById("reg-email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("confirm-pass").value;
    var authKey = document.getElementById("authKey").value;
    var userType = document.getElementsByName("userType");
    var type;

    if (userType[0].checked == true) {
        type = "admin";
    } else if (userType[1].checked == true) {
        type = "customer";
    }

    var dupicate = sessionStorage.getItem("email");

    let user = {
        firstname: fname,
        lastname: lname,
        email: reg_email,
        password: pass,
        cart: "",
        image: "",
        itemTotal: 0,
        type: type,
        AP: "",
    }

    var s_success_message = document.getElementById("s_success_message");
    var s_error_message = document.getElementById("s_error_message");

    if (pass != "" && cpass != "" && reg_email != "" && fname != "" && lname != "" && (userType[0].checked || userType[1].checked)) {
        if (pass == cpass) {
            if (!dupicate) {
                var temp = reg_email.split("");
                var key = "_id:";
                var sum = 0;
                for (i = 0; i < temp.length; i++) {
                    string = temp[i].charCodeAt().toString();
                    code = temp[i].charCodeAt();
                    sum = sum + code;
                    key = key + sum;
                }
                if (userType[0].checked) {
                    if (authKey) {
                        var adminProfile = getAdminProfile();
                        if (adminProfile != false) {
                            user.AP = adminProfile;
                            s_error_message.innerHTML = "";
                            s_success_message.innerHTML = "Registration succesful!";
                            snackbar();
                            localStorage.setItem(key, JSON.stringify(user));
                            generateToken();
                            sessionStorage.setItem("email", reg_email);
                            setTimeout(function () {
                                window.location.href = URL + "data/html/admin.html";
                            }, 2000);
                        } else {
                            s_error_message.innerHTML = "Invalid authorization key!";
                            snackbar();
                        }
                    } else {
                        s_error_message.innerHTML = "Authorization key required!";
                        snackbar();
                    }
                }
                else if (userType[1].checked) {
                    var emailsArray = JSON.parse(localStorage.getItem("emails"));
                    emailsArray.push(reg_email);
                    localStorage.setItem("emails", JSON.stringify(emailsArray));

                    s_error_message.innerHTML = "";
                    s_success_message.innerHTML = "Registration succesful!";
                    snackbar();
                    localStorage.setItem(key, JSON.stringify(user));
                    generateToken();
                    sessionStorage.setItem("email", reg_email);
                    setTimeout(function () { location.reload(); }, 2000);
                }
            } else {
                s_error_message.innerHTML = "Email already registered!";
                snackbar();
            }
        } else {
            s_error_message.innerHTML = "Password does not match!";
            snackbar();
        }
    }
    else {
        s_error_message.innerHTML = "All fields mandatory!";
        snackbar();
    }
}

function signout() {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("email");
    window.location.href = URL + "Launch.html";
}

function removeUser() {
    var email = document.getElementById("");
    var password = document.getElementById("");

    var r_success_message = document.getElementById("r_success_message");
    var r_error_message = document.getElementById("r_error_message");

    var checkLogin = localStorage.getItem(email);
    var token = sessionStorage.getItem("authToken");

    if (token & checkLogin) {
        if (token && token.indexOf("hbgbkjbkutddvn58s22kk21zzrb3") !== -1 && token.indexOf("bbb5aa888jjvccsakksdg4j5ssg") !== -1) {
            if (password == checkLogin.password) {
                localStorage.removeItem(email);
                sessionStorage.removeItem("authToken");
                r_error_message.innerHTML = "";
                r_success_message.innerHTML = "Account deleted successfully!";
                snackbar();
                setTimeout(function () { location.reload(); }, 2000);
            }
        }
    }
}

function getAdminProfile() {
    var authKey = document.getElementById("authKey").value;
    if (authKey == "makeup") {
        return "makeup";
    } else if (authKey == "skincare") {
        return "skincare";
    } else if (authKey == "haircare") {
        return "haircare";
    } else {
        return false;
    }
}

function options(item) {
    if (item == 'catalogue') {
        var x = document.getElementById("catalogue");
        var y = document.getElementById("user");
        if (x.style.display == "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
        }
    }

    if (item == 'user') {
        var x = document.getElementById("catalogue");
        var y = document.getElementById("user");
        if (y.className == "transform") {
            x.style.display = "none";
            y.className = "user-menu";
        } else {
            y.className = "transform";
        }
    }
}


function toggle(data) {
    var login = document.getElementById("login-form");
    var loginTab = document.getElementById("login-tab");
    var signup = document.getElementById("signup-form");
    var signupTab = document.getElementById("signup-tab");
    var userModal = document.getElementById("myModal");

    if (data == "login") {
        login.style.display = "block";
        signup.style.display = "none";
        loginTab.className = "active-tab";
        signupTab.className = "inactive-tab;";
        userModal.className = "login-modal";
    }
    if (data == "signup") {
        login.style.display = "none";
        signup.style.display = "block";
        signupTab.className = "active-tab";
        loginTab.className = "inactive-tab;";
        userModal.className = "login-modal-2";
    }
}

function snackbar() {
    var snackbar = document.getElementsByName("snackbar");
    snackbar.forEach(snackbarFunction);
}
function snackbarFunction(item, index) {
    item.className = "show-snackbar";
    setTimeout(function () { item.className = item.className.replace("show-snackbar", "hide-snackbar"); }, 3000);
}

var blogs = document.getElementsByName("blog");
var blogsList = document.getElementsByName("blog_list");
if (blogs.length) {
    for (i = 0; i < blogs.length; i++) {
        blogs[i].hidden = true;
    }
    blogs[0].hidden = false;
    blogsList[0].className = "blog-list selectedBlog";
}

function myFunction(index, from) {
    sessionStorage.setItem("blog", index);
    var blogs = document.getElementsByName("blog");
    var blogsList = document.getElementsByName("blog_list");
    if (blogs.length) {
        for (i = 0; i < blogs.length; i++) {
            blogs[i].hidden = true;
            blogsList[i].className = "blog-list";
        }
        blogs[index].hidden = false;
        blogsList[index].className = "blog-list selectedBlog";
    }
    if(from != "page") {
        location.reload();
    }
}

function changeImage(index) {
    var images = document.getElementsByName("blog_list");
    if (index == 0) {
        images[0].src = "../assets/homepage-images/33.png"
    }
    if (index == 1) {
        images[1].src = "../assets/homepage-images/34.png"
    }
    if (index == 2) {
        images[2].src = "../assets/homepage-images/35.png"
    }
    if (index == 3) {
        images[3].src = "../assets/homepage-images/36.png"
    }
    if (index == 4) {
        images[4].src = "../assets/homepage-images/37.png"
    }
    if (index == 5) {
        images[5].src = "../assets/homepage-images/38.png"
    }
}

function original(index) {
    var images = document.getElementsByName("blog_list");
    if (index == 0) {
        images[0].src = "../assets/homepage-images/14.png"
    }
    if (index == 1) {
        images[1].src = "../assets/homepage-images/15.png"
    }
    if (index == 2) {
        images[2].src = "../assets/homepage-images/16.png"
    }
    if (index == 3) {
        images[3].src = "../assets/homepage-images/23.png"
    }
    if (index == 4) {
        images[4].src = "../assets/homepage-images/24.png"
    }
    if (index == 5) {
        images[5].src = "../assets/homepage-images/32.jpg"
    }
}

function searchbar() {
    var input, filter, ul, li, a, i, txtValue, results;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("products");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText || a.value;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter != "") {
            ul.className = "search-results";
            document.onclick = function (e) {
                if (e.target.id !== 'searchInput') {
                    ul.className = "transform";
                }
            };
            li[i].style.display = "flex";
            li[i].style.background = "rgba(0, 0, 0, 0.36)";
            li[i].style.margin = "5px 0";
            li[i].style.padding = "5px 0";
            a.style.color = "#fff";
            a.style.textAlign = "center";
            a.style.width = "100%";
            id = a.id;
        } else {
            li[i].style.display = "none";
        }
    }
}


function openBlogs(index) {
    sessionStorage.setItem("blog", index);
    window.location.href = URL + "data/html/blog.html";
}

function openProduct(type, index) {
    let item = {
        type: type,
        index: index
    }
    sessionStorage.setItem("CP", JSON.stringify(item));console.log("type==>",thisUser?.type)
    if(thisUser?.type == "admin") {
        window.location.href = URL + "data/html/editProd.html";
    } else {
        window.location.href = URL + "data/html/product.html";
    }
}

function getProduct() {
    if (sessionStorage.getItem("CP")) {
        var prod = JSON.parse(sessionStorage.getItem("CP")).type;
    }
    var img = document.getElementById("product-image");
    var heading = document.getElementById("product-heading");
    var explain = document.getElementById("product-explain");

    var title = JSON.parse(localStorage.getItem("title"))?.title;
    var price = JSON.parse(localStorage.getItem("price"))?.price;
    var details = JSON.parse(localStorage.getItem("details"));
    var images = JSON.parse(localStorage.getItem("images"));

    if (prod) {
        if (prod == "hc0") {
            i = 0; j = 1;
            explain.innerHTML = details?.hc0;
            img.src = images?.hc0;
        }
        if (prod == "hc1") {
            i = 1; j = 2;
            explain.innerHTML = details?.hc1;
            img.src = images?.hc1;
        }
        if (prod == "hc2") {
            i = 2; j = 3;
            explain.innerHTML = details?.hc2;
            img.src = images?.hc2;
        }
        if (prod == "hc3") {
            i = 3; j = 4;
            explain.innerHTML = details?.hc3;
            img.src = images?.hc3;
        }
        if (prod == "hc4") {
            i = 4; j = 5;
            explain.innerHTML = details?.hc4;
            img.src = images?.hc4;
        }
        if (prod == "hc5") {
            i = 5; j = 6;
            explain.innerHTML = details?.hc5;
            img.src = images?.hc5;
        }
        if (prod == "hc6") {
            i = 6; j = 7;
            explain.innerHTML = details?.hc6;
            img.src = images?.hc6;
        }
        if (prod == "hc7") {
            i = 7; j = 8;
            explain.innerHTML = details?.hc7;
            img.src = images?.hc7;
        }
        if (prod == "hc8") {
            i = 8; j = 9;
            explain.innerHTML = details?.hc8;
            img.src = images?.hc8;
        }
        if (prod == "hc9") {
            i = 9; j = 10;
            explain.innerHTML = details?.hc9;
            img.src = images?.hc9;
        }
        if (prod == "hc10") {
            i = 10; j = 11;
            explain.innerHTML = details?.hc10;
            img.src = images?.hc10;
        }
        if (prod == "hc11") {
            i = 11; j = 12;
            explain.innerHTML = details?.hc11;
            img.src = images?.hc11;
        }


        if (prod == "m0") {
            i = 12; j = 1;
            explain.innerHTML = details?.m0;
            img.src = images?.m0;
        }
        if (prod == "m1") {
            i = 13; j = 2;
            explain.innerHTML = details?.m1;
            img.src = images?.m1;
        }
        if (prod == "m2") {
            i = 14; j = 3;
            explain.innerHTML = details?.m2;
            img.src = images?.m2;
        }
        if (prod == "m3") {
            i = 15; j = 4;
            explain.innerHTML = details?.m3;
            img.src = images?.m3;
        }
        if (prod == "m4") {
            i = 16; j = 5;
            explain.innerHTML = details?.m4;
            img.src = images?.m4;
        }
        if (prod == "m5") {
            i = 17; j = 6;
            explain.innerHTML = details?.m5;
            img.src = images?.m5;
        }
        if (prod == "m6") {
            i = 18; j = 7;
            explain.innerHTML = details?.m6;
            img.src = images?.m6;
        }
        if (prod == "m7") {
            i = 19; j = 8;
            explain.innerHTML = details?.m7;
            img.src = images?.m7;
        }
        if (prod == "m8") {
            i = 20; j = 9;
            explain.innerHTML = details?.m8;
            img.src = images?.m8;
        }
        if (prod == "m9") {
            i = 21; j = 10;
            explain.innerHTML = details?.m9;
            img.src = images?.m9;
        }
        if (prod == "m10") {
            i = 22; j = 11;
            explain.innerHTML = details?.m10;
            img.src = images?.m10;
        }
        if (prod == "m11") {
            i = 23; j = 12;
            explain.innerHTML = details?.m11;
            img.src = images?.m11;
        }


        if (prod == "sc0") {
            i = 24; j = 1;
            explain.innerHTML = details?.sc0;
            img.src = images?.sc0;
        }
        if (prod == "sc1") {
            i = 25; j = 2;
            explain.innerHTML = details?.sc1;
            img.src = images?.sc1;
        }
        if (prod == "sc2") {
            i = 26; j = 3;
            explain.innerHTML = details?.sc2;
            img.src = images?.sc2;
        }
        if (prod == "sc3") {
            i = 27; j = 4;
            explain.innerHTML = details?.sc3;
            img.src = images?.sc3;
        }
        if (prod == "sc4") {
            i = 28; j = 5;
            explain.innerHTML = details?.sc4;
            img.src = images?.sc4;
        }
        if (prod == "sc5") {
            i = 29; j = 6;
            explain.innerHTML = details?.sc5;
            img.src = images?.sc5;
        }
        if (prod == "sc6") {
            i = 30; j = 7;
            explain.innerHTML = details?.sc6;
            img.src = images?.sc6;
        }
        if (prod == "sc7") {
            i = 31; j = 8;
            explain.innerHTML = details?.sc7;
            img.src = images?.sc7;
        }
        heading.innerHTML = title && price ? title[i] + price[i] : (title && !price ? title[i] : (!title && price ? price[i] : ""));
    }
}

function openPage(page) {
    if (page == "skincare") {
        window.location.href = URL + "data/html/skincare.html";
    } else if (page == "makeup") {
        window.location.href = URL + "data/html/makeup.html";
    }
}

function getBlog() {
    var blog = sessionStorage.getItem("blog") || 0;
    myFunction(blog,'page');
}

function addToCart(index) {
    if (sessionStorage.getItem("authToken")) {
        var body = document.getElementById("makeupPage") || document.getElementById("skincarePage") || document.getElementById("haircarePage") || document.getElementById("productPage");
        body.className = "body_div unclickable";
        var added = document.getElementById("addedToCart");
        if(added.className == "display-none"){
            added.className = "addedToCart";     
        }
        var sum = 0;
        var key = getUserKey();
        var user = JSON.parse(localStorage.getItem(key));

        var mycart = localStorage.getItem(user.email);console.log("cart==>",index)
        mycart = mycart + "/" + index;
        localStorage.setItem(user.email, mycart);
        user.cart = mycart;
        localStorage.setItem(key, JSON.stringify(user));
        setTimeout(function () {
            added.className = "display-none";
            body.className = "body_div";
        }, 1000);
    }
}

function getCart() {
    if (sessionStorage.getItem("authToken")) {
        var itemTitle = JSON.parse(localStorage.getItem("title"));
        var clearCart = document.getElementById("clear-cart");
        var buyCart = document.getElementById("buy-now");
        var itemTotal = document.getElementById("itemTotal");

        var key = getUserKey();
        var user = JSON.parse(localStorage.getItem(key));
        user.itemTotal = 0;
        localStorage.setItem(key, JSON.stringify(user));

        if (user.cart) {
            var indexes = user.cart.split("/");
            changeQty("default", indexes)
            sessionStorage.getItem("authToken");
            for (i = 1; i < indexes.length; i++) {
                for (j = 1; j < indexes.length; j++) {
                    if (indexes[i] == indexes[j] && i != j) {
                        indexes.splice(j, 1); j--;
                    }
                }
                var j = 0, type;
                if (indexes[i] < 12) {
                    j = parseInt(indexes[i], 10) + 1;
                    type = 'haircare';
                }
                if (indexes[i] > 11 && indexes[i] < 24) {
                    j = parseInt(indexes[i], 10) - 11;
                    type = 'makeup';
                }
                if (indexes[i] > 23 && indexes[i] < 32) {
                    j = parseInt(indexes[i], 10) - 23;
                    type = 'skincare';
                }
                var node = document.createElement("DIV");
                node.innerHTML = '<div class="cart-item-box"><img src="../assets/' + type + '-products/' + j
                    + '.png" width="100px"/><span class="cart-item-title">'
                    + itemTitle.title[indexes[i]] + '<div><input id="itemValue' + indexes[i] + '" type="number" class="item-qty" value="1" disabled/>'
                    + '<button onclick="changeQty(' + "'decrement'," + indexes[i] + ')" class="cart-button">-</button>'
                    + '<button onclick="changeQty(' + "'increment'," + indexes[i] + ')" class="cart-button">+</button></div></span></div>';
                document.getElementById("cartItem").appendChild(node);
                clearCart.innerHTML = '<button onclick="deleteCart()" class="clear-cart">Clear Cart</button>';
                buyCart.innerHTML = '<button onclick="buyCart()" class="buy-cart">Buy Now</button>';
            }
        } else {
            var emptyCart = document.getElementById("cartItem");
            emptyCart.innerHTML = '<div style="display:inline-block;margin: 180px auto;text-align: center;'
                + 'width: 100%;font-size: 25px;">Cart is Empty</div>';
            clearCart.innerHTML = "";
            buyCart.innerHTML = "";
        }
    }
}

function deleteCart() {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));
    user.cart = "";
    localStorage.setItem(key, JSON.stringify(user));
    localStorage.setItem(user.email, '');
    sessionStorage.removeItem("CP");
    location.reload();
}

function cart(action) {
    var product = JSON.parse(sessionStorage.getItem("CP"));
    if (action == 'add') {
        addToCart(product.index);
    } else if (action == 'buy') {
        buyNow(product.index);
    }
}

function buyNow(id) {
    addToCart(id);
    window.location.href = URL + "data/html/cart.html";
}

function buyCart() {
    window.location.href = URL + "data/html/payment.html";
}

function changeQty(action, index) {
    var key = "itemValue" + JSON.stringify(index);
    var total = document.getElementById("itemTotal");
    var item = document.getElementById(key);
    var id = getUserKey();
    var user = JSON.parse(localStorage.getItem(id));
    var itemTotal = user.itemTotal;

    if (action == "default") {
        for (i = 1; i < index.length; i++) {
            for (j = 1; j < index.length; j++) {
                if (index[i] == index[j] && i != j) {
                    index.splice(j, 1); j--;
                }
            }
            if (parseInt(index[i], 10) < 12) {
                itemTotal = itemTotal + 5.33;
            }
            if (parseInt(index[i], 10) > 11 && parseInt(index[i], 10) < 24) {
                itemTotal = itemTotal + 8.99;
            }
            if (parseInt(index[i], 10) > 23 && parseInt(index[i], 10) < 31) {
                itemTotal = itemTotal + 15.33;
            }
        }
    }
    if (action == "decrement" && item.value > 1) {
        item.value = item.value - 1;
        if (index < 12) {
            itemTotal = itemTotal - 5.33;
        }
        if (index > 11 && index < 24) {
            itemTotal = itemTotal - 8.99;
        }
        if (index > 23 && index < 31) {
            itemTotal = itemTotal - 15.33;
        }
    }
    if (action == "increment") {
        item.value = parseInt(item.value, 10) + 1;
        if (index < 12) {
            itemTotal = itemTotal + 5.33;
        }
        if (index > 11 && index < 24) {
            itemTotal = itemTotal + 8.99;
        }
        if (index > 23 && index < 31) {
            itemTotal = itemTotal + 15.33;
        }
    }
    total.innerHTML = '<div class="item-total">Total : $ ' + itemTotal.toFixed(2) + '</div>';
    user.itemTotal = itemTotal;
    localStorage.setItem(id, JSON.stringify(user));
}

function deleteItem(value) {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));
    var indexes = user.cart.split("/");
    sessionStorage.getItem("authToken");
    for (i = 1; i < indexes.length; i++) {
        for (j = 1; j < indexes.length; j++) {
            if (indexes[i] == value) {
                indexes.splice(j, 1); j--;
            }
        }
        var j = 0, type;
        if (indexes[i] < 12) {
            j = parseInt(indexes[i], 10) + 1;
            type = 'haircare';
        }
    }
}

function getUserKey() {
    var reg_email = sessionStorage.getItem("email");
    if (reg_email) {
        var temp = reg_email.split("");
        var key = "_id:";
        var sum = 0;
        for (i = 0; i < temp.length; i++) {
            string = temp[i].charCodeAt().toString();
            code = temp[i].charCodeAt();
            sum = sum + code;
            key = key + sum;
        }
        return key;
    }
}

function profileActions(action) {
    var profileInfo = document.getElementById("user-profile-info");
    var forgotPassword = document.getElementById("forgot-pwd");
    var changePassword = document.getElementById("change-pwd");
    var deleteAccount = document.getElementById("delete-account");
    var userProfile = document.getElementsByName("userProfile");
    var profile_pic = document.getElementById("profile-pic");
    var change_pic = document.getElementById("change-pic");
    var profileBtns = document.getElementsByName("profile-btns");

    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));

    if (user?.image != "") {
        profile_pic.style.display = "none";
        userProfile[0].style.display = "";
        change_pic.style.display = "";
    } else {
        change_pic.style.display = "none";
        profile_pic.style.display = "";
        userProfile[0].style.display = "none";
    }

    if (action == 'profile') {
        profileInfo.style.display = "flex";
        profileBtns[0].className = "profile-buttons-active";
        profileBtns[1].className = "profile-buttons";
        profileBtns[2].className = "profile-buttons";
        profileBtns[3].className = "profile-buttons";
        userProfile[0].src = user.image;
        userProfile[1].innerHTML = user.firstname + " " + user.lastname;
        userProfile[2].innerHTML = user.email;
        forgotPassword.style.display = "none";
        changePassword.style.display = "none";
        deleteAccount.style.display = "none";
    }
    if (action == 'forgot') {
        profileBtns[1].className = "profile-buttons-active";
        profileBtns[0].className = "profile-buttons";
        profileBtns[2].className = "profile-buttons";
        profileBtns[3].className = "profile-buttons";
        forgotPassword.style.display = "block";
        profileInfo.style.display = "none";
        changePassword.style.display = "none";
        deleteAccount.style.display = "none";
    }
    if (action == 'change') {
        profileBtns[2].className = "profile-buttons-active";
        profileBtns[1].className = "profile-buttons";
        profileBtns[0].className = "profile-buttons";
        profileBtns[3].className = "profile-buttons";
        changePassword.style.display = "block";
        profileInfo.style.display = "none";
        forgotPassword.style.display = "none";
        deleteAccount.style.display = "none";
    }
    if (action == 'delete') {
        profileBtns[3].className = "profile-buttons-active";
        profileBtns[1].className = "profile-buttons";
        profileBtns[2].className = "profile-buttons";
        profileBtns[0].className = "profile-buttons";
        deleteAccount.style.display = "block";
        profileInfo.style.display = "none";
        forgotPassword.style.display = "none";
        changePassword.style.display = "none";
    }
    if (action == 'home') {
        if (thisUser.type == "admin") {
            window.location.href = URL + "data/html/admin.html"
        } else {
            myURL = URL + "Launch.html";
        }
    }
}

function getProfilePic(input) {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile-image')
                .attr('src', e.target.result);
            var temp = e.target.result;
            user.image = temp;
            localStorage.setItem(key, JSON.stringify(user));
        };
        reader.readAsDataURL(input.files[0]);
    }
    location.reload();
}

function changePic() {
    var z = document.getElementById("change-opt");
    z.style.display = "";
}

function changePassword() {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));
    var pass = document.getElementsByName("profile-password");
    if (pass[1].value == pass[2].value) {
        if (pass[0].value == user.password) {
            user.password = pass[1].value;
            localStorage.setItem(key, JSON.stringify(user));
        }
    }
    location.reload();
}

function deleteAccount() {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));
    var pass = document.getElementById("pwdToDelete");
    if (pass.value == user.password) {
        localStorage.removeItem(key);
    }
    signout();
}


function getitemTotal() {
    var key = getUserKey();
    var user = JSON.parse(localStorage.getItem(key));
    var amt = document.getElementById("printPayment");
    amt.innerHTML = "$ " + user.itemTotal;
}

function adminPanel() {
    var image = thisUser?.image ? thisUser?.image : "../assets/user.png";
    var adminData = document.getElementById("admin-data");
    adminData.innerHTML = '<div class="admin-img"><img src="' + image + '" width="100%"/></div>' + "<strong>" + thisUser?.firstname + " "
        + thisUser?.lastname + "<p>" + thisUser?.email + '</p></strong><small class= "about-adminProfile">'+thisUser?.AP+" Admin Profile</small>";
}