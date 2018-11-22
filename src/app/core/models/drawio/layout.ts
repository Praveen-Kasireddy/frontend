import { LayoutContainer } from '@core/models/';

export class Layout {
    id: number;
    name: string;
    imageSrc: string;
    layoutColumn: boolean;
    layoutContainers: LayoutContainer[];
}
