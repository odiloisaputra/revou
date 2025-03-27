function calculate() {
    // Mendapatkan nilai panjang sisi dari input
    const sideLength = parseFloat(document.getElementById("side-length").value);

    // Memastikan nilai panjang sisi adalah angka yang valid
    if (isNaN(sideLength) || sideLength <= 0) {
        alert("Masukkan panjang sisi yang valid!");
        return;
    }

    // Menghitung luas dan keliling persegi
    const area = sideLength * sideLength; // Luas = sisi * sisi
    const perimeter = 4 * sideLength; // Keliling = 4 * sisi

    // Menampilkan hasil perhitungan
    document.getElementById("area").textContent = area;
    document.getElementById("perimeter").textContent = perimeter;
}
