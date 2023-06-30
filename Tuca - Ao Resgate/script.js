var canvas = document.getElementById('canvas'); 
        var ctx = canvas.getContext('2d');
    
    
        var imagem = new Image();
        imagem.src = "imagens/fundo.png";
        ctx.drawImage(imagem,0,0,800,400);
        
    
        var	imagem3 = new Image();
        imagem3.src = "imagens/flecha.png";
        
        var	imagem4 = new Image();
        imagem4.src = "imagens/tucana.png";
    
        var imagem2 = new Image();
        imagem2.src = "imagens/tuca.png";
        ctx.drawImage(imagem2,400,200,50,50);
        var x = 375;
        var y = 300;
        var s = 0;
        var z = 0;
        var i = 0;
    
        setInterval(tempo,1000);
        function tempo(){
            i = i + 1;
        }
        
        requestAnimationFrame(gameloop);
        
        function detectarColisao(){
    
            if( ( (x + 50) >  0 && x < (0 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
            }
        }
    
        function detectarColisao2(){
    
            if( ( (x + 50) >  150 && x < (150 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
    
        function detectarColisao3(){
    
            if( ( (x + 50) >  300 && x < (300 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
    
        function detectarColisao4(){
    
            if( ( (x + 50) >  450 && x < (450 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao5(){
    
            if( ( (x + 50) >  600 && x < (600 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao6(){
    
            if( ( (x + 50) >  750 && x < (750 + 50) ) && ( (y + 50) > s && y < (s + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao7(){
    
            if( ( (x + 50) >  75 && x < (75 + 50) ) && ( (y + 50) > z && y < (z + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 -65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao8(){
    
            if( ( (x + 50) >  225 && x < (225 + 50) ) && ( (y + 50) > z && y < (z + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao9(){
    
            if( ( (x + 50) >  375 && x < (375 + 50) ) && ( (y + 50) > z && y < (z + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao10(){
    
            if( ( (x + 50) >  525 && x < (525 + 50) ) && ( (y + 50) > z && y < (z + 50))){
                
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
        function detectarColisao11(){
    
            if( ( (x + 50) >  675 && x < (675 + 50) ) && ( (y + 50) > z && y < (z + 50))){
            
                
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.fillStyle = "green";
                ctx.textAlign = "center";
                ctx.fillText("Distância",canvas.width/2,canvas.height/2 + 15);
                ctx.fillStyle = "red";
                ctx.fillText(i,canvas.width/2,canvas.height/2 + 85);
                ctx.fillStyle = "white";
                ctx.fillText("FIM DE JOGO",canvas.width/2,canvas.height/2 - 65);
                cancelAnimationFrame();
                
            }
        }
    
    

    
        window.onkeydown = pressionaTecla; 
        function pressionaTecla(tecla){
            if(tecla.keyCode == 38  ) {
            y = y - 25; 
            }
            if(tecla.keyCode == 40  ) {
            y = y + 25; 
            }
            if(tecla.keyCode == 39  ) {
            x = x + 25; 
            }
            if(tecla.keyCode == 37  ) {
            x = x - 25; 
            }	
        }
    
    
        function gameloop() {
            
            if(z>=400){
                s = 0;
                z = 0;
            }
            if(s<400){
                if(i<=15){
                desenharTuca(x,y);
                desenhar();
                s = s + 2;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "blue";
                ctx.fillText("1ª Saraivada",730, 100);
            }
                else if(i<=29){
                desenharTuca(x,y);
                desenhar();
                s = s + 3;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "yellow";
                ctx.fillText("2ª Saraivada",730, 100);
            }
                else if(i<=40){
                desenharTuca(x,y);
                desenhar();
                s = s + 4;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "white";
                ctx.fillText("3ª Saraivada",730, 100);
            }
                else if(i<=42){
                desenharTuca(x,y);
                desenhar();
                s = s + 4;
                ctx.drawImage(imagem4,canvas.width/2 - 50,15,125,125);
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "white";
                ctx.fillText("3ª Saraivada",730, 100);
                
            }
                else{
                i = 43;
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.textAlign = "center";
                ctx.fillStyle = "#0b1c00";
                ctx.fillText("PARABÉNS",canvas.width/2,canvas.height/2 - 130);
                ctx.fillStyle = "#0b1c00";
                ctx.fillText("Dona Tucana foi salva!!!",canvas.width/2,canvas.height/2 - 50);
                ctx.fillStyle = "orange";
                ctx.drawImage(imagem4,canvas.width/2 - 50,canvas.height/2 - 9,125,125);
                cancelAnimationFrame();
                
                
                
            }
            

            }
        
            if(s>=400){
                if(i<=15){
                desenharTuca(x,y);
                desenhar2();
                z = z + 2;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "blue";
                ctx.fillText("1ª Saraivada",730, 100);
            }
                else if(i<=29){
                desenharTuca(x,y);
                desenhar2();
                z = z + 3;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "yellow";
                ctx.fillText("2ª Saraivada",730, 100);
            }
                else if(i<=40){
                desenharTuca(x,y);
                desenhar2();
                z = z + 4;
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "white";
                ctx.fillText("3ª Saraivada",730, 100);
            }	
                else if(i<=42){
                desenharTuca(x,y);
                desenhar2();
                z = z + 4;
                ctx.drawImage(imagem4,canvas.width/2 - 50,15,125,125);
                ctx.font = "22px Century Gothic";
                ctx.fillStyle = "white";
                ctx.fillText("3ª Saraivada",730, 100);
                
            }
                else{
                i = 43;
                ctx.clearRect(0, 0, 800, 400);
                ctx.drawImage(imagem,0,0,800,400);
                ctx.font = "50px Century Gothic";
                ctx.textAlign = "center";
                ctx.fillStyle = "blue";
                ctx.fillText("PARABÉNS",canvas.width/2,canvas.height/2 - 130);
                ctx.fillStyle = "white";
                ctx.fillText("Dona Tucana foi salva!!!",canvas.width/2,canvas.height/2 - 50);
                ctx.fillStyle = "orange";
                ctx.drawImage(imagem4,canvas.width/2 - 50,canvas.height/2 - 9,125,125);
                cancelAnimationFrame();
                
        
            
                
                
            }
                
            
            }
            ctx.font = "25px Century Gothic";
            ctx.fillStyle = "green";
            ctx.textAlign = "center";
            ctx.fillText("Distância",730, 30);
            ctx.fillStyle = "red";
            ctx.fillText(i,730,65);
            detectarColisao();
            detectarColisao2();
            detectarColisao3();
            detectarColisao4();
            detectarColisao5();
            detectarColisao6();
            detectarColisao7();
            detectarColisao8();
            detectarColisao9();
            detectarColisao10();
            detectarColisao11();
            requestAnimationFrame(gameloop);
            
            
            
        
        }
        function desenharTuca(pX,pY) {
            ctx.clearRect(0, 0, 800, 400);
            ctx.drawImage(imagem,0,0,800,400);
        
    
            ctx.drawImage(imagem2,pX,pY,50,50);
        
        }
    

        function desenhar(){
        
        
        
            ctx.drawImage(imagem3,0,s,50,50);
            ctx.drawImage(imagem3,150,s,50,50);
            ctx.drawImage(imagem3,300,s,50,50);
            ctx.drawImage(imagem3,450,s,50,50);
            ctx.drawImage(imagem3,600,s,50,50);
            ctx.drawImage(imagem3,750,s,50,50);
        
        }
        function desenhar2(){
        
        
        
            ctx.drawImage(imagem3,75,z,50,50);
            ctx.drawImage(imagem3,225,z,50,50);
            ctx.drawImage(imagem3,375,z,50,50);
            ctx.drawImage(imagem3,525,z,50,50);
            ctx.drawImage(imagem3,675,z,50,50);
        
        
        }