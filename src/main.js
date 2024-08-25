let tabCount = 1;

document.getElementById("new-tab").addEventListener("click", function() {
    tabCount++;
    const newTabId = `tab${tabCount}`;
    const newEditorId = `editor${tabCount}`;

    // Crear nueva pestaña
    const newTab = document.createElement("li");
    newTab.className = "nav-item";
    newTab.innerHTML = `<a class="nav-link" id="${newTabId}" data-bs-toggle="tab" href="#${newEditorId}">Archivo ${tabCount}</a>`;
    document.getElementById("tabList").appendChild(newTab);

    // Crear nuevo editor asociado
    const newEditor = document.createElement("div");
    newEditor.id = newEditorId;
    newEditor.className = "tab-pane fade h-100";
    newEditor.innerHTML = `<textarea class="form-control code-editor h-100" placeholder="// Código fuente"></textarea>`;
    document.getElementById("tabContent").appendChild(newEditor);

    // Activar la nueva pestaña
    const newTabLink = new bootstrap.Tab(document.getElementById(newTabId));
    newTabLink.show();
});

document.getElementById("show-errors").addEventListener("click", function() {
    const errorsModal = new bootstrap.Modal(document.getElementById("errors-modal"));
    errorsModal.show();
});

document.getElementById("show-symbols").addEventListener("click", function() {
    const symbolsModal = new bootstrap.Modal(document.getElementById("symbols-modal"));
    symbolsModal.show();
});