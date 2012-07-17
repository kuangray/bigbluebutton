
document.addEventListener( "DOMContentLoaded", function() {
	function getUrlParameters() {
		var map = {};
    	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    		map[key] = value;
    	});
    	return map; 
  	}
 
	var video;
	var audio;
	var slides;
	var params = getUrlParameters();
	MEETINGID = params['meetingId'];

	//alert(MEETINGID);
	var HOST = window.location.hostname;
	var RECORDINGS = "http://" + HOST + "/slides/" + MEETINGID;
	var SLIDES_XML = "http://" + HOST + "/slides/" + MEETINGID + '/slides.xml';
	var appName = navigator.appName;
	var appVersion = navigator.appVersion;

	video = document.getElementById("videoRecording");
	//alert("navigator.appVersion: "+navigator.appVersion+" navigator.appName:"+navigator.appName);
	///video/muxed-audio-webcam.mp4
  	if(appName == "Microsoft Internet Explorer" ){
  		//alert("IE");
  		if( navigator.userAgent.match("chromeframe")){
	  		// video.setAttribute('src', RECORDINGS + '/video/muxed-audio-webcam.mp4'); 

    		video.setAttribute('type','video/mp4');
		}else{
			var message = "To support this playback please install 'Google Chrome Frame', or use other browser: Firefox, Safari, Chrome, Opera";
			var line = document.createElement("p");
			var link = document.createElement("a");
		  	line.appendChild(document.createTextNode(message));
	        link.setAttribute("href", "http://www.google.com/chromeframe");
	        link.setAttribute("target", "_blank");
	        link.appendChild(document.createTextNode("Install Google Chrome Frame"));
		  	document.getElementById("chat").appendChild(line);
		 	document.getElementById("chat").appendChild(link);
		}
	} else if (appVersion.match("Safari") != null && appVersion.match("Chrome") == null){
		//alert("Safari");
  		video.setAttribute('src', RECORDINGS + '/video/webcams.mp4');
		//video.setAttribute('src', 'http://videos.mozilla.org/serv/webmademovies/wtfpopcorn.mp4');

        video.setAttribute('type','video/mp4');
  	} else {
  		//alert("Chrome & FF");
  		video.setAttribute('src', RECORDINGS + '/video/webcams.mp4');
		//video.setAttribute('src', 'http://videos.mozilla.org/serv/webmademovies/wtfpopcorn.mp4');

        video.setAttribute('type','video/mp4');
  	}	
  	video.setAttribute('data-timeline-sources', SLIDES_XML) 

}, false);





function getAudio(){
	window.location="/slides/"+MEETINGID+"/audio/recording.wav";
}

function getVideo(){
	window.location="/slides/"+MEETINGID+"/video/webcams.mp4";
}

function share(){
	
	window.location='mailto:?subject=BigBlueButton Presentation Link&body='+window.location;
}

function checkBrowser(){
	if (navigator.userAgent.indexOf("Firefox")!=-1){
		$('#audioRecording').css('height','100px');
	}
	
	
	
}
