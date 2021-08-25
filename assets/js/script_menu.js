function wel_chat(){
    var nomeInput = (document.querySelector('#input-name').value)
    nome = nomeInput.trim()

    // msg = new WebSocket("ws://192.168.0.100:8085?name="+nome);
    //iniciando a conexao
    var form = document.querySelector('.div-form')
    var chat = document.querySelector('.grid')
    var nomeInput = (document.querySelector('#input-name').value)
    nome = nomeInput.trim()
    nome.trim
    if(nome.length > 15 || nome.length == 0){
        window.alert('Nome inválido, seu nome deve conter de 1 até 15 caracteres')
 
    }else{
        document.cookie = "@" + nome + "@";
        window.location.href = '/chat.html'
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