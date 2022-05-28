import React, {Component, Fragment} from 'react'
import Typical from 'react-typical'

import TypeAnimation from 'react-type-animation';

const steps = [

    'Level up your warrior ⚔️', 2000,
    'Level up yourself 🧍', 2000,
    'Run for stamina', 3000,
    'Lift for strength', 3000,
    'Conquer the Realm...'
];


class Typemove extends React.Component {
    render () {
        return (
            <Fragment>
            <Typical wrapper="p" steps={steps} loop={1}  />
            </Fragment>
        )
    }
}

export default Typemove;