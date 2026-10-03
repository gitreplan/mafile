import app from '../_import_';
import {
    interaction,
    plan,
    internal,
    library,
    callbacks,
    PIWay,
    type CORE,
} from "./def";



const introduction_template =
    app.Inherit()
        (class Introduction {}) <CORE>
            ({
                stock: {
                    interaction,
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
export default introduction_template;