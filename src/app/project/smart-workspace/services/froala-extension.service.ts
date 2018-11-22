import { Injectable } from '@angular/core';
import { KosmosConfigurationService } from '@core/services/configuration/kosmos-configuration.service';
import { HtmlTableThemeService } from './html-table-theme.service';

declare var $: any;

@Injectable()
export class FroalaExtensionService {
    private _tableColorTemplates: Object = {
        'table.kpmg.borderColors': {
            template: '[_BUTTONS_][_COLORS_]',
            popupName: 'table.kpmg.borderColors',
            cmdName: 'kpmgTableApplyCellBorderColor'
        },
        'table.kpmg.themes': {
            template: '[_BUTTONS_][_COLORS_]',
            popupName: 'table.kpmg.themes',
            cmdName: 'kpmgTableApplyTheme'
        }
    };

    constructor(private _htmlTableThemeService: HtmlTableThemeService) {}

    getFroalaOptions(): any {
        const parent = this;
        return {
            htmlAllowedTags: [...$.FE.DEFAULTS.htmlAllowedTags],
            key: KosmosConfigurationService.appConfig.FROALA_LICENSE_KEY,
            charCounterCount: false,
            height: 300,
            toolbarSticky: false,
            autofocus: true,
            shortcutsHint: true,
            imageUpload: false,
            fileUpload: false,
            videoUpload: false,
            quickInsertButtons: ['table', 'ul', 'ol', 'hr'],
            quickInsertTags: ['p', 'h1', 'h2', 'h3', 'blockquote'],
            fontSizeSelection: true,
            fontSize: ['8', '9', '10', '11', '12', '14', '16', '18', '24', '30', '36', '48', '60', '72', '96'],
            fontSizeDefaultSelection: '14',
            paragraphFormat: {
                H1: 'Heading 1',
                H2: 'Heading 2',
                H3: 'Heading 3',
                N: 'Paragraph',
                BLOCKQUOTE: 'Quote'
            },
            paragraphFormatSelection: true,
            paragraphDefaultSelection: 'Paragraph',
            toolbarButtons: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                '|',
                'paragraphFormat',
                'fontSize',
                'color',
                '-',
                'align',
                'formatOL',
                'formatUL',
                'outdent',
                'indent',
                '|',
                'insertTable',
                '|',
                'specialCharacters',
                'insertHR',
                'selectAll',
                '|',
                'undo',
                'redo'
            ],
            tableEditButtons: [
                'kpmgTableHeader',
                'kpmgTableCellBorderColor',
                'kpmgTableTheme',
                '|',
                'tableRows',
                'tableColumns',
                'tableRemove',
                '-',
                'tableCells',
                'tableCellBackground',
                'tableCellVerticalAlign',
                'tableCellHorizontalAlign'
            ],
            tableColors: [...this._htmlTableThemeService.getColors(), '#FFFFFF', 'REMOVE'],
            tableThemeColor: [...this._htmlTableThemeService.getColors(), 'REMOVE'],
            events: {
                'froalaEditor.table.inserted': function(e, editor, table) {
                    $(table).addClass('kpmg-table');

                    parent._addInitialHeader($(table));

                    // Update cursor position.
                    editor.selection.restore();

                    parent._htmlTableThemeService.applyTableThemeByName(
                        $(table),
                        parent._htmlTableThemeService.getDefaultTheme()
                    );
                }
            },
            helpSets: [
                {
                    title: 'Common actions',
                    commands: [
                        { val: 'OSkeyC', desc: 'Copy' },
                        { val: 'OSkeyX', desc: 'Cut' },
                        { val: 'OSkeyV', desc: 'Paste' },
                        { val: 'OSkeyZ', desc: 'Undo' },
                        { val: 'OSkeyShift+Z', desc: 'Redo' }
                    ]
                },
                {
                    title: 'Basic Formatting',
                    commands: [
                        { val: 'OSkeyA', desc: 'Select All' },
                        { val: 'OSkeyB', desc: 'Bold' },
                        { val: 'OSkeyI', desc: 'Italic' },
                        { val: 'OSkeyU', desc: 'Underline' },
                        { val: 'OSkeyS', desc: 'Strikethrough' },
                        { val: 'OSkey]', desc: 'Increase Indent' },
                        { val: 'OSkey[', desc: 'Decrease Indent' }
                    ]
                },
                {
                    title: 'Quote',
                    commands: [
                        { val: "OSkey'", desc: 'Increase quote level' },
                        { val: "OSkeyShift+'", desc: 'Decrease quote level' }
                    ]
                },
                {
                    title: 'Table',
                    commands: [
                        { val: 'Alt+Space', desc: 'Select table cell' },
                        { val: 'Shift+Left/Right arrow', desc: 'Extend selection one cell' },
                        { val: 'Shift+Up/Down arrow', desc: 'Extend selection one row' }
                    ]
                }
            ]
        };
    }

    init(): void {
        const parent = this;

        $.extend($.FE.POPUP_TEMPLATES, {
            'table.kpmg.borderColors': this._tableColorTemplates['table.kpmg.borderColors'].template,
            'table.kpmg.themes': this._tableColorTemplates['table.kpmg.themes'].template
        });

        // Select table cell border color command.
        $.FE.RegisterCommand('kpmgTableApplyCellBorderColor', {
            undo: true,
            focus: false,
            callback: function(cmd, val) {
                parent._setBorder(val, this);
            }
        });

        // Select table cell border color command.
        $.FE.RegisterCommand('kpmgTableApplyTheme', {
            undo: true,
            focus: false,
            callback: function(cmd, val) {
                parent._htmlTableThemeService.applyTableThemeByColor(
                    this.$el.find('.fr-selected-cell').closest('table'),
                    val
                );
            }
        });

        $.FroalaEditor.RegisterCommand('kpmgTableHeader', {
            title: 'Table Header',
            icon: 'tableHeader',
            focus: false,
            toggle: true,
            callback: function() {
                if (
                    this.popups
                        .get('table.edit')
                        .find('.fr-command[data-cmd="kpmgTableHeader"]')
                        .hasClass('fr-active')
                ) {
                    this.table.removeHeader();
                } else {
                    this.table.addHeader();
                    parent._htmlTableThemeService.applyTableHeaderTheme(
                        this.table.selectedTable(),
                        this.table.selectedTable().data('theme')
                    );
                }
            },
            refresh: function(e) {
                const table = this.table.selectedTable();
                if (table.length > 0 && table.find('th').length == 0) {
                    e.removeClass('fr-active').attr('aria-pressed', false);
                } else {
                    e.addClass('fr-active').attr('aria-pressed', true);
                }
            }
        });

        $.FroalaEditor.DefineIcon('kpmgTableCellBorderColor', {
            NAME: 'square-o',
            FA5NAME: 'square'
        });
        $.FroalaEditor.RegisterCommand('kpmgTableCellBorderColor', {
            title: 'Border Color',
            icon: 'kpmgTableCellBorderColor',
            undo: true,
            focus: false,
            popup: true,
            refreshAfterCallback: true,
            callback: function(cmd, val, params) {
                parent._showColorPopup(this, parent._tableColorTemplates['table.kpmg.borderColors']);
            }
        });

        $.FroalaEditor.DefineIcon('kpmgTableTheme', { NAME: 'tint' });
        $.FroalaEditor.RegisterCommand('kpmgTableTheme', {
            title: 'Table Theme',
            icon: 'kpmgTableTheme',
            undo: true,
            focus: false,
            popup: true,
            refreshAfterCallback: true,
            callback: function(cmd, val, params) {
                parent._showColorPopup(this, parent._tableColorTemplates['table.kpmg.themes']);
            }
        });
    }

    /*
     * Set background color to selected cells.
     */
    private _setBorder(color: any, editor: any): void {
        const $selected_cells = editor.$el.find('.fr-selected-cell');

        // Set background  color.
        if (color != 'REMOVE') {
            this._htmlTableThemeService.applyTableCellBorderColor($selected_cells, color);
        } else {
            this._htmlTableThemeService.applyTableCellBorderColor($selected_cells, undefined);
        }

        editor.table.showEditPopup();
    }

    private _showColorPopup(editor: any, config: any): void {
        const popupName = config.popupName;

        // Set popup position.
        const map = this._tableMap(editor);

        if (map) {
            let $popup = editor.popups.get(popupName);

            if (!$popup) {
                $popup = this._initColorsPopup(editor, config);
            }

            editor.popups.setContainer(popupName, editor.$sc);
            const offset = this._selectionOffset(map, editor);
            const left = (offset.left + offset.right) / 2;
            const top = offset.bottom;

            // Refresh selected color.
            this._refreshColor(editor, config);

            editor.popups.show(popupName, left, top, offset.bottom - offset.top);
        }
    }

    private _tableMap(editor: any): any {
        let $table = null;

        const map = [];

        if (editor.table.selectedCells().length > 0) {
            $table = editor.table.selectedTable();
        }

        if ($table) {
            $table
                .find('tr:visible')
                .not($table.find('table tr'))
                .each(function(row, tr) {
                    const $tr = $(tr);

                    let c_index = 0;
                    $tr.find('> th, > td').each(function(col, td) {
                        const $td = $(td);
                        const cspan = parseInt($td.attr('colspan'), 10) || 1;
                        const rspan = parseInt($td.attr('rowspan'), 10) || 1;

                        for (let i = row; i < row + rspan; i++) {
                            for (let j = c_index; j < c_index + cspan; j++) {
                                if (!map[i]) {
                                    map[i] = [];
                                }

                                if (!map[i][j]) {
                                    map[i][j] = td;
                                } else {
                                    c_index++;
                                }
                            }
                        }

                        c_index += cspan;
                    });
                });
        }

        return map;
    }

    private _initColorsPopup(editor: any, config: any): any {
        const popupName = config.popupName;

        // Table colors buttons.
        let table_buttons = '';

        if (editor.opts.tableColorsButtons.length > 0) {
            table_buttons =
                '<div class="fr-buttons fr-table-colors-buttons">' +
                editor.button.buildList(editor.opts.tableColorsButtons) +
                '</div>';
        }

        const template = {
            buttons: table_buttons,
            colors: this._colorsHTML(editor, config)
        };

        const $popup = editor.popups.create(popupName, template);

        editor.events.$on(editor.$wp, 'scroll.table-colors', function() {
            if (editor.popups.isVisible(popupName)) {
                this._showBorderColorPopup(editor);
            }
        });

        this._addColorsAccessibility($popup, editor, config);

        return $popup;
    }

    private _colorsHTML(editor: any, config: any): any {
        const commandName = config.cmdName;

        // Create colors html.
        let colors_html = '<div class="fr-table-colors">';

        // Add colors.
        for (let i = 0; i < editor.opts.tableThemeColor.length; i++) {
            if (i !== 0 && i % editor.opts.tableColorsStep === 0) {
                colors_html += '<br>';
            }

            if (editor.opts.tableThemeColor[i] != 'REMOVE') {
                colors_html +=
                    '<span class="fr-command" style="background: ' +
                    editor.opts.tableThemeColor[i] +
                    ';" tabIndex="-1" role="button" data-cmd="' +
                    commandName +
                    '" data-param1="' +
                    editor.opts.tableThemeColor[i] +
                    '"><span class="fr-sr-only">' +
                    editor.language.translate('Color') +
                    ' ' +
                    editor.opts.tableThemeColor[i] +
                    '&nbsp;&nbsp;&nbsp;</span></span>';
            } else {
                colors_html +=
                    // tslint:disable-next-line:max-line-length
                    '<span class="fr-command" data-cmd="' +
                    commandName +
                    '" tabIndex="-1" role="button" data-param1="REMOVE" title="' +
                    editor.language.translate('Clear Formatting') +
                    '">' +
                    editor.icon.create('tableColorRemove') +
                    '<span class="fr-sr-only">' +
                    editor.language.translate('Clear Formatting') +
                    '</span></span>';
            }
        }

        colors_html += '</div>';

        return colors_html;
    }

    private _addColorsAccessibility($popup: any, editor: any, config: any): void {
        const popupName = config.popupName;

        // Register popup event.
        editor.events.on(
            'popup.tab',
            function(e) {
                const $focused_item = $(e.currentTarget);

                // Skip if popup is not visible or focus is elsewere.
                if (!editor.popups.isVisible(popupName) || !$focused_item.is('span')) {
                    return true;
                }
                const key_code = e.which;
                let status = true;

                // Tabbing.
                if ($.FE.KEYCODE.TAB == key_code) {
                    const $tb = $popup.find('.fr-buttons');

                    // Focus back the popup's toolbar if exists.
                    status = !editor.accessibility.focusToolbar($tb, e.shiftKey ? true : false);
                } else if (
                    $.FE.KEYCODE.ARROW_UP == key_code ||
                    $.FE.KEYCODE.ARROW_DOWN == key_code ||
                    $.FE.KEYCODE.ARROW_LEFT == key_code ||
                    $.FE.KEYCODE.ARROW_RIGHT == key_code
                ) {
                    // Arrows.

                    // Get all current colors.
                    const $colors = $focused_item.parent().find('span.fr-command');

                    // Get focused item position.
                    const index = $colors.index($focused_item);

                    // Get color matrix dimensions.
                    const columns = editor.opts.colorsStep;
                    const lines = Math.floor($colors.length / columns);

                    // Get focused item coordinates.
                    const column = index % columns;
                    const line = Math.floor(index / columns);

                    let nextIndex = line * columns + column;
                    const dimension = lines * columns;

                    // Calculate next index. Go to the other opposite site of the matrix if there is no next adjacent element.
                    // Up/Down: Traverse matrix lines.
                    // Left/Right: Traverse the matrix as it is a vector.
                    if ($.FE.KEYCODE.ARROW_UP == key_code) {
                        nextIndex = (((nextIndex - columns) % dimension) + dimension) % dimension; // Javascript negative modulo bug.
                    } else if ($.FE.KEYCODE.ARROW_DOWN == key_code) {
                        nextIndex = (nextIndex + columns) % dimension;
                    } else if ($.FE.KEYCODE.ARROW_LEFT == key_code) {
                        nextIndex = (((nextIndex - 1) % dimension) + dimension) % dimension; // Javascript negative modulo bug.
                    } else if ($.FE.KEYCODE.ARROW_RIGHT == key_code) {
                        nextIndex = (nextIndex + 1) % dimension;
                    }

                    // Get the next element based on the new index.
                    const $el = $($colors.get(nextIndex));

                    // Focus.
                    editor.events.disableBlur();
                    $el.focus();

                    status = false;
                } else if ($.FE.KEYCODE.ENTER == key_code) {
                    // ENTER or SPACE.

                    editor.button.exec($focused_item);
                    status = false;
                }

                // Prevent propagation.
                if (status === false) {
                    e.preventDefault();
                    e.stopPropagation();
                }

                return status;
            },
            true
        );
    }

    private _selectionOffset(map: any, editor: any): any {
        const selection = this._currentSelection(map, editor);

        // Top left cell.
        const $tl = $(map[selection.min_i][selection.min_j]);

        // Top right cell.
        const $tr = $(map[selection.min_i][selection.max_j]);

        // Bottom left cell.
        const $bl = $(map[selection.max_i][selection.min_j]);

        const left = $tl.offset().left;
        const right = $tr.offset().left + $tr.outerWidth();
        const top = $tl.offset().top;
        const bottom = $bl.offset().top + $bl.outerHeight();

        return {
            left: left,
            right: right,
            top: top,
            bottom: bottom
        };
    }

    private _currentSelection(map: any, editor: any): any {
        const cells = editor.$el.find('.fr-selected-cell');

        if (cells.length > 0) {
            let min_i = map.length;
            let max_i = 0;
            let min_j = map[0].length;
            let max_j = 0;

            for (let i = 0; i < cells.length; i++) {
                const cellOrigin = this._cellOrigin(cells[i], map);
                const cellEnd = this._cellEnds(cellOrigin.row, cellOrigin.col, map);

                min_i = Math.min(cellOrigin.row, min_i);
                max_i = Math.max(cellEnd.row, max_i);
                min_j = Math.min(cellOrigin.col, min_j);
                max_j = Math.max(cellEnd.col, max_j);
            }

            return {
                min_i: min_i,
                max_i: max_i,
                min_j: min_j,
                max_j: max_j
            };
        } else {
            return null;
        }
    }

    /*
     * Get the i, j coordinates of a cell in the table map.
     * These are the coordinates where the cell starts.
     */
    private _cellOrigin(td, map): any {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] == td) {
                    return {
                        row: i,
                        col: j
                    };
                }
            }
        }
    }

    /*
     * Get the i, j coordinates where a cell ends in the table map.
     */
    private _cellEnds(origin_i, origin_j, map): any {
        let max_i = origin_i + 1;
        let max_j = origin_j + 1;

        // Compute max_i
        while (max_i < map.length) {
            if (map[max_i][origin_j] != map[origin_i][origin_j]) {
                max_i--;
                break;
            }

            max_i++;
        }

        if (max_i == map.length) {
            max_i--;
        }

        // Compute max_j
        while (max_j < map[origin_i].length) {
            if (map[origin_i][max_j] != map[origin_i][origin_j]) {
                max_j--;
                break;
            }

            max_j++;
        }

        if (max_j == map[origin_i].length) {
            max_j--;
        }

        return {
            row: max_i,
            col: max_j
        };
    }

    /*
     * Show the current selected color.
     */
    private _refreshColor(editor: any, config: any): void {
        const popupName = config.popupName;

        const $popup = editor.popups.get(popupName);
        const $cell = editor.$el.find('.fr-selected-cell:first');
        const color = $cell.attr('data-color');
        const $input = $popup.find('.fr-table-colors-hex-layer input');

        // Remove current color selection.
        $popup.find('.fr-selected-color').removeClass('fr-selected-color fr-active-item');

        // Find the selected color.
        $popup.find('span[data-param1="' + color.toLowerCase() + '"]').addClass('fr-selected-color fr-active-item');
        $input.val(color).trigger('change');
    }

    /*
     * Add initial table header.
     */
    private _addInitialHeader($table: any): void {
        if ($table.length > 0 && $table.find('th').length === 0) {
            // Create header HTML.
            let thead = '<thead><tr>';

            let i;
            let col = 0;

            // Get first row and count table columns.
            $table.find('tr:first > td').each(function() {
                const $td = $(this);

                col += parseInt($td.attr('colspan'), 10) || 1;
            });

            // Add cells.
            for (i = 0; i < col; i++) {
                thead += '<th>';
                if (i == 0) {
                    thead += $.FE.MARKERS;
                }
                thead += '<br></th>';
            }

            thead += '</tr></thead>';

            $table.prepend(thead);
        }
    }
}
