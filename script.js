function totalHarga() {
  var kode = document.getElementById("kode").value;
  var jumlah = document.getElementById("jumlah").value;

  var harga;

  switch (kode) {
    case "001":
      harga = 10000;
      break;
    case "002":
      harga = 20000;
      break;
    case "003":
      harga = 30000;
      break;
    default:
      window.alert("Kode tidak tersedia");
      return;
  }

  var total = harga * jumlah;

  window.alert("Jumlah yang harus dibayarkan Rp. " + total);

  var bayar = prompt("Silahkan masukkan nominal pembayaran");
  bayar = parseInt(bayar);

  var kembalian = bayar - total;

  if (bayar < total) {
    window.alert("Uang tidak cukup");
  } else {
    window.alert("Kembalian Anda : Rp. " + kembalian);
  }
}
