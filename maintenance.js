function payMaintenance() {

    const confirmPayment = confirm(
        "Pay ₹2,500 maintenance for August 2026?"
    );

    if (confirmPayment) {

        alert(
            "Payment successful!\n\n" +
            "Amount: ₹2,500\n" +
            "Receipt: REC-" +
            Math.floor(1000 + Math.random() * 9000)
        );

    }

}