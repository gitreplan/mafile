'use client'
import './internal_meta/globals.css'
import {Pathway} from '@gitreplan/jsbuiltin_ipi_libraries'

import e from "./definition/event"
import './definition/event'

import pathway from './definition/pathway'
import { Button } from './interaction/onclick'


const visitor = new Pathway();
const map = {
    Button,
};
visitor.cook ({
    __events__: e,
    __pathway__: pathway,
    __map__: map,
});
const Partway = visitor.Way;
export default visitor;
export { Partway };