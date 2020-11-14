// Auth Status
auth.onAuthStateChanged(user => {
    if (user) {
        // Fires Only When User Is Logged In
        // Getting Data
        db.collection('guides').get().then(snapshot => {
            setupGuides(snapshot.docs);
        });
        setUpUi(user);
    } else {
        // If User Is Not Logged In Nothing Will Show
        setupGuides([]);
        setUpUi();
    }
})

// Sign up
const signupForm = document.querySelector("#signup-form");
const logOut = document.querySelector("#logout");
const loginForm = document.querySelector("#login-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get User Info
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;

    // Signup The User

    auth.createUserWithEmailAndPassword(email, password).then(cread => {
        console.log(cread);
    })

    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();

})

// Logout User
logOut.addEventListener("click", e => {
    e.preventDefault();

    auth.signOut();
})

// Login Form
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm["login-email"].value;
    const password = loginForm["login-password"].value;

    auth.signInWithEmailAndPassword(email, password);
    // Close The Login Modal
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
})


// change in firbase rules
// match /guides / {guideId}{
//    allow read, write: if request.auth.id != null 
// }