class SubCookieUtil {
	static get(name, subName) {
		let subCookies = SubCookieUtil.getAll(name);
		return subCookies ? subCookies[subName] : null;
	}
	static getAll(name) {
		let cookieName = encodeURIComponent(name) + "=",
		cookieStart = document.cookie.indexOf(cookieName),
		cookieValue = null,
		cookieEnd,
		subCookies,
		parts,
		result = {};
		if (cookieStart > -1) {
			cookieEnd = document.cookie.indexOf(";", cookieStart);
			if (cookieEnd == -1) {
				cookieEnd = document.cookie.length;
			}
			cookieValue = document.cookie.substring(cookieStart +cookieName.length, cookieEnd);
			if (cookieValue.length > 0) {
				subCookies = cookieValue.split("&");
				for (let i = 0, len = subCookies.length; i < len; i++) {
					parts = subCookies[i].split("=");
					result[decodeURIComponent(parts[0])] =decodeURIComponent(parts[1]);
				}
				return result;
		}
	}
	return null;
	}
// 省略其他代码
};

// 假设 document.cookie=data=name=Nicholas&book=Professional%20JavaScript
// 取得所有子 cookie
let data = SubCookieUtil.getAll("data");
alert(data.name); // "Nicholas"
alert(data.book); // "Professional JavaScript"
// 取得个别子 cookie
alert(SubCookieUtil.get("data", "name")); // "Nicholas"
alert(SubCookieUtil.get("data", "book")); // "Professional JavaScript"

class SubCookieUtil {
	// 省略之前的代码
	static set(name, subName, value, expires, path, domain, secure) {
		let subcookies = SubCookieUtil.getAll(name) || {};
		subcookies[subName] = value;
		SubCookieUtil.setAll(name, subcookies, expires, path, domain, secure);
	}
	static setAll(name, subcookies, expires, path, domain, secure) {
		let cookieText = encodeURIComponent(name) + "=",
		subcookieParts = new Array(),
		subName;
		for (subName in subcookies){
			if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
				subcookieParts.push(
			'${encodeURIComponent(subName)}=${encodeURIComponent(subcookies[subName])}');
			}
		}
		if (cookieParts.length > 0) {
			cookieText += subcookieParts.join("&");
			if (expires instanceof Date) {
				cookieText += `; expires=${expires.toGMTString()}`;
			}
			if (path) {
				cookieText += `; path=${path}`;
			}
			if (domain) {
				cookieText += `; domain=${domain}`;
			}
			if (secure) {
				cookieText += "; secure";
			}
		} else {
			cookieText += `; expires=${(new Date(0)).toGMTString()}`;
		}
		document.cookie = cookieText;
	}
	// 省略其他代码
};
// 假设 document.cookie=data=name=Nicholas&book=Professional%20JavaScript
// 设置两个子 cookie
SubCookieUtil.set("data", "name", "Nicholas");
SubCookieUtil.set("data", "book", "Professional JavaScript");
// 设置所有子 cookie 并传入过期时间
SubCookieUtil.setAll("data", { name: "Nicholas", book: "Professional JavaScript" },
new Date("January 1, 2010"));
// 修改"name"的值并修改整个 cookie 的过期时间
SubCookieUtil.set("data", "name", "Michael", new Date("February 1, 2010"));

class SubCookieUtil {
	// 省略之前的代码
	static unset(name, subName, path, domain, secure) {
		let subcookies = SubCookieUtil.getAll(name);
		if (subcookies){
			delete subcookies[subName]; // 删除
			SubCookieUtil.setAll(name, subcookies, null, path, domain, secure);
		}
	}
	static unsetAll(name, path, domain, secure) {
		SubCookieUtil.setAll(name, null, new Date(0), path, domain, secure);
	}
}

// 只删除"name"子 cookie
SubCookieUtil.unset("data", "name");
// 删除整个 cookie
SubCookieUtil.unsetAll("data");