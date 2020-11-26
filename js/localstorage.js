function UpsertTo(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function GetTo(key) {
	var bill = localStorage.getItem(key);
	if (bill == null || bill.length < 1) {
		return null;
	}
	try {
		bill = JSON.parse(bill);
	} catch (e) {
		return null;
	}
	return bill;
}

function DeletedTo(key) {
	localStorage.removeItem(key);
}

function UpsertKeys(value) {
	localStorage.setItem("TO_LIST_KEYS", value);
}

function GetKeys() {
	return localStorage.getItem("TO_LIST_KEYS")
}

function SetKeys(key) {
	var keys = GetKeys();
	if (keys == null) {
		UpsertKeys(key);
	} else {
		var keysArr = keys.split(",");
		keysArr.push(key);
		UpsertKeys(keysArr.join(','));
	}
}

function DeletedKey(key) {
	var keys = GetKeys();
	var keysArr = keys.split(",");
	keysArr.remove(key);
	UpsertKeys(keysArr.join(','));
}

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}

Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};

function backToList() {
	window.location.href = "List.html";
}
