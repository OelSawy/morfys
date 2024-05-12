document.getElementById('orgs').addEventListener('click', function() {
    window.location.href = '../organizations/viewOrganizations/viewOrganizations.html';
});

document.getElementById('volunteers').addEventListener('click', function() {
    window.location.href = '../volunteers/viewVolunteers/viewVolunteers.html';
});

document.getElementById('viewOrgsSubmissions').addEventListener('click', function() {
    window.location.href = '../organizations/submissions/viewSubmissions.html';
});

document.getElementById('viewVolunteersSubmissions').addEventListener('click', function() {
    window.location.href = '../volunteers/submissions/viewSubmissions.html';
});

document.getElementById('profile').addEventListener('click', function() {
    window.location.href = '../account/account.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const notificationMenu = document.getElementById('notification-icon');
    
    function stickHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.onscroll = function () {
        stickHeader();
    };

    notificationMenu.addEventListener('click', function toggleNotificationMenu() {
        const menu = document.getElementById('notificationMenu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
});