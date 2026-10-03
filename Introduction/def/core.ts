/**
 * Purpose:
 *   Type definitions for the Main template component.
 *
 * Role:
 *   Defines the type-safe structure for the Main component:
 *   - States: Component state shape
 *   - Methods: Definition library methods
 *   - Path: Plan configuration
 *   - Events: Event handler signatures
 *   - Inx: Index renderer signatures
 *   - Exports thisCore namespace with all derived types
 *
 * Relationships:
 *   - Imports IPICore from ipis for the base configuration type
 *   - Imports internal_meta_setup_type from ./internal-meta for CSS types
 *   - Used by other definition files for type safety
 *
 * Important Notes:
 *   - Currently has minimal type definitions (template is incomplete)
 *   - Effect() is the only defined index renderer
 *   - The thisCore namespace provides convenient type exports
 *   - Types are derived from IPICore with 'Enter' as the component name
*/
import type { IPI_Core } from "@gitreplan/jsbuiltin_ipi_libraries/types";
import { internal_meta_setup_type } from "./internal";


/* ======
   Component States

====== */
type States = {

};


/* ======
   Component Methods

====== */
type Library = {

};


/* ======
   Path Configuration

====== */
type Path = {

};


/* ======
   Event Handlers
   
====== */
type Events = {

};


/* ======
   Component Index (INX)

====== */
type Interactions = {

   Effect(): void;

};


/* ======


====== */
export namespace thisCore {
   export type Core = any;
   type stock = Core["stock"];
   export type inter = stock["interaction"];
   export type internal_meta = stock["internal_meta"];
   export type use_event = stock["use_event"];
   export type lib = Core["__def__"];
   export type use_path = stock["use_path"];
}
export type CORE = thisCore.Core;
