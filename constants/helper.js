export const formatDate = (inputDate) => {
	const eventDate = new Date(inputDate);
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	};
	return eventDate.toLocaleString("en-US", options);
};

export const programs = [
	{ description: "Bachelor of Science in Computer Science", code: "BSCS" },
	{ description: "Bachelor of Science in Information Science", code: "BSIS" },
	{
		description: "Bachelor of Science in Information Technology",
		code: "BSIT",
	},
	{ description: "Bachelor of Science in Mathematics", code: "BSMath" },
	{
		description: "Bachelor of Science in Information Communication Technology",
		code: "BSICT",
	},
	{ description: "Bachelor of Science in Library Science", code: "BSLS" },
	{
		description: "Bachelor of Science in Applied Mathematics",
		code: "BSAMath",
	},
	{ description: "Master of Science in Mathematics", code: "MSMath" },
	{ description: "Doctor of Computer Science", code: "DCS" },
	{ description: "Doctor of Information Science", code: "DIS" },
	{ description: "Doctor of Information Technology", code: "DIT" },
	{ description: "Doctor of Mathematics", code: "DMath" },
	{
		description: "Doctor of Information Communication Technology",
		code: "DICT",
	},
	{ description: "Doctor of Library Science", code: "DLS" },
	{ description: "Doctor of Applied Mathematics", code: "DAMath" },
];
