function setTitle(title) {
    faces = [
        `Welcome`, '@Tropical'
    ];
    
    if (document.hasFocus()) { document.title = title + faces[Math.floor(Math.random() * faces.length)];}
    else { document.title = '' + faces[Math.floor(Math.random() * faces.length)]; }
    
    setTimeout(function() { setTitle(title) }, 100);
}