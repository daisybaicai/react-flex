import { useDispatch, useSelector } from 'dva';
/**
 * 自定义dva hook
 * @param {Object} loadingPaths {loading: path}
 * @param { Array } user ["model"]
 */
export function useDva(loadingPaths = {}, users = []){
  const dispatch = useDispatch();
  const loadingEffect = useSelector(state => state.loading);
  const loadings = {};
  const data = useSelector(state => {
    const obj = {};
    users.forEach(m => {
      obj[m] = state[m];
    });
    return obj;
  })
  if(loadingPaths instanceof Object) {
    Object.keys(loadingPaths).forEach(key => {
      loadings[key] = loadingEffect.effects[loadingPaths[key]]
    })
  }
  return {
    dispatch,
    loadings,
    data,
  }
}

// demo: const { dispatch, loadings: { loading }, data: { user = {}}} = useDva({loading: 'user/fetchLogin'},['user'])
