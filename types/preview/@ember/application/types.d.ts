declare module '@ember/application/types' {
  export interface EventDispatcherEvents {
    touchstart?: string | null | undefined;
    touchmove?: string | null | undefined;
    touchend?: string | null | undefined;
    touchcancel?: string | null | undefined;
    keydown?: string | null | undefined;
    keyup?: string | null | undefined;
    keypress?: string | null | undefined;
    mousedown?: string | null | undefined;
    mouseup?: string | null | undefined;
    contextmenu?: string | null | undefined;
    click?: string | null | undefined;
    dblclick?: string | null | undefined;
    focusin?: string | null | undefined;
    focusout?: string | null | undefined;
    submit?: string | null | undefined;
    input?: string | null | undefined;
    change?: string | null | undefined;
    dragstart?: string | null | undefined;
    drag?: string | null | undefined;
    dragenter?: string | null | undefined;
    dragleave?: string | null | undefined;
    dragover?: string | null | undefined;
    drop?: string | null | undefined;
    dragend?: string | null | undefined;
    [event: string]: string | null | undefined;
  }
}
