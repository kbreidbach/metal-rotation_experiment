// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // All views used in the experiment in desired order
        views_seq: [
            intro,
            instructions,
            practice_key_press,
            main_key_press,
            post_test,
            thanks,
        ],
        // All specified information for the deployment
        deploy: {
            experimentID: "225",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "directLink",
            contact_email: "kbreidbach@uni-osnabrueck.de"
            //prolificURL:"wonderful-montalcini-f5fda6.netlify.app"
            //prolificURL:"https://app.netlify.com/sites/wonderful-montalcini-f5fda6/settings/domain"
            //prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // show progress bar for practice & main trial views
                practice_key_press.name,
                main_key_press.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
