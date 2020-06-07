// tempat menyimpan state global
import {createStore} from 'redux';

// const [profile, setProfile] = useState();

const initialState = {
  loading: false,
  name: 'yosada dede',
  profession: 'software engineer',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'azzamy',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
