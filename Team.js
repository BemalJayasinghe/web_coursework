document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
            member.querySelector('.thumbnail').style.opacity = '0.3';
            member.querySelector('.thumbnail').style.transform = 'scale(1.1)';
            member.querySelector('.details').style.opacity = '1';
            member.querySelector('.details').style.visibility = 'visible';
            member.querySelector('.details').style.bottom = '10%';
        });

        member.addEventListener('mouseleave', () => {
            member.querySelector('.thumbnail').style.opacity = '1';
            member.querySelector('.thumbnail').style.transform = 'scale(1)';
            member.querySelector('.details').style.opacity = '0';
            member.querySelector('.details').style.visibility = 'hidden';
            member.querySelector('.details').style.bottom = '-150%';
        });
    });

    const borderSection = document.querySelector('.border');
    
    borderSection.addEventListener('mouseenter', () => {
        borderSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 2)';
    });

    borderSection.addEventListener('mouseleave', () => {
        borderSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0,4)';
    });
});
