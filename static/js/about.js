$(function(){
    $("header").load("nav.html", function(){
        var indexVM = new Vue({
            el: 'head',
            data: {
                title: '关于我'
            }
        });
        var Nav = {
            active:'About',
            navs:''
        };
        var navVM = new Vue({
            el: '#navbar',
            data: Nav
        });
        $.getJSON('../data/json/nav.json',function(json){
            Nav.navs = json;
        });
    });
});