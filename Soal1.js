const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function akarPangkatDua(x) {
  if (x < 0) {
    throw new Error("Tidak bisa input bilangan negatif");
  } else if (x % 2 !== 0) {
    throw new Error("Tidak bisa input bilangan ganjil");
  } else {
    return Math.sqrt(x);
  }
}

rl.question('Masukkan bilangan genap: ', (input) => {
  try {
    const angka = parseInt(input);
    const hasil = akarPangkatDua(angka);
    console.log(`Akar pangkat dua dari ${angka} adalah ${hasil}`);
    rl.close();
  } catch (error) {
    console.log("Error:", error.message);
    rl.close();
  }
});