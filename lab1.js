'use strict';
// First Lab file

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// if (numberOfFilms > 0) console.log(numberOfFilms);


// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

let personalMovieDB = {
  count: numberOfFilms, 
  movies: {}, 
  actors: {},
  genres: [],
  privat: false
};

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// varianta mea
// let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
// let movieRating = prompt('На сколько оцените его? 5*', 0);
// let movies = { lastMovie : movieRating };

// varianta autorului 
// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Lab2
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять


// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

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

if (personalMovieDB.count < 10){
  console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
  console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30){
  console.log("Вы киноман")
} else {
  console.log("Произошла ошибка");
}
console.log(personalMovieDB);

