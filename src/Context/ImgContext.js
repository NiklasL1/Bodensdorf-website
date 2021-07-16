import React, { createContext, useState, useEffect } from "react";

export const ImgContext = createContext();

const ImgContextProvider = ({ children }) => {
	const [browserName, setBrowserName] = useState();
	const [browserVersion, setBrowserVersion] = useState();
	const [imgType, setImgType] = useState();
	const [imgSize, setImgSize] = useState();

	const vw = Math.max(window.innerWidth || 0);

	function get_browser() {
		var ua = navigator.userAgent,
			tem,
			M =
				ua.match(
					/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
				) || [];
		if (/trident/i.test(M[1])) {
			tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
			return { name: "IE", version: tem[1] || "" };
		}
		if (M[1] === "Chrome") {
			tem = ua.match(/\bOPR|Edge\/(\d+)/);
			if (tem != null) {
				return { name: "Opera", version: tem[1] };
			}
		}
		M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
		if ((tem = ua.match(/version\/(\d+)/i)) != null) {
			M.splice(1, 1, tem[1]);
		}
		setBrowserName(M[0]);
		setBrowserVersion(M[1]);
	}

	useEffect(() => {
		get_browser();

		if (vw <= 768) {
			setImgSize("small");
		} else {
			setImgSize("original");
		}
	}, []);

	useEffect(() => {
		if (browserName && browserVersion) {
			if (browserName === "Chrome" && browserVersion >= 23) {
				setImgType("webp");
			} else if (browserName === "Firefox" && browserVersion >= 65) {
				setImgType("webp");				
			} else if (browserName === "Opera" && browserVersion >= 12.1) {
				setImgType("webp");
			} else {
				setImgType("jpg");				
			}

			// console.log(
			// 	"name",
			// 	browserName,
			// 	"version",
			// 	browserVersion,
			// 	"type",
			// 	imgType,
			// 	"size",
			// 	imgSize
			// );
		}
	}, [browserName, browserVersion]);

	return (
		<ImgContext.Provider value={{ imgType, imgSize }}>
			{children}
		</ImgContext.Provider>
	);
};

export default ImgContextProvider;
