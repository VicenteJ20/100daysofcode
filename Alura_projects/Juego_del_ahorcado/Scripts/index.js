// Botones
const writeWord = document.getElementById('writeWord');
const useGenericWord = document.getElementById('useGenericWord');
const viewSavedWords = document.getElementById('viewSavedWords');
const goBack = document.getElementById('go_back');
const goBackAlernative = document.getElementById('goBackAlternative');
const goGame = document.getElementById('goGame');
const textarea = document.getElementById('textArea');

// Sections
const homeSection = document.getElementById('home_section');
const writeWordSection = document.getElementById('writeWordSection');

if (homeSection.style.display !== 'none'){
    goBack.style.display = 'none';
    writeWordSection.style.display = 'none';
} else {
    goBack.style.display = 'block';
}

goBack.addEventListener('click', function(){
    writeWordSection.style.display = 'none';
    goBack.style.display = 'none';
    homeSection.style.display = 'flex';
});

goBackAlernative.addEventListener('click', function(){
    writeWordSection.style.display = 'none';
    goBack.style.display = 'none';
    homeSection.style.display = 'flex';
});

writeWord.addEventListener('click', function(){
    homeSection.style.display = 'none';
    goBack.style.display = 'block';
    writeWordSection.style.display = 'flex';
});

// valor del textarea
goGame.addEventListener('click', function(){
    if (textarea.value !== ''){
        alert(textarea.value);
    } else {
        alert('El campo no puede quedar vacío');
    }
});