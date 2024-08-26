function calculatePrice() 
{
    var age = parseFloat(document.getElementById("age").value);
    var rating = parseFloat(document.getElementById("rating").value);
    var teamRank = parseInt(document.getElementById("teamRank").value);

    var loadingDiv = document.getElementById("loading");
    var resultDiv = document.getElementById("result");

    // Show loading animation
    loadingDiv.style.display = "block";
    resultDiv.innerText = "";

    // Simulate a delay for the calculation process
	setTimeout(function() {
		var basePrice = calculateBasePrice(rating);
		var ageMultiplier = calculateAgeMultiplier(age);
		var teamMultiplier = calculateTeamMultiplier(teamRank);
		var finalPrice = basePrice * ageMultiplier * teamMultiplier;

		// Hide loading animation and show result
		loadingDiv.style.display = "none";
		resultDiv.innerText = "Цена игрока: " + finalPrice.toLocaleString() + " CS Долларов"; }, 1000
	); // 1-second delay for demonstration
}

function calculateBasePrice(rating) {
    if (rating >= 1.90 && rating <= 2.50) {
		return 2500000;
    } else if (rating >= 1.60 && rating <= 1.89) {
		return 1600000;
    } else if (rating >= 1.40 && rating <= 1.59) {
		return 850000;
    } else if (rating >= 1.20 && rating <= 1.39) {
		return 600000;
    } else if (rating >= 1.10 && rating <= 1.19) {
		return 350000;
    } else if (rating >= 1.00 && rating <= 1.09) {
		return 200000;
    } else if (rating >= 0.90 && rating <= 0.99) {
		return 150000;
    } else if (rating >= 0.80 && rating <= 0.89) {
		return 100000;
    } else if (rating >= 0.70 && rating <= 0.79) {
		return 50000;
    } else {
		return 25000;
    }
}

function calculateAgeMultiplier(age) {
    if (age <= 15) {
		return 2.2;
    } else if (age >= 16 && age <= 17) {
		return 1.75;
    } else if (age >= 18 && age <= 20) {
		return 1.55;
    } else if (age >= 21 && age <= 23) {
		return 1.05;
    } else if (age >= 24 && age <= 26) {
		return 1.02;
    } else if (age >= 27 && age <= 29) {
		return 0.85;
    } else if (age >= 30 && age <= 31) {
		return 0.75;
    } else if (age >= 32 && age <= 34) {
		return 0.45;
    } else if (age >= 35 && age <= 37) {
		return 0.05;
    } else {
		return 0.03;
    }
}

function calculateTeamMultiplier(teamRank) {
    if (teamRank >= 1 && teamRank <= 3) {
		return 2;
    } else if (teamRank >= 4 && teamRank <= 8) {
		return 1.6;
    } else if (teamRank >= 9 && teamRank <= 15) {
		return 1.25;
    } else if (teamRank >= 16 && teamRank <= 30) {
		return 1.1;
    } else if (teamRank >= 31 && teamRank <= 50) {
		return 0.75;
    } else if (teamRank >= 51 && teamRank <= 70) {
		return 0.5;
    } else if (teamRank >= 71 && teamRank <= 100) {
		return 0.35;
    } else if (teamRank >= 101 && teamRank <= 150) {
		return 0.2;
    } else if (teamRank >= 151 && teamRank <= 200) {
		return 0.1;
    } else {
		return 0;
    }
}