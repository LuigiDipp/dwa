const volumeSlider = document.getElementById('volumeSlider');
        const audio = document.getElementById('myAudio');

        volumeSlider.addEventListener('input', () => {
            const volumeValue = volumeSlider.value;
            audio.volume = volumeValue;
        });