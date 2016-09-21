$(function(){
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