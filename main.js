window.addEventListener('load', () => {
  const store = Redux.createStore(reducer);
  const itemList = document.createElement('ul');

  function renderClothes() {
    itemList.innerHTML = '';
    const state = store.getState();
    const { clothes, editItem, inputValue } = state;
    const items = clothes.map((item, index) => {
      if (index === editItem) {
        return createInput();
      }
      return item === '' ? '' : createItem(item);
    });

    itemList.append(...items);

    function createItem(itemValue) {
      const li = document.createElement('li');
      const container = document.createElement('div');
      const button = document.createElement('button');
      const text = document.createElement('span');
      button.textContent = 'edit';
      button.addEventListener('click', event => {
        const targetValue = event.target.parentNode.childNodes[0].textContent;
        const itemIndex = clothes.findIndex(item => targetValue === item);
        store.dispatch(chooseItem(itemIndex, targetValue));
      });
      text.textContent = itemValue;
      container.append(text, button);
      li.append(container);
      return li;
    }

    function createInput() {
      const input = document.createElement('input');
      input.value = inputValue;
      input.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
          store.dispatch(editValue(event.target.value));
          store.dispatch(confirmChanges());
          console.log(state);
        } else {
          return;
        }
      });
      return input;
    }

    document.body.append(itemList);
  }

  store.subscribe(() => {
    renderClothes();
  });
  renderClothes();
});
