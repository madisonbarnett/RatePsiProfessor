// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import { processSubmission } from 'backend/dataSubmission.jsw'; // Import the backend function

$w.onReady(function () {
    console.log("Code is ready"); // Debug log
    $w("#button1").onClick(async () => {
        console.log("Button clicked!");
        // Collect all data inputted into form
        let formData = {
            professorname: $w("#input1").value,
            overallrating: parseFloat($w("#radioGroup1").value),
            className: $w("#input2").value,
            attendancePolicy: $w("#radioGroup2").value,
            difficultyLevel: $w("#radioGroup4").value,
            wouldTakeAgain: $w("#radioGroup3").value,
            comments: $w("#textBox1").value,
            reviewerName: $w("#input3").value,
            reviewerMajor: $w("#input4").value,
            reviewerPhoneNumber: $w("#input5").value
        };
        console.log("Sending data to backend:", formData);  // Debug log for frontend

        console.log("Form data:", formData);
        
        try {
            await processSubmission(formData);  // Call the backend function
            console.log("Submission successful");
        } catch (error) {
            console.error("Error submitting:", error); // Debug log
        }
    });
});
