import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/Home/store'
import {reducer as detailReducer} from '../pages/details/store'
import {reducer as LoginReducer} from '../pages/login/store'
import {reducer as AuthorRudecer} from '../pages/allAuthor/store'
export default combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:LoginReducer,
    author:AuthorRudecer
})
