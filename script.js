// script.js

// Initialize the sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    }

    // Form validation for signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const password = document.getElementById('password').value;
            const repassword = document.getElementById('repassword').value;
            
            if (password !== repassword) {
                e.preventDefault();
                alert('Passwords do not match!');
                return false;
            }
            
            if (!document.getElementById('terms').checked) {
                e.preventDefault();
                alert('You must agree to the terms & conditions');
                return false;
            }
            
            return true;
        });
    }

    // Populate date dropdowns
    function populateDropdown(id, options) {
        const select = document.getElementById(id);
        if (select) {
            select.innerHTML = options.map(opt => 
                `<option value="${opt}">${opt}</option>`
            ).join('');
        }
    }

    // Populate day, month, year dropdowns if they exist
    if (document.getElementById('day')) {
        populateDropdown('day', Array.from({length: 31}, (_, i) => i + 1));
        populateDropdown('month', [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ]);
        populateDropdown('year', Array.from({length: 30}, (_, i) => new Date().getFullYear() - i));
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
        sidebar.classList.toggle("open");
    }
}

// LocalStorage database simulation (for client-side only features)
const schoolDB = {
    students: JSON.parse(localStorage.getItem('students')) || [],
    events: JSON.parse(localStorage.getItem('events')) || []
};

function saveToDB() {
    localStorage.setItem('students', JSON.stringify(schoolDB.students));
    localStorage.setItem('events', JSON.stringify(schoolDB.events));
}

// Handle extracurricular signup form
const activityForm = document.getElementById('activitySignupForm');
if (activityForm) {
    activityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const activity = {
            name: document.getElementById('name').value,
            activity: document.getElementById('activity').value,
            date: new Date().toISOString()
        };
        schoolDB.events.push(activity);
        saveToDB();
        alert('Successfully signed up for ' + activity.activity);
        activityForm.reset();
    });
}