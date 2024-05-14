 const sentences = [
      "Aku tau tugas yang lagi mau kamu kerjakan pasti berat",
      "Tapi, tetap semangat yaa 💕",
      "Kamu pasti bisa 💪🏻",
      "Kalau ada yang bisa aku bantu bilang aku yaaaaa 🙏🙏",
      "Aku selalu ada buat kamu 🫂",
      "Jadi jangan sungkan yaaa 💕",
    ];
    let currentSentenceIndex = 0;
    let intervalId;

    const textElement = document.getElementById('encouragement-text');
    const greetingElement = document.getElementById('greeting');
    const music = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');

    const displayText = () => {
      textElement.innerText = sentences[currentSentenceIndex];
      currentSentenceIndex++;
      if (currentSentenceIndex >= sentences.length) {
        clearInterval(intervalId);
      }
    };

    playButton.addEventListener('click', function() {
      greetingElement.style.display = 'block'; // Show the greeting "Halo, Ita"
      playButton.style.display = 'none'; // Hide the "Click Me" button permanently after it's clicked

      setTimeout(() => {
        greetingElement.style.display = 'none'; // Hide the greeting after 5 seconds
        displayText(); // Start displaying encouragement messages
        intervalId = setInterval(displayText, 5000); // Continue every 5 seconds
      }, 5000);

      music.play(); // Start playing the music
    });
