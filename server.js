const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//function 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//function calculates the bmi
function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you are normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are over weight.";
  }
  return interpretation;
}

app.post("/", (req, res) => {
  var wt = parseFloat(req.body.weight);
  var ht = parseFloat(req.body.height);
  var interpretation = bmiCalculator(wt, ht);
  res.send(interpretation);
});


app.listen(port, () => {
  console.log("Server started on port " + port);
});
