//拖拽
function drag(id){
  var obj=document.getElementById('id');
  obj.onmousedown=function(e){
    var that=this;
    var ev=e||window.event;
    var disX=ev.clientX-this.offsetLeft;
    var disY=ev.clientY-this.offsetTop;
      document.onmousemove=function(e){
        var ev=e||window.event;
        this.style.left=e.clientX-disX+"px";
        this.style.top=e.clientY-disY+"px";

      }
      document.onmouseup=function(){
        document.onmouseup=null;
        document.onmousemove=null;
        
      }
  }

}
