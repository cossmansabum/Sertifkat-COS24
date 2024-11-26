document.getElementById("certificateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = 'template-sertifikat.jpg';
    img.onload = function() {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // Ganti font ke Montserrat Bold
        ctx.font = "30px 'Montserrat', sans-serif";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 15);

        const link = document.getElementById("downloadLink");
        link.style.display = "block";
        link.href = canvas.toDataURL();
        link.download = "sertifikat-" + name + ".png";
        link.textContent = "Download Sertifikat";
    };
});
