"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html2pdf = require("html2pdf.js");
function generateResume() {
    // Collecting the values from the form fields
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var skills = document.getElementById('skills').value;
    var languages = document.getElementById('languages').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var hobbies = document.getElementById('hobbies').value;
    var certifications = document.getElementById('certifications').value;
    // Resume content fields
    var resumeContent = document.getElementById('resumeContent');
    var resumeName = document.getElementById('resumeName');
    var resumePhone = document.getElementById('resumePhone');
    var resumeEmail = document.getElementById('resumeEmail');
    var resumeLinkedIn = document.getElementById('resumeLinkedIn');
    var resumeSkills = document.getElementById('resumeSkills');
    var resumeLanguages = document.getElementById('resumeLanguages');
    var resumeObjective = document.getElementById('resumeObjective');
    var resumeEducation = document.getElementById('resumeEducation');
    var resumeExperience = document.getElementById('resumeExperience');
    var resumeHobbies = document.getElementById('resumeHobbies');
    var resumeCertifications = document.getElementById('resumeCertifications');
    // Check if all elements exist
    if (resumeContent && resumeName && resumePhone && resumeEmail &&
        resumeLinkedIn && resumeSkills && resumeLanguages && resumeObjective &&
        resumeEducation && resumeExperience && resumeHobbies && resumeCertifications) {
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
    }
    else {
        console.error("One or more resume fields are missing.");
    }
}
// Function to download the resume as a PDF
function downloadPDF() {
    var resumeContent = document.getElementById('resumeContent');
    if (resumeContent) {
        var options = {
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
    var shareableLink = document.getElementById('shareableLink');
    if (shareableLink) {
        var url = window.location.href + '?resume=' + encodeURIComponent(JSON.stringify(getResumeData()));
        shareableLink.innerText = url;
        shareableLink.style.display = 'block';
        navigator.clipboard.writeText(url).then(function () {
            alert('Link copied to clipboard!');
        });
    }
}
// Helper function to get the resume data as an object
function getResumeData() {
    return {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        linkedin: document.getElementById('linkedin').value,
        skills: document.getElementById('skills').value,
        languages: document.getElementById('languages').value,
        objective: document.getElementById('objective').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        hobbies: document.getElementById('hobbies').value,
        certifications: document.getElementById('certifications').value,
    };
}
// Function to share on LinkedIn
function shareOnLinkedIn() {
    var url = encodeURIComponent(window.location.href);
    window.open("https://www.linkedin.com/sharing/share-offsite/?url=".concat(url), '_blank');
}
// Function to share on Twitter
function shareOnTwitter() {
    var text = encodeURIComponent("Check out my resume!");
    var url = encodeURIComponent(window.location.href);
    window.open("https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(url), '_blank');
}
// Function to share via Email
function shareViaEmail() {
    var subject = "Check out my resume";
    var body = "Here is the link to my resume: " + window.location.href;
    window.open("mailto:?subject=".concat(encodeURIComponent(subject), "&body=").concat(encodeURIComponent(body)));
}
