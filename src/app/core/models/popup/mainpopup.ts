export class MainPopup {
    title: string;
    content: string;
    visible: boolean;
    showTitle: boolean;
    width: string;
    height: string;
    dragEnabled: boolean;
    closeOnOutsideClick: boolean;
    buttonText: string;
    reloadPage: boolean;

    constructor() {
        this.visible = false;
        this.showTitle = true;
        this.width = '300';
        this.height = '250';
        this.dragEnabled = false;
        this.closeOnOutsideClick = false;
        this.buttonText = 'Ok';
        this.reloadPage = false;
    }
}
