/* Used Mozilla Firefox to change the color of the body of the Google page.
   Went to Inspect, then Console and typed this code to make the desired changes. */ 

const htmlBody = document.querySelector('body');
htmlBody
const randomClickFunction = function(){
   const colors = ["red", "blue", "green", "orange", "purple", "black", "yellow", "seagreen"];
   const randomIndex = Math.floor(Math.random() * colors.length);
   const randomColor = colors[randomIndex];
   htmlBody.style.backgroundColor = randomColor;
   console.log('The user clicked and set the color to' + randomColor);
}
randomClickFunction()
htmlBody.onclick = randomClickFunction;

/* As observed, every time the background is clicked, the color changes to a random color from the array; 
   and a message saying the user clicked and color is set to 'the color' is displayed. */