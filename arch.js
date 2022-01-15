/*****************************
 *   By Uzodimma Joseph      *
 *         ARCHJS            *
 *           V1.0            *
 *****************************/

var Arch=(function(){
  "use strict";
  var xml;
  if(window.XMLHttpRequest){
      xml = new XMLHttpRequest();
  }else{
      xml = new ActiveXObject("Microsoft.XMLHTTP");
  }
  const methods = ["post", "get", "put", "delete"];
  const contentTypes = ["text/plain", "text/html", "text/javascript", "text/xml", 
"text/css", "application/json", "application/x-www-urlencoded"];
  this.req= (m, opt)=>{
if(typeof m == "undefined") throw Error("undefined method");
try{
  if(typeof m !== "string");
  
}catch(err){
  throw Error(err);
}
if(!methods.includes(m.toLowerCase())) throw Error("unsupported ajax method type");
else{
  return new Promise(request=>{
  let options = opt || {};
  let mu = m.toUpperCase();
let $path = options.path || options.url;
xml.open(mu, $path, true);

if(options.contentType && contentTypes.includes(options.contentType)){
  xml.setRequestHeader("Content-type", options.contentType || options.ContentType);
}else{
  xml.setRequestHeader("Content-type", "application/json")
}

xml.onreadystatechange=function(){
  if(xml.readyState == 4 && xml.status == 200){
     
      var response = this.responseText;
      request(response);
  }
}

if(options.data && typeof options.data === "object"){
  xml.send(JSON.stringify(data));
}else if(options.data == null || ""){
  xml.send();
}else{
  xml.send();
}

  })
}



  }
})


//testing
