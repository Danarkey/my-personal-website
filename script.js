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
const anchorElements = document.querySelectorAll('a'); // Assuming anchor elements are present
const strongElements = document.querySelectorAll('strong'); // Assuming strong elements are present
const sectionHeadElements = document.querySelectorAll('.section-head'); // Assuming elements with class 'section-head' are present
const tableHeadElements = document.querySelectorAll('.table-head'); // Assuming elements with class 'table-head' are present
const certificationItemElements = document.querySelectorAll('.certification-item'); // Assuming elements with class 'certification-item' are present
const retroCertificationItemElements = document.querySelectorAll('.certification-item.retro'); // Assuming elements with class 'certification-item.retro' are present
const projectCardElements = document.querySelectorAll('.project-card'); // Assuming elements with class 'project-card' are present
const projectsElement = document.querySelector('.projects'); // Assuming element with class 'projects' is present

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

  // Toggle the 'retro' class on all anchor elements
  anchorElements.forEach((anchorElement) => {
    anchorElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all strong elements
  strongElements.forEach((strongElement) => {
    strongElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all section-head elements
  sectionHeadElements.forEach((sectionHeadElement) => {
    sectionHeadElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all table-head elements
  tableHeadElements.forEach((tableHeadElement) => {
    tableHeadElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all certification-item elements
  certificationItemElements.forEach((certificationItemElement) => {
    certificationItemElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all retro certification-item elements
  retroCertificationItemElements.forEach((retroCertificationItemElement) => {
    retroCertificationItemElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on all project-card elements
  projectCardElements.forEach((projectCardElement) => {
    projectCardElement.classList.toggle('retro');
  });

  // Toggle the 'retro' class on the projects element
  projectsElement.classList.toggle('retro');

});

// Get the clickable div element by its ID
const twclickDIV = document.getElementById('twclickDIV');

// Add a click event listener to the clickable div
twclickDIV.addEventListener('click', () => {
  // Replace the URL below with the desired destination URL
  window.location.href = 'https://www.tammywood.com.au';
});

// Array containing different language words for "hello"
const languages = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'Salut', 'こんにちわ'];

// Function to update the header text with the next language word
function rotateHello() {
    const headerText = document.getElementById('rotatingHello');
    const currentWord = headerText.textContent;
    const currentIndex = languages.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % languages.length;
    headerText.textContent = languages[nextIndex];
}

// Interval to update the header text every 2 seconds (2000 milliseconds)
setInterval(rotateHello, 2000);


// Add the 'fade-in' class to the section elements when they become visible in the viewport
const sections = document.querySelectorAll('section');

function checkVisibility() {
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (sectionRect.top < windowHeight) {
      section.classList.add('fade-in');
    }
  });
}

// Listen for scroll events to trigger the visibility check
document.addEventListener('scroll', checkVisibility);

// Initial check for visibility when the page loads
checkVisibility();

// Function to smooth scroll to the top of the page
function scrollToTop() {
  const scrollStep = -window.scrollY / 30; // Adjust the scroll step for slower animation
  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 10); // Adjust the scroll interval for smoother animation
}

// Show/hide the "Return to Top" button based on scroll position
function toggleReturnToTopButton() {
  const returnToTopBtn = document.getElementById('returnToTopBtn');
  if (window.scrollY > 300) {
    returnToTopBtn.classList.add('show');
  } else {
    returnToTopBtn.classList.remove('show');
  }
}

// Add click event listener to the button
document.getElementById('returnToTopBtn').addEventListener('click', function() {
  scrollToTop();
});

// Add scroll event listener to show/hide the button
window.addEventListener('scroll', function() {
  toggleReturnToTopButton();
});
