import React, { Component } from 'react'

import ParticleEffectButton from 'react-particle-effect-button'
import { useState } from 'react';


function Welcome (){
    let [state, setState] = useState(false);

    function handleClick (event){
        console.log("before click " + state)
        setState(true)
        console.log("boom click " + state)
    }
        return (
            <ParticleEffectButton
                color='#402959'
                hidden={state}
            >
               <button className={"btn-primary"} onClick={handleClick}>BOOM</button>
            </ParticleEffectButton>
        )
}
export default Welcome