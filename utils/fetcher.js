import axios from "axios";

import { getItem } from "./asyncStorage";

export const fetcher = async (url, queryParams = "") => {
	let token = await getItem("token");

	let { data } = await axios.get(
		`${process.env.LOCALHOST}/${url}/${queryParams}`,
		{
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);

	return data;
};
