import { Injectable } from '@angular/core';
import { BaseStyle } from 'primeng/base';

const theme = ({ dt }) => `
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: ${dt('inputgroup.addon.background')};
    color: ${dt('inputgroup.addon.color')};
    border-top: 1px solid ${dt('inputgroup.addon.border.color')};
    border-left: 1px solid ${dt('inputgroup.addon.border.color')};
    border-bottom: 1px solid ${dt('inputgroup.addon.border.color')};
    padding: 0.5rem 0.75rem;
    min-width: 2.5rem;
}

.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup-fluid .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-inputgroup-fluid .p-input {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon:last-child {
    border-right: 1px solid ${dt('inputgroup.addon.border.color')};
}

.p-inputgroup > .p-component, .p-inputgroup > p-button > .p-button,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroup > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroupaddon,
.p-inputgroup > .p-floatlabel > .p-component + .p-inputgroupaddon,
.p-inputgroup > .p-iftalabel > .p-component + .p-inputgroupaddon {
    border-left: 0 none;
}

.p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-floatlabel > .p-component:focus,
.p-inputgroup > .p-iftalabel > .p-component:focus {
    z-index: 1;
}

.p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus~label,
.p-inputgroup > .p-floatlabel > .p-component:focus~label,
.p-inputgroup > .p-iftalabel > .p-component:focus~label {
    z-index: 1;
}

.p-inputgroupaddon:first-child,
.p-inputgroup p-button:first-child > .p-button,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-left-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroup .p-floatlabel:first-child input,
.p-inputgroup .p-iftalabel:first-child input {
    border-top-left-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-left-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroupaddon:last-child,
.p-inputgroup p-button:last-child > .p-button,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-right-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroup .p-floatlabel:last-child input,
.p-inputgroup .p-iftalabel:last-child input {
    border-top-right-radius: ${dt('inputgroup.addon.border.radius')};
    border-bottom-right-radius: ${dt('inputgroup.addon.border.radius')};
}

.p-inputgroup-fluid .p-button {
    width: auto;
}

.p-inputgroup-fluid .p-button.p-button-icon-only {
    width: 2.5rem;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display:inline-flex;
}
`;

const classes = {
    root: ({ props }) => [
        'p-inputgroup',
        {
            'p-inputgroup-fluid': props.fluid,
        },
    ],
};

@Injectable()
export class InputGroupStyle extends BaseStyle {
    name = 'inputgroup';

    theme = theme;

    classes = classes;
}

/**
 *
 * InputGroup displays text, icon, buttons and other content can be grouped next to an input.
 *
 * [Live Demo](https://www.primeng.org/inputgroup/)
 *
 * @module inputgroupstyle
 *
 */

export enum InputGroupClasses {
    /**
     * Class name of the root element
     */
    root = 'p-inputgroup',
}

export interface InputGroupStyle extends BaseStyle {}