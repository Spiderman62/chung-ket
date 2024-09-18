const lazyLoading = {
	loading:document.querySelector('.pending'),
	main(){
		const _this = this;
		
			setTimeout(()=>{
				_this.loading.classList.add('active');
			},3000);
		
	}
}
lazyLoading.main();