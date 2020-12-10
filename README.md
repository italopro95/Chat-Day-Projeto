<h1> Chat Day </h1>
<img src="https://scontent.ffec3-1.fna.fbcdn.net/v/t1.0-9/127537111_2779504492290340_6917908437226539688_n.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=CgOuQ7OWGfIAX83R_ud&_nc_ht=scontent.ffec3-1.fna&oh=d07997033f8ea515c2e7492824800d21&oe=5FF75FFA">


<h3>Chat Day é um projeto feito em PHP usando a lib Ratchet, Python, JavaScript, html5 e Css3</h3>

<h4>Como usar o projeto</h4>

1. Clone o projeto para o seu computador:

`git clone https://github.com/edmariooliver/Chat-php.git`

2. Entre na pasta do chat:

`cd Chat-php`

3. Com o PHP instalado em seu computador, inicie o servidor PHP local:

`php -S localhost:8000`

4. Agora abra seu navegador webe digite:

`localhost:8000`


Obs: Não precisa iniciar o servidor Ratchet em seu computador, o projeto já está configurado em um servidor web, caso queira usar seu próprio servidor, siga os passos:


1. Entre na pasta, assets/js/configWs.js e altere:

`var msg = new WebSocket("wss://chat-day.herokuapp.com/wss");` para `var msg = new WebSocket("ws://localhost:8085");`

2. Inicie o servidor WebSocket em seu computador:

`php ./socket/socket.php`

3. Reinicie a página no navegador
