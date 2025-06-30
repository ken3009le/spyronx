setInterval(() => {
    const el = document.getElementById('realTime');
    if (el) el.textContent = new Date().toLocaleTimeString();
}, 1000);