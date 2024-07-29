function fibonacci(num) {
	if (num==0) {
		return 0;
	} if (num==1) {
		return 1;
	} else {
		for(i=2;i<number;++i){
			n3=n1+n2;
			if (i==num) {
				return n3;
			}
			n1=n2;
			n2=n3;
		}
	}
}

module.exports = fibonacci;
