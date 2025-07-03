function showContent(sectionId) {
  // Hide all sections
  let sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  // Show the selected section
  document.getElementById(sectionId).classList.remove('hidden');
}
