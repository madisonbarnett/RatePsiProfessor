// Dictionary of professor names and image URLs
export const professors = {
    "Edward Tang": "https://ams.ua.edu/wp-content/uploads/2024/03/AMS_Edward-Tang.jpg",
    "Jolene Hubbs": "https://ams.ua.edu/wp-content/uploads/2024/03/AMS_Jolene-Hubbs.jpg",
    "Michael Innis": "https://ams.ua.edu/wp-content/uploads/2024/03/AMS_Michael-Innis-Jimenez.jpg",
    ... 4400+ lines
    "Teresa D Welch" : "https://nursing.ua.edu/wp-content/uploads/sites/5/2022/02/teresa-welch-DSC_3703web.jpg",
    "Kimberly Wilson" : "https://nursing.ua.edu/wp-content/uploads/sites/5/2023/08/kimberly-wilson-DSC_9321-Edit-web-540x720-1.jpg",
    "Brittany Woods" : "https://nursing.ua.edu/wp-content/uploads/sites/5/2024/09/brittany-woods-DSC_1142-web-540x720-1.jpg",
};

// Function to retrieve an image URL by professor name
export function getProfessorImage(name) {
    return professors[name] || null; // Return the image URL or null if not found
}
