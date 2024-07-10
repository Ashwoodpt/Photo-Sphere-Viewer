import { TypedEvent } from '@photo-sphere-viewer/core';
import type { MapPlugin } from './MapPlugin';

/**
 * @event Triggered when the user clicks on a hotspot
 */
export class SelectHotspot extends TypedEvent<MapPlugin> {
    static override readonly type = 'select-hotspot';
    override type: 'select-hotspot';

    /** @internal */
    constructor(public readonly hotspotId: string) {
        super(SelectHotspot.type);
    }
}

/**
 * @event Triggered when the size of the map changes
 */
export class ViewChanged extends TypedEvent<MapPlugin> {
    static override readonly type = 'view-changed';
    override type: 'view-changed';

    /** @internal */
    constructor(public readonly view: 'closed' | 'normal' | 'maximized') {
        super(ViewChanged.type);
    }
}

export type MapPluginEvents = SelectHotspot | ViewChanged;
