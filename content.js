const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if (header) {
        // console.log(header)
        clearInterval(interval)

        const buttonX05 = document.createElement("button");
        buttonX05.innerHTML = "0.5x";
        buttonX05.classList.add("speedButton")

        buttonX05.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => audio.playbackRate = 0.5);
        });

        const buttonX10 = document.createElement("button");
        buttonX10.innerHTML = "1x";
        buttonX10.classList.add("speedButton")

        buttonX10.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => audio.playbackRate = 1);
        });

        const buttonX15 = document.createElement("button");
        buttonX15.innerHTML = "1.5x";
        buttonX15.classList.add("speedButton")

        buttonX15.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => audio.playbackRate = 1.5);
        });

        const buttonX20 = document.createElement("button");
        buttonX20.innerHTML = "2x";
        buttonX20.classList.add("speedButton")

        buttonX20.addEventListener("click", () => {
            const audios = document.querySelectorAll('audio');
            audios.forEach((audio) => audio.playbackRate = 2);
        });

        header.appendChild(buttonX05);
        header.appendChild(buttonX10);
        header.appendChild(buttonX15);
        header.appendChild(buttonX20);

    }
}, 1000)