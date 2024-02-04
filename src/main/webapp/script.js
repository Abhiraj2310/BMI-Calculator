function calculateBMI() {
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var heightFeet = document.getElementById("height-feet").value;
    var heightInches = document.getElementById("height-inches").value;

    var heightInMeters = ((parseInt(heightFeet) * 12) + parseInt(heightInches)) * 0.0254;
    var bmi = weight / (heightInMeters * heightInMeters);

    var resultBox = document.getElementById("result-box");

    resultBox.className = ""; // Clear previous classes

    if (bmi < 18.5) {
        resultBox.innerText = "BMI: " + bmi.toFixed(2) + " - Underweight";
        resultBox.classList.add("underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
        resultBox.innerText = "BMI: " + bmi.toFixed(2) + " - Normal";
        resultBox.classList.add("normal");
    } else if (bmi >= 25 && bmi < 30) {
        resultBox.innerText = "BMI: " + bmi.toFixed(2) + " - Overweight";
        resultBox.classList.add("overweight");
    } else {
        resultBox.innerText = "BMI: " + bmi.toFixed(2) + " - Obese";
        resultBox.classList.add("obese");
    }
}
