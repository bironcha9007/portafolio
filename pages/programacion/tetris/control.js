function Initialize() {
    // Tu código de inicialización actual
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    Initialize();
  
    document.getElementById('moveLeft').addEventListener('click', function() {
GM.Pc.TryMove(-1, 0);
    });
  
    document.getElementById('moveRight').addEventListener('click', function() {
GM.Pc.TryMove(1, 0);
    });
  
    document.getElementById('rotate').addEventListener('click', function() {
GM.Pc.TryRotate();
    });
  
    document.getElementById('drop').addEventListener('click', function() {
GM.Pc.TryDrop();
    });
  });

  document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});