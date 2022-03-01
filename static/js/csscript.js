$(document).ready(function () {
            nameget();
        });
function changetitle(obj){
    let title1 = document.getElementById('title1')
    let title2 = document.getElementById('title2')
    let title3 = document.getElementById('title3')

    if (obj === title1) {
        $("#maintitle").text(`${title1.innerText}`)
    } else if (obj === title2) {
        $("#maintitle").text(`${title2.innerText}`)
    } else {
        $("#maintitle").text(`${title3.innerText}`)
    }
}
function chagepost(){
    let post1 = document.getElementById('title1')
    let post2 = document.getElementById('title2')
    let post3 = document.getElementById('title3')

    if (obj === title1) {
        $("#maintitle").text(`${post1.innerText}`)
    } else if (obj === title2) {
        $("#maintitle").text(`${post2.innerText}`)
    } else {
        $("#maintitle").text(`${post3.innerText}`)
    }
}
function login(){
    location.href='/login'
}
function nameget() {
    $.ajax({
        type: 'GET',
        url: '/name',
        data: {},
        success: function (response) {
            console.log(response)
            let named = response['name']
            if (named == true) {
                let temp = `<a>"${named}" 님, 환영합니다.</a>`
                $('#name').append(temp)
             }
            else {
                let temp = `<a>환영합니다.</a>`
                $('#name').append(temp)
            }


        }

    });
}
function logout(){
$.ajax({
    type: 'GET',
        url: '/logout',
        data: {},
        success: function (response) {
        alert("로그아웃됩니다.")
        window.location.reload()
        }
});
}

