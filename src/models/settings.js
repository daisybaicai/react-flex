const SettingsModel = {
  namespace: 'settings',
  state: {
    currentView: [],
    selectIndex: '',
    selectHoverIndex: '',
  },
  effects: {
    *changeView({ payload }, { call, put }) {
      yield put({
        type: 'saveCurrentView',
        payload,
      });
    },
    *changeIndex({ payload }, { call, put }) {
      yield put({
        type: 'saveIndex',
        payload,
      });
    },
  },
  reducers: {
    saveCurrentView(state, { payload }) {
      return { ...state, currentView: payload };
    },
    saveIndex(state, { payload }) {
      return { ...state, selectIndex: payload };
    },
    saveHoverIndex(state, { payload }) {
      return { ...state, selectHoverIndex: payload };
    },
  },
};
export default SettingsModel;
