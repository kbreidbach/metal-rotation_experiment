// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
// The intro view welcomes the participant
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `Thank you for participating in this mental rotation experiment.
            <br />
            <br />
            You will be shown images of different 3D objects and have to press a key to enter an answer.`,
  buttonText: 'begin the experiment'
});

// The instruction view of the mental rotation experiment
// it explains what the participant has to do in the experiment
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'General Instructions',
  text: `In this mental rotation experiment there will be <strong>12 practice trials</strong> and <strong>48 main trials</strong>.
            <br />
            In each trial you will be presented with two 3D objects
            and you have to say if they are the same or different objects.
            <br />
            <br />
            You need to press key <strong>f</strong> if you think that the objects are the <strong>same</strong>
            <br />
            and press key <strong>j</strong> if you think the objects are <strong>different</strong>`,
  buttonText: 'go to trials'
});

// In the post test questionnaire the participant is asked additional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** Here, I initialized two key_press views:
    one for practice trials and another for the main trials
    This will use all data specified in data
    and it includes a 250 ms pause between each stimulus
*/
const practice_key_press = magpieViews.view_generator('key_press', {
    trials: practice_trial.key_press.length,
    name: 'practice_key_press',
    data: _.shuffle(practice_trial.key_press),
    // hook should check the participants response and tell them if they were correct or not
    // does not work as intended but also causes no problems
    hook: {
        after_response_enabled: check_response
    },
    pause: 250
});

const main_key_press = magpieViews.view_generator('key_press', {
    trials: main_trial.key_press.length,
    name: 'main_key_press',
    data: _.shuffle(main_trial.key_press),
    pause: 250
});
