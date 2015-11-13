function AI() {
	if(canMoveDown()) {
		return 2;
	}
	
	return Math.floor(Math.random()*4);
}
