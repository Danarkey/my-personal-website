// Get the retro button element, the h1 element, all p elements, the header element, the footer element, and the job elements
const retroButton = document.getElementById('retroButton');
const h1Element = document.querySelector('h1');
const allParagraphs = document.querySelectorAll('p');
const allSections = document.querySelectorAll('section');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');
const jobElements = document.querySelectorAll('.job'); // Assuming elements with class 'job' are present
const retroJobElements = document.querySelectorAll('.job.retro'); // Assuming elements with class 'job.retro' are present
const jobContainerElements = document.querySelectorAll('.job-container'); // Assuming elements with class 'job-container' are present
const retroJobContainerElements = document.querySelectorAll('.job-container.retro'); // Assuming elements with class 'job-container.retro' are present

// Add a click event listener to the button
retroButton.addEventListener('click', () => {
  // Toggle the 'retro' class on the <body> element
  document.body.classList.toggle('retro');

  // Toggle the 'retro' class on the h1 element
  h1Element.classList.toggle('retro');

  // Toggle the 'retro' class on all p elements
  allParagraphs.forEach((paragraph) => {
    paragraph.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all section elements
  allSections.forEach((section) => {
    section.classList.toggle('retro');
  });

  // Toggle the 'retro' class on the header element
  headerElement.classList.toggle('retro');

  // Toggle the 'retro' class on the footer element
  footerElement.classList.toggle('retro');

  // Toggle the 'retro' class on all job elements
  jobElements.forEach((jobElement) => {
    jobElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all retro job elements
  retroJobElements.forEach((retroJobElement) => {
    retroJobElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all job container elements
  jobContainerElements.forEach((jobContainerElement) => {
    jobContainerElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all retro job container elements
  retroJobContainerElements.forEach((retroJobContainerElement) => {
    retroJobContainerElement.classList.toggle('retro');
  });
});
