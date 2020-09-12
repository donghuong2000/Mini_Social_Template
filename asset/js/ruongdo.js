var link_image=["/images/yyy.png","/images/x.png","/images/w.png","/images/v.png","/images/u.png","/images/pet.png","/images/camtay.png"];
var odo =["o1","o2","o3","o4","o5","o6","o7","o8","o9","o10","o11","o12"]
function updateavatar()
{
  var oimage =[];
  var te=[",url(/images/yy.png)"];
  odo.forEach(e=>{
    var kt= document.getElementById(e);
    
    if(kt.getAttribute("class")!="o-item")
    {
        oimage.push(kt.getAttribute("class"));
    }
  });
  
  oimage.forEach(e=>{
    if(e=="o-item-canh")
    {
      te.push(",url(/images/yyy.png)");
    }
    if(e=="o-item-ao")
    {
      te.push(",url(/images/x.png)");
    }
    if(e=="o-item-quan")
    {
      te.push(",url(/images/w.png)");
    }
    if(e=="o-item-toc")
    {
      te.push(",url(/images/v.png)");
    }
    if(e=="o-item-pet")
    {
      te.push(",url(/images/pet.png)");
    }
    if(e=="o-item-camtay")
    {
      te.push(",url(/images/camtay.png)");
    }
    if(e=="o-item-non")
    {
      te.push(",url(/images/u.png)");
    }
  });
  te.sort();
  var str="";
  te.forEach(e=>{
    str+=e;
  });
  document.getElementById("final").setAttribute("style","background:"+str.substring(1)+";");
}

function Ban(idraw){
  var a = idraw.toString();
  a =a.split('-')[1];
  var ruong = document.getElementById(a);
  if(confirm("bạn có muốn bán vật phẩm này ko?"))
  {
    ruong.setAttribute("class","o-item");
  }
}
function Mac(idraw){
  var a = idraw.toString();
  a =a.split('-')[1];
  var ruong = document.getElementById(a);
  var item = ruong.getAttribute("class");
  ruong.setAttribute("class","o-item");
  var b = "o"+a.substring(1);
  var o = document.getElementById(b);
  o.setAttribute("class",item);
  var c = getComputedStyle(o);
  updateavatar();
}
function thao(idraw){
  var a = idraw.toString();
  a =a.split('-')[1];
  var o = document.getElementById(a);
  var item = o.getAttribute("class");
  o.setAttribute("class","o-item");
  var b = "r"+a.substring(1);
  var r = document.getElementById(b);
  r.setAttribute("class",item);
  updateavatar();
}