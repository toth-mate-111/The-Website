(() => {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    });
    document.getElementById('date').textContent = formatted;
})();
