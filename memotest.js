let arrCards = [];
const arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];
function shuffleImg (a) {

for(var i = arr.length; i; i--){
	let index = Math.floor(Math.random()*i);
	let num = arr[i-1]
	arr[i-1] = arr[index];
	arr[index] = num;
	
	}
console.log (arr); 
return arr
// newArr = shuffleImg(newArr);
// console.log(newArr)
}


function addImg () {
	const length = 12

	for(var i = 0; i<length; i++){
		if (i<=3) {
			$('.fichas-container-back').each(function(){
				const img = "<div class='fichas-back'>"+"<img src='img/img1.jpeg'/>" + "</div>"
				$(this).append(img);
				const card = $('.fichas-back')[i];
				arrCards.push(card);
			})
			console.log(arrCards);

		} else if (i>=4 && i<8) {
				$('.fichas-container-back').each(function(){
				const img = "<div class='fichas-back'>"+"<img src='img/img2.jpeg'/>" + "</div>"	
				$(this).append(img);
				const card = $('.fichas-back')[i];
				arrCards.push(card);
			})
			// console.log(arrCards[i],i)
			
		} else {
			$('.fichas-container-back').each(function(){
				const img = "<div class='fichas-back'>"+"<img src='img/img3.jpeg'/>" + "</div>"
				$(this).append(img);
				const card = $('.fichas-back')[i];
				arrCards.push(card);
			})
		} 
			}		
			console.log(arrCards);
			return arrCards;
			let cards = arrCards;
			cards = shuffle(cards,position);	
			// shuffleImg(arrCards);	
			// 	shuffle(arr,arrCards);

}

function shuffle (a,b) {
	// length1 = arrCards.length
	// console.log(length1);

	for(var i = 0; i < arrCards.length; i++){
		console.log(arrCards[i],'a')
		console.log(arr[i],'b')
		var j = arr.indexOf(i);
		// console.log(j);
		arr[i] = arrCards[j];
		// console.log(arr[i]);
	}

}



