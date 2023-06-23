/* const submitButton = document.querySelector('.main__button'),
	trialDiv = document.querySelector('#trial');

// summaryScorePercent = document.querySelector('.summary__score--percent');

const addScores = () => {
	fetch('data.json')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);

			data.map((dataEntry) => {
				console.log(dataEntry.category);

				//create parent div and add class
				const summaryDiv = document.createElement('div');
				summaryDiv.classList.add('main__summary--div');

				//create para cont image and scores
				const para = document.createElement('p');
				const icon = document.createElement('img');
				icon.src = dataEntry.icon;

				para.appendChild(icon);
				para.appendChild(document.createTextNode(dataEntry.category));

				summaryDiv.appendChild(para);

				//create span containing score and /100
				const span = document.createElement('span');
				span.classList.add('summary__score');

				const boldedScore = document.createElement('b');
				boldedScore.classList.add('extra-bold', 'summary__score--percent');
				boldedScore.appendChild(document.createTextNode(dataEntry.score));

				span.appendChild(boldedScore);

				const over100 = ' /100';
				span.appendChild(document.createTextNode(over100));

				summaryDiv.appendChild(span);
				trialDiv.appendChild(summaryDiv);
			});
		});
};

submitButton.addEventListener('click', addScores);
*/

/* CLICK TO SHOW YOUR SCORES AND FINAL RESULT*/
const submitButton = document.querySelector('.main__button'),
	mainResultDiv = document.querySelector('.main__result');

const showScores = async () => {
	//fetch the data from the JSON file
	let res = await fetch('data.json');
	let data = await res.json();

	console.log(data); //the array of objects with the scores

	const scoreSpan = document.querySelectorAll('.summary__score--percent');

	//use the forEach loop to iterate over each element. this way we make use of the index parameter then use the same index for the score array

	scoreSpan.forEach((span, index) => {
		if (index < data.length) {
			scoreSpan.forEach((span, index) => {
				let currentScore = data[index].score;
				span.textContent = currentScore;
			});
		}
	});

	//show the div to display the results
	mainResultDiv.style.display = 'flex';
};

submitButton.addEventListener('click', showScores);
