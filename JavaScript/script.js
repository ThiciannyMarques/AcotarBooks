  // class TemplateHTML {

  //   static issoNaoEhPog(link, urlImagem) {
  //     document.write("<a href='" + link + "'  target='_blank'><img src='" + urlImagem + "'></a>")
  //   }

  //   static agoraSoJS(link, urlImagem) {

  //     let imagem = document.createElement('img');
  //     imagem.src = urlImagem;

  //     let a = document.createElement('a');// "<a href target>"
  //     a.href = link;
  //     a.target = '_blank';

  //     a.insertAdjacentElement('afterbegin', imagem);

      
  //     let asa = document.querySelector('.container');
  //     asa.insertAdjacentElement('afterend', a);

        
  //   }

  // }

  var capas = [
    "https://images-na.ssl-images-amazon.com/images/I/91RU544KgKL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91Sn67XUSHL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81Bh+rbygYL.jpg",
]
var link = [
    "https://www.amazon.com.br/Corte-espinhos-rosas-Vol-1/dp/8501105872/ref=asc_df_8501105872/?tag=googleshopp00-20&linkCode=df0&hvadid=379699592068&hvpos=&hvnetw=g&hvrand=4843881401720381347&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001610&hvtargid=pla-811942334385&psc=1",
    "https://www.google.com/aclk?sa=L&ai=DChcSEwjO9Jy6k7jwAhWEDpEKHa4RCNcYABAGGgJjZQ&sig=AOD64_3OoBC8cBYVXHsf1B_Sr9U0K6_uPw&ctype=5&q=&ved=2ahUKEwjm2ZW6k7jwAhXOq5UCHZovDqAQ9aACegQIARBV&adurl=",
    "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjVu4DTk7jwAhWKrpUCHRQKBQwQFjAAegQIAhAD&url=https%3A%2F%2Fwww.amazon.com.br%2FCorte-asas-ru%25C3%25ADna-espinhos-rosas%2Fdp%2F8501110124&usg=AOvVaw00y2Pirj44cRdpArFOgQfT"
]

var tentativas = 3;
var html = ""
// minhaClasse = new TemplateHTML();
for(t = 0; t < capas.length; t++){
    // document.write(`<a href="${link[t]}"  target="_blank"><img src="${capas[t]}"></a>`)
    // document.write("<a href=\"" + link[t] + "\"  target=\"_blank\"><img src=\"" + capas[t] + "\"></a>")
    // issoNaoEhPog(link[t], capas[t]);
    html += templateCarosel(templateImagem(link[t], capas[t]), t === 0 ? true : false);
}
var div = document.getElementById("legal")
div.innerHTML = html;

function templateImagem(link, imagem) {
  // document.write(`<a href="${link[t]}"  target="_blank"><img src="${capas[t]}"></a>`)
  return `<a href="${link}"><img class="d-block w-100" src="${imagem}"></a>`;
}

function templateCarosel(imagem, active = false) {
  return `<div class="carousel-item ${active ? 'active' : ''}">${imagem}</div>`;
}