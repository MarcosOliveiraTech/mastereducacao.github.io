// Função para rolar a página
// Função para rolar a página suavemente
function scrollPage() {
    window.scroll({
        top: window.scrollY + 1500,
        behavior: 'smooth'  // Adiciona a rolagem suave
    });
}

function scrollPageSobre() {
    window.scroll({
        top: window.scrollY + 900,
        behavior: 'smooth'  // Adiciona a rolagem suave
    });
}

function scrollPageSobreContato() {
    window.scroll({
        top: window.scrollY + 5000,
        behavior: 'smooth'  // Adiciona a rolagem suave
    });
}

function goToSectioncontato() {
    document.getElementById('sectioncontato').scrollIntoView({ behavior: 'smooth' });
}

function goToSectionsobre() {
    document.getElementById('sectionsobre').scrollIntoView({ behavior: 'smooth' });
}

function goToSectionplanos() {
    document.getElementById('sectionplanos').scrollIntoView({ behavior: 'smooth' });
}

// trocar de página

function login() {
    window.location.href = "prof.html";
}
