import reducer from './modalReducer';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';
import initialState from './initialState';

let state;

describe('modal reducer', () => {
  describe('Given no action type', () => {
    beforeAll(() => {
      state = reducer(undefined, {});
    });

    it('should return the initial state', () => {
      expect(state).toEqual(initialState.modal);
    });
  });

  describe('Given an action type - `SHOW_MODAL`', () => {
    const type = SHOW_MODAL;

    describe('and action data', () => {
      const data = { firstName: 'Afees', initials: 'D', surname: 'Kolawole' };

      beforeAll(() => {
        state = reducer(initialState.modal, { type, data });
      });

      it('should return an `isOpen` state of true and the appropriate data', () => {
        expect(state).toEqual({ isOpen: true, data: { firstName: 'Afees', initials: 'D', surname: 'Kolawole' } });
      });
    });
  });

  describe('Given an action type - `HIDE_MODAL`', () => {
    const type = HIDE_MODAL;

    beforeAll(() => {
      state = reducer({}, { type });
    });

    it('should return the initial state', () => {
      expect(state).toEqual(initialState.modal);
    });
  });
});
