const map = L.map('map').setView([-8.88792, -36.49013], 14); // variavel que inicializa o mapa

// apos isso será criada uma layer utilizando a api openstreetmap
const streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// marcadores
const UPE = L.marker([-8.883407, -36.496282]).bindPopup('UPE Campus Garanhuns'),
    IFPE = L.marker([-8.877031, -36.462948]).bindPopup('IFPE Garanhuns')
    UFAPE = L.marker([-8.906791, -36.494309]).bindPopup('UFAPE Garanhuns')
    

    ETE = L.marker([-8.905815, -36.495456], ).bindPopup('ETE Garanhuns')
    XV = L.marker([-8.890075, -36.48727]).bindPopup('Colégio Presbiteriano XV de Novembro'),
    ParqueEucalipto = L.marker([-8.88346, -36.485083]).bindPopup('Parque Euclides Dourado (Parque do eucaliptos)'),
    ParqueNatural = L.marker([-8.884308, -36.519323]).bindPopup('Parque Natural Municipal das Nascentes do Mundaú'),
    ParqueRuben = L.marker([-8.892958, -36.490705]).bindPopup('Parque Ruber Van Der Linden - Pau Pombo');

// grupos de camadas
const ensinoSuperior = L.layerGroup([UPE, IFPE, UFAPE]);
const ensinoMedio = L.layerGroup([XV, ETE, IFPE]);
const parques = L.layerGroup([ParqueEucalipto, ParqueNatural, ParqueRuben]);
const ativarMarcadores = L.layerGroup([ensinoMedio, ensinoSuperior, parques])
//const desativarMarcadores = L.layerGroup(null)     // desativado pois não funcionou como esperado

// objeto overlay
const overlayMaps = {
    //"Esconder todos os marcadores": desativarMarcadores,  // desativado pois não funcionou como esperado
    //"Mostrar todos os marcadores": ativarMarcadores       // desativado pois não funcionou como esperado
};

const layerControl = L.control.layers(overlayMaps).addTo(map);

// controles de 'checkbox' para os overlays
layerControl.addOverlay(parques, "Parques");
layerControl.addOverlay(ensinoMedio, "Ensino Médio");
layerControl.addOverlay(ensinoSuperior, "Ensino Superior");


// apenas para mostrar a posição clicada no console, para fins de desenvolvimento
function onMapClick(e) {
    console.log('Você clicou no mapa em: ' + e.latlng);
}
map.on('click', onMapClick);
