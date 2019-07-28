// Init GitHub
const github = new GitHub();

// Search input
const searchUser = document.getElementById('searchUser');

// Init UI
const ui = new UI();

// Search input event listener
searchUser.addEventListener('keyup', e => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText).then(data => {
            if (data.profile.message === 'Not Found') {
                // Show alert and clear any existing profile from DOM
                ui.clearProfile(); // this only works when put before ui.showAlert().... why? setTimeout?
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Clear any previous alert
                ui.clearAlert();

                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // Clear profile
        ui.clearProfile();
    }
});
