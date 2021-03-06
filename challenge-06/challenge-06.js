/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Carioca';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
 var teams = ['Flamengo','Vasco','Fluminense','Botafogo','Americano'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
...      switch(num){
.....  case 1:
.....  return 'O time que está em 1º lugar é o '+teams[0];
.....  break;
.....  case 2:
.....  return 'O time que está em 2º lugar é o '+teams[1];
.....  break;
.....  case 3:
.....  return 'O time que está em 3º lugar é o '+teams[2];
.....  break;
.....  case 4:
.....  return 'O time que está em 4º lugar é o '+teams[3];
.....  break;
.....  case 5:
.....  return 'O time que está em 5º lugar é o '+teams[4];
.....  break;
.....  default :
.....     return 'Não temos a informaçã do time que está nessa posição';
.....            break;
.....    }
...  }

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1);
showTeamPosition(2);
showTeamPosition(3);
showTeamPosition(8);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;
while(contador ==20 || contador<=30){
... console.log(contador++);
... }

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
 function convertToHex(cor){
... var color = {
..... Blue:{ nome:'Blue', hex:'#0000FF'},
..... Cyan:{ nome:'Cyan' , hex:'#00FFFF'},
..... Green:{nome:'Green', hex:'#008000'},
..... Goldenrod:{nome:'Goldenrod',hex:'#DAA520'},
..... Indigo:{nome:'Indigo',hex:'#4B0082'}
..... };
... switch(cor){
..... case 'Blue':
..... console.log('O hexadecimal para a cor'+color.Blue.nome+" é "+color.Blue.hex);
..... break;
..... case 'Cyan':
..... console.log('O hexadecimal para a cor'+color.Cyan.nome+" é "+color.Cyan.hex);
..... break;
..... case 'Green':
..... console.log('O hexadecimal para a cor'+color.Green.nome+" é "+color.Green.hex);
..... break;
..... case 'Goldenrod':
..... console.log('O hexadecimal para a cor'+color.Goldenrod.nome+" é "+color.Goldenrod.hex);
..... break;
..... case 'Indigo':
..... console.log('O hexadecimal para a cor'+color.Indigo.nome+" é "+color.Indigo.hex);
..... break;
..... default:
..... console.log('Não temos o equivalente hexadecimal para '+cor);
..... break;
..... }
... }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/> 
convertToHex('Blue');
//O hexadecimal para a corBlue é #0000FF

convertToHex('Red');
//Não temos o equivalente hexadecimal para Red

convertToHex('Cyan');
//O hexadecimal para a corCyan é #00FFFF

convertToHex('Indigo');
//O hexadecimal para a corIndigo é #4B0082

convertToHex('Gold');
//Não temos o equivalente hexadecimal para Gold

convertToHex('Goldenrod');
//O hexadecimal para a corGoldenrod é #DAA520

convertToHex('Rosa');
//Não temos o equivalente hexadecimal para Rosa

convertToHex('Tomato');
//Não temos o equivalente hexadecimal para Tomato

