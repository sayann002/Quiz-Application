const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores.map(eachScore => {
    return `<li class='high-score'>${eachScore.name} ---- ${eachScore.score}</li>`
}).join('');

