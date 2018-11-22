class KeyboardService {
    constructor() {
        this.ctrlDown = false;
        this.shiftDown = false;
        this.ctrlKey = 17;
        this.shiftKey = 16;
        this.cmdKey = 91;
        this.vKey = 86;
        this.cKey = 67;

        $(document).keydown((e) => {
            if (e.keyCode === this.ctrlKey || e.keyCode === this.cmdKey) {
                this.ctrlDown = true;
            }

            if (e.keyCode === this.shiftKey) {
                this.shiftDown = true;
            }
        });

        $(document).keyup((e) => {
            if (e.keyCode === this.ctrlKey || e.keyCode === this.cmdKey) {
                this.ctrlDown = false;
            }

            if (e.keyCode === this.shiftKey) {
                this.shiftDown = false;
            }
        });
    }
}

export const keyboardService = new KeyboardService();