//обозначаю что будет крутиться
let container = document.querySelector('.fortune_wheel');

//обозначаю окна для попапа
let popup = document.querySelector('#popup');
let popupLose = document.querySelector('#popupLose');

//обозначаю кнопки для нажатий на экран
let btn = document.querySelector('#spin');
let btnBig = document.querySelector('.main_button');
let btnMbl = document.querySelector('.mobile_button');

//задаю функцию кручения
function Spin() {
  //забираю у кнопок функцию онклик, ибо нех*й
  btn.removeAttribute('onclick');
  btnBig.removeAttribute('onclick');
  btnMbl.removeAttribute('onclick');

  //беру рандомное число, на которое придется крутить колесо
  number = Math.ceil(Math.random()*24);
  // //вывожу это число для теста логики кручения колеса
  // console.log(number);
  //кручу колесо на несколько делений и умножаю на 45, чтоб он ровно попадал в акттивную ячейку
  container.style.transform = "rotate(" + -45*number + "deg)";
  //условие вывода нужного попапа
  if (number == 2 || number == 6 || number == 8 || number == 10 || number == 14 || number == 16 || number == 18 || number == 22 || number == 24) {
    //вывод проигравшего попапа
    function showPopupLose() {
      setTimeout(function () {
        popupLose.classList.add('b-show');
        //возвращаю онклик на спинЫ
        btn.setAttribute('onclick', 'Spin()');
        btnBig.setAttribute('onclick', 'Spin()');
        btnMbl.setAttribute('onclick', 'Spin()');
      }, 10500);
    }
    showPopupLose();
  } else {
    //вывод попапа
    function showPopup() {
      setTimeout(function () {
        popup.classList.add('b-show');
        //возвращаю онклик на спинЫ
        btn.setAttribute('onclick', 'Spin()');
        btnBig.setAttribute('onclick', 'Spin()');
        btnMbl.setAttribute('onclick', 'Spin()');
      }, 10500);
    }
    showPopup();
  }
}

//функция скрытия окна попапа
function removePopup() {
  popup.classList.add('b-out');
  setTimeout(function () {
    popup.classList.remove('b-show');
    popup.classList.remove('b-out');
  }, 500);
}
//функция скрытия окна проигрышного попапа
function removePopupLose() {
  popupLose.classList.add('b-out');
  setTimeout(function () {
    popupLose.classList.remove('b-show');
    popupLose.classList.remove('b-out');
  }, 500);
}
