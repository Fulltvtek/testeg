function switchChannel(channelSrc) {
  const player = document.getElementById("player");
  player.src = channelSrc;

  // Atualiza informações do programa (mock)
  const title = document.getElementById("program-title");
  const description = document.getElementById("program-description");

  switch (channelSrc) {
    case 'https://reidoscanais.tv/embed/?id=globorj-globorio':
      title.innerText = "Globo RJ";
      description.innerText = "Transmissão ao vivo da Globo RJ.";
      break;
    case 'https://reidoscanais.tv/embed/?id=recordrj-recordrio':
      title.innerText = "Record RJ";
      description.innerText = "Transmissão ao vivo da Record RJ.";
      break;
    case 'https://reidoscanais.tv/embed/?id=sbt-sbtrio':
      title.innerText = "SBT RJ";
      description.innerText = "Transmissão ao vivo do SBT RJ.";
      break;
    default:
      title.innerText = "Canal Desconhecido";
      description.innerText = "Sem informações disponíveis.";
  }
}
