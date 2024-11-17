import * as html2pdf from 'html2pdf.js';

function generateResume() {
    // Collecting the values from the form fields
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const hobbies = (document.getElementById('hobbies') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;

    // Resume content fields
    const resumeContent = document.getElementById('resumeContent');
    const resumeName = document.getElementById('resumeName');
    const resumePhone = document.getElementById('resumePhone');
    const resumeEmail = document.getElementById('resumeEmail');
    const resumeLinkedIn = document.getElementById('resumeLinkedIn') as HTMLAnchorElement;
    const resumeSkills = document.getElementById('resumeSkills');
    const resumeLanguages = document.getElementById('resumeLanguages');
    const resumeObjective = document.getElementById('resumeObjective');
    const resumeEducation = document.getElementById('resumeEducation');
    const resumeExperience = document.getElementById('resumeExperience');
    const resumeHobbies = document.getElementById('resumeHobbies');
    const resumeCertifications = document.getElementById('resumeCertifications');

    // Check if all elements exist
    if (
        resumeContent && resumeName && resumePhone && resumeEmail &&
        resumeLinkedIn && resumeSkills && resumeLanguages && resumeObjective &&
        resumeEducation && resumeExperience && resumeHobbies && resumeCertifications
    ) {
        // Populating the resume with user data
        resumeName.innerText = name;
        resumePhone.innerText = phone;
        resumeEmail.innerText = email;
        resumeLinkedIn.href = linkedin;
        resumeLinkedIn.innerText = linkedin;
        resumeSkills.innerText = skills;
        resumeLanguages.innerText = languages;
        resumeObjective.innerText = objective;
        resumeEducation.innerText = education;
        resumeExperience.innerText = experience;
        resumeHobbies.innerText = hobbies;
        resumeCertifications.innerText = certifications;

        // Show the resume content
        resumeContent.style.display = 'flex';
    } else {
        console.error("One or more resume fields are missing.");
    }
}

// Function to download the resume as a PDF
function downloadPDF() {
    const resumeContent = document.getElementById('resumeContent');
    if (resumeContent) {
        const options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Use html2pdf to create the PDF
        html2pdf().from(resumeContent).set(options).save();
    }
}

// Function to generate a shareable link
function generateShareableLink() {
    const shareableLink = document.getElementById('shareableLink') as HTMLParagraphElement;
    if (shareableLink) {
        const url = window.location.href + '?resume=' + encodeURIComponent(JSON.stringify(getResumeData()));
        shareableLink.innerText = url;
        shareableLink.style.display = 'block';
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// Helper function to get the resume data as an object
function getResumeData() {
    return {
        name: (document.getElementById('name') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        linkedin: (document.getElementById('linkedin') as HTMLInputElement).value,
        skills: (document.getElementById('skills') as HTMLTextAreaElement).value,
        languages: (document.getElementById('languages') as HTMLTextAreaElement).value,
        objective: (document.getElementById('objective') as HTMLTextAreaElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
        hobbies: (document.getElementById('hobbies') as HTMLTextAreaElement).value,
        certifications: (document.getElementById('certifications') as HTMLTextAreaElement).value,
    };
}

// Function to share on LinkedIn
function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

// Function to share on Twitter
function shareOnTwitter() {
    const text = encodeURIComponent("Check out my resume!");
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Function to share via Email
function shareViaEmail() {
    const subject = "Check out my resume";
    const body = "Here is the link to my resume: " + window.location.href;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}
