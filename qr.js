document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const adopterInfo = document.getElementById('adopter_info').value;
    
    console.log('Form submitted. Adopter info:', adopterInfo); // Check if this logs correctly
    
    if (adopterInfo) {
        generateQRCode(adopterInfo);
    }
});

function generateQRCode(data) {
    const canvas = document.getElementById('qrCanvas');
    const qr = new QRious({
        element: canvas,
        value: data,
        size: 256
    });
    
    console.log('QR code generated for data:', data); // Check if this logs correctly
}
