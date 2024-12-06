if (localStorage.getItem("user") != null) {
    arr = JSON.parse(localStorage.getItem("user"));
    console.log(arr);
}




document.getElementById('welcome1').innerHTML="welcome  "+arr;