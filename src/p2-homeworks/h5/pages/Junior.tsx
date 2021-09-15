import React from 'react'
import HW7 from '../../h7/HW7';
import HW8 from '../../h8/HW8';
import HW9 from '../../h9/HW9';
import HW10 from "../../h10/HW10";
import store from "../../h10/bll/store";
import { Provider } from 'react-redux';
import HW11 from '../../h11/HW11';

function Junior() {
    return (
        <div>
            JUNIOR
            <HW7/>
            <HW8/>
            <HW9/>
            <Provider store={store}>
              <HW10/>
            </Provider>
            <HW11/>
        </div>
    )
}

export default Junior