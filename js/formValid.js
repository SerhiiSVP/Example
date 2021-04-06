let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inpEmail = document.querySelector('#registration__email');
let inpName = document.querySelector('#registration__name');
let accept = document.querySelector('#registration__accept');
let form = document.querySelector('#registration__form');
let err = document.querySelector('#registration__error');

document.querySelector('.registration__button').onclick = function(e){
  e.preventDefault();

  if(!inpName.value) {
    inpName.classList.add('err');
    return false;
  }else{
    inpName.classList.remove('err');
  }

  if(!reg.test(inpEmail.value)) {
    inpEmail.classList.add('err');
    err.style = 'display: flex';
    return false;
  }else{
    form.style = 'display: none';
    accept.style = 'display: inline-block';
  }

  return true;
};

//-----------

let inpEmailQuestion = document.querySelector('#question__email');
let inpTextQuestion = document.querySelector('#question__text');
let acceptQuestion = document.querySelector('#question__accept');
let formQuestion = document.querySelector('#question__form');
let errQuestion = document.querySelector('#question__error');

document.querySelector('.question__button').onclick = function(e){
  e.preventDefault();

  if(!reg.test(inpEmailQuestion.value)) {
    inpEmailQuestion.classList.add('err');
    errQuestion.style = 'display: flex';
    return false;
  }else{
    inpEmailQuestion.classList.remove('err');
    errQuestion.style = 'display: none';
  }

  if(!inpTextQuestion.value) {
      inpTextQuestion.classList.add('err');
      return false;
    }else{
      inpTextQuestion.classList.remove('err');
      formQuestion.style = 'display: none';
      acceptQuestion.style = 'display: inline-block';
    }

  return true;
};
