let menu=document.querySelector('#menu');
let ull=document.querySelector('#ul')



menu.click(function(){
        $(this).toggleClass("fa-Times");
        ull.toggleClass('toggle');
    });
    window.onscroll=()=>{
        menu.removeClass("fa-Times");
        ull.removeClass('toggle');
        

    };
//}
//);