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
