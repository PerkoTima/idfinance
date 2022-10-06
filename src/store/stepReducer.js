const defaultStep = 'signUpInfo'

const SIGNUP = "SIGNUP"
const PERSONALINFO = "PERSONALINFO"
const MODAL = "MODAL"

export const stepReducer = (state = defaultStep, action) => {
    switch(action.type){
      case SIGNUP:
        return state = defaultStep
      case PERSONALINFO:
        return state = action.step
      case MODAL:
        return state = action.step
      default:
        return state = defaultStep
    }
}

export const signUpStep = (step) => ({type: SIGNUP, step})
export const personalInfoStep = (step) => ({type: PERSONALINFO, step})
export const modalStep = (step) => ({type: MODAL, step})