document.getElementById('toggle-menu').addEventListener('click', function() {
    var menu = document.getElementById('main-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
        document.getElementById('toggle-menu').textContent = 'Cerrar Menú';
    } else {
        menu.style.display = 'none';
        document.getElementById('toggle-menu').textContent = 'Abrir Menú';
    }
});
