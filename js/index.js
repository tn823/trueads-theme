//dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".ui-dropdown-button");
    const dropdownMenu = document.querySelector(".ui-dropdown-menu");

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        const isOpen = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isOpen ? "none" : "block";
        dropdownBtn.style.borderColor = isOpen ? "#c4cdd5" : "#fb5831";
    });
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
            dropdownBtn.style.borderColor = "#c4cdd5";
        }
    });
});


//upload files
document.addEventListener("DOMContentLoaded", function () {
    const uploadBtn = document.getElementById("uploadBtn");
    const modal = document.getElementById("uploadModal");
    const closeModal = document.querySelector(".uploadModal-close");
    const cancelBtn = document.getElementById("uploadModal-cancelBtn");
    const fileInput = document.getElementById("fileInput");
    const fileName = document.getElementById("fileName");

    uploadBtn.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", closePopup);
    cancelBtn.addEventListener("click", closePopup);

    function closePopup() {
        modal.style.display = "none";
    }

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            fileName.textContent = fileInput.files[0].name;
        } else {
            fileName.textContent = "Chưa có tệp nào được chọn";
        }
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closePopup();
        }
    });
});


//show and close panel 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("ul").addEventListener("click", function (event) {
        const menuItem = event.target.closest(".menu-item");
        if (menuItem) {
            console.log("Clicked on menu item:", menuItem);

            const index = menuItem.getAttribute("data-bind-event-click").match(/\d+/)[0];
            console.log("Index:", index);

            document.querySelectorAll(".panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const panelId = `panel-${index}`;
            const panel = document.getElementById(panelId);

            if (panel) {
                console.log("Panel found:", panel);
                panel.classList.add("active");
            } else {
                console.error(`Panel với ID ${panelId} không tồn tại!`);
            }
        }
    });

    document.querySelectorAll(".panel-header i.fa-angle-left").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Đóng panel");
            this.closest(".theme-editor-panel").classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuClose = document.querySelector(".editor-menu-close");

    document.querySelector("ul").addEventListener("click", function (event) {
        const menuItem = event.target.closest(".menu-item");
        if (menuItem) {
            console.log("Clicked on menu item:", menuItem);

            const index = menuItem.getAttribute("data-bind-event-click").match(/\d+/)[0];
            console.log("Index:", index);

            document.querySelectorAll(".theme-editor-panel").forEach(panel => {
                panel.classList.remove("active");
            });

            const panelId = `panel-${index}`;
            const panel = document.getElementById(panelId);

            if (panel) {
                console.log("Panel found:", panel);
                panel.classList.add("active");
            } else {
                console.error(`Panel với ID ${panelId} không tồn tại!`);
            }

            menuClose.style.display = "none";
        }
    });

    document.querySelectorAll(".panel-header i.fa-angle-left").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Đóng panel");
            this.closest(".theme-editor-panel").classList.remove("active");

            const hasActivePanel = document.querySelector(".theme-editor-panel.active") !== null;
            if (!hasActivePanel) {
                menuClose.style.display = "block";
            }
        });
    });
});

//upload img
document.querySelectorAll(".replace-image-btn").forEach(button => {
    button.addEventListener("click", function () {
        const container = this.closest(".editor-image"); 
        const input = container.querySelector(".image-input");
        input.click();
    });
});
document.querySelectorAll(".image-input").forEach(input => {
    input.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const container = input.closest(".editor-image");
                const preview = container.querySelector(".image-preview");
                preview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});


//add tranform 
document.getElementById("bar-icon").addEventListener("click", function () {
    document.getElementById("menu-sidebar").classList.toggle("transform");
});


