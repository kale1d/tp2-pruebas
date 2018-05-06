let arrCards = [];
let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
let newArr = [];
const img1 = "<img class='fichas-back'src='img/img1.jpeg'/>";
const img2 = "<img class='fichas-back' src='img/img2.jpeg'/>";
const img3 = "<img class='fichas-back' src='img/img3.jpeg'/>";
const imgfront = "<img class='front' src='img/front-img.jpg'/>";


$(window).on('load',function(){
	$('.fichas-back').addClass('notshow');

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
					
					$('.fichas').eq(i).append(img1,imgfront);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}else if (i>=4 && i<8) {	
					$(this).append(imgfront,img2);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}else {
					$(this).append(img3,imgfront);
					const card = $('.fichas')[i];
					arrCards.push(card);
				}

			})
			return arrCards;
	

}
arrCards=addImg(arrCards)


function shuffle (a,b) {
	
	for(var i = 0; i < arr.length; i++){
		

		var j = arr.indexOf(i);
		newArr.push(arrCards[j])
		arrCards[j]=newArr[i];
		;
	}
	return newArr;
	 
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
console.log(newArr)

	let pair = [];
	let counter = 0
$(document).on('click','.fichas',function(){
	counter = counter+1;
	console.log(counter)
	let index = $('.fichas').index(this);
	const front = $('.front').eq(index);
	const back = $('.fichas-back').eq(index)

	if (pair.length<2) {
		pair.push(back.attr('src'));
		console.log(pair);
		front.addClass('notshow');
		back.removeClass('notshow');

		if (pair[0]==pair[1]) {
		  console.log('yaaaay')
		  pair.length=0
		}
		else if (pair.length>1){
			front.removeClass('notshow');
			back.addClass('notshow');
			pair.length=0

		}
		// else{
				
		// 		console.log('que carajo estoy haciendo')
		// 	}
		// 	else{
		// 		console.log('neeiii')
		// }
	}




			
			// igual = $('.fichas-back').eq(index).attr('src');
			// if (igual=="img/img1.jpeg") {
			

			// } else {
			// 		if (igual == "img/img2.jpeg") {
			// 			$('.front').eq(index).addClass('notshow');
			// 			$('.fichas-back').eq(index).removeClass('notshow');
			// 		} else {
			// 			// statement
			// 		}
			// 	// statement
			// }
  


})



