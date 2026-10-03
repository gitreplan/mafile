import app from '../_import_'
import {
    local_library,
    interaction,
    internal_meta,
    type CORE,
    pathway,
    e,
} from "./definition"
import { Partway } from './part';

/**
 * Main template component exported via IPI.render pattern.
 * The Enter class is the component definition, and the configuration object
 * provides stock resources, branch settings, and the render method.
*/
const auth_template =
    app.Inherit()
        (class Auth {})
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
                __Auth__(eff) {
                    return ( <>
                        <Partway
                            key={0}
                            react
                            POST
                            _='Effect'
                        />
                        <this.Way
                            key={1}
                            GET
                            react
                            _='Effect'
                        />
                    </>
                )}
        });
export default auth_template;