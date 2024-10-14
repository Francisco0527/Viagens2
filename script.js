function selectCity() {
  var cityName = document.getElementById("cityMenu").value;

  // Se "Cidades" for selecionado, limpa o conteúdo
  if (cityName === "Cidades") {
    document.getElementById("cityContent").innerHTML = "";
    return;
  }

  // Usar fetch para carregar o conteúdo da cidade selecionada
  fetch(cityName.toLowerCase() + ".html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o conteúdo");
      }
      return response.text();
    })
    .then((data) => {
      // Inserir o conteúdo carregado no elemento de cidade
      document.getElementById("cityContent").innerHTML = data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      document.getElementById("cityContent").innerHTML =
        "<p>Erro ao carregar o conteúdo.</p>";
    });
}

// Esvaziar o conteúdo ao carregar a página
window.onload = function () {
  document.getElementById("cityContent").innerHTML = "";
};
