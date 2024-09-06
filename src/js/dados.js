// As primeiras linhas declaram variáveis para armazenar os caminhos das imagens dos animes. Cada variável corresponde ao nome do anime e o valor é o caminho relativo da imagem.

const imgBlackClover = "/src/img/blackClover.jpg";
const imgFrieren = "/src/img/frieren.png";
const imgJujutsuKaisen = "/src/img/JujutsuKaisen.jpg";
const imgWistoria = "/src/img/Wistoria.jpg";
const imgNigeJouzu = "/src/img/NigeJouzu.jpg";
const imgIsekaiShikkaku = "/src/img/IsekaiShikkaku.jpg";

// Criando arrays com as tags de cada anime
const tagsBlackClover = [
  "shonen",
  "fantasia",
  "ação",
  "aventura",
  "magia",
  "espadas",
  "amizade",
  "persistência",
  "sonho",
  "imperfeito",
  "underdog",
];
const tagsFrieren = [
  "fantasia",
  "aventura",
  "drama",
  "elfo",
  "imortalidade",
  "jornada",
  "vida",
  "morte",
  "amizade",
  "tempo",
];
const tagsJujutsuKaisen = [
  "shonen",
  "ação",
  "suspense",
  "sobrenatural",
  "maldições",
  "exorcismo",
  "escola",
  "amizade",
  "família",
];
const tagsWistoria = [
  "ação",
  "fantasia",
  "shounen",
  "espada",
  "magia",
  "superação",
];

const tagsNigeJouzu = [
  "histórico",
  "ação",
  "comédia",
  "samurai",
  "sobrevivência",
  "fuga",
  "estratégia",
  "período Muromachi",
  "Japão feudal"
];

const tagsIsekaiShikkaku = [
  "isekai",
  "comédia",
  "fantasia",
  "sobrenatural",
  "protagonista fraco",
  "autodepreciação",
  "relacionamento"
];

// Convertendo os arrays em strings, separadas por vírgulas
const stringTagsBlackClover = tagsBlackClover.join(",");
const stringTagsFrieren = tagsFrieren.join(",");
const stringTagsJujutsuKaisen = tagsJujutsuKaisen.join(",");
const stringTagsWistoria = tagsWistoria.join(",");
const stringTagsNigeJouzu = tagsNigeJouzu.join(",");
const stringTagsIsekaiShikkaku = tagsIsekaiShikkaku.join(",");


//Criação do Array de Animes
const animes = [
  {
    titulo: "Black Clover",
    sinopse:
      "Em um mundo onde a magia é tudo, Asta, um garoto sem nenhum poder mágico, sonha em se tornar o Rei Mago. Junto com seu amigo Yuno, ele embarca em uma jornada épica para provar seu valor.",
    genero: "Ação, Fantasia, Shounen",
    classificacaoEtaria: "12+",
    informacoes: "https://pt.wikipedia.org/wiki/Black_Clover",
    imagem: imgBlackClover,
    tags: stringTagsBlackClover,
  },
  {
    titulo: "Freiren",
    sinopse:
      "Freiren é um anime de comédia e fantasia que acompanha a vida de Freiren, uma jovem guerreira que, após salvar um reino, é recompensada com uma vida pacata. No entanto, seu passado e novas aventuras a encontram.",
    genero: "Comédia, Fantasia, Aventura",
    classificacaoEtaria: "10+",
    informacoes: "https://en.wikipedia.org/wiki/Frieren",
    imagem: imgFrieren,
    tags: stringTagsFrieren,
  },
  {
    titulo: "Jujutsu Kaisen",
    sinopse:
      "Itadori Yuji, um estudante do ensino médio, encontra um mundo oculto de maldições ao ingerir um dedo amaldiçoado. Agora, ele se junta a uma escola de exorcistas para derrotar as maldições mais poderosas.",
    genero: "Ação, Sobrenatural, Shounen",
    classificacaoEtaria: "13+",
    informacoes: "https://en.wikipedia.org/wiki/Jujutsu_Kaisen",
    imagem: imgJujutsuKaisen,
    tags: stringTagsJujutsuKaisen,
  },
  {
    titulo: "Tsue to Tsurugi no Wistoria (Wistoria: Wand and Sword)",
    sinopse:
      "Em um mundo onde a magia é predominante, Will Serfort, incapaz de lançar feitiços, descobre sua força em sua espada. Contra todas as expectativas, ele embarca em uma jornada épica para provar seu valor como espadachim.",
    genero: "Ação, Fantasia, Shounen",
    classificacaoEtaria: "12+",
    informacoes: "https://en.wikipedia.org/wiki/Wistoria:_Wand_and_Sword",
    imagem: imgWistoria,
    tags: stringTagsWistoria,
  },
  {
    titulo: "Nige Jouzu no Wakagimi (O Samurai que Fugiu)",
    sinopse: "Tokiyuki Hōjō, um jovem samurai que prefere fugir de conflitos, vê seu mundo desmoronar com a queda do xogunato Kamakura. Agora, ele precisa usar suas habilidades para sobreviver e reconstruir seu clã.",
    genero: "Ação, Comédia, Histórico",
    classificacaoEtaria: "13+",
    informacoes: "https://en.wikipedia.org/wiki/The_Elusive_Samurai",
    imagem: imgNigeJouzu,
    tags: stringTagsNigeJouzu,
  },
  {
    titulo: "Isekai Shikkaku",
    sinopse: "Um jovem que se considera inútil é invocado para outro mundo, mas logo descobre que seus poderes são completamente inúteis para o mundo mágico. Com humor e autodepreciação, ele tenta encontrar seu lugar nesse novo mundo.",
    genero: "Comédia, Fantasia, Isekai",
    classificacaoEtaria: "13+",
    informacoes: "https://en.wikipedia.org/wiki/No_Longer_Allowed_in_Another_World", // Substitua por um link real
    imagem: imgIsekaiShikkaku,
    tags: stringTagsIsekaiShikkaku,
  }
];
