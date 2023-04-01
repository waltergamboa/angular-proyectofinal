import * as fromusuariostate from './usuario-state.reducer';

import { selectUsuarioState } from './usuario-state.selectors';

describe('usuariostate Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUsuarioState({
      [fromusuariostate.usuarioStateFeatureKey]: {}
    });

//    expect(result).toEqual({});
  });
});
