import throttle from 'lodash.throttle'

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state'

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const storedFormValues = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));

if (storedFormValues) {
    input.value = storedFormValues.email || '';
    textarea.value = storedFormValues.textarea || '';
}

const updateFormState = throttle((value, key) => {
    const storedFormValues = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));
    const newFormValues = { ...storedFormValues, [key]: value };

    localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(newFormValues));
}, 500);

input.addEventListener("input", (e) => updateFormState(e.target.value, 'email'));
textarea.addEventListener("input", (e) => updateFormState(e.target.value, 'textarea'));

form.addEventListener("submit", (e) => {
    const formData = new FormData(form);

    e.preventDefault();
    form.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);

    console.log(Object.fromEntries(formData));
})