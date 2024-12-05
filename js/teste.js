 var data = JSON;
 var gameTitle = " ";


 function findItemPrice(itemName){

     // checa se o objeto é uma array
     const items = data.items;
     const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].price : null;

}

 function findImg(itemName){

     // checa se o objeto é uma array
     const items = data.items;
     const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].img : null;

}

 function findImgname(itemName){

     // checa se o objeto é uma array
     const items = data.items;
     const foundItem = items.find(item => item[itemName]);

    return foundItem ? foundItem[itemName].name : null;

}


 async function searchGame() {
            // pega o nome do jogo
            gameTitle = document.getElementById('gameSearch').value;
            const resultsDiv = document.getElementById('results');



            // limpa o resultado
            resultsDiv.innerHTML = '';

            // simula o resultado (depois implementar a API da pns)
            if (gameTitle) {
                //mostra a menssagem
                resultsDiv.innerHTML = `<p>Searching for prices of <strong>${gameTitle}</strong>...</p>`;
                await loadJSON();
                // simula o resultatdo (depois mudar para os dados da API da psn)

                const itemNameToFind = gameTitle;
                const price = await findItemPrice(itemNameToFind);


                const simulatedResults = [
                    { title: gameTitle, price: "R$" + price},
                ];
                const img = await findImg(itemNameToFind);
                const imgName = await findImgname(itemNameToFind);
                showImg(img, imgName);
                // mostra os resultados
                simulatedResults.forEach(result => {
                    resultsDiv.innerHTML += `<p>${result.title} - ${result.price}</p>`;
                });
            } else {
                resultsDiv.innerHTML = '<p>Please enter a game title.</p>';
            }


        }




 function showImg(imgName, gameName){

    const img = document.createElement('img');


    img.src = imgName;
    img.alt = gameName;

    img.width = 200; // Set width in pixels
    img.height = 200; // Set height in pixels

    const container = document.getElementById('imageContainer');
    container.appendChild(img);
   // console.log("cyberpunk");

}

// Function to load JSON data
async function loadJSON()  {
  try {
    const response = await fetch('../data/games.json'); // Adjust the path as necessary
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    data = await  response.json(); // Parse JSON data
    //console.log(data.name); // Use the data as needed
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }

}



