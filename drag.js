//拖拽
function drag(id){
  var obj=document.getElementById('id');
  obj.onmousedown=function(e){
    var ev=e||window.event;
    var disX=ev.clientX-this.offsetLeft;
    var disY=ev.clientY-this.offsetTop;

  }

}
