// This was written primnarely to download voxforge dataset.
// It simply clicks links automatically on a page
// No jQuery needed, plain JS, that works everywhere


// Settings

var total = 2000 // How many links should be click?
var delay = 500 // Amount in ms before another link is clicked
var ignoreCount = 500 // Ignore this amount of links before starting to click them

// Process
var cur = 1;
function doClick() {
    var curDelay = delay
    if (cur < ignoreCount) {
        curDelay = 1
    }

  setTimeout(function() {
          console.log("Completion - " + Math.round(cur/total*100) + "% (" + cur + "/" + total+ ")")
        var elements = document.getElementsByTagName("a");
        var requiredElement = elements[0];
        
        if (cur > ignoreCount) {
            requiredElement.click();
        }
        requiredElement.remove();
     
    cur++;
    if (cur < total) {
      doClick();
    }
  }, curDelay)
}

doClick(); // Start the process
