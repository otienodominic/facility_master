import {
    TOGGLE_FACILITYFILTER,
    SEARCH_FACILITY,
    CLEAR_SEARCH,
    REMOVE_FACILITY,
    ADD_FACILITY,
    EDIT_FACILITY,
    CLEAR_EDIT,
    UPDATE_FACILITY,
    GET_FACILITYS,
    FACILITYS_ERROR,
    CLEAR_FACILITYS,
    CLEAR_ERRORS,
    
  } from '../types'
  
  export default (state, { type, payload }) => {
    switch (type) {
      case GET_FACILITYS:
        return {
          ...state,
          facilitys: payload,
          error: null
        }
      case ADD_FACILITY:
        return {
          ...state,
          facilitys: [...state.facilitys, payload]
        }
      case REMOVE_FACILITY:
        return {
          ...state,
          facilitys: state.facilitys.filter(facility => facility._id !== payload)
        }
      case EDIT_FACILITY:
        return {
          ...state,
          editFacility: payload
        }
      case CLEAR_EDIT:
        return {
          ...state,
          editFacility: null
        }
      case UPDATE_FACILITY:
        return {
          ...state,
          facilitys: state.facilitys.map(facility => facility._id === payload._id ? payload : facility),
          success: payload
        }
      case TOGGLE_FACILITYFILTER:
        return {
          ...state,
          facilityFilter: !state.facilityFilter
        }
      case SEARCH_FACILITY:
        const regex = new RegExp(`${payload}`, 'gi')
        return {
          ...state,
          searchFacility: state.facilitys.filter(facility => facility.patientName.match(regex))
        }
      case CLEAR_SEARCH:
        return {
          ...state,
          searchFacility: null
        }
      case FACILITYS_ERROR:
        return {
          ...state,
          error: payload,
        }
        case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      }
      case CLEAR_FACILITYS:
        return {
          ...state,
          facilityFilter: false,
          searchFacility: null,
          editFacility: null,
          facilitys: [],
          error: null
        }
      default:
        return state
    }
  }