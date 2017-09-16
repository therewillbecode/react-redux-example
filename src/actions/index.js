import cuid from "cuid";
import axios from "axios";

import * as types from "./types";

const ROOT_URL = "https://therewillbecode.auth0.com";

export const requestProfile = () => ({
  type: types.REQUEST_PROFILE
});

export const receiveProfile = data => ({
  type: types.RECEIVE_PROFILE,
  data
});

export const requestProfileErr = err => ({
  type: types.REQUEST_PROFILE_ERR,
  err
});

export const fetchProfile = () => {
  return dispatch => {
    dispatch(requestProfile());

    return axios
      .get(`${ROOT_URL}/userinfo`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      })
      .then(({ data }) => dispatch(receiveProfile(data)))
      .catch(err => dispatch(requestProfileErr(err)));
  };
};

export const receiveAsset = (name, comment) => ({
  type: types.RECEIVE_ASSET,
  id: cuid(),
  name,
  timestamp: Date.now(),
  comment
});

export const dispatchAsset = id => ({
  type: types.DISPATCH_ASSET,
  id,
  timestamp: Date.now()
});

export const editAssetName = (id, newName) => ({
  type: types.EDIT_ASSET_NAME,
  id,
  newName
});

export const editAssetComment = (id, newComment) => ({
  type: types.EDIT_ASSET_COMMENT,
  id,
  newComment
});

export const authSuccess = () => ({
  type: types.AUTH_SUCCESS
});

export const loggedOut = () => ({
  type: types.LOGGED_OUT
});
