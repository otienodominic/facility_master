import React, { useReducer } from 'react'
import axios from 'axios'
import FacilityContext from './facilityContext';
import FacilityReducer from './facilityReducer';
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

const FacilityState = (props) => {
  const intialState = {
    FACILITYFilter: false,
    searchFacility: null,
    editFacility: null,
    facilitys: [],
    error: null,
    success: null,
  }
  const [state, dispatch] = useReducer(FacilityReducer, intialState)

  // get FACILITYs

  const getFacilitys = async () => {
    try {
      const res = await axios.get('/api/get_all_facilitys')
      dispatch({
        type: GET_FACILITYS,
        payload: res.data
      })
    } catch (error) {
      const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.msg ||
            error.toString();
      dispatch({
        type: FACILITYS_ERROR,
        payload: resMessage
      })
    }
  }

  // Add FACILITY

  const addFacility = async (facility) => {
    const config = {
      'Content-Type': 'application/json'
    }
    try {
      const res = await axios.post('/api/create-facility', facility, config)
      dispatch({
        type: ADD_FACILITY,
        payload: res.data
      })
    } catch (error) {
      const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.msg ||
            error.toString();
      dispatch({
        type: FACILITYS_ERROR,
        payload: resMessage
      })
    }
  }


  // remove/delete FACILITY

  const removeFacility = async (id) => {
    try {
      await axios.delete(`/api/delete-facility/${id}`)
      dispatch({
        type: REMOVE_FACILITY,
        payload: id
      })
    } catch (error) {
      const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.msg ||
            error.toString();
      dispatch({
        type: FACILITYS_ERROR,
        payload: resMessage
      })
    }
  }

  // update FACILITY

  const updateFacility = async (facility) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.put(`/api/update-FACILITY/${facility._id}`, facility, config)
      dispatch({
        type: UPDATE_FACILITY,
        payload: res.data.msg
      })
      getFacilitys()

    } catch (error) {
      const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.msg ||
            error.toString();
      dispatch({
        type: FACILITYS_ERROR,
        payload: resMessage
      })
    }
  }

  //toggle isconfirmed
  const toggleFacilityFilter = () => {
    dispatch({
      type: TOGGLE_FACILITYFILTER
    })
  }
   // Clear Errors
   const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Search FACILITY
  const search_facility = (facility) => {
    dispatch({
      type: SEARCH_FACILITY,
      payload: facility
    })
  }
  const clearSearchFacility = () => {
    dispatch({
      type: CLEAR_SEARCH
    })
  }

  // Edit FACILITY
  const edit_facility = (facility) => {
    dispatch({
      type: EDIT_FACILITY,
      payload: facility
    })
  }
  const clearEdit = () => {
    dispatch({
      type: CLEAR_EDIT
    })
  }
  const clearFacilitys = () => {
    dispatch({
      type: CLEAR_FACILITYS
    })
  }
  return (
    <FacilityContext.Provider value={{
      facilitys: state.facilitys,
      facilityFilter: state.facilityFilter,
      searchFacility: state.searchFACILITY,
      editFacility: state.editFacility,
      error: state.error,
      success: state.success,
      loading: state.loading,
      addFacility,
      removeFacility,
      edit_facility,
      clearEdit,
      updateFacility,
      toggleFacilityFilter,
      search_facility,
      clearSearchFacility,
      getFacilitys,
      clearFacilitys,
      clearErrors
    }} >
      {props.children}
    </FacilityContext.Provider >
  )
}

export default FacilityState
