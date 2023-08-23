
const courses = [
    { id: 1, title: 'This is My Course' },
];

const coursesSection = document.querySelector('.courses');

courses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    card.innerHTML = `
        <h3>${course.title}</h3>
        <button class="interested">Interested</button>
        <button class="enrolled">Enrolled</button>
        <button class="completed">Completed</button>
    `;
    coursesSection.appendChild(card);
});

// Handle user preferences
const preferencesSection = document.querySelector('.preferences');
const preferencesSelect = document.createElement('select');
preferencesSelect.innerHTML = `
    <option value="interested">Interested</option>
    <option value="enrolled">Enrolled</option>
    <option value="completed">Completed</option>
`;
preferencesSection.appendChild(preferencesSelect);

// Handle feedback submission
const feedbackSection = document.querySelector('.feedback');
const feedbackForm = document.createElement('form');
feedbackForm.innerHTML = `
    <textarea placeholder="Write your feedback here"></textarea>
    <button type="submit">Submit Feedback</button>
`;
feedbackSection.appendChild(feedbackForm);

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const feedback = feedbackForm.querySelector('textarea').value;
    feedbackForm.querySelector('textarea').value = '';
});




