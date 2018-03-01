import * as actionType from "./actionType";

export function beginAjaxCall() {
  return { type: actionType.BEGIN_AJAX_CALL };
}

export function ajaxCallError() {
  return { type: actionType.AJAX_CALL_ERROR };
}
