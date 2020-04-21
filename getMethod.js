function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}

function isset(param) {
	if (param.indexof('$_GET') > 0) {
		var regExp = /\$_GET\(.?([^"']+).?\)/;
		var getUrlParam = window.location.href.match(regExp)[1];
		
		if (getUrlParam != null) {
			return true;
		}
		
		if (getUrlParam == null) {
			return false;
		}
	}
}
