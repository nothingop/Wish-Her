this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "عزيزتي، في هذا اليوم الخاص، أريد أن أعبر لك عن كمّ السعادة والامتنان الذي يملأ قلبي، لأنه يوم ميلادك. هذا اليوم يذكرني باللحظة التي أضاءت حياتي، لحظة قدومك إليها وجعلت كل شيء أكثر جمالاً وسحراً. منذ أن عرفتك، وأنا أشعر بأن العالم أصبح مليئًا بالألوان الزاهية والحياة المفعمة بالسعادة. أنت النجمة التي تضيء سماء حياتي ببريقها ودفئها. كل يوم معك يعتبر مغامرة جديدة، مليئة بالحب والفرح والترحاب. في يوم ميلادك هذا، أتمنى لك كل السعادة والنجاح والتحقيق في أحلامك. أريد أن تعلمي أنك تعني لي الكثير، وأن حبك يملأ حياتي بالبهجة والإلهام. أعدك بأن أكون إلى جانبك دائماً، لمشاركة كل لحظة جميلة وتحقيق كل حلم. فلنحتفل بعيد ميلادك بطريقة خاصة، ولنمضي هذا اليوم معاً في أجواء من الحب والسعادة. أحبك أكثر من أي شيء آخر في هذا العالم، وأتمنى لك عاماً جديداً مليئاً بالنجاح والسلام والفرح. كل عام وأنتِ بألف خير، حبيبتي العزيزة. بكل الحب والود،";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
