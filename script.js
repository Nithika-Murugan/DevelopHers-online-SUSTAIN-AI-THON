document.getElementById("materialForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get input values
    const materialName = document.getElementById("material_name").value;
    const supplierName = document.getElementById("supplier_name").value;
    const batchNumber = document.getElementById("batch_number").value;
    const itemCode = document.getElementById("item_code").value;
    const location = document.getElementById("location").value;

    // Generate QR code data
    const qrData = `Material: ${materialName}\nSupplier: ${supplierName}\nBatch: ${batchNumber}\nCode: ${itemCode}\nLocation: ${location}`;

    // Clear previous QR Code
    const qrContainer = document.getElementById("qrCodeContainer");
    qrContainer.innerHTML = "";

    // Generate QR code
    QRCode.toCanvas(qrData, { width: 200, margin: 2 }, function (err, canvas) {
        if (err) {
            console.error("Error generating QR code:", err);
            return;
        }
        qrContainer.appendChild(canvas); // Add QR code to the container
    });
});
