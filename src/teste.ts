interface Item {
    [key: string]: {
        price: number;
        img: string;
        name: string;
    };
}

interface Data {
    items: Item[];
}

var data: Data = { items: [] };
//var gameTitle: string;


function createButton(){
	var div = document.getElementById("div") as HTMLElement;
    var div = document.getElementById("div2") as HTMLElement;
    //Cria o botão
	var btnSearch = document.createElement("button");
    var btnSobre = document.createElement("button");

	btnSearch.textContent = "Search";
    btnSobre.textContent = "Sobre";

	div?.appendChild(btnSearch);
    div?.appendChild(btnSobre);

	// Add an event listener to the button
	btnSearch.addEventListener('click', () => {
		searchGame();
	});

    btnSobre.addEventListener('click', () => {
		searchGame();
	});

};

function findItemPrice(itemName: string): number | null {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].price : null;
}

function findImg(itemName: string): string | null {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].img : null;
}

function findImgname(itemName: string): string | null {
    // checa se o objeto é uma array
    const items = data.items;
    const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].name : null;
}

async function searchGame(): Promise<void> {
    // pega o nome do jogo
    const gameSearchInput = document.getElementById('gameSearch') as HTMLInputElement;
    var gameTitle = gameSearchInput.value;
    const resultsDiv = document.getElementById('results') as HTMLElement;

    // limpa o resultado
    resultsDiv.innerHTML = '';

    // simula o resultado (depois implementar a API da pns)
    if (gameTitle) {
        //mostra a menssagem
        resultsDiv.innerHTML = `<p>Searching for prices of <strong>${gameTitle}</strong>...</p>`;
        await loadJSON();
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
    } else {
        resultsDiv.innerHTML = '<p>Please enter a game title.</p>';
    }
}

function showImg(imgName: string | null, gameName: string | null): void {
        if (imgName !== null && gameName !== null){
        console.log("cyberpunk");
        const img = document.createElement('img');
        img.src = imgName;
        img.alt = gameName;
        img.width = 200; // Set width in pixels
        img.height = 200; // Set height in pixels

        const container = document.getElementById('imageContainer') as HTMLElement;
        container.appendChild(img);
        }else{
            console.log('bombril');
        }

}

// Function to load JSON data
async function loadJSON(): Promise<void> {
    try {
        const response = await fetch('https://AndreyHP.github.io/web-teste/data/games.json');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        data = await response.json(); // Parse JSON data
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    createButton();

});
