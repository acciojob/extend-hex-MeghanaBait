const extendHex = (shortHex) => {
    let i = shortHex.length - 3;
    let isCapital = false;
    let ans = "#";

    while (i < shortHex.length) {
        let code = shortHex[i].charCodeAt(0);

        if (code >= 65 && code <= 90) {
            isCapital = true;
        }

        ans += shortHex[i] + shortHex[i];
        i++;
    }

    return isCapital ? ans.toUpperCase() : ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
