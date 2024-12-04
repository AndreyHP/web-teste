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
                    { title: gameTitle, price: "R$29.99", condition: "Novo" },
                    { title: gameTitle, price: "R$19.99", condition: "Usado" }
                ];

                // mostra os resultados
                simulatedResults.forEach(result => {
                    resultsDiv.innerHTML += `<p>${result.title} - ${result.price} (${result.condition})</p>`;
                });
            } else {
                resultsDiv.innerHTML = '<p>Please enter a game title.</p>';
            }
        }
