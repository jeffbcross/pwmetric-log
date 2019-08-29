# Basic Perf Tracking

This is an example repository to correspond with a talk given by Jeff Cross about automated performance tracking with Lighthouse and PWMetrics.

## Steps

(These steps assume basic understanding of [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [Angular CLI](https://angular.io/cli), and npm)

1. Run `yarn` or `npm install`
2. Copy this Google Sheet: https://docs.google.com/spreadsheets/d/17jgt_uKxm4WvROmKMfSDzhdCAstNvyaiDP_k2XqzgD0/edit#gid=0
3. Copy the ID of the new Google Sheet from the url into the config as `sheets.options.spreadsheetId`.
4. Go to this URL and follow step 1 to generate Google API credentials and download them: https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the_api_name
5. Move the downloaded credentials JSON file to the root of this workspace (it will be ignored by git)
6. Run `ng serve quicktusk --prod`
7. In a new terminal, run `yarn pwmetrics`
8. PWMetrics should run, and then append your results to your Google Sheet.
9. If it didn't work, create a new issue and tweet at me to let me know: [@jeffbcross](https://twitter.com/jeffbcross)

You can review the commit history on the project to see the steps taken to set up the workspace for tracking.
