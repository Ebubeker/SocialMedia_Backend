import store from "./store";

export default store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
