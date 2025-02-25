const cells = document.querySelectorAll(".cell");
const drawBtn = document.getElementById("draw-btn");
const result = document.getElementById("result");
const bgMusic = document.getElementById("bg-music");

let availableCells = Array.from(cells); // 儲存尚未抽中的格子
let isFirstClick = true; // 標記是否第一次點擊

drawBtn.addEventListener("click", () => {
    if (availableCells.length === 0) {
        result.textContent = "所有獎品都已抽完！";
        drawBtn.disabled = true;
        return;
    }

    // 第一次點擊時播放音樂
    if (isFirstClick) {
        bgMusic.play().catch(error => {
            console.log("音樂播放失敗:", error);
        });
        isFirstClick = false;
    }

    result.textContent = "抽獎中...";
    drawBtn.disabled = true;

    let interval = setInterval(() => {
        cells.forEach(cell => cell.classList.remove("active"));
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        availableCells[randomIndex].classList.add("active");
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        cells.forEach(cell => cell.classList.remove("active"));

        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const selectedCell = availableCells[randomIndex];
        const prize = selectedCell.getAttribute("data-prize");

        selectedCell.classList.add("drawn"); // 標記為已抽中
        availableCells.splice(randomIndex, 1); // 從可用格子中移除

        result.textContent = `恭喜你抽到：${prize}！`;
        drawBtn.disabled = false;
    }, 2000); // 2秒後顯示結果
});
