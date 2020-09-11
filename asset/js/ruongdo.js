function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  var image =[ "/images/z.png","/images/yy.png"];
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    var b = document.getElementById(data).getAttribute("src");
    if(!image.includes(b))
    {
      image.push(b)
    }
    image.sort();
    var l="";
    image.forEach(element => {
      l+="url("+element+"),"
    });
    
    var a = document.getElementById("final");
    a.setAttribute("style","background:"+l.substring(0,l.length-1)+";")
  }