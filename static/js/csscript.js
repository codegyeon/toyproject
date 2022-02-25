
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