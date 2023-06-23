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
