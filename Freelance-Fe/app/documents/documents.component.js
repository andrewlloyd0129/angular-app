"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My First Doc",
                description: "the description for my first doc",
                file_url: "http://google.com",
                updated_at: "three days ago",
                image_url: "http://google.com"
            },
            {
                title: "My second Doc",
                description: "the description for my first doc",
                file_url: "http://google.com",
                updated_at: "two days ago",
                image_url: "http://google.com"
            },
            {
                title: "My third Doc",
                description: "the description for my first doc",
                file_url: "http://google.com",
                updated_at: "yesterday",
                image_url: "http://google.com"
            },
            {
                title: "My last Doc",
                description: "the description for my first doc",
                file_url: "http://google.com",
                updated_at: "today",
                image_url: "http://google.com"
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
