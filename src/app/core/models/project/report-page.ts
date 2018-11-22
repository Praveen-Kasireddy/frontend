import { ReportPageData } from '@core/models/project/report-page-data';
import { ReportPageGridLayout } from '@core/models/project/report-page-grid-layout';
import { ReportPageLinks } from '@core/models/project/report-page-links';

export class ReportPage {
    data: ReportPageData;
    links: ReportPageLinks;
    grid: ReportPageGridLayout;
}
