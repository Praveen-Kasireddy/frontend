class ResizableDivider {
    enableResizable(target, secondaryTarget, direction, handle, dimensions, callback) {
        let windowSize = 0;

        if (direction === 'height') {
            windowSize = $(window).height();
        } else {
            windowSize = $(window).width();
        }

        $(target).css(direction, windowSize / 2 + 'px');

        $(target).resizable(
            {
                classes: {
                    "ui-resizable": "allow-divider"
                }
            },
            handle,
            dimensions,
            "enable",
            {
                alsoResize: secondaryTarget
            },
            {
                stop: callback()
            }
        );
    }

    resetResizable(target, callback) {
        try {
            $(target).resizable("destroy");
            callback();
        }
        catch (e) {
        }
    }
}

export const resizableDivider = new ResizableDivider();