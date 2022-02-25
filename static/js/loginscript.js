function changeTilte(obj) {
      let button1 = document.getElementById('intro1')
      let button2 = document.getElementById('intro2')
      let button3 = document.getElementById('intro3')

      if (obj === button1) {

        $("#page-title").text(`${button1.innerText}`)
      } else if (obj === button2) {

        $("#page-title").text(`${button2.innerText}`)
      } else {

        $("#page-title").text(`${button3.innerText}`)
      }
}
function alert_1(){
    alert("처음 화면으로 돌아갑니다.")
    location.href='./index.html'

}
function new_account() {
    let name = $('#exampleInputEmail3').val()
    let id = $('#exampleInputEmail1').val()
    let key1 = $('#exampleInputPassword1').val()
    let key2 = $('#exampleInputPassword2').val()
    if (key1 != key2){
        return alert('비밀번호가 불일치')
    }else {
        $.ajax({
            type: 'POST',
            url: '/new_account',
            data: { name_give: name,  id_give: id, key1_give: key1 },
            success: function (response) {
                alert(response['msg'])

                if (response['msg'] =='id 중복') {
                    //실패
                    alert('이미 존재하는 아이디입니다.')

                } else {
                    // 성공
                    alert(response['msg'])
                    alert("처음 화면으로 돌아갑니다.")
                    location.href='/'
                }
            }
        });
    }
}
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

                    location.href='/login'
                }
            }
        });
}


