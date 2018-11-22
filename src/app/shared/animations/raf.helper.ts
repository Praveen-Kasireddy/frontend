export class RAFHelper {
    rAF = undefined;

    constructor(
        private windowRef: Partial<Window>,
        private callback: Function
    ) {}

    start() {
        if (this.rAF) {
            return;
        }

        this.rAF = this.windowRef.requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        if (!this.rAF) {
            return;
        }

        this.windowRef.cancelAnimationFrame(this.rAF);
        this.rAF = undefined;

        this.callback();
    }

    private update() {
        if (!this.callback) {
            return;
        }

        this.callback();
        this.rAF = this.windowRef.requestAnimationFrame(this.update.bind(this));
    }
}
