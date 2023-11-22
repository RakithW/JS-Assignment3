document.addEventListener("DOMContentLoaded", function () {
    var studentInfo = document.getElementById("studentInfo");
    studentInfo.innerHTML = "Student Number: 200505619 | Name: Rakith Wikramanayake";
});

function placeOrder() {
    var customerName = document.getElementById("customerName").value;
    var customerEmail = document.getElementById("customerEmail").value;
    var customerPhone = document.getElementById("customerPhone").value;
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = getSelectedToppings();

    var pizza = new Pizza(size, crust, toppings);

    // Display order summary
    var orderSummary = document.getElementById("orderSummary");
    orderSummary.innerHTML = `<h2>Order Summary</h2>
        <p><strong>Customer Information:</strong></p>
        <p>Name: ${customerName}</p>
        <p>Email: ${customerEmail}</p>
        <p>Phone: ${customerPhone}</p>
        <p><strong>Pizza Details:</strong></p>
        ${pizza.getDescription()}`;
}

function getSelectedToppings() {
    var toppingsCheckboxes = document.getElementsByName("topping");
    var selectedToppings = [];
    for (var i = 0; i < toppingsCheckboxes.length; i++) {
        if (toppingsCheckboxes[i].checked) {
            selectedToppings.push(toppingsCheckboxes[i].value);
        }
    }
    return selectedToppings.join(", ");
}

class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }

    getDescription() {
        return `<p>Size: ${this.size}</p><p>Crust: ${this.crust}</p><p>Toppings: ${this.toppings}</p>`;
    }
}