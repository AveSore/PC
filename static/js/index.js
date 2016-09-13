$(function(){
    $("header").load("nav.html", function(){
        var indexVM = new Vue({
            el: 'head',
            data: {
                title: '主页'
            }
        });
        var navVM = new Vue({
            el: '#navbar',
            data: {
                active:'Default',
                navs:''
            }
        });
        $.getJSON('../data/json/nav.json',function(json){
            navVM.navs = json;
        });
    });
});