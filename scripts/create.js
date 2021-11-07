let elements = [
    {"class":"fa-bold","cmd":"bold"},
    {"class":"fa-italic","cmd":"italic"},
    {"class":"fa-underline","cmd":"underline"},
    {"class":"fa-strikethrough","cmd":"strikeThrough"},
    {"class":"fa-align-left","cmd":"justifyLeft"},
    {"class":"fa-align-center","cmd":"justifyCenter"},
    {"class":"fa-align-right","cmd":"justifyRight"},
    {"class":"fa-align-justify","cmd":"justifyFull"},
    {"class":"fa-cut","cmd":"cut"},
    {"class":"fa-copy","cmd":"copy"},
    {"class":"fa-indent","cmd":"indent"},
    {"class":"fa-dedent","cmd":"outdent"},
    {"class":"fa-subscript","cmd":"subscript"},
    {"class":"fa-superscript","cmd":"superscript"},
    {"class":"fa-undo","cmd":"undo"},
    {"class":"fa-repeat","cmd":"redo"},
    {"class":"fa-list-ul","cmd":"insertUnorderedList"},
    {"class":"fa-list-ol","cmd":"insertOrderedList"},
    {"class":"fa-paragraph","cmd":"insertParagraph"},
    {"class":"e","cmd":"insertHorizontalRule","value":"HR"},
    {"class":"e","cmd":"selectAll","value" : "Select All"},
];

function enableEditMode() {
    richTextField.document.designMode="On";
}

function execCmd(command) {
    richTextField.document.execCommand(command, false, null);
    
}

function execCommandWidthArg(command, arg) {
    richTextField.document.execCommand(command, false, arg);
    
}

function getContent() {
    const data = document.getElementById("iframe").contentWindow.document.body.innerHTML
    console.log(data);
}

function createSelect() {
    const sizes = ["H1","H2","H3","H4","H5","H6"];
    const select = document.createElement("select");
    select.addEventListener("change",function() {
        execCommandWidthArg('formatBlock',this.value)
    });
    for(let i of sizes) {
        let el = document.createElement("option");
        el.value = i;
        el.innerHTML = i;
        select.append(el);
    }
    return select;
}

function create() {
    const editor = document.getElementById("editor");
    const header = document.createElement("div");
    const body = document.createElement("iframe");
    
    header.id="editor-header";
    body.name="richTextField";

    editor.append(header);
    editor.append(body);

    enableEditMode();

    for(let e of elements) {
        const el = document.createElement("button");
        el.addEventListener("click",function() {
            execCmd(e["cmd"]);
        });

        if(e["value"]) {
            el.innerHTML = e["value"];
        }

        const i = document.createElement("i");
        i.classList.add("fas");
        i.classList.add(e["class"]);
        el.append(i);

        
        header.append(el);
    }
    const select = createSelect();
    header.append(select)
}

create();