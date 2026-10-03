import app from '../_import_'
import {
    local_library,
    interaction,
    internal_meta,
    type CORE,
    pathway,
    e,
} from "./definition"
import { VisitorWay } from './definition/visitor';

/**
 * Main template component exported via IPI.render pattern.
 * The Enter class is the component definition, and the configuration object
 * provides stock resources, branch settings, and the render method.
*/
const home_template =
    app.Inherit()
        (class Home {})
            ({
                stock: {
                    interaction,
                    internal_meta,
                    pathway,
                    events: e,
                },
                __def__: local_library,
                /**
                 * Render method for the Main template.
                 * Activates the plan and renders the Effect component with the build state.
                */
                __Home__(eff) {
                    return ( <>
                        <VisitorWay 
                            key={0} 
                            react 
                            _='Effect' 
                        />
                        <this.Way
                            key={1} 
                            react 
                            _='Effect'
                        />
                    </>
                )}
        });
export default home_template;