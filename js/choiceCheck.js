const getCheckedElementsCount = () => {
  return (document.querySelectorAll('.movie-checkbox:checked') || []).length;
};

const getNickname = () => {
  return document.querySelector('#nickname').value;
};

const alertCheckCount = () => {
  alert(
    `${getNickname()}님, 저와 ${getCheckedElementsCount()}개의 취향이 같으시네요!`
  );
};

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  alertCheckCount();
});
