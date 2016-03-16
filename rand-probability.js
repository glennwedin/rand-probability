module.exports = {
	getRandom: function (weights, results) {
	    var num = Math.random(),
	        s = 0,
	        i = 0,
	        lastIndex = weights.length - 1;

	    for (i = 0; i < lastIndex; ++i) {
	        s += weights[i];
	        if (num < s) {
	            return results[i];
	        }
	    }
	    return results[lastIndex];
	}
}