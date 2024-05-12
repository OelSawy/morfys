document.getElementById('clothes').addEventListener('click', function() {
    window.location.href = '../clothes/clothes.html';
});

document.getElementById('food').addEventListener('click', function() {
    window.location.href = '../food/food.html';
});

document.getElementById('toys').addEventListener('click', function() {
    window.location.href = '../toys/toys.html';
});

document.getElementById('medical').addEventListener('click', function() {
    window.location.href = '../medical/medical.html';
});

document.getElementById('school').addEventListener('click', function() {
    window.location.href = '../school/school.html';
});

document.getElementById('blood').addEventListener('click', function() {
    window.location.href = '../blood/blood.html';
});


document.getElementById("go-back").addEventListener("click", () => {history.back();

});

document.addEventListener('DOMContentLoaded', function() {
    const notificationMenu = document.getElementById('notification-icon');

    const type = localStorage.getItem("type");

    if (type == "teacher") {
        const temp = document.createElement('div');
        temp.className = "button-group";
        temp.innerHTML = `<button class="category-button" id="teachingPosts">Teaching Posts</button>`;
        document.getElementsByClassName('container')[0].appendChild(temp);
        document.getElementById('teachingPosts').addEventListener('click', function() {
            window.location.href = '../teachingPosts/teachingPosts.html';
        });
    }

    if (type == "doctor") {
        const temp = document.createElement('div');
        temp.className = "button-group";
        temp.innerHTML = `<button class="category-button" id="medicalCases">Medical Cases</button>`;
        document.getElementsByClassName('container')[0].appendChild(temp);
        document.getElementById('medicalCases').addEventListener('click', function() {
            window.location.href = '../medicalCases/medicalCases.html';
        });
    }
    
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