const logggedInLinks = document.querySelectorAll(".logged-in");
const logggedOutLinks = document.querySelectorAll(".logged-out");

const guideList = document.querySelector(".guides");

// Links
const setUpUi = (user) => {
    if (user) {
        // toggle links
        logggedInLinks.forEach(link => {
            link.style.display = "block"
        });
        logggedOutLinks.forEach(link => {
            link.style.display = "none"
        });
    } else {
        // toggle links
        logggedInLinks.forEach(link => {
            link.style.display = "none"
        });
        logggedOutLinks.forEach(link => {
            link.style.display = "block"
        });
    }
}


// Setup Guides
const setupGuides = (data) => {
    // If There Is Data Then Show This
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${guide.titile}</div>
            <div class="collapsible-body white">${guide.content}</div>
        </li>
        `;
            html += li;
        });

        guideList.innerHTML = html;
    } else {
        // Otherwise Print This Data
        guideList.innerHTML = "<h5>Login To See Data</h5>";
    }
}

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

});


