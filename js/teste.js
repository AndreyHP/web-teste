 function searchGame() {
            const gameTitle = document.getElementById('gameSearch').value;
            const resultsDiv = document.getElementById('results');

            // limpa o resultado
            resultsDiv.innerHTML = '';

            // simula o resultado (depois implementar a API da pns)
            if (gameTitle) {
                //mostra a menssagem
                resultsDiv.innerHTML = `<p>Searching for prices of <strong>${gameTitle}</strong>...</p>`;

                // simula o resultatdo (depois mudar para os dados da API da psn)
                const simulatedResults = [
                    { title: gameTitle, price: "R$250", condition: "Novo" },
                    { title: gameTitle, price: "R$130", condition: "Usado" }
                ];

                // mostra os resultados
                simulatedResults.forEach(result => {
                    resultsDiv.innerHTML += `<p>${result.title} - ${result.price} (${result.condition})</p>`;
                });
            } else {
                resultsDiv.innerHTML = '<p>Please enter a game title.</p>';
            }

            showImg();
        }


function showImg(){

    const img = document.createElement('img');
    img.src = "../img/cyberpunk.jpg";
    img.alt = "cyberpunk";

    img.width = 200; // Set width in pixels
    img.height = 200; // Set height in pixels

    const container = document.getElementById('imageContainer');
    container.appendChild(img);

}
