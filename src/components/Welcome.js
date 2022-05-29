import React, { Component } from 'react'

import ParticleEffectButton from 'react-particle-effect-button'
import { useState } from 'react';


function Welcome (){
    let [state, setState] = useState(false);

    function handleClick (event){
        setState(true)
    }
        return (


            <ParticleEffectButton
                color='#f24602'
                hidden={state}
            >
               <button className="btn btn-dark btn-block" onClick={handleClick}>Boom</button>
            </ParticleEffectButton>
        )
}
export default Welcome