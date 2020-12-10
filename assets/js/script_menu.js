
function del_msg(){
    var node = document.querySelector(".mensagens");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    var nodechat = document.createElement('div')
    nodechat.className = 'mensagens'
    var nodedivchat = document.querySelector('.chat')
    nodedivchat.appendChild(nodechat)

}
function wel_chat(){
    var form = document.querySelector('.div-form')
    var chat = document.querySelector('.grid')
    var nomeInput = (document.querySelector('#input-name').value)
    nome = nomeInput.trim()
    nome.trim
    if(nome.length > 15 || nome.length == 0){
        window.alert('Nome inválido, seu nome deve conter de 1 até 15 caracteres')
 
    }else{
        var name_user = document.getElementById('name-user')
        form.style.display = 'none'
        chat.style.display = 'grid'
    }

}
function open_menu(){
    var menu = document.getElementById("menu")
    menu.style.display = "flex"

}
function close_menu(){
    var menu = document.getElementById("menu")
    menu.style.display = "none"

}