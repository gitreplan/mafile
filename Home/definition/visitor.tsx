'use client'
import './internal_meta/globals.css'
import {Pathway} from '@gitreplan/jsbuiltin_ipi_libraries'

import e from "./event"
import './event'

import pathway from './pathway'
import map from '../interaction/_map_.visitor_'


const visitor = new Pathway();
visitor.cook ({
    __events__: e,
    __pathway__: pathway,
    __map__: map,
});
const VisitorWay = visitor.Way;
export default visitor;
export { VisitorWay };