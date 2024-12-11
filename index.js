// index.ts
var toggleButton = document.getElementById('togglebutton');
var skillsDiv = document.getElementById('skills');
if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', function () {
        var isHidden = skillsDiv.style.display === 'none';
        skillsDiv.style.display = isHidden ? 'grid' : 'none'; // Ensure grid layout for visibility
        toggleButton.value = isHidden ? 'Hide Skills' : 'Show Skills';
    });
    // Initialize visibility
    skillsDiv.style.display = 'grid';
    toggleButton.value = 'Hide Skills';
}
else {
    console.error('Required elements not found in the DOM.');
}
