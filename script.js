const extendHex = (shortHex) => {
  // write your code here
	let i = shortHex.length-3;
	let iscapital=false;
	let ans = "#";
	while(i < shortHex.length){
		let code= shortHex[i].chatCodeAt(0);
		if(code >= 65 &&code <=90){
			iscapital=true;
		}
		ans += shortHex[i]+shortHex[i];
		i++;
	}
	return iscapital ? ans.toUpperCase() : ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex)); 
