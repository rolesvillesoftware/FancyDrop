"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
/**
 * Main component for the drop down list
 * @implements OnInit
 */
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        /**
         * The bound data list for the drop down
         * @type {any[]}
         */
        this.items = [];
        /**
         * Selected Item for the selected item template - will change if another item is selected
         * @type {any}
         */
        this.selectedItem = null;
        /**
         * CSS class to append to the control outer shell
         * @type {string}
         */
        this.cssClass = null;
        /**
         * Event called when the drop list is displayed or hidden
         * @type {EventEmitter<DropDownComponent>}
         */
        this.listToggle = new core_1.EventEmitter();
        /**
         * Event called when an item is selected
         * @type {EventEmitter<{item: any; source: DropDownComponent}>}
         */
        this.itemSelected = new core_1.EventEmitter();
        this.hideDrop = true;
    }
    /**
     * Handles logic for when the drop list header is clicked
     * @param {Event} event - Basic window event for the click
     */
    DropDownComponent.prototype.toggleDrop = function (event) {
        var _this = this;
        if (this.hideDrop) {
            this.hideDrop = false;
        }
        else {
            rxjs_1.timer(1)
                .subscribe(function (d) {
            }, function (e) {
            }, function () {
                _this.hideDrop = true;
            });
        }
        this.listToggle.emit(this);
        event.stopPropagation();
    };
    /**
     * Handles when a list item is selected
     * @param item Item that was selected
     */
    DropDownComponent.prototype.itemClick = function (item) {
        this.selectedItem = item;
        this.itemSelected.emit({ item: item, source: this });
    };
    /**
     * Determine what should be displayed for the initial selected items
     * @private
     */
    DropDownComponent.prototype.determineSelectedItem = function () {
        if (this.selectedItem != null) {
            return;
        }
        if (this.items == null || this.items.length === 0) {
            this.selectedItem = {};
        }
        else {
            this.selectedItem = this.items[0];
        }
    };
    /**
     * Logic hook for On Initialization of the component life cycle.
     * @memberOf OnInit
     */
    DropDownComponent.prototype.ngOnInit = function () {
        this.determineSelectedItem();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DropDownComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DropDownComponent.prototype, "selectedItem", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropDownComponent.prototype, "cssClass", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
    ], DropDownComponent.prototype, "listToggle", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
    ], DropDownComponent.prototype, "itemSelected", void 0);
    __decorate([
        core_1.ContentChild('selectedTemplate'),
        __metadata("design:type", typeof (_c = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _c || Object)
    ], DropDownComponent.prototype, "selectedTemplate", void 0);
    __decorate([
        core_1.ContentChild('actionTemplate'),
        __metadata("design:type", typeof (_d = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _d || Object)
    ], DropDownComponent.prototype, "actionTemplate", void 0);
    __decorate([
        core_1.ContentChild('listTemplate'),
        __metadata("design:type", typeof (_e = typeof core_1.TemplateRef !== "undefined" && core_1.TemplateRef) === "function" && _e || Object)
    ], DropDownComponent.prototype, "listTemplate", void 0);
    DropDownComponent = __decorate([
        core_1.Component({
            selector: 'app-fancy-drop-down',
            templateUrl: './drop-down.component.html',
            styleUrls: ['./drop-down.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DropDownComponent);
    return DropDownComponent;
    var _a, _b, _c, _d, _e;
}());
exports.DropDownComponent = DropDownComponent;
//# sourceMappingURL=drop-down.component.js.map