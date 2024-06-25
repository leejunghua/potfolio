function showDetails(itemId) {
    document.getElementById('details-modal').style.display = 'block';
    document.querySelectorAll('.detail-content').forEach(item => {
        item.style.display = 'none';
    });
    document.getElementById(itemId).style.display = 'block';
}

function closeDetails() {
    document.getElementById('details-modal').style.display = 'none';
}
