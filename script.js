function calculatePrice() {
    const pricePerRoom = 150; // Harga per bilik per malam
    const rooms = parseInt(document.getElementById('room').value) || 0;
    const nights = parseInt(document.getElementById('nights').value) || 0;

    // Kalkulasi harga
    const totalPrice = rooms * nights * pricePerRoom;

    // Tampilkan hasil
    document.getElementById('totalPrice').textContent = `Total Harga: RM ${totalPrice.toFixed(2)}`;
}

function sendNotification() {
    const name = document.getElementById('name').value || "Nama tidak diisi";
    const phone = document.getElementById('phone').value || "Tidak diisi";
    const rooms = document.getElementById('room').value || 0;
    const nights = document.getElementById('nights').value || 0;
    const totalPrice = rooms * nights * 150;

    const message = `Halo Dyusmie Chalet,%0A` +
        `Saya ingin membuat tempahan dengan rincian berikut:%0A` +
        `Nama: ${name}%0A` +
        `No. Telefon: ${phone}%0A` +
        `Jumlah Bilik: ${rooms}%0A` +
        `Bilangan Malam: ${nights}%0A` +
        `Total Harga: RM ${totalPrice.toFixed(2)}%0A` +
        `Terima kasih!`;

    const waLink = `https://wa.link/6v47b8?text=${message}`;
    window.open(waLink, '_blank');
}
