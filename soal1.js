var tunjangan = 500000
var bpjs = 3/100
var pajak = 5/100

function hitung(param1, param2, param3, param4) {
    this.nama_karyawan = param1;
    this.gaji_pokok = param2;
    this.lama_kerja = param3;
    this.tunjangan_bolean = param4

    //method
    hitung.prototype.getNamaKaryawan = function() {
        return this.nama_karyawan;
    }
    hitung.prototype.getGajiPokok = function() {
        return this.gaji_pokok;
    }
    hitung.prototype.getLamaKerja = function() {
        return this.lama_kerja;
    }
    hitung.prototype.getTunjanganBolean = function() {
        return this.tunjangan_bolean;
    }

    var total_bpjs = this.gaji_pokok * bpjs;
    hitung.prototype.getBpjs = total_bpjs;
    

    var total_pajak = this.gaji_pokok * pajak;
    hitung.prototype.getTotalPajak = total_pajak;
    

    var gaji_bersih = this.gaji_pokok - total_pajak - total_bpjs;
    hitung.prototype.getGajiBersih = gaji_bersih;
    

    if (hitung.getTunjanganBolean == true) {
        hitung.getGajiPokok += tunjangan;
        
    }

    var gaji_total = gaji_bersih * this.lama_kerja;
    hitung.prototype.getGajiTotal = gaji_total;
    
}

var hitung1 = new hitung ("Andi", 15000000, 2, true);

console.log("Nama Karyawan: " + hitung1.getNamaKaryawan());
console.log("Gaji Pokok: " + hitung1.getGajiPokok());
console.log("Tunjangan: " + tunjangan);
console.log("BPJS :" + hitung1.getBpjs);
console.log("Pajak: " + hitung1.getTotalPajak);
console.log("Gaji Bersih: " + hitung1.getGajiBersih);
console.log("Gaji Total: " + hitung1.getGajiTotal);