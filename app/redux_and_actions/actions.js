import * as api from './web-api'

async function process_basic_async_action(data, action_type) {
  try {
    /* First check to see if there is a corresponding function name in the web api file. Otherwise, treat it as a sync action */
    if (typeof api[action_type.toLowerCase()] === 'function') {
      /* we assume the api used have the exact same name as the action type, but in lower_case */
      const res_from_srv = await api[action_type.toLowerCase()](data)
      return {
        type: action_type.toUpperCase(),
        payload: res_from_srv.data,
      }
    } else {
      /* create a sync action request */
      return {
        type: action_type.toUpperCase(),
        payload: data,
      }
    }
  } catch (Err) {
    return {
      type: action_type.toUpperCase(),
      payload: Err,
    }
  }
}

export const GET_CURRENCY_LISTING = 'GET_CURRENCY_LISTING'

export async function get_currenct_listing(data) {
  return process_basic_async_action(data, GET_CURRENCY_LISTING)
}
