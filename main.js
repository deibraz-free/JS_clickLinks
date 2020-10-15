// This was written primnarely to download voxforge dataset.
// It simply clicks links automatically on a page
// No jQuery needed, plain JS, that works everywhere


// Settings
                 
var total = 1500 // 
var delay = 500

// Process
var cur = 1; 
function doClick() {
  setTimeout(function() {
  		console.log("Completion - " + Math.round(i/total*100) + "% (" + i + "/" + total+ ")")
		var elements = document.getElementsByTagName("a");
		var requiredElement = elements[0];
		requiredElement.click();
		requiredElement.remove();

    cur++;
    if (i < total) {
      doClick();
    }
  }, delay)
}

doClick(); // Start the process
