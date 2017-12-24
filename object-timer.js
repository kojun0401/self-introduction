(function(){
    'use strict';


    var game = {
        startTime : null,
       // passageTime : document.getElementById('passage-time'),
        displayArea : document.getElementById('display-area'),
        start : function(){
            game.startTime = new Date().getTime();
            document.body.onkeypress = game.stop;//なんでstop()じゃないの？
            //console.log("スタートしました。")
        },
        stop : function(){
            var currentTime = new Date().getTime();
            var seconds = (currentTime- game.startTime)/1000;
    
            if(9.5 <= seconds && seconds <= 10.5){
                game.displayArea.innerText = seconds + '秒でした。　有能！'
            }else{
                game.displayArea.innerText = seconds + '秒でした。　無能！'
            }
            //console.log('ストップしました');
        }
    }

    if(confirm('OKを押して10秒だと思ったら何かキーを押して下さい')){
        game.start();
    }
})();
