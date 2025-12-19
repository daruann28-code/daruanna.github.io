document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let feedback = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        time: new Date().toLocaleString()
    };

    let data = JSON.parse(localStorage.getItem("facultyFeedback")) || [];
    data.push(feedback);
    localStorage.setItem("facultyFeedback", JSON.stringify(data));

    document.getElementById("status").innerText =
        "Thank you! Your feedback has been recorded.";

    this.reset();
});
