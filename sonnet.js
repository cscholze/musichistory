
//  1. Take the contents of the sonnet div and place it in a variable
	var sonnetElement = document.getElementById("sonnet");
	console.log("sonnetElement",sonnetElement);
	var sonnetText = sonnetElement.innerHTML;
	console.log("sonnetText: ",sonnetText);

// 2. Find and output the starting position of the word "orphans"
	indexOfOrphans = sonnetText.indexOf("orphans");
	console.log("Index of Orphans", indexOfOrphans);

// 3. Output the number of characters in the sonnet
	console.log("sonnetLength",sonnetText.length);

// 4. Replace the first occurance of the string "winter" with "yuletide"
	//sonnetElement.innerHTML = sonnetText.replace("winter","yuletide");
sonnetElement.innerHTML = sonnetText.replace("winter","yuletide");
// 5. Replace all occurances of the string "the" with "a large"
	sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");

