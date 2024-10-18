function Initialize() {
    // Tu código de inicialización actual
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    Initialize();
  
    document.getElementById('moveLeft').addEventListener('click', function() {
        g.currentState().keys.left = 1;
    });
  
    document.getElementById('moveRight').addEventListener('click', function() {
        g.currentState().keys.right = 1;
    });
  
    document.getElementById('moveUp').addEventListener('click', function() {
        g.currentState().keys.up = 1;
    });
  
    document.getElementById('moveDown').addEventListener('click', function() {
        g.currentState().keys.down = 1;
    });
  });

  document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();
});