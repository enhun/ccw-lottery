const prizes = [
    "CCW帥氣簽名照一張",
    "和CCW享受美食一張",
    "和CCW看電影一張",
    "CCW收藏的貓頭鷹一個",
    "CCW的電話",
    "CCW的LINE",
    "和CCW去遊樂園玩",
    "要求CCW做一件事情請求卷",
    "要求小貓頭鷹做一件事請求卷"
];

const cells = document.querySelectorAll(".cell");
const drawBtn = document.getElementById("draw-btn");
const result = document.getElementById("result");
const bgMusic = document.getElementById("bg-music");

bgMusic.play(); // 自動播放背景音樂

drawBtn.addEventListener("click", () => {
    result.textContent = "抽獎中...";
    drawBtn.disabled = true;

    let interval = setInterval(() => {
        cells.forEach(cell => cell.classList.remove("active"));
        const randomCell = Math.floor(Math.random() * 9);
        cells[randomCell].classList.add("active");
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        cells.forEach(cell => cell.classList.remove("active"));
        const winner = Math.floor(Math.random() * prizes.length);
        result.textContent = `恭喜你抽到：${prizes[winner]}！`;
        drawBtn.disabled = false;
    }, 2000); // 2秒後顯示結果
});
