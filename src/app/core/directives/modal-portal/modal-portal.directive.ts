import { DOCUMENT } from '@angular/common';
import {
    Directive,
    Inject,
    Input,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';

@Directive({
    selector: '[cvModalPortal]',
    standalone: true,
})
export class ModalPortalDirective {
    @Input() cvModalPortal: string = '';

    private host: Element | null = null;
    private portalIds: string[] = [];

    constructor(
        private tpl: TemplateRef<any>,
        private vcr: ViewContainerRef,
        @Inject(DOCUMENT) private document: Document,
    ) {}

    ngOnInit(): void {
        const viewRef = this.vcr.createEmbeddedView(this.tpl);
        this.host = this.document.querySelector(this.cvModalPortal);

        viewRef.rootNodes.forEach((node: HTMLElement) => {
            const portalId = new Date().getTime() + '';
            node.setAttribute('portal-id', portalId);
            this.portalIds.push(portalId);
            this.host?.appendChild(node);
        });

        console.log(this.portalIds);
        console.log(this.cvModalPortal);
    }

    ngOnDestroy() {
        this.portalIds.forEach((portalId) => {
            this.document.querySelector(`[portal-id="${portalId}"]`)?.remove();
        });
    }
}
