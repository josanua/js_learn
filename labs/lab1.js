'use strict';
// Lab file

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false


let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

let personalMovieDB = {
  count: numberOfFilms, 
  movies: {}, 
  actors: {},
  genres: [],
  privat: true
};


function rememberMyFilms() {
  for ( let i = 0; i < 1; i++ ){

    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = prompt('На сколько оцените его?', '');

    if ( (a && b) != null && (a && b) != '' && a.length < 50 ){
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    } 
  }
}
// rememberMyFilms();

function detectPersonalLevel(){
  if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов")
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель")
  } else if (personalMovieDB.count >= 30){
    console.log("Вы киноман")
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();


function showMyDB(hidden){
  if(!hidden){
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
  for (let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Genul dvs iubit cu numarul ${i}`);
  }
}

writeYourGenres();




// console.log(personalMovieDB);

// let i = 1;
// while (i <= 10) console.log(i++);
//   // i++;
  
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);


// do {
//   let n = +prompt('Enter num: ', 0);
// } while (n <= 100)  {
//   if( n == 100 ) {
//     break;
//   } else {
//     n = +prompt('Enter num: ', 0);
//   }
// }
