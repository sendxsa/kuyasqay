const sentences = ["Aku tau tugas yang lagi mau kamu kerjakan pasti berat", "Tetap semangat yaa 💕", "Kamu pasti bisa", "Kalau ada yang bisa aku bantu bilang yaa aku yaaaaa", "Aku selalu ada buat kamu", "Jadi jangan sungkan yaaa 💕"];
let currentSentenceIndex = 0;

const displayText = () => {
  document.getElementById('encouragement-text').innerText = sentences[currentSentenceIndex];
  currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;
};

// Panggil displayText setiap 5 detik
setInterval(displayText, 5000);