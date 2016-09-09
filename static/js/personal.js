$(function(){
    var Nav = {
        active:'Personal',
        navs:''
    };
    var navVM = new Vue({
        el: '#navbar',
        data: Nav
    });
    $.getJSON('../data/json/nav.json',function(json){
        Nav.navs = json;
    });
    var PersonalList = {
        lists:''
    };
    $.getJSON('../data/json/personal.json',function(json){
        PersonalList.lists = json;
    });
    var personalListVM = new Vue({
        el: '#content',
        data: PersonalList
    });
    var indexVM = new Vue({
        el: 'head',
        data: {
            title: '个人站点'
        }
    });

});