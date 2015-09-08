var frmCharactersModel = function() {
	function getCharacters() {
		try {
			//var http = require('http');
			
			var ts = +new Date();
			var privateKey = 'cd461297b0dcf44a70f8499d405c1fdc0daafcbd';
			var publicKey = 'bdae238cca3e4f2882d1aca7f39bf482';
			var hash = md5(ts+privateKey+publicKey);
			
			//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
			var options = {
			  host: 'gateway.marvel.com',
			  path: '/v1/public/characters?apikey=' + publicKey + '&ts=' + ts + '&hash=' + hash
			};
			
			var url = 'http://' + options.host + options.path;
			
			console.log(md5('Message'));
			
			
			//callback = function(response) {
//		  var str = '';
//		
//		  //another chunk of data has been recieved, so append it to `str`
//		  response.on('data', function (chunk) {
//		    str += chunk;
//		  });
//		
//		  //the whole response has been recieved, so we just print it out here
//		  response.on('end', function () {
//		    alert(JSON.parse(str));
//		  });
//		}
			
			//http.request(options, callback).end();
			
			function callbackfunction(status, resulttable)
			{
			    if(status == 400)
			    {
					alert('opstatus = ' + resulttable["opstatus"]);
			    }
			}
			
			function startup()
			{
			    try
			    {
				   var myhttpheaders={};
				   var inputParamTable=
			          {
			              appID:"Marvel", 
			              serviceID:"nonEcziste", 
			              channel:"rc", 
			              httpheaders:myhttpheaders
			           };
				    var connHandle = kony.net.invokeServiceAsync(
			                        url, 
			                        inputParamTable, 
			                        callbackfunction);
					
			     }
			     catch(err)
			     {
				  alert("Error"+err);
			     }	
			}
			
			startup();
		} catch(ex) {
			alert(ex + '');
		}
	}
	
	frmMain.preShow = function() {
		try {
			alert('Loading module...');
			//var b = kony.modules.loadFunctionalModule ('md5');
			alert('Module loaded - ' + b);
			//getCharacters();
		} catch(ex) {
			alert('Module load error: '+ ex);
		}
	}
	
	return {
		getCharacters: getCharacters
	};
}();