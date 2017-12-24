(function(){
    'use strict';
    var myBirthTime = new Date(1995, 3, 1, 23, 30);
    function updateParagraph(){
        var now = new Date();
        var seconds = (now.getTime() - myBirthTime.getTime())/1000;
        var days = (now.getTime() - myBirthTime.getTime())/(1000*24*60*60);
        document.getElementById('birth-days').innerText = '生まれてから' + Math.floor(days) + '日経過。';
        document.getElementById('birth-seconds').innerText = '生まれてから' + Math.floor(seconds) + '秒経過。';
    }
    setInterval(updateParagraph,100)
})();
