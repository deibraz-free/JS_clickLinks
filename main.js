// This was written primnarely to download voxforge dataset.
// It simply clicks links automatically on a page
// No jQuery needed, plain JS, that works everywhere


// Settings

var total = 1500 // How many links should be click?
var delay = 500 // Amount in ms before another link is clicked

// Process
var cur = 1;
function doClick() {
  setTimeout(function() {
      console.log("Completion - " + Math.round(cur/total*100) + "% (" + cur + "/" + total+ ")")
    var elements = document.getElementsByTagName("a");
    var requiredElement = elements[0];
    requiredElement.click();
    requiredElement.remove();

    cur++;
    if (cur < total) {
      doClick();
    }
  }, delay)
}

doClick(); // Start the process
