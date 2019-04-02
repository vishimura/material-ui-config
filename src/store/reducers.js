import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../routes/history'
// import { reducer as formReducer } from 'redux-form'

// import localReducer from '../home/homeReducer'
// import profissionaisReducer from '../cidade/cidadeReducer'
// import perfilReducer from '../perfil/perfilReducer'
// import DashboardReducer from '../dashboard/dashboardReducer'
// import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    router: connectRouter(history)
    // local: localReducer,
    // profissionais: profissionaisReducer,
    // perfil: perfilReducer 
    // billingCycle: BillingCycleReducer,
    // form: formReducer
})

export default rootReducer