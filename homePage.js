import wixData from 'wix-data';

$w.onReady(function () {
    // Array to store combined professor data
    let allProfessors = [];

    // Helper function to load all items from a collection, handling pagination
    function loadAllItems(collectionName) {
        let items = [];
        return new Promise((resolve, reject) => {
            function fetchPage(skip = 0) {
                wixData.query(collectionName)
                    .limit(1000) // Set high limit to fetch as many items as possible
                    .skip(skip)  // Skip items already retrieved
                    .find()
                    .then((result) => {
                        result.items.forEach(item => {
                            // Add the collectionName to the item so we can track it
                            item.sourceCollection = collectionName;
                        });
                        items = items.concat(result.items); // Add items to array
                        if (result.hasNext()) {
                            fetchPage(skip + 1000); // Fetch next page if more items are available
                        } else {
                            resolve(items); // Resolve promise once all items are loaded
                        }
                    })
                    .catch((error) => reject(error)); // Handle errors
            }
            fetchPage();
        });
    }

    $w("#repeater1").collapse(); //Don't show repeater while no letter is selected

    // Load data from all collections using the helper function
    // CMS Collections 6 - 10 not converted yet to use proper IDs, so leave out of code to prevent error
    Promise.all([
        loadAllItems("Professor1Ratings"),
        loadAllItems("Professor2Ratings"),
        loadAllItems("Professor3Ratings"),
        loadAllItems("Professor4Ratings"),
        loadAllItems("Professor5Ratings")//,
        //loadAllItems("Professor6Ratings"),
        //loadAllItems("Professor7Ratings"),
        //loadAllItems("Professor8Ratings"),
        //loadAllItems("Professor9Ratings"),
        //loadAllItems("Professor10Ratings")
    ])
    .then((results) => {
        // Combine all items from each query result into a single array
        results.forEach((items) => {
            allProfessors = allProfessors.concat(items);
        });

        // Sort the combined array alphabetically by professor name
        allProfessors.sort((a, b) => a.professorname.localeCompare(b.professorname));

        // Set up the dropdown onChange event
        $w('#dropdown1').onChange(() => {
            // Get the selected letter from the dropdown
            let selectedLetter = $w('#dropdown1').value;

            // Filter the combined array based on the selected letter
            let filteredProfessors = allProfessors.filter(professor => 
                professor.professorname.startsWith(selectedLetter));

            // Update the repeater with the filtered data
            if (filteredProfessors.length > 0) {
                // Show the repeater with filtered data
                $w('#repeater1').data = filteredProfessors;
                $w("#repeater1").expand();
            } else {
                // If no results, hide repeater
                $w('#repeater1').collapse();
            }
        });
        
    })
    .then(() => {
        // Set up the repeater's onItemReady event
        $w('#repeater1').onItemReady(($item, itemData) => {
            // Set the professor name in the repeater item
            $item("#linkButton").label = itemData.professorname;

            // Create a dynamic link using the item's source collection and ID based on current database values
            if (itemData.sourceCollection === "Professor1Ratings") {
                $item("#linkButton").link = `/professor1ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor2Ratings") {
                $item("#linkButton").link = `/professor2ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor3Ratings") {
                $item("#linkButton").link = `/professor3ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor4Ratings") {
                $item("#linkButton").link = `/professor4ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor5Ratings") {
                $item("#linkButton").link = `/professor5ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor6Ratings") {
                $item("#linkButton").link = `/professor6ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor7Ratings") {
                $item("#linkButton").link = `/professor7ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor8Ratings") {
                $item("#linkButton").link = `/professor8ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor9Ratings") {
                $item("#linkButton").link = `/professor9ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            } else if (itemData.sourceCollection === "Professor10Ratings") {
                $item("#linkButton").link = `/professor10ratings/${itemData.professorname.replace(/\s+/g, '-').toLowerCase()}`;
            }
        });
    })
    .catch((error) => {
        console.error("Error loading data from collections:", error);
    });
});
