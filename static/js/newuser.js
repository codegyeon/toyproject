// ------------------------회원가입 페이지----------------------

function input_id_value(){
    let id = document.getElementById('input_id').value
    let usersid = /^[a-zA-Z0-9]{8,16}$/

    if (usersid.exec(id) == null){
        document.getElementById('error_id').className = 'font_style2'
    } else{
        document.getElementById('error_id').className = 'font_style'
    }
}
function input_pw_value(){
    let id = document.getElementById('input_pw1').value
    let usersid = /^[a-zA-Z0-9]{8,16}$/

    if (usersid.exec(id) == null){
        document.getElementById('error_pw1').className = 'font_style2'
    } else{
        document.getElementById('error_pw1').className = 'font_style'
    }
}
function input_pw2_value(){
    let id1 = document.getElementById('input_pw1').value
    let id2 = document.getElementById('input_pw2').value

    if (id1 != id2){
        document.getElementById('error_pw2').className = 'font_style2'
        document.getElementById('error_pw3').className = 'font_style'
    } else{
        document.getElementById('error_pw3').className = 'font_style3'
        document.getElementById('error_pw2').className = 'font_style'
    }
}

//-------------------------------------------------------
function newuser(){
    let name = $('#username').val()
    let id = $('#input_id').val()
    let key1 = $('#input_pw1').val()
    let key2 = $('#input_pw2').val()
    let nickname = $('#nickname').val()
    if (name === ""){
        alert('이름을 입력해주세요')
    }else if (id === ""){
        alert('id를 입력해주세요')
    }else if (key1 === ""){
        alert('비밀번호를 입력해주세요')
    }else if(key1 !== key2){
        alert("비밀번호를 재확인하세요")
    }else if(nickname ===""){
        alert("닉네임을 입력해주세요")
    }else {
        $.ajax({
            type: 'POST',
            url: '/new_account',
            data: {
                name_give: name, id_give: id, key1_give: key1,
                nickname_give: nickname,
            },
            success: function (response) {
                 if (response['msg'] === 'id 중복') {
                    //실패
                    alert('이미 존재하는 아이디입니다.')

                } else {
                    // 성공
                    alert(response['msg'])
                    alert("처음 화면으로 돌아갑니다.")
                    location.href = '/'
                }
            }
        })
    }
}
function fuck(){
    location.href='/'
}

