import { FeedStateInterface } from '../types/feed-state.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from './actions/get-feed.action';

const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);

export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
