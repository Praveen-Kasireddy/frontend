import { dataExplorerHelper } from './DataExplorerHelper';
import { dataExplorerQueryBuilder } from './DataExplorerQueryBuilder';
import { dataExplorerSections } from './DataExplorerSections';

class DataExplorerFormulas {
    addFormulaSection(container, id, formula) {
        // Create generic section.
        let section = dataExplorerSections.addSection('formula', container, 'Formula', id);
        section.addClass('item-with-formula');

        // Create formula input.
        let input = $(
            '<div contenteditable="true" class="_formula _prevent-sort" name="formula" id="formula_input_' +
                id +
                '" value="">'
        );
        input.html(formula);
        this.initInput(input);
        section.append(input);

        // Create query button.
        let queryElement = $('<span class="_button _query"><i class="fa fa-flask" aria-hidden="true"></i></span>');
        queryElement.on('click', e => {
            this.onBuilderClick(input, e);
        });
        section.append(queryElement);

        return section;
    }

    initInput(input) {
        this.parseFormulaInput(input);

        input.on('blur', e => {
            this.onInputBlur(e);
        });
        input.on('click', 'i', e => {
            this.onInputBuilderClick(e);
        });
        input.on('keydown', e => {
            this.onInputKeyDown(e);
        });
    }

    onInputBlur(e) {
        const input = $(e.target);

        // Skip?
        if (input.prop('data-skip-blur')) {
            input.prop('data-skip-blur', false);
            return;
        }

        this.parseFormulaInput(input);
        dataExplorerHelper.saveAndUpdate();
    }

    onInputBuilderClick(e) {
        const icon = $(e.target);
        const input = $(e.delegateTarget);
        let filters;
        try {
            filters = JSON.parse(icon.attr('data-args'));
        } catch (e) {
            filters = {};
        }

        // Skip next blur event.
        input.prop('data-skip-blur', true);
        dataExplorerQueryBuilder.open(filters, query => {
            // Update formula.
            query = query.slice(6, -1);
            icon.attr('data-args', query);
            this.parseFormulaInput(input);

            if (!input.attr('data-equality-prefix')) {
                dataExplorerHelper.saveAndUpdate();
            } else {
                input.trigger('blur');
            }
        });

        e.preventDefault();
    }

    onInputKeyDown(e) {
        if (e.keyCode === 13) {
            $(e.target).blur();
            e.preventDefault();
        }
    }

    onBuilderClick(input, e) {
        dataExplorerQueryBuilder.open({}, query => {
            if (input.attr('data-equality-prefix')) {
                input.html('=' + query);
                this.parseFormulaInput(input);
                input.trigger('blur');
            } else {
                input.html(query);
                this.parseFormulaInput(input);
                dataExplorerHelper.saveAndUpdate();
            }
        });

        e.preventDefault();
    }

    parseFormulaInput(input) {
        if (input.attr('data-equality-prefix')) {
            // Check if we need and have an equality prefix.
            if (input.html().slice(0, 1) !== '=') {
                return;
            }

            // Remove equality prefix.
            input.html(input.html().slice(1));

            this.parseFormulaInputWithoutPrefix(input);

            // Add back equality prefix.
            input.html('=' + input.html());
        } else {
            this.parseFormulaInputWithoutPrefix(input);
        }
    }

    parseFormulaInputWithoutPrefix(input) {
        // Do all of this twice. E.g. if user entered formula in lower-case,
        // we need to do this twice to that the data-formula is properly converted to uppercase.
        for (let i = 0; i < 2; i++) {
            // Transform images back to formulas.
            const inputClone = input.clone();
            inputClone.find('[data-args]').each((index, element) => {
                // Get original value.
                const value = $(element).attr('data-args');

                // Replace image.
                $(element).replaceWith(value);
            });

            // Get formula.
            let value = inputClone.text();
            value = value.trim();
            inputClone.remove();

            // Parse formula.
            input.attr('data-formula', value);
            const result = this.convertFormulaToHtml(value);
            input.html(result);
        }
    }

    convertFormulaToHtml(formula) {
        let rootNode;

        // Parse using math.js.
        try {
            rootNode = math.parse(formula);
        } catch (e) {
            // Cannot parse, simply return the formula as-is.
            return formula;
        }

        // Turn functions to uppercase.
        rootNode = rootNode.transform(node => {
            if (node.isFunctionNode && node.fn.isSymbolNode) {
                return new math.expression.node.FunctionNode(node.fn.name.toUpperCase(), node.args);
            } else {
                return node;
            }
        });

        // Transform to string.
        const customString = {
            QUERY: function(node, options) {
                // Remove surrounding "QUERY()".
                const args = node.toString().slice(6, -1);

                // Create image.
                const img = $('<i class="fa fa-flask" aria-hidden="true"></i>');
                img.attr('data-args', args);

                // Return string.
                return 'QUERY(' + img[0].outerHTML + ')';
            }
        };
        let newValue = rootNode.toString({
            handler: customString,
            lowerExp: -100,
            upperExp: 100
        });
        if (typeof newValue !== 'string' || newValue === 'undefined') {
            newValue = '';
        }

        return newValue;
    }
}

export const dataExplorerFormulas = new DataExplorerFormulas();
