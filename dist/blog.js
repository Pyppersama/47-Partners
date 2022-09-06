var plus = document.getElementById('plus');
	var plusTwo = document.getElementById('plusTwo');
	var innerOne = document.getElementById('innerOne');
	var bloggerWordsTwo = document.getElementById('bloggerWordsTwo');
	
	var plusB = document.getElementById('plusB');
	var plusTwoB = document.getElementById('plusTwoB');
	var innerTwo = document.getElementById('innerTwo');
	var bloggerWordsTwoB = document.getElementById('bloggerWordsTwoB');
	
	var plusC = document.getElementById('plusC');
	var plusTwoC = document.getElementById('plusTwoC');
	var innerThree = document.getElementById('innerThree');
	var bloggerWordsTwoC = document.getElementById('bloggerWordsTwoC');
	
	var plusD = document.getElementById('plusD');
	var plusTwoD = document.getElementById('plusTwoD');
	var innerFour = document.getElementById('innerFour');
	var bloggerWordsTwoD = document.getElementById('bloggerWordsTwoD');
	
	function spread(){
		if (plus.style.display == "block"){
				plus.style.display = "none";
				innerOne.style.width = "100%";
				innerOne.style.height = "100%";
				plusTwo.style.transform = "rotateZ(720deg)";
				bloggerWordsTwo.style.display = "block";
		} 
		else {
			plus.style.display = "block";
			innerOne.style.width = "80px";
			innerOne.style.height = "80px";
			plusTwo.style.transform = "rotateZ(-720deg)";
			bloggerWordsTwo.style.display = "none";
		}
	}
	
	function spreadTwo(){
	if (plusB.style.display == "block"){
	plusB.style.display = "none";
	innerTwo.style.width = "100%";
	innerTwo.style.height = "100%";
	plusTwoB.style.transform = "rotateZ(720deg)";
	bloggerWordsTwoB.style.display = "block";
	} 
	else {
	plusB.style.display = "block";
	innerTwo.style.width = "80px";
	innerTwo.style.height = "80px";
	plusTwoB.style.transform = "rotateZ(-720deg)";
	bloggerWordsTwoB.style.display = "none";
	}
	}
	
	function spreadThree(){
	if (plusC.style.display == "block"){
	plusC.style.display = "none";
	innerThree.style.width = "100%";
	innerThree.style.height = "100%";
	plusTwoC.style.transform = "rotateZ(720deg)";
	bloggerWordsTwoC.style.display = "block";
	} 
	else {
	plusC.style.display = "block";
	innerThree.style.width = "80px";
	innerThree.style.height = "80px";
	plusTwoC.style.transform = "rotateZ(-720deg)";
	bloggerWordsTwoC.style.display = "none";
	}
	}
	
	function spreadFour(){
	if (plusD.style.display == "block"){
	plusD.style.display = "none";
	innerFour.style.width = "100%";
	innerFour.style.height = "100%";
	plusTwoD.style.transform = "rotateZ(720deg)";
	bloggerWordsTwoD.style.display = "block";
	} 
	else {
	plusD.style.display = "block";
	innerFour.style.width = "80px";
	innerFour.style.height = "80px";
	plusTwoD.style.transform = "rotateZ(-720deg)";
	bloggerWordsTwoD.style.display = "none";
	}
	}