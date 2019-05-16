
export default {
  updateSwitcher:function (state, payload) {
    state.switcher = payload.switcher;
    window.localStorage.setItem('checker', payload.switcher);
  }
}
