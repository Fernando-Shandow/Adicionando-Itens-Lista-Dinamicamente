const btnAddItem = document.getElementById("btnAddItem");
const inputNovoItem = document.getElementById("novoItem");
const minhaLista = document.getElementById("minhaLista");

btnAddItem.addEventListener("click", () => {
  const textoItem = inputNovoItem.value.trim();

  if (textoItem !== "") {
    const novoLi = document.createElement("li");
    novoLi.textContent = textoItem;
    minhaLista.appendChild(novoLi);
    inputNovoItem.value = "";
  } else {
    alert("Digite algum texto para adicionar.");
  }
});
