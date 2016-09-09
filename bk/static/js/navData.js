/**
 *  Nav
 */
var navData = {
  activeNav:'',
  navs:[
    {"name":"示范","url":"defaut.html"}
  ]
};
$.ajax({
  url: '../xml/nav.json',
  type: 'GET',
  dataType: 'json',
  success: function(res) {
    for(var i=0;i<res.length;i++){
      var data = res[i];
      navData.navs.push(data);
    }
    console.log(navData.navs);
  },
  error: function(e) {
    console.log(e);/*错误处理*/
  }
});