// Leitura do documento html
$(document).ready(function(){

// Monitorar todos os cliques do elemento "a" no html
  $('a').click(function(e){
    e.preventDefault()

   // Variavel local que recebe o atributo href do link
    let pagina = $(this).attr('href')

    $('.modal-title').empty()
    $('.modal-body').empty()

    switch(pagina){

    case 'Doramas': 
      $('.modal-title').append('Doramas')
      $('.modal-body').append(` 
      <div class="row col-12 col-sm-6 col-md-12">        
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6">
            <br>
            <h5 class="font-weight-bold FH" >Go Go Squid!  </h5>
            <p class="text-justify BRH">
            No auge de seus 19 anos de vida, Tong Nian tem o mundo aos seus pés. Tong Nian é uma brilhante aluna de Tecnologia da Informação, com notas excelentes e uma legião de fãs na internet, devido aos seus vídeos de covers de músicas japonesas. Mas seu mundo vira de pernas para o ar no dia que Han Shang Yan entra em sua vida. 
Além de gênio, Han Shang Yan é um dos melhores pro gamers do mundo. Mas, mesmo sendo uma lenda no mundo dos e-sports, ele nunca deixou que sua fama atrapalhasse sua profissão, e está sempre focado em conseguir sua próxima vitória.
Tendo se apaixonado por Han Shang Yan desde o primeiro momento que colocou seus olhos nele, Tong Nian tenta encontrar uma forma de se aproximar de seu novo crush, mas nunca consegue encontrar as palavras adequadas.
            </p>
            <a href="https://weifansub.com/2019/07/14/go-go-squid/" target="_blank"><button class="col-12 col-sm-6 col-md-6 btn-personal" style="background-color: #be7abb;" "width: 100%;" "height: auto;" "padding: 0.5rem;" "border-radius: 0.5rem;" "border: #f0ddee solid 0.2rem;" "font-family: Georgia, serif;" "font-size: 1rem;" "font-weight: 600;"> Assistir </button> </a>
          </div>
             <div class="col-12 col-sm-6 col-md-6 d-none d-sm-block"> 
             <br>
                <img class="img-fluid" src="img/GGS.png" alt="Go Go Squid!" title="Go Go Squid!" >
             </div>
          </div>
          <br>
        </div>
      </div>
      `)
      $('#modal-info').modal('show')
    break

    case 'Animes': 
      $('.modal-title').append('Animes')
      $('.modal-body').append(`
      <div class="row col-12 col-sm-6 col-md-12">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6">
          <br>
          <h4 class="font-weight-bold FH" >Tokyo Revengers</h4>
            <p class="text-justify BRH">
              Takemichi Hanagaki, um freeter de 26 anos sem esperança na vida, descobre um dia que sua ex-namorada no colégio, Hinata Tachibana, assim como seu irmão mais novo Naoto, são mortos pela Gangue Tokyo Manji. Quando Takemichi é empurrado na frente de um trem, ele viaja no tempo para exatamente 12 anos atrás, em 2005. Takemichi revive seus anos de ensino médio, e depois de revelar a Naoto que Hinata vai morrer, Takemichi é repentinamente transportado de volta ao presente, criando um paradoxo de tempo onde Naoto sobrevive e agora é um detetive. Naoto deduz que Takemichi é capaz de viajar 12 anos no passado quando eles dão as mãos, e usando o conhecimento do passado, Takemichi jura salvar Hinata.
            </p>
              <a href="https://xpanimes.com/tokyo-revengers-online/" target="_blank"><button class="col-12 col-sm-6 col-md-6 btn-personal" style="background-color: #be7abb;" "width: 100%;" "height: auto;" "padding: 0.5rem;" "border-radius: 0.5rem;" "border: #f0ddee solid 0.2rem;" "font-family: Georgia, serif;" "font-size: 1rem;" "font-weight: 600;"> Assistir </button> </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 d-none d-sm-block"> 
            <br>
            <img class="img-fluid" src="img/TR.png" alt=Tokyo Revengers" title="Tokyo Revengers" >
          </div>
        </div>
        <br>
      </div>
    </div> 
    `)
      $('#modal-info').modal('show')
    break

    case 'Novels': 
      $('.modal-title').append('Novels')
      $('.modal-body').append(`
        <div class="row col-12 col-sm-6 col-md-12">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6">
              <br>
              <h4 class="font-weight-bold FH"> Word of Honor </h4>
              <p class="text-justify BRH">
                Para deixar a organização assassina, The Window of Heaven, o líder Zhou Zi Shu realiza uma técnica de partida obrigatória, deixando-o com três anos de vida. Ele disfarça o rosto e tenta viver o resto de seus dias como um bêbado vagando pelo mundo pugilista. Três meses depois, ele conhece o misterioso Wen Ke Xing, que imediatamente percebe a fachada de Zhou Zi Shu. Os dois ficam mais próximos quando se envolvem em uma conspiração entre a Aliança dos Cinco Lagos e o Vale Fantasma sobre a Armadura Vitrificada, uma lendária chave protegida para um poderoso arsenal.
              </p>
              <a href="https://www.wattpad.com/story/228393638-faraway-wanderers-tian-ya-ke-pt-br" target="_blank"><button class="col-12 col-sm-6 col-md-6 btn-personal" style="background-color: #be7abb;" "width: 100%;" "height: auto;" "padding: 0.5rem;" "border-radius: 0.5rem;" "border: #f0ddee solid 0.2rem;" "font-family: Georgia, serif;" "font-size: 1rem;" "font-weight: 600;"> Assistir </button> </a>
            </div>
            <div class="col-12 col-sm-6 col-md-6 d-none d-sm-block"> 
            <br>
            <img class="img-fluid" src="img/WoH.png" alt="word of Honor" title="Word of Honor" >
          </div>
        </div>
        <br>
      </div>
    </div>           
      `)
      $('#modal-info').modal('show')
    break

    case 'EmBreve': 
      $('.modal-title').append('Em Breve')
      $('.modal-body').append(`

      <h1> Mais aguardados de 2021 </h1>

      <p> <strong> Dorama: </strong><br>
        Immortality é uma próxima série de televisão chinesa baseada no romance BL xianxia The Husky and His White Cat Shizun de Meatbun Don't Eat Meat, estrelado por Luo Yunxi e Chen Feiyu. A série deverá ao ar no Tencent Video com 50 episódios.
      </p>
<br>
      <p> <strong> Anime: </strong><br>
        Bleach como um dos animes de 2021 mais aguardados pelos fãs. Sua última temporada foi transmitida há 8 anos. Logo, existem muitas expectativas sobre como o anime retornará neste ano.
      </p>
<br>
      <p> <strong> Novel: </strong><br>
        The King of the Dead de Tsukikage e Merontomari eles são ressuscitados em um mundo de fantasia por um necromante que tem controle completo sobre cada coisa que o novo Rei dos Mortos-Vivos faz. 
      </p>

      `)
      $('#modal-info').modal('show')
    break

    default:
    alert('Pagina não encontrada')
    }
  })
})