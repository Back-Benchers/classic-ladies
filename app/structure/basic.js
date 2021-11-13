class BasicStruct {
    constructor(id, name, type, struct, srcURL, nextURL, description, children) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.struct = struct;
        this.srcURL = srcURL;
        this.nextURL = nextURL;
        this.description = description;
        this.children = children;
    }
}

let basicUIType = {
    LOGO: "LOGO",
    HEADER: "HEADER",
    DROPDOWNMENU: "DROPDOWNMENU",
    SEARCHBAR: "SEARCHBAR",
    FORM: "FORM",
    SECTION: "SECTION",
    PANEL: "PANEL",
    PANELITEM: "PANELITEM",
    GRID: "GRID",
    FLEXGRID: "FLEXGRID",
    PRODUCTCARD: "PRODUCTCARD",
    CARTITEM: "CARTITEM",
    SLIDE: "SLIDE"
};

let basicUIStruct = {
    VERTICAL: "VERTICAL",
    HORIZONTAL: "HORIZONTAL",
    VERTICALFLEX: "VERTICALFLEXGRID",
    HORIZONTALFLEX: "HORIZONTALFLEXGRID",
    VERTICALWARPPED: "VERTICALWARPPED",
    HORIZONTALWARPPED: "HORIZONTALWARPPED",
    // VERTICAL2HORIZONTAL: "VERTICAL2HORIZONTAL",
    // VERTICALHORIZONTAL2: "VERTICALHORIZONTAL2",
    // HORIZONTAL2VERTICAL: "HORIZONTAL2VERTICAL",
    // HORIZONTALVERTICAL2: "HORIZONTALVERTICAL2",
};

export default {
    BasicStruct,
    basicUIType,
    basicUIStruct
};