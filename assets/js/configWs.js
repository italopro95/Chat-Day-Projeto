// var i = setInterval(function () {

//     clearInterval(i);

//     // O código desejado é apenas isto:
//     document.getElementById("loading").style.display = "none";
//     document.getElementById("div-form").style.display = "inline";

// }, 4000);
var msg = new WebSocket("wss://chat-day.herokuapp.com/wss");
msg.onopen = function(e) {
    console.log("Sucesso")
}
;
var nodebr = document.createElement("br");

msg.onmessage = function(e) {

    dados = JSON.parse(e.data);
    if (dados.type == "bot") {
        if (dados.typemsg == "txt") {
            var nodeNome = document.createElement("p");
            nodeNome.className = "nome-other";
            var nodeMsg = document.createElement("p");
            nodeMsg.setAttribute("style", "padding:15px;");
            var textnodeNome = document.createTextNode(dados.nome + "🤖");
            nodeNome.appendChild(textnodeNome);
            var textnodeMsg = document.createTextNode(dados.msg);
            nodeMsg.appendChild(textnodeMsg);
            nodeMsg.className='msg-other'
            nodeNome.className='nome-bot'
            var divNode = document.createElement("div")
            divNode.className = 'div-msg-other'
            divNode.appendChild(nodeNome)
            divNode.appendChild(nodeMsg)
            document.querySelector('.mensagens').appendChild(divNode)
        }
        if (dados.typemsg == "video") {
            
            var nodeNome = document.createElement("p");
            var textnodeNome = document.createTextNode(dados.nome + "🤖");
            nodeNome.appendChild(textnodeNome);
            iframe = document.createElement("iframe");
            iframe.setAttribute("src", dados.msg);
            iframe.setAttribute("width", 290);
            iframe.setAttribute("height", 400);
            iframe.setAttribute("allowfullscreen", "");
            nodeNome.className = "nome-bot"
            iframe.className = "msg-video"
            var divNode = document.createElement("div")
            divNode.className = 'div-msg-other'
            divNode.appendChild(nodeNome)
            divNode.appendChild(iframe)
            document.querySelector('.mensagens').appendChild(divNode)
        }
    } else {
        var nodeNome = document.createElement("p")
        nodeNome.className = "nome-other"
        var textnodeNome = document.createTextNode(dados.nome);
        nodeNome.appendChild(textnodeNome)

        var nodeMsg = document.createElement("p")
        nodeMsg.className="msg-other"
        var textnodeMsg = document.createTextNode(dados.msg);
        nodeMsg.appendChild(textnodeMsg)

        var divNode = document.createElement("div")
        divNode.appendChild(nodeNome)
        divNode.appendChild(nodeMsg)

        document.querySelector(".mensagens").appendChild(divNode);
    }
    if(document.getElementById('autosc').checked == true){        
        console.log(document.querySelector(".mensagens").scrollTop = document.querySelector(".mensagens").scrollHeight)   
    }
    if(document.getElementById('notify').checked == true){        
        var audio = document.getElementById("audio");
        audio.play()
    }
}

function sendMsgEnter(event) {
    
    if (event.key == "Enter") {
        sendMsg()
    }
}
function sendMsg(n) {

    var nome = document.querySelector("#input-name").value;
    var msgSend = document.getElementById("msg").value;
    var msgValid = msgSend.trim()

    if (msgValid.length > 99 || msgValid.length <= 0) {

        window.alert("Mensagens com menos de 1 caractere ou mais de 100, não são válidas")
    } else {

        var dados = {
            nome: nome,
            msg: msgSend
        };

        dados = JSON.stringify(dados);
        msg.send(dados)

        var nodeNome = document.createElement("p")
        nodeNome.className = "nome-me"
        var textnodeNome = document.createTextNode(nome);
        nodeNome.appendChild(textnodeNome)

        var nodeMsg = document.createElement("p")
        nodeMsg.className="msg-me"
        var textnodeMsg = document.createTextNode(msgSend);
        nodeMsg.appendChild(textnodeMsg)

        var divNode = document.createElement("div")
        divNode.className = "div-msg-me"
        divNode.appendChild(nodeMsg)

        document.querySelector(".mensagens").appendChild(divNode);

        document.getElementById("msg").value = ""

        if(document.getElementById('autosc').checked == true){        
            console.log(document.querySelector(".mensagens").scrollTop = document.querySelector(".mensagens").scrollHeight)   
        }
    }
}
