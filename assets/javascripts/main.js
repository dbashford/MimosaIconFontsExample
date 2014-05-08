require({
  paths: {
    jquery: 'vendor/jquery/jquery',
  }
}, ["jquery"], function($) {

  var sizes = [20, 50, 100, 150];
  var colors = ["purple","green","pink","blue"];
  var index = 0;

  $('#size').click(function(){
    var i = index % 4;
    $('i').css('font-size', sizes[i])
    index++;
  });

  $('#color').click(function(){
    var i = index % 4;
    $('i').css('color', colors[i])
    index++;
  });

});