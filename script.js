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

function selectCity() {
  var cityName = document.getElementById("cityMenu").value;
  var cityContent = document.getElementById("cityContent");

  // Limpa o conteúdo e esconde se "Cidades" for selecionado
  if (cityName === "Cidades") {
    cityContent.innerHTML = "";
    cityContent.classList.remove("active");
    return;
  }

  // Carrega o conteúdo da cidade usando fetch
  fetch(cityName.toLowerCase() + ".html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o conteúdo");
      }
      return response.text();
    })
    .then((data) => {
      // Insere o conteúdo carregado
      cityContent.innerHTML = data;

      // Usa um pequeno atraso para garantir que o display: block seja aplicado antes do fade-in
      setTimeout(() => {
        cityContent.classList.add("active");
      }, 50);
    })
    .catch((error) => {
      console.error("Erro:", error);
      cityContent.innerHTML = "<p>Erro ao carregar o conteúdo.</p>";
    });
}

// Esvazia o conteúdo ao carregar a página
window.onload = function () {
  document.getElementById("cityContent").innerHTML = "";
  document.getElementById("cityContent").classList.remove("active");
};
