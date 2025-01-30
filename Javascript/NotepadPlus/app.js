/*
    Online Notepad

    Features:
        Create a notepad with autosave functionality
        "Save My Notes" feature-flag to turn autosave on/off
        Autosave updates local storage every 1 second when feature-flag is on
        Local storage key should be 'autosave-data'
        Textarea should have placeholder 'Write your notes here'
        On opening the app, "Save My Notes" checkbox should be unchecked
        
    Acceptance criteria:
        All components present with correct id and value
        Autosave only works when feature-flag is turned on
        Previously saved content retained in textarea after closing and reopening app
*/

let textarea = document.getElementById('textarea');

let featureFlag = document.getElementById('feature-flag');

// retain previously saved content in textarea after closing and reopening app
function firstLoad() {
    if (window.localStorage.getItem("autosave-data")) {
        textarea.value = window.localStorage.getItem("autosave-data");
    }

    updateLocalStorage();
}

function updateLocalStorage() {
    // Autosave updates local storage every 1 second when feature-flag is on
    setInterval(() => {
        let inputData = textarea.value;
        // Autosave only works when feature-flag is turned on
        if(featureFlag.checked) 
            window.localStorage.setItem("autosave-data", inputData);
    }, 1000);

}

firstLoad();