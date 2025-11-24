/* === MODÜL GEÇİŞİ === */
function showModule(id) {
    document.querySelectorAll('.module').forEach(m => m.style.display = "none");
    document.getElementById(id).style.display = "block";
}

/* === TAMAMLA MESAJI === */
function send(id) {
    let module = document.getElementById(id);
    let msg = module.querySelector(".msgBox");
    msg.style.display = "block";
    msg.innerText = `${id.toUpperCase()} modülü başarıyla işlendi!`;
}

/* === MOUSE IŞIK İZİ === */
document.addEventListener("mousemove", e => {
    let t = document.createElement("div");
    t.className = "lightTrail";
    t.style.left = e.pageX + "px";
    t.style.top = e.pageY + "px";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 500);
});