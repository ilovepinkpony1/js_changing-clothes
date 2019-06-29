const CHOOSE_ITEM = 'choose_item';
const EDIT_VALUE = 'edit_value';
const CONFIRM_CHANGES = 'confirm_changes';

function chooseItem(index, value) {
  return {
    type: CHOOSE_ITEM,
    payload: {
      index,
      value
    }
  };
}

function editValue(value) {
  return {
    type: EDIT_VALUE,
    payload: {
      value
    }
  };
}

function confirmChanges() {
  return {
    type: CONFIRM_CHANGES
  };
}
