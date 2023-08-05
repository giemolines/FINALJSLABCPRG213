// NAME: CAMILLA MOLINES

// Declare variables
var modelName = "XYZ"; // Assuming XYZ is the default model
var duration = 0; // Assuming the default duration is 0

function recalculate() {
  // Get the calculated-cost element
  var calculatedCostElement = document.getElementById("calculated-cost");
  
  // Calculate the new total cost based on modelName 
  let newTotalCost;
  if (modelName === "XYZ") {
    newTotalCost = duration * 100; 
  } else if (modelName === "CPRG") {
    newTotalCost = duration * 213; 
  } 

  // Set the value of calculated-cost element's inner HTML to the new total cost
  calculatedCostElement.innerHTML = newTotalCost;
}

/****************** model button logic ******************/

var modelButton = document.getElementById("model-button");

// Function to change the model and recalculate total cost
function changeModel() {
  // Get the model-text span element
  var modelTextSpan = document.getElementById("model-text");
  // Switch the model name and update the model-text span element
  if (modelName === "XYZ") {
    modelName = "CPRG";
    modelTextSpan.innerHTML = "Model CPRG";
  } else if (modelName === "CPRG") {
    modelName = "XYZ";
    modelTextSpan.innerHTML = "Model XYZ";
  }

  // Recalculate total cost (assuming you have a recalculate() function)
  recalculate();
}

// Attach the changeModel() function to the "Switch Model" pseudo-button
modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/

var durationButton = document.getElementById("duration-button");

// Function to handle changing the duration
function changeDuration() {
    // Prompt the user for a new duration and save the result to the duration variable
    var newDuration = prompt("Enter the new duration:");
    newDuration = parseInt(newDuration); // Convert the input to an integer
    // Update the innerHTML of the duration-text span element with the new value
    var durationTextElement = document.getElementById("duration-text");
    durationTextElement.innerHTML = newDuration;
    // Update the global duration variable
    duration = newDuration;
    // Recalculate the total cost after updating the duration
    recalculate();
}

// Attach the changeDuration() function to the "Change Duration" pseudo-button
durationButton.addEventListener("click", changeDuration);