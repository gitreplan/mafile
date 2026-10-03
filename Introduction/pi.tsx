'use client'
import {
    interaction,
    plan,
    internal,
    library,
    callbacks,
    type CORE,
} from "./def";

const introduction_template =
    IPI.Inherit()
        (class Introduction {}) <CORE>
            ({
                stock: {
                    interaction: {
                        Button,
                        
                    },
                    internal,
                    plan,
                    callbacks,
                },
                __def__: library,
                /**
                 * Render method for the Main template.
                 * Activates the plan and renders the Effect component with the build state.
                */
                __Introduction__(eff) {
                    return ( 
                        <this.Way
                            eff={eff} 
                            react
                            _='Effect'
                        />
                )},
        });
        
import './def/internal/globals.css' 
import IPI, {PI} from '@gitreplan/jsbuiltin_ipi_libraries'
import __callbacks__ from "./def/callback"
import __plan__ from './def/plan'

import { Button } from './int/onclick'
import { ContentAnimate, LoadingAnimate } from './int/animate'

const pi = new PI();
pi.cook ({
    __callbacks__,
    __plan__,
    __map__: {
        Button,
        LoadingAnimate,
        ContentAnimate,
    },
});
const PIWay = pi.Way;
export default pi;
export { PIWay };



