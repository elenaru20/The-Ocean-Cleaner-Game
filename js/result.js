const deadDwellers = localStorage.getItem('deadDwellers');
const proportion = localStorage.getItem('proportion');
const collectedRubbishPieces = localStorage.getItem('rubbishPieces');
const ogyxenLevel = localStorage.getItem('oxygenLevel');

console.log('dwellers', deadDwellers, 'proportion', proportion, 'collectedRubbishPieces', collectedRubbishPieces)


document.querySelector('.percentage').innerText = proportion;
document.querySelector('.rubbishScore').innerText = collectedRubbishPieces;
document.querySelector('.deadDwellers').innerText = deadDwellers;
document.querySelector('.timer').innerText = ogyxenLevel;

