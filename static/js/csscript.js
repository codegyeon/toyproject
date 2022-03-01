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
            if (Boolean(named) == true) {
                let temp = `<a>"${named}" 님, 환영합니다.</a>`
                $('#name').append(temp)
                document.getElementById('button1').className = 'button1'
                document.getElementById('button2').className = 'button1'
                document.getElementById('button3').className = 'button2'
             }
            else {
                let temp = `<a>환영합니다.</a>`
                $('#name').append(temp)
                document.getElementById('button1').className = 'button2'
                document.getElementById('button2').className = 'button2'
                document.getElementById('button3').className = 'button1'
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
function newuser(){
    location.href='/newuser'
}

//---------------------------------
function click_event1(){
            document.getElementById('che1').className = 'che_box'
            // document.getElementsByClassName()
            // document.getElementById('error_pw2').className = 'font_style2'
            // document.getElementById('error_pw3').className = 'font_style'
}

function cheeringlog(){
    let che = $('#cheering').val()
    $.ajax({
        type: 'POST',
        url: '/cheering',
        data:{che_give : che},
        success: function (response) {
            alert(response['msg'])
        }
    });
}
