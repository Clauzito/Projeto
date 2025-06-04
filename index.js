function toggleMode() {
    
    // pegando Html
    const html = document.documentElement
    // Fazendo a troca das classes Light/dark mode
    html.classList.toggle('light')
    //Pegar a img
    const img = document.querySelector("#profile img")
    // Subistituir a imagem
    if(html.classList.contains('light')) {
      // Se tiver light mode, adicionar a imagem light.
        img.setAttribute('src', './assets/avatar-light.png')
     } else {
            // se não tiver light mode, manter a normal.
        img.setAttribute('src', './assets/Avatar.png')
    } 

   // Este codigo faz o mesmo que o outro só que com menas linahs de codigo.
}