"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var data = { items: [] };
//var gameTitle: string;
function createButton() {
    var div = document.getElementById("div");
    var div = document.getElementById("div2");
    //Cria o botão
    var btnSearch = document.createElement("button");
    var btnSobre = document.createElement("button");
    btnSearch.textContent = "Search";
    btnSobre.textContent = "Sobre";
    div === null || div === void 0 ? void 0 : div.appendChild(btnSearch);
    div === null || div === void 0 ? void 0 : div.appendChild(btnSobre);
    // Add an event listener to the button
    btnSearch.addEventListener('click', () => {
        searchGame();
    });
    btnSobre.addEventListener('click', () => {
        searchGame();
    });
}
;
function findItemPrice(itemName) {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);
    return foundItem ? foundItem[itemName].price : null;
}
function findImg(itemName) {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);
    return foundItem ? foundItem[itemName].img : null;
}
function findImgname(itemName) {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);
    return foundItem ? foundItem[itemName].name : null;
}
function searchGame() {
    return __awaiter(this, void 0, void 0, function* () {
        // pega o nome do jogo
        const gameSearchInput = document.getElementById('gameSearch');
        var gameTitle = gameSearchInput.value;
        const resultsDiv = document.getElementById('results');
        // limpa o resultado
        resultsDiv.innerHTML = '';
        // simula o resultado (depois implementar a API da pns)
        if (gameTitle) {
            //mostra a menssagem
            resultsDiv.innerHTML = `<p>Searching for prices of <strong>${gameTitle}</strong>...</p>`;
            yield loadJSON();
            // simula o resultatdo (depois mudar para os dados da API da psn)
            const itemNameToFind = gameTitle;
            const price = findItemPrice(itemNameToFind);
            const simulatedResults = [
                { title: gameTitle, price: "R$" + (price !== null ? price : "N/A") },
            ];
            const img = findImg(itemNameToFind);
            const imgName = findImgname(itemNameToFind);
            showImg(img, imgName);
            // mostra os resultados
            simulatedResults.forEach(result => {
                resultsDiv.innerHTML += `<p>${result.title} - ${result.price}</p>`;
            });
        }
        else {
            resultsDiv.innerHTML = '<p>Please enter a game title.</p>';
        }
    });
}
function showImg(imgName, gameName) {
    if (imgName !== null && gameName !== null) {
        console.log("cyberpunk");
        const img = document.createElement('img');
        img.src = imgName;
        img.alt = gameName;
        img.width = 200; // Set width in pixels
        img.height = 200; // Set height in pixels
        const container = document.getElementById('imageContainer');
        container.appendChild(img);
    }
    else {
        console.log('bombril');
    }
}
// Function to load JSON data
function loadJSON() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://AndreyHP.github.io/web-teste/data/games.json');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            data = yield response.json(); // Parse JSON data
        }
        catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    createButton();
});
