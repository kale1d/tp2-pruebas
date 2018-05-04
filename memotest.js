let arrCards = [];
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];

$('.fichas').each(function(){
	const imgfront = "<img src='img/front-img.jpg'/>";
	let index = $('.fichas').index(this);
	$('.fichas').eq(index).append(imgfront);
})


function shuffleImg (a) {

for(var i = arr.length; i; i--){
	let index = Math.floor(Math.random()*i);
	let num = arr[i-1]
	arr[i-1] = arr[index];
	arr[index] = num;
	
	}
// console.log (arr); 
return arr
// newArr = shuffleImg(newArr);
// console.log(newArr)
}
arr=shuffleImg(arr);

function addImg (a) {
	// const length = 12

	// for(var i = 0; i<length; i++){
		
			$('.fichas').each(function(i) {
				if (i<=3) {
					const img = "<img class='fichas-back' src='img/img1.jpeg'/>";
					console.log($(this))
					$(this).append(img);
					console.log($(this))
					
					const card = $('.fichas-back')[i];
					arrCards.push(card);
				}else if (i>=4 && i<8) {
					const img2 = "<img class='fichas-back' src='img/img2.jpeg'/>";	
					$(this).append(img2);
					const card = $('.fichas-back')[i];
					arrCards.push(card);
				}else {
					const img3 = "<img class='fichas-back' src='img/img3.jpeg'/>";
					$(this).append(img3);
					const card = $('.fichas-back')[i];
					arrCards.push(card);
				}

			})
			return arrCards;
		// 	// console.log(arrCards);

		// } else if (i>=4 && i<8) {
		// 		$('.fichas').each(function(){
		// 		const img = "<img class='fichas-back' src='img/img2.jpeg'/>";	
		// 		$(this).append(img);
		// 		const card = $('.fichas-back')[i];
		// 		arrCards.push(card);
		// 	})
		// 	// console.log(arrCards[i],i)
			
		// } else {
		// 	$('.fichas').each(function(){
		// 		const img = "<img class='fichas-back' src='img/img3.jpeg'/>";
		// 		$(this).append(img);
		// 		const card = $('.fichas-back')[i];
		// 		arrCards.push(card);
		// 	})
		// } 
			// }		
			// console.log(arrCards);
			
			// let cards = arrCards;
			// cards = shuffle(cards,position);	
			// shuffleImg(arrCards);	
			// 	shuffle(arr,arrCards);

}
arrCards=addImg(arrCards)
// $('.fichas-back').addClass("notshow");
// console.log(arrCards);

function shuffle (a,b) {
	// length1 = arrCards.length
	// console.log(length1);
	// console.log(arr);
	for(var i = 0; i < arr.length; i++){
		// console.log(arrCards[i],'a')
		// console.log(arr[i],'b')

		var j = arr.indexOf(i);
		newArr.push(arrCards[j])
		arrCards[j]=newArr[i];
		// console.log(newArr)
		// console.log(j);
		// console.log(arr[i]);
	}
	return newArr;
	// console.log(newArr,'a')	 
}
newArr=shuffle(arr,arrCards)
// console.log(newArr);

$(document).on('click','.pepe', function (){
	// console.log('hola')
	
	// $('.fichas-container-front').addClass("notshow");
	// $('.fichas-container-back').removeClass("notshow");
	// for(var i = 0; i < newArr.length; i++){
	// 	console.log(newArr[i]);

	// }
	// console.log(newArr[1]);
})

function cargar (a){
	console.log('hola')
	for(var i = 0; i < newArr.length; i++){
		$('.fichas-container').append(newArr[i]);
	}
	return newArr
}

newArr = cargar(newArr);
// console.log(newArr)


$(document).on('click','.fichas-front',function(){
	console.log('muerte');
	// console.log(newArr)
	// console.log(newArr[1]);
	var index = $('.fichas-front').index(this);

	
	// console.log(index)
		// console.log(newArr)
		// console.log($('.fichas-back').eq(index))
		$('.fichas-front').eq(index).replaceWith($('.fichas-back').removeClass("notshow"))
		// $('.fichas-front').eq(index).addClass("notshow");
		// $('.fichas-back').eq(index).removeClass('notshow');
	

		// $(this).find('.fichas-front').replaceWith('hola');
		// $('.fichas-front', this).removeClass("img-front")
		// $('.fichas-container-back').removeClass("notshow");


})



// for(var i = 0; i < index; i++){
	// 	console.log ('')
	// 	let arrFront =[]
	// 	arrFront = $('.fichas-front').eq(index)
	// 	return arrFront;
	// }
	// console.log(arrFront);

