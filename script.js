function kirimPesan() {
  const form = document.getElementById('orderForm');
  const nama = form.nama.value;
  const wa = form.wa.value;
  const kecamatan = form.kecamatan.value;
  const alamat = form.alamat.value;
  const jumlah = form.jumlah.value;
  const metode = form.metode.value;

  const harga = jumlah === "1" ? "79.000" : jumlah === "2" ? "99.000" : "159.000";

  const pesan = `Halo Saya mau Pesan Bewaxx\n` +
                `Nama: ${nama}\n` +
                `Nomor WA: ${wa}\n` +
                `Kecamatan: ${kecamatan}\n` +
                `Alamat: ${alamat}\n` +
                `Jumlah: BELI ${jumlah} - ${harga}\n` +
                `Metode Pembayaran: ${metode}\n` +
                `Mohon Segera Diproses ya kak, Terimakasih`;

  const url = `https://wa.me/6287728672427?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
}