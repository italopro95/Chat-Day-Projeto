var nodebr = document.createElement("br");
var msg = 0
var msg = new WebSocket("wss://chat-day.herokuapp.com/wss");
// msg = new WebSocket("ws://192.168.0.100:8085");
msg.onopen = function(e) {
    console.log("Sucesso")
}

msg.onmessage = function(e) {
    dados = JSON.parse(e.data);
    if (dados.type == "bot") {
        if (dados.typemsg == "txt") {
            // var divMsg = document.getElementById("divMsg")
            // console.log(dados.nome)
            // divMsg.innerHTML += '<div class="div-msg-other"><p class="nome-other '+dados.type+'"><strong>'+ dados.nome +'</strong></p><p class="msg-other">'+ dados.msg +'</p></div>'
            
            var nodeNome = document.createElement("p");
            nodeNome.className = "nome-other";
            var nodeMsg = document.createElement("p");
            var strong = document.createElement("strong");
            strong.appendChild(nodeNome)
            nodeMsg.setAttribute("style", "padding:15px;");
            var textnodeNome = document.createTextNode(dados.nome);
            nodeNome.appendChild(textnodeNome);
            var textnodeMsg = document.createTextNode(dados.msg);
            nodeMsg.appendChild(textnodeMsg);
            nodeMsg.className='msg-other'
            nodeNome.className='bot'
            var divNode = document.createElement("div")
            divNode.className = 'div-msg-other'
            divNode.appendChild(strong)
            divNode.appendChild(nodeMsg)
            document.querySelector('.mensagens').appendChild(divNode)
        }
        if (dados.typemsg == "video") {
            // var divMsg = document.getElementById("divMsg")
            // divMsg.innerHTML += '<div class="div-msg-other"><p class=" nome-other '+dados.type+'"><strong>'+dados.nome+'<strong></p><iframe src="'+dados.msg+'" width="290" height="400" allowfullscreen="" class="msg-video"></iframe></div>'
            var nodeNome = document.createElement("p");
            var textnodeNome = document.createTextNode(dados.nome);
            nodeNome.appendChild(textnodeNome);
            iframe = document.createElement("iframe");
            iframe.setAttribute("src", dados.msg);
            iframe.setAttribute("width", 290);
            iframe.setAttribute("height", 400);
            iframe.setAttribute("allowfullscreen", "");
            nodeNome.className = "bot"
            iframe.className = "msg-video"
            var divNode = document.createElement("div")
            divNode.className = 'div-msg-other'
            var nodeMsg = document.createElement("p");
            var strong = document.createElement("strong");
            strong.appendChild(nodeNome)
            divNode.appendChild(strong)
            divNode.appendChild(iframe)
            document.querySelector('.mensagens').appendChild(divNode)
        }
    } else {
        // var divMsg = document.getElementById("divMsg")
        // console.log(dados.nome)
        // divMsg.innerHTML += '<div class="div-msg-other"><p class="nome-other"><strong>'+ dados.nome +'</strong></p><p class="msg-other">'+ dados.msg +'</p></div>'
        var nodeNome = document.createElement("p")
        nodeNome.className = "nome-other"
        var textnodeNome = document.createTextNode(dados.nome);
        nodeNome.appendChild(textnodeNome)

        var nodeMsg = document.createElement("p")
        nodeMsg.className="msg-other"
        var textnodeMsg = document.createTextNode(dados.msg);
        nodeMsg.appendChild(textnodeMsg)
        var strong = document.createElement("strong");
        strong.appendChild(nodeNome)
        var divNode = document.createElement("div")
        divNode.className = "div-msg-other"
        divNode.appendChild(strong)
        divNode.appendChild(nodeMsg)

        document.querySelector(".mensagens").appendChild(divNode);
    }
    // if(document.getElementById('notify').checked == true){        
    //     var audio = document.getElementById("audio");
    //     audio.play()
    // }
    console.log(document.querySelector(".mensagens").scrollTop = document.querySelector(".mensagens").scrollHeight)  
}

function sendMsgEnter(event) {
    if (event.key == "Enter") {
        sendMsg()
    }
}
function sendMsg(n) {

    var divMsg = document.getElementById("divMsg")
    var msgSend = document.getElementById("msg").value;
    var msgValid = msgSend.trim()
    if (msgValid.length > 99 || msgValid.length <= 0) {
        window.alert("Mensagens com menos de 1 caractere ou mais de 100, não são válidas")
    } else {
        var dados = {
            msg: msgSend
        };
        dados = JSON.stringify(dados);
        msg.send(dados)
        // divMsg.innerHTML += '<div class="div-msg-me"><p class="msg-me">'+msgSend+'</p></div>'
        // document.getElementById("msg").value = "" 

        var nodeMsg = document.createElement("p")
        nodeMsg.className="msg-me"
        var textnodeMsg = document.createTextNode(msgSend);
        nodeMsg.appendChild(textnodeMsg)
        var divNode = document.createElement("div")
        divNode.className = "div-msg-me"
        divNode.appendChild(nodeMsg)

        document.querySelector(".mensagens").appendChild(divNode);

        document.getElementById("msg").value = ""
    }
    console.log(document.querySelector(".mensagens").scrollTop = document.querySelector(".mensagens").scrollHeight)  
}

msg.onError = function (e){
    window.alert("erro")
}
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

