// index.ts

const toggleButton = document.getElementById('togglebutton') as HTMLInputElement | null;
const skillsDiv = document.getElementById('skills') as HTMLDivElement | null;

if (toggleButton && skillsDiv) {
    toggleButton.addEventListener('click', () => {
        const isHidden = skillsDiv.style.display === 'none';
        skillsDiv.style.display = isHidden ? 'grid' : 'none'; // Ensure grid layout for visibility
        toggleButton.value = isHidden ? 'Hide Skills' : 'Show Skills';
    });

    // Initialize visibility
    skillsDiv.style.display = 'grid';
    toggleButton.value = 'Hide Skills';
} else {
    console.error('Required elements not found in the DOM.');
}
