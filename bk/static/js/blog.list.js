/**
 *  Blog.list
 */
/*$.getJSON("../xml/blog.list.json",function(data) {
  console.log(data[0]);
  var strHtml= '';
  $.each(data, function (infoIndex, info) {
    strHtml += "姓名：" + info["name"] + "<br>";
    strHtml += "性别：" + info["sex"] + "<br>";
    strHtml += "邮箱：" + info["email"] + "<br>";
    strHtml += "<hr>"
  });
  console.log(strHtml);
});*/
var blogListData = {
  lists:[
    {"h1":"示范","url":"defaut.html","year":"2016","month":"07-08","imgUrl":"../static/img/bg.jpg","desc":"对换时间发哈看是"}
  ]
};
$.ajax({
  url: '../xml/blog.list.json',
  type: 'GET',
  dataType: 'json',
  success: function(res) {
    for(var i=0;i<res.length;i++){
      var data = res[i];
      blogListData.lists.push(data);
    }
  },
  error: function(e) {
    console.log(e);/*错误处理*/
  }
});
$(function(){
  new Vue({
    el: '.nav',
    data: navData
  });
  new Vue({
    el: '.list',
    data: blogListData
  });

})
