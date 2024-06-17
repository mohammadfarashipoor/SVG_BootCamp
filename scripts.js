 
const svgFiles = [
        "add.svg",
        "archive.svg",
        "arrow-border.svg",
        "arrow-bottom.svg",
        "arrow-side.svg",
        "atsign.svg",
        "calendar.svg",
        "close.svg",
        "coment.svg",
        "delete.svg",
        "done.svg",
        "draft.svg",
        "edit.svg",
        "emoji.svg",
        "end-calender.svg",
        "filter.svg",
        "flag.svg",
        "forbidden.svg",
        "info-account.svg",
        "info-user.svg",
        "label.svg",
        "link.svg",
        "logout.svg",
        "moon.svg",
        "new-user.svg",
   
        "plus.svg",
        "polette.svg",
        "refresh.svg",
        "search.svg",
        "setting.svg",
        "share.svg",
        "start-calender.svg",
        "sun.svg",
        "text-right.svg",
        "three-dots.svg",
        "time.svg",
        "view-column.svg",
        "view-list.svg"
];

 
window.onload = function() {
    const container = document.getElementById('svg-container');

    svgFiles.forEach(fileName => {
        fetch(`icons/${fileName}`)
            .then(response => response.text())
            .then(svgContent => {
                const svgItem = document.createElement('div');
                svgItem.classList.add('svg-item');

                const svgElement = document.createElement('div');
                svgElement.innerHTML = svgContent;

                const svgName = document.createElement('div');
                svgName.classList.add('svg-name');
                svgName.textContent = fileName;

                svgItem.appendChild(svgElement);
                svgItem.appendChild(svgName);

                container.appendChild(svgItem);
            })
            .catch(error => console.error(`Error loading ${fileName}:`, error));
    });
};
