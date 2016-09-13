$(function(){
    $("header").load("nav.html", function(){
        var indexVM = new Vue({
            el: 'head',
            data: {
                title: '私人创意'
            }
        });
        var Nav = {
            active:'Originality',
            navs:''
        };
        var navVM = new Vue({
            el: '#navbar',
            data: Nav
        });
        $.getJSON('../data/json/nav.json',function(json){
            Nav.navs = json;
        });
        var blogListData = {
            lists:[
                {"h1":"示范","url":"defaut.html","year":"2016","month":"07-08","imgUrl":"../static/img/bg.1.jpg","desc":"对换时间发哈看是"}
            ]
        };
        new Vue({
            el: '.list',
            data: blogListData
        });
        $.ajax({
            url: '../data/json/blog.list.json',
            type: 'GET',
            dataType: 'json',
            success: function(res) {
                blogListData.lists = res;
            },
            error: function(e) {
                console.log(e);/*错误处理*/
            }
        });
    });
});