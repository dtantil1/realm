import React, {Fragment} from 'react'
import Typical from 'react-typical'
import Login from "../pages/Login";


const steps = [

    'Level up your warrior ⚔️', 3000,
    'Level up your stamina by running 🏃', 3000,
    'Level up your strength by lifting 🏋️‍', 3000,
    'Level up yours stats by exercising 🚴', 3000,
    'Level up yourself...', 5000,
    'Conquer the Realm...'
];


class Typemove extends React.Component {
    render () {
        return (
            <Fragment>
            <h2><span className="text-white" ><Typical wrapper="p" steps={steps} loop={1}  /></span></h2>
            </Fragment>
        )
    }
}

export default Typemove;