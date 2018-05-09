import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';

export interface IItemSelected {
    item: any;
    source: DropDownComponent;
}
/**
 * Main component for the drop down list
 * @implements OnInit
 */
@Component({
    selector: 'app-fancy-drop-down',
    templateUrl: './drop-down.component.html',
    styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

    /**
     * The bound data list for the drop down
     * @type {any[]}
     */
    @Input() items: any[] = [];
    /**
     * Selected Item for the selected item template - will change if another item is selected
     * @type {any}
     */
    @Input() selectedItem: any = null;
    /**
     * CSS class to append to the control outer shell
     * @type {string}
     */
    @Input() cssClass: string = null;

    /**
     * Event called when the drop list is displayed or hidden
     * @type {EventEmitter<DropDownComponent>}
     */
    @Output() listToggle: EventEmitter<DropDownComponent> = new EventEmitter<DropDownComponent>();

    /**
     * Event called when an item is selected
     * @type {EventEmitter<{item: any; source: DropDownComponent}>}
     */
    @Output() itemSelected: EventEmitter<IItemSelected> = new EventEmitter<IItemSelected>();

    hideDrop = true;

    @ContentChild('selectedTemplate') selectedTemplate: TemplateRef<ElementRef>;
    @ContentChild('actionTemplate') actionTemplate: TemplateRef<ElementRef>;
    @ContentChild('listTemplate') listTemplate: TemplateRef<ElementRef>;

    constructor() {
    }

    /**
     * Handles logic for when the drop list header is clicked
     * @param {Event} event - Basic window event for the click
     */
    toggleDrop(event: Event) {
        if (this.hideDrop) {
            this.hideDrop = false;
        } else {
            Observable
                .of(null)
                .delay(1)
                .subscribe(
                    d => {
                    },
                    e => {
                    },
                    () => {
                        this.hideDrop = true;
                    }
                );
        }
        this.listToggle.emit(this);
        event.stopPropagation();
    }

    /**
     * Handles when a list item is selected
     * @param item Item that was selected
     */
    itemClick(item: any) {
        this.selectedItem = item;
        this.itemSelected.emit({item: item, source: this});
    }

    /**
     * Determine what should be displayed for the initial selected items
     * @private
     */
    private determineSelectedItem() {
        if (this.selectedItem != null) {
            return;
        }

        if (this.items == null || this.items.length === 0) {
            this.selectedItem = {};
        } else {
            this.selectedItem = this.items[0];
        }
    }

    /**
     * Logic hook for On Initialization of the component life cycle.
     * @memberOf OnInit
     */
    ngOnInit() {
        this.determineSelectedItem();
    }

}
