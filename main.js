fetch('./DC.json')
.then(response => {
console.log('JSON cargado:', response);
return response.json();
})
.then(data => {
console.log('Datos:', data);


const container = document.getElementById('personajes-container');

data.DC.forEach(personaje => {
    const personajeDiv = document.createElement('div');
    personajeDiv.classList.add('personaje');

    personajeDiv.innerHTML = `
    <h2>${personaje.personaje} (Alias: ${personaje['nombre real']})</h2>
    <p><strong>Biografía:</strong> ${personaje.biografía}</p>
    <p><strong>Resistencia:</strong> ${personaje.resistencia}</p>

    <p><strong>Fuerza de ataque:</strong> ${personaje['fuerza de ataque']}</p>
    <img src="${personaje.imagen}" alt="${personaje.personaje}" width="200">
    
    `;
    
    container.appendChild(personajeDiv);
});
})
.catch(error => console.error('Error al cargar el archivo JSON:', error));
