
function parseJSON( data ) { 
	if (typeof data !== "string" || !data ) { 
		return null; 
	} 
	data = jQuery.trim( data ); 
	if ( /^[\],:{}\s]*$/.test(data.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@") 
	.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]") 
	.replace(/(?:^|:|,)(?:\s*\[)+/g, "")) )
	{ 
		return window.JSON && window.JSON.parse ? window.JSON.parse( data ) : (new Function("return " + data))(); 
	} else { 
		jQuery.error( "Invalid JSON: " + data ); 
	} 
}
function HTMLEnCode(str)   
{   
      var    s    =    "";
      str=(str==null?"":str);
      if    (str.length    ==    0)    return    "";   
      s    =    str.replace(/&/g,     "&amp;");   
      s    =    s.replace(/</g,       "&lt;");   
      s    =    s.replace(/>/g,       "&gt;");   
      s    =    s.replace(/\s/g,       "&nbsp;");   
      s    =    s.replace(/\'/g,      "&apos;");   
      s    =    s.replace(/\"/g,      "&quot;");
      return    s;   
}   
function HTMLDeCode(str)   
{   
      var    s    =    "";
      str=(str==null?"":str);
      if    (str.length    ==    0)    
    	  return    "";
      s    =    str.replace(/&amp;/g,    "&");
      s    =    s.replace(/&lt;/g,        "<");
      s    =    s.replace(/&gt;/g,        ">"); 
      s    =    s.replace(/&nbsp;/g,       " ");
      s    =    s.replace(/&apos;/g,      "\'"); 
      s    =    s.replace(/&quot;/g,      "\"");
      return    s;   
}
function closeWin(){
	parent.window.clickCloseButton();
}

function clickCloseButton(){
	$('#wbclose').trigger('click');
}

function openWin(widthInfo,heightInfo,titleInfo,url,initInfo,callbackInfo){
	$.webox({
		height:heightInfo,
		width:widthInfo,
		bgvisibel:true,
		title:titleInfo,
		iframe:url,
		initdata:initInfo,
		callback:callbackInfo
	});
}