// Action value
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// initial State
const initialState = {
  todos: [
    {
      id: Date.now(),
      text: "text",
      completed: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo;
        }),
      };

    default:
      return state;
  }
};

export default todos;
