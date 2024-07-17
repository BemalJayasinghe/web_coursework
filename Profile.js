
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.step-container').forEach((step, index) => {
        step.style.display = index === 0 ? 'block' : 'none';
    });
    document.getElementById('next-btn-1').addEventListener('click', function() {
        nextStep(1);
    });
    document.getElementById('next-btn-2').addEventListener('click', function() {
        nextStep(2);
    });
    document.getElementById('next-btn-3').addEventListener('click', function() {
        //nextStep(3);
        submitProfile(3);
    
        
    });
});




function nextStep(currentStep) {
    document.getElementById('step-' + currentStep).style.display = 'none';
    const nextStep = currentStep + 1;
    document.getElementById('step-' + nextStep).style.display = 'block';
    updateProgress(nextStep);
}

function updateProgress(step) {
    const totalSteps = 3; 
    const progress = (step / totalSteps) * 100;
    document.getElementById('progress-percentage').innerText = progress + '%';
    document.getElementById('progress-bar').style.width = progress + '%';
}

function submitProfile(currentStep) {
    document.getElementById('step-' + currentStep).style.display = 'none';
   
    document.getElementById('feedback').style.display = 'block';
    updateProgress(3); 
}


