import React from 'react';
import './style.css';
import { LoaderContainer } from './LoaderElements';

const Loader =() => {

    return(
        <>
            <LoaderContainer>
                <svg id="loader" width="289" height="139" viewBox="0 0 289 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 87.5H29L37.5 49L48 108L58 79H73.5L81 1L91 60.5L101 36L108.5 79H128.5L137 138L141.5 30L153 79H176L186 96.5L193.5 79H212L222 36L239.5 138V60.5L251 79H288.5" stroke="#FFFEFE" stroke-width="2"/>
                </svg>
            </LoaderContainer>
        </>
    );

};

export default Loader;