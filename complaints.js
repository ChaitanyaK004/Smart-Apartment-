const complaintForm = document.getElementById("complaintForm");
const complaintList = document.getElementById("complaintList");

if (complaintForm) {

    complaintForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const category = document.getElementById("category").value;
        const subject = document.getElementById("subject").value;
        const priority = document.getElementById("priority").value;

        if (!category || !subject) {
            alert("Please fill all required fields.");
            return;
        }

        const complaintId =
            "#CMP" + Math.floor(1000 + Math.random() * 9000);

        const complaint = document.createElement("div");

        complaint.className = "complaint-item";

        complaint.innerHTML = `
            <div>
                <span class="complaint-id">
                    ${complaintId}
                </span>

                <h3>${subject}</h3>

                <p>
                    ${category} • ${priority} Priority
                </p>
            </div>

            <span class="status pending">
                Pending
            </span>
        `;

        complaintList.prepend(complaint);

        alert(
            "Complaint submitted successfully!\nComplaint ID: " +
            complaintId
        );

        complaintForm.reset();

    });

}