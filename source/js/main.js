/**
 * Created by wenyu on 15/4/9.
 */
var whblack = {
    init:function(name){
        this.github(name);
        this.menu();
    },
    github:function(name){
        var isajax = true;
        if(isajax){
            $.ajax({
                url: "https://api.github.com/users/"+name+"",
                method: "GET",
                data: {},
                dataType: "json",
                success:function(data){
                    var $github = $('.github');

                    $github.find('.github-headerlogo img').attr('src',data.avatar_url);
                    $github.find('.github-name h1').html(data.name);
                    $github.find('.github-login a').attr('href',data.html_url);
                    $github.find('.github-email a').html(data.email);
                    $github.find('.github-email a').attr('href','mailto:'+data.email);
                    $github.find('.github-create span').html(data.created_at);
                    $github.find('.github-follows').html(data.followers);
                    $github.find('.github-repos').html(data.public_repos);
                    $github.find('.github-following').html(data.following);

                }
            });

            isajax = false
        }

    },
    menu:function(){
        var $toggleMenu = $('.header-collaspe');
        $toggleMenu.on('click',function(){
            if($('.header-nav').css('display')==='none'){
                $('.header-nav').slideDown(300)
                $('.header-search').slideDown(300)
            }else{
                $('.header-nav').slideUp(300)
                $('.header-search').slideUp(300)
            }
        });


    }

}


