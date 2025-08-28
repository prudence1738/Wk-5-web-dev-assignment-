// =========================
// Part 1: Variables & Conditionals
// =========================
let age = prompt("Enter your age:");
if (age >= 18) {
    document.getElementById("age-result").innerText = "You can vote!";
    } else {
        document.getElementById("age-result").innerText = "You cannot vote yet.";
        }

        // =========================
        // Part 2: Functions
        // =========================
        // Example Function 1: Calculate total price
        function calculateTotal(price, tax) {
            return price + (price * tax);
            }
            document.getElementById("function-result").innerText = "Total: $" + calculateTotal(100, 0.15);

            // Example Function 2: Capitalize a string
            function capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
                }
                console.log(capitalize("hello world"));

                // =========================
                // Part 3: Loops
                // =========================
                // Example Loop 1: For loop
                let numbers = [1, 2, 3, 4, 5];
                let loopResult = "";
                for (let i = 0; i < numbers.length; i++) {
                    loopResult += numbers[i] + " ";
                    }
                    document.getElementById("loop-result").innerText = loopResult;

                    // Example Loop 2: While loop
                    let count = 5;
                    while (count > 0) {
                        console.log("Countdown: " + count);
                            count--;
                            }

                            // =========================
                            // Part 4: DOM Manipulation
                            // =========================
                            document.getElementById("change-text-btn").addEventListener("click", function() {
                                document.getElementById("dom-text").innerText = "Text changed! 🎉";
                                });