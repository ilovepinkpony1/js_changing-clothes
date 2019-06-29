const initialState = {
  clothes: [
    'Apron',
    'Belt',
    'Cardigan',
    'Dress',
    'Earrings',
    'Fur coat',
    'Gloves',
    'Hat'
  ],
  inputValue: null,
  editItem: null
};

const actionHandler = {
  [CHOOSE_ITEM]: (state, action) => {
    const { index, value } = action.payload;

    return {
      ...state,
      editItem: index,
      inputValue: value
    };
  },

  [EDIT_VALUE]: (state, action) => {
    return {
      ...state,
      inputValue: action.payload.value
    };
  },

  [CONFIRM_CHANGES]: state => {
    return {
      ...state,
      clothes: [...state.clothes].map((item, index) =>
        index === state.editItem ? state.inputValue : item
      ),
      inputValue: null,
      editItem: null
    };
  }
};

function reducer(state = initialState, action) {
  const handler = actionHandler[action.type];

  return handler ? handler(state, action) : state;
}
