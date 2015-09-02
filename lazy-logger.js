
var attachLogger = function() {
	if(typeof arguments != 'undefined') {
		var pad = function(n, width, z) {
			z = z || '0';
			n = n + '';
			return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
		}

		var logged = [];
		var removeAllLogged = function() {
			while(logged.length) {
				logContainer.removeChild(logged.pop());
			};
		};

		var logContainer = document.getElementById('logger-panel');
		if(!logContainer) {
			logContainer = document.createElement('div');
			logContainer.id = 'logger-panel';
			logContainer.setAttribute('style', 'position:fixed;width:100%;left:0;right:0;bottom:0;height:auto;background-color:white;color:black;z-index:9999;max-height:20%;background:linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,1) 100%);overflow:scroll;');
			logContainer.addEventListener('touchend', removeAllLogged);
			logContainer.addEventListener('click', removeAllLogged);
			document.body.appendChild(logContainer);
		}

		var replaceLogger = function(type) {
			var originalLogger = console[type];
			console[type] = function() {
				if(arguments.length) {
					var logEntry = document.createElement('div');
					
					var args = [];//arguments is not an array
					for(var i=0; i<arguments.length; i++) {
						args[i] = arguments[i];
					}

					var date = (new Date());
					var dateString = '';//date.getFullYear()+'-'+pad(date.getMonth()+1, 2)+'-'+pad(date.getDate(), 2)+' ';
					dateString += pad(date.getHours(), 2)+':'+pad(date.getMinutes(), 2)+':'+pad(date.getSeconds(), 2);

					var color = (type == 'error' ? 'red' : (type == 'warn' ? 'blue' : 'black'));

					logEntry.textContent = '['+dateString+'] '+type+': '+args.join();
					logEntry.setAttribute('title', date.toUTCString());
					logEntry.setAttribute('style', 'color:'+color+';');

					logContainer.appendChild(logEntry);
					logContainer.scrollTop = logContainer.scrollHeight;

					logged.push(logEntry);
					// window.setTimeout(function() {
					// 	logged.splice(logged.indexOf(logEntry));
					// 	logContainer.removeChild(logEntry);
					// }, 10000);
				}
				originalLogger.apply(this, arguments);
			};
		};

		replaceLogger('log');
		replaceLogger('warn');
		replaceLogger('error');

		// window.setInterval(function() {
		// 	console.log('something not important');
		// 	console.warn('Danger Will Robinson!');
		// 	console.error('ERROR###');
		// }, 2500);
	}
};

document.addEventListener('DOMContentLoaded', attachLogger, false);