import { Injectable } from '@angular/core';

@Injectable()
export class HtmlTableThemeService {
    private _useInlineCss: boolean = false;

    private _themes = [
        { name: 'kpmg-blue', displayName: 'KPMG Blue', hexColor: '#00338d' },
        { name: 'kpmg-medium-blue', displayName: 'Medium blue', hexColor: '#005eb8' },
        { name: 'kpmg-light-blue', displayName: 'Light blue', hexColor: '#0091da' },
        { name: 'kpmg-violet', displayName: 'Violet', hexColor: '#483698' },
        { name: 'kpmg-purple', displayName: 'Purple', hexColor: '#470a68' },
        { name: 'kpmg-light-purple', displayName: 'Light purple', hexColor: '#6d2077' },
        { name: 'kpmg-green', displayName: 'Green', hexColor: '#00a3a1' },
        { name: 'kpmg-green-haze', displayName: 'Green Haze', hexColor: '#009A44' },
        { name: 'kpmg-apple', displayName: 'Apple', hexColor: '#43B02A' },
        { name: 'kpmg-web-orange', displayName: 'Web Orange', hexColor: '#EAAA00' },
        { name: 'kpmg-sea-buckthorn', displayName: 'Sea Buckthorn', hexColor: '#F68D2E' },
        { name: 'kpmg-maroon-flush', displayName: 'Maroon Flush', hexColor: '#BC204B' },
        { name: 'kpmg-lipstick', displayName: 'Lipstick', hexColor: '#C6007E' },
        { name: 'kpmg-alto', displayName: 'Alto', hexColor: '#D9D9D9' },
        { name: 'kpmg-walnut', displayName: 'Walnut', hexColor: '#753F19' },
        { name: 'kpmg-paarl', displayName: 'Paarl', hexColor: '#9B642E' },
        { name: 'kpmg-gurkha', displayName: 'Gurkha', hexColor: '#909375' },
        { name: 'kpmg-carissma', displayName: 'Carissma', hexColor: '#E38C9F' },
        { name: 'kpmg-sunglo', displayName: 'Sunglo', hexColor: '#E36877' }
    ];

    private _themesClassNames = {};
    private _themesHexClassName = {};

    constructor() {
        this._themes.forEach(_ => {
            this._themesClassNames[_.name] = _.displayName;
            this._themesHexClassName[_.hexColor.toLowerCase()] = _.name;
        });
    }

    private paddingBase: number = 5;

    getColors(): any {
        return Object.keys(this._themesHexClassName);
    }

    getDefaultTheme(): string {
        return this._themes[0].name;
    }

    getKpmgThemeOptions(): any {
        const options: any = {};

        this._themes.forEach(theme => {
            options[theme.name] = theme.displayName;
        });

        return options;
    }

    applyTableThemeByName($table: any, themeName: string): void {
        if ($table.length == 0) {
            return;
        }

        const themeColor: string = this._getThemeColor(themeName);

        if (this._useInlineCss) {
            $table
                .data('theme', themeName)
                .css('border-color', 'transparent')
                .css('border-spacing', '0')
                .css('border-collapse', 'collapse');

            this.applyTableHeaderColor($table, themeColor);
            this.applyTableBodyColor($table, themeColor);
        } else {
            if (!$table.hasClass('kpmg-table')) {
                $table.addClass('kpmg-table');
            }
            this._applyStyle(themeName, $table, false, this._themesClassNames);
        }

        this._setCellColorData($table.find('th, td'), themeColor);
    }

    applyTableThemeByColor($table: any, hexColor: string): void {
        if ($table.length == 0) {
            return;
        }

        const theme = this._themesHexClassName[hexColor.toLowerCase()];
        if (!theme) {
            this.applyTableThemeByName($table, this.getDefaultTheme());
        }

        this.applyTableThemeByName($table, theme);
    }

    applyTableHeaderTheme($table: any, themeName: string): void {
        if (this._useInlineCss) {
            this.applyTableHeaderColor($table, this._getThemeColor(themeName));
        }
    }

    applyTableHeaderColor($table: any, themeColor: string): void {
        if ($table.length == 0) {
            return;
        }

        const $cells = $table.find('th');

        if ($cells.length == 0) {
            return;
        }

        const textColor: string = '#ffffff';

        $cells
            .css('text-align', 'left')
            .css('background-color', themeColor)
            .css('border-color', themeColor)
            .css('color', textColor);

        this._applyTableCellStyle($cells);
    }

    applyTableBodyTheme($table: any, themeName: string): void {
        if (this._useInlineCss) {
            this.applyTableBodyColor($table, this._getThemeColor(themeName));
        }
    }

    applyTableBodyColor($table: any, themeColor: string): void {
        if ($table.length == 0) {
            return;
        }

        const $cells = $table.find('td');

        if ($cells.length == 0) {
            return;
        }

        $cells.css('border-color', themeColor);

        this._applyTableCellStyle($cells);
    }

    applyTableCellPadding($cells: any, padding: any): void {
        if ($cells.length == 0) {
            return;
        }

        $cells.closest('table').data('userPadding', padding);

        $cells
            .data('userPadding', padding)
            .css('padding-right', `${this.paddingBase + padding}px`)
            .css('padding-left', `${this.paddingBase + padding}px`);
    }

    applyTableCellBorderColor($cells: any, color: string): any {
        if (!color) {
            color = this._getThemeColor(this.getDefaultTheme());
        }

        $cells.css('border-color', color);

        this._setCellColorData($cells, color);
    }

    private _applyTableCellStyle($cells: any): void {
        if ($cells.length == 0) {
            return;
        }

        $cells
            .css('border-width', '1px')
            .css('border-style', 'solid')
            .css('border-collapse', 'collapse')
            .css('padding-top', `${this.paddingBase}px`)
            .css('padding-right', `${this.paddingBase}px`)
            .css('padding-bottom', `${this.paddingBase}px`)
            .css('padding-left', `${this.paddingBase}px`);
    }

    private _getThemeColor(themeName: string): string {
        const theme = this._themes.find(t => t.name == themeName);

        if (theme) {
            return theme.hexColor;
        }

        return this._getThemeColor(this.getDefaultTheme());
    }

    private _setCellColorData($cells: any, color: string): void {
        if ($cells.length == 0) {
            return;
        }

        $cells.attr('data-color', color);
    }

    private _applyStyle(className: string, element: any, multiple_styles: boolean, styles: any) {
        if (element.length > 0) {
            // Remove multiple styles.
            if (!multiple_styles) {
                const classes = Object.keys(styles);
                classes.splice(classes.indexOf(className), 1);
                element.removeClass(classes.join(' '));
            }

            element.toggleClass(className);
        }
    }
}
