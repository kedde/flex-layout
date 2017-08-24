import {Renderer, Renderer2, RendererStyleFlags2} from '@angular/core';

/**
 * Adapts the 'deprecated' Angular Renderer v1 API to use the new Renderer2 instance
 * This is required for older versions of NgStyle and NgClass: which require
 * the v1 API (but should use the v2 instances)
 */
export class RendererAdapter extends Renderer {
  constructor(private _renderer: Renderer2) {
    super();
  }

  setElementClass(el: any, className: string, isAdd: boolean): void {
    if (isAdd) {
      this._renderer.addClass(el, className);
    } else {
      this._renderer.removeClass(el, className);
    }
  }

  setElementStyle(el: any, styleName: string, styleValue: string): void {
    if (styleValue) {
      this._renderer.setStyle(el, styleName, styleValue);
    } else {
      this._renderer.removeStyle(el, styleName);
    }
  }

  // new API is forwarded
  addClass(el: any, name: string): void {
    this._renderer.addClass(el, name);
  }

  removeClass(el: any, name: string): void {
    this._renderer.removeClass(el, name);
  }

  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {
    this._renderer.setStyle(el, style, value, flags);
  }

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {
    this._renderer.removeStyle(el, style, flags);
  }

  // ******************************************************************
  // !! Renderer is an abstract class with abstract methods
  //
  // These are implementation of those methods... and do NOTHING since
  // we only use setElementStyle() and setElementClass()
  // ******************************************************************

  selectRootElement(): any { }
  createElement(): any { }
  createViewRoot(): any { }
  createTemplateAnchor(): any { }
  createText(): any { }
  projectNodes(): void { }
  attachViewAfter(): void { }
  detachView(): void { }
  destroyView(): void { }
  listen(): Function { return null; }
  listenGlobal(): Function { return null; }
  setElementProperty(): void { }
  setElementAttribute(): void { }
  setBindingDebugInfo(): void { }
  invokeElementMethod(): void { }
  setText(): void { }
  animate(): any { }
}
