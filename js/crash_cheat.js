var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '~猜猜这是什么~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });