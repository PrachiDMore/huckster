import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDy-J8HdzttT-QQBPNTxMxwR2KWwsN0g5c",
	authDomain: "huckster-9d357.firebaseapp.com",
	projectId: "huckster-9d357",
	storageBucket: "huckster-9d357.appspot.com",
	messagingSenderId: "611164048787",
	appId: "1:611164048787:web:95dbbd8dbd4339cfe76c66"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);