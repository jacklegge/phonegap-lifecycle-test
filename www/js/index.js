var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
        // setting up event listener for onDeviceReady function
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
        // function above uses jQuery to increment counters and display text
	}


    // device APIs are available
    // deviceReady

    function onDeviceReady() {
		alert("device ready");
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    //function onPause() {
		//alert("pause");
		//paused_count++;
		//updateDisplay();
    }
	
    // Handle the resume event
    //
	//function onResume() {
		//alert("resume");
		//resumed_count++;
		//updateDisplay();
    }
