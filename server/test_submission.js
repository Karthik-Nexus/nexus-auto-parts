
fetch('http://localhost:5000/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: "Test Verification",
        email: "sales@nexusautopartsusa.com", // Sending to self to verify
        phone: "555-999-9999",
        year: "2024",
        make: "TestMake",
        model: "TestModel",
        part: "TestPart",
        message: "System verification test"
    })
})
    .then(res => res.json())
    .then(data => console.log("Response:", data))
    .catch(err => console.error("Error:", err));
