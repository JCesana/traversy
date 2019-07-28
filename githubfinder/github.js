// Original Lesson:

// class GitHub {
//     constructor() {
//         this.client_id = '74b57742712dfdabf20b';
//         this.client_secret = '34fdfafaefd6c8771065760042d5e3e1b29d3f53';
//         this.repos_count = 5;
//         this.repos_sort = 'created: asc';
//     }

//     async getUser(user) {
//         const profileResponse = await fetch(
//             `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
//         );

//         const reposResponse = await fetch(
//             `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${
//                 this.client_id
//             }&client_secret=${this.client_secret}`
//         );

//         const profile = await profileResponse.json();
//         const repos = await reposResponse.json();

//         return {
//             profile, // same as profile: profile
//             repos // repos: repos
//         };
//     }
// }

// Using Promises.all and destructuring():

class GitHub {
    constructor() {
        this.client_id = '74b57742712dfdabf20b';
        this.client_secret = '34fdfafaefd6c8771065760042d5e3e1b29d3f53';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const [profileResponse, repoResponse] = await Promise.all([
            fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`).then(response =>
                response.json()
            ),
            fetch(
                `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${
                    this.client_id
                }&client_secret=${this.client_secret}`
            ).then(response => response.json())
        ]);

        return {
            profile: profileResponse,
            repos: repoResponse
        };
    }
}
