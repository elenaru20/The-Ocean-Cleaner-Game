const deadDwellers = localStorage.getItem('deadDwellers');
const proportion = localStorage.getItem('proportion');
const collectedRubbishPieces = localStorage.getItem('rubbishPieces');

console.log('dwellers', deadDwellers, 'proportion', proportion, 'collectedRubbishPieces', collectedRubbishPieces)


document.querySelector('.percentage').innerText = proportion;
document.querySelector('.rubbishScore').innerText = collectedRubbishPieces;
document.querySelector('.deadDwellers').innerText = deadDwellers;

