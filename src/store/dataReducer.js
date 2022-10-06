const defaultState = {
    signUpInfo: {
      mobilePhone: '',
      email: '',
      password: '',
    },
    personalInfo: {
      firstName: '',
      lastName: '',
      gender: '',
      birthday: '',
      ocean: '',
      hobby: []
    }
  }  

const ADD_SIGNUPINFO_DATA = "ADD_SIGNUPINFO_DATA"
const ADD_PERSONALINFO_DATA = "ADD_PERSONALINFO_DATA"

export const dataReducer = (state = defaultState, action) => {
    switch(action.type){
      case ADD_SIGNUPINFO_DATA:
        return {...state, signUpInfo: action.data}
      case ADD_PERSONALINFO_DATA:
        return {...state, personalInfo: action.data}
      default:
        return state
    }
}

export const addSignUpInfoData = (data) => ({type: ADD_SIGNUPINFO_DATA, data})
export const addPersonalInfoData = (data) => ({type: ADD_PERSONALINFO_DATA, data})
