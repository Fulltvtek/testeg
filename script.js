function switchChannel(channelSrc) {
  const player = document.getElementById("player");
  player.src = channelSrc;
  player.play();

  // Atualiza informações do programa (mock)
  const title = document.getElementById("program-title");
  const description = document.getElementById("program-description");

  switch (channelSrc) {
    case 'channel1.mp4':
      title.innerText = "Jornal Local";
      description.innerText = "Notícias e atualidades ao vivo.";
      break;
    case 'channel2.mp4':
      title.innerText = "Sessão de Filmes";
      description.innerText = "Filmes em alta rotação.";
      break;
    case 'channel3.mp4':
      title.innerText = "Show ao Vivo";
      description.innerText = "Música e entretenimento em tempo real.";
      break;
    default:
      title.innerText = "Canal Desconhecido";
      description.innerText = "Sem informações disponíveis.";
  }
}
