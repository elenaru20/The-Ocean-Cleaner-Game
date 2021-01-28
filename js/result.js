const deadDwellers = localStorage.getItem('deadDwellers');
const proportion = localStorage.getItem('proportion');
const collectedRubbishPieces = localStorage.getItem('rubbishPieces');
const ogyxenLevel = localStorage.getItem('oxygenLevel');
const makeNum = parseFloat(ogyxenLevel).toFixed(0);
console.log('num', makeNum)
const message = localStorage.getItem('message');
console.log(message)

console.log('oxygenlevel', ogyxenLevel, 'dwellers', deadDwellers, 'proportion', proportion, 'collectedRubbishPieces', collectedRubbishPieces)


document.querySelector('.percentage').innerText = proportion;
document.querySelector('.rubbishScore').innerText = collectedRubbishPieces;
document.querySelector('.deadDwellers').innerText = deadDwellers;
document.querySelector('.timer').innerText = makeNum;

document.querySelector('.message').innerText = message;

