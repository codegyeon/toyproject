

function newuser(){
    location.href='/newuser'
}

function login_button(){
    let id = $('#exampleInputEmail123').val()
    let key1 = $('#exampleInputPassword123').val()
    $.ajax({
            type: 'POST',
            url: '/login_account',
            data: {id_give : id , key1_give : key1},
            success: function (response) {


                if (response['msg'] =='id 틀림') {
                    //실패
                    alert('틀린 아이디입니다.')
                } else if(response['msg'] =='비밀 번호 틀림') {
                    //실패
                    alert('틀린 비밀번호입니다.')
                } else {
                    // 성공
                    alert(response['msg'])

                    location.href='/'
                }
            }
        });
}


