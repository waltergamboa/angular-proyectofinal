import * as fromusuariostate from './usuario-state.reducer';
import { selectusuariostateState } from './usuario-state.selectors';

describe('usuariostate Selectors', () => {
  it('should select the feature state', () => {
    const result = selectusuariostateState({
      [fromusuariostate.usuariostateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
