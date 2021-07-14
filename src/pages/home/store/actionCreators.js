import * as actionTypes from "./constants";

import { 
  homeList
} from "@/services/home";

const changeHomeListAction = (res) => ({
  type: actionTypes.CHANGE_HOME_lIST,
  list: res.list
})

export const getHomeListData = () => {
  return dispatch => {
    homeList().then(res => {
      dispatch(changeHomeListAction(res));
    })
  }
}
