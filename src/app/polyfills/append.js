if (!('append' in Element.prototype)) {
    Element.prototype.append = function() {
        if (this.parentNode) {
            this.parentNode.appendChild(this);
        }
    };
}
