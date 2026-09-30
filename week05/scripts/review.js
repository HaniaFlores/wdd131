const reviewsKey = "submittedReviews";
let reviews;

try {
	reviews = JSON.parse(localStorage.getItem(reviewsKey)) || [];
} catch {
	reviews = [];
}

if (!Array.isArray(reviews)) {
	reviews = [];
}

const submission = new URLSearchParams(window.location.search);
const hasSubmission = ["product", "rating", "install-date"]
	.every((field) => submission.get(field));

if (hasSubmission) {
	reviews.push({
		product: submission.get("product"),
		rating: submission.get("rating"),
		installDate: submission.get("install-date"),
		features: submission.getAll("features"),
		review: submission.get("review") || "",
		username: submission.get("username") || ""
	});
	localStorage.setItem(reviewsKey, JSON.stringify(reviews));
	window.history.replaceState(null, "", window.location.pathname);
}

document.querySelector("#review-count").textContent = reviews.length;

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastmodified").textContent = document.lastModified;
