const reveal = {
	reveals: document.querySelectorAll('.reveal'),
	reveals_1: document.querySelectorAll('.reveal-1'),
	reveals_2: document.querySelectorAll('.reveal-2'),
	reveals_3: document.querySelectorAll('.reveal-3'),
	reveals_4: document.querySelectorAll('.reveal-4'),
	revealsCircle: document.querySelectorAll('.reveal-circle'),
	revealsCircle_1: document.querySelectorAll('.reveal-circle-1'),
	revealsCircle_2: document.querySelectorAll('.reveal-circle-2'),
	revealsCircle_3: document.querySelectorAll('.reveal-circle-3'),
	revealsCircle_4: document.querySelectorAll('.reveal-circle-4'),
	windowHeight:window.innerHeight,
	locationReveal:130,
	componentFunctionReduce(reveals,type = 'active-reveal'){
		const _this = this;
		reveals.forEach(reveal=>{
			let locationCurrent = reveal.getBoundingClientRect().top;
			if(locationCurrent < _this.windowHeight - _this.locationReveal){
				reveal.classList.add(type);
			}
			else{
				reveal.classList.remove(type);
			}
		});
	},
	handleReveal() {
		this.componentFunctionReduce(this.reveals);
		this.componentFunctionReduce(this.reveals_1);
		this.componentFunctionReduce(this.reveals_2);
		this.componentFunctionReduce(this.reveals_3);
		this.componentFunctionReduce(this.reveals_4);
		this.componentFunctionReduce(this.revealsCircle,'active-reveal-circle');
		this.componentFunctionReduce(this.revealsCircle_1,'active-reveal-circle');
		this.componentFunctionReduce(this.revealsCircle_2,'active-reveal-circle');
		this.componentFunctionReduce(this.revealsCircle_3,'active-reveal-circle');
		this.componentFunctionReduce(this.revealsCircle_4,'active-reveal-circle');
	},
	handleCatchEventScroll(){
		window.addEventListener('scroll',e=>{
			this.handleReveal();
		})
	},
	main() {
		this.handleCatchEventScroll();
	}
}
reveal.main();