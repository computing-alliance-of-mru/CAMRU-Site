import axios from "axios";

const getExecs = async (url2) => {
	const url = `${process.env.REACT_APP_SSL}://${process.env.REACT_APP_SERVER_HOST}/database/execs`;
	try {
		const response = await axios.get(url);
		return await response;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export default { getExecs };
