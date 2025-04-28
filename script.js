let typed = new Typed(".multiple-text", {
  strings: [ "Desenvolvedor Front-end", "Desenvolvedor JavaScript", "Programador PHP"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

let secTyped = new Typed(".hobbies", {
  strings: ["Gosto de passar o tempo estudando.", "Gosto de passar o tempo programando.", "Gosto de jogar com meus amigos.", "E passar tempo com minha namorada."],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

function changeText(element) {
  let texts = [
      // C/C++ 
      "Uma linguagem de programação poderosa e versátil, amplamente usada para desenvolvimento de sistemas, jogos e aplicações de alto desempenho. Suporta programação orientada a objetos e procedural.",
      
      // C# 
      "Criada pela Microsoft, é uma linguagem orientada a objetos usada principalmente para desenvolvimento de aplicativos Windows, jogos com Unity e aplicações web com .NET.",
      
      // Python 
      " Conhecida por sua simplicidade e legibilidade, é usada em diversas áreas como ciência de dados, inteligência artificial, desenvolvimento web e automação. Possui uma vasta biblioteca de módulos e frameworks.",
      
      // Bulma-CSS
      "Um framework CSS moderno baseado em Flexbox, que facilita a criação de interfaces responsivas e estilizadas sem a necessidade de JavaScript. É leve e fácil de usar, permitindo personalização rápida.",
      
      // Arduino IDE (C++)
      "Um ambiente de desenvolvimento integrado para programar placas Arduino, usado em projetos de eletrônica e IoT. Permite escrever código em C/C++ e interagir com hardware de forma simples e eficiente.",
      
      // HTML5
      "Uma linguagem de marcação usada para estruturar e apresentar conteúdo na web. HTML5 introduziu novos elementos e APIs, melhorando a semântica e a interatividade das páginas.",
    
      // CSS3 
      "CSS3 uma linguagem de marcação estudada durante todo o periodo na ETEC e que tenho trabalhado e usado muito fora da ETEC, estilizando sites para me divertir, estudar e até para falicitar algumas coisas, como exemplo este portfólio apresentado.",
      
      // JAVASCRIPT
      "JavaScript uma linguagem de programação estudada durante todo o periodo na ETEC e que tenho trabalhado e usado muito fora da ETEC, criando sites para me divertir, estudar e até para falicitar algumas coisas, como exemplo este portfólio apresentado.",
      
      // NodeJS 
      "Node.js é um ambiente de execução JavaScript do lado do servidor, permitindo criar aplicações escaláveis e rápidas. É amplamente utilizado para desenvolvimento web e APIs, aproveitando a mesma linguagem no front-end e back-end.",
      
      // PHP 
      "PHP é uma linguagem de script do lado do servidor, amplamente utilizada para desenvolvimento web. É especialmente eficaz para criar páginas dinâmicas e interagir com bancos de dados, sendo uma escolha popular para aplicações web.",
      
      // ESPANHOL
      "Espanhol é uma língua românica falada em muitos países, especialmente na América Latina e na Espanha. É a segunda língua mais falada do mundo em termos de falantes nativos.",
      
      // Informatica 
      "Informatica é o estudo e a prática de processar, armazenar e transmitir informações. Envolve o uso de computadores e software para gerenciar dados, desenvolver sistemas e resolver problemas.",
  ];

  let names = [
      "C/C++",
      "C#",
      "Python",
      "Buma-CSS",
      "Arduino IDE (C++)",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node JS",
      "PHP",
      "Espanhol",
      "Informatica",
  ];
  
  let index = element.getAttribute("data-value");
  document.getElementById("desc-text").innerText = texts[index];
  document.getElementById("desc-name").innerText = names[index];
}

function goBack(){
  let text = "Aqui vai aparecer minha historia com essa linguagem, se desenvolvi projetos e a quanto tempo estudo/trabalho com ela.";
  let name = "";

  document.getElementById("desc-text").innerText = text;
  document.getElementById("desc-name").innerText = name;
}