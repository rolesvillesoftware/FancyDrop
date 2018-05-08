import { ElementRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
export interface IItemSelected {
    item: any;
    source: DropDownComponent;
}
/**
 * Main component for the drop down list
 * @implements OnInit
 */
export declare class DropDownComponent implements OnInit {
    /**
     * The bound data list for the drop down
     * @type {any[]}
     */
    items: any[];
    /**
     * Selected Item for the selected item template - will change if another item is selected
     * @type {any}
     */
    selectedItem: any;
    /**
     * CSS class to append to the control outer shell
     * @type {string}
     */
    cssClass: string;
    /**
     * Event called when the drop list is displayed or hidden
     * @type {EventEmitter<DropDownComponent>}
     */
    listToggle: EventEmitter<DropDownComponent>;
    /**
     * Event called when an item is selected
     * @type {EventEmitter<{item: any; source: DropDownComponent}>}
     */
    itemSelected: EventEmitter<IItemSelected>;
    hideDrop: boolean;
    selectedTemplate: TemplateRef<ElementRef>;
    actionTemplate: TemplateRef<ElementRef>;
    listTemplate: TemplateRef<ElementRef>;
    constructor();
    /**
     * Handles logic for when the drop list header is clicked
     * @param {Event} event - Basic window event for the click
     */
    toggleDrop(event: Event): void;
    /**
     * Handles when a list item is selected
     * @param item Item that was selected
     */
    itemClick(item: any): void;
    /**
     * Determine what should be displayed for the initial selected items
     * @private
     */
    private determineSelectedItem();
    /**
     * Logic hook for On Initialization of the component life cycle.
     * @memberOf OnInit
     */
    ngOnInit(): void;
}
