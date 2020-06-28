/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var val = [1,'array','prefiro criar um obj',true,71];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
 function retorneArr(arr){
... return val;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retorneArr()[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var arraY = [1,2,3];
   function recebeArray(x,y){
     return arraY+''+arraY[2];
   }
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var tipe = [1,1.2,'JavaScript',true, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
recebeArray(tipe);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){
  var livro = {
    naruto:{nome:"Naruto", autor:'Masashi Kishimoto',numPaginas:900,editora:'Bandai'},
    dragonBall:{nome:"DragonBall",autor:"Akira Toriama",numPaginas:1200,editora:'Toei Animation'},
    samuraiX:{nome:"Rurouni Kenshin(SamuraiX)",autor:"Nobuhiro Watsuki",numPaginas:800,editora:'Bandai'}
             }
  
    if (bookName == "Naruto"||bookName=="naruto"){
      return livro.naruto;
      }
  if (bookName =='Dragon Ball'||bookName=='dragon ball'){
    return livro.dragonBall;
  }
  if (bookName == 'Samurai X'||bookName=='samurai x'){
    return livro.samuraiX;
  }else{
    return livro;
  }
  if(bookName=='NarutoPg'){
    return 'O livro '+livro.naruto.nome+' tem '+livro.naruto.numPaginas+' páginas!';
  }
   if(bookName=='dragonBallPg'){
    return 'O livro '+livro.dragonBall.nome+' tem '+livro.dragonBall.numPaginas+' páginas!';
  }
   if(bookName=='SamuraiPg'){
    return 'O livro '+livro.samuraiX.nome+' tem '+livro.samuraiX.numPaginas+' páginas!';
  }
   if(bookName=='NarutoAutor'){
    return 'O livro '+livro.naruto.nome+' tem '+livro.naruto.autor+' páginas!';
  }
   if(bookName=='dragonBallAutor'){
    return 'O livro '+livro.dragonBall.nome+' tem '+livro.dragonBall.autor+' páginas!';
  }
   if(bookName=='SamuraiAutor'){
    return 'O livro '+livro.samuraiX.nome+' tem '+livro.samuraiX.autor+' páginas!';
  }
    if(bookName=='NarutoEditora'){
    return 'O livro '+livro.naruto.nome+' tem '+livro.naruto.editora+' páginas!';
  }
   if(bookName=='dragonBallEditora'){
    return 'O livro '+livro.dragonBall.nome+' tem '+livro.dragonBall.editora+' páginas!';
  }
   if(bookName=='SamuraiEditora'){
    return 'O livro '+livro.samuraiX.nome+' tem '+livro.samuraiX.editora+' páginas!';
  }
  
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book('NarutoPg');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book('NarutoAutor');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book('NarutoEditora');
