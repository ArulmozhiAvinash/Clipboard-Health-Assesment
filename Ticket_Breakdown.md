# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Task 1: Determine how the new internal id should be designed.

As per the current design we have to investig how we are determing the internal id. It could be based on some db Sequence or some UUID.

Then we have to make sure that the new ID that we are generating should be unique. It could be the user's email id or some other value like a unique user name which should be unique and it should not create any conflcits with the existing Interal Id.
Estimates:
2-3 BD
Dependencies:
Product owner, BA and a Technical architect

Task 2: Determing how to get the inputs from the user and the access rights.

We have to determine who would have this access to add the custom id of agents and the nature of the new id

1. The agents could add it for them
2. It could be added by the agents supervisor
3. Can agents have multiple id with them
4. Could this new id be updated in the future
5. If it could be updated wil the old id be used for another agent.
   Eg: If james bond updates his new id from Agent007 to Agent047 then could tom cruise select Agent007 to be his unique id. This is not a good design but want to discuss about this
6. Where to have the new form/screen to get these deatils from the users(Could be under profiles
7. If agents could update the new id will there be any minimul holding period Eg( Agents coudl change their id once in every 45 days)
   section inder the existing portal)
   Estimates:
   2-3 BD
   Dependencies:
   Product owner, BA and a Technical architect

Task 3: Finalize on the business design and understand the techinical changes involed in this

1. Determine the mdoules that has to be updated(Front end, Backend API/modules, DB changes)
2. Analyze if the current functionalities would get affected on implementing the changes
3. Finilze on the approach and do a PR within the team
4. Determinf if we ahve any dependecy with other team and fix on the deadlines if there's some
   Estimates:
   2-3 BD
   Dependencies:
   Technical architect, App Development Team

Task 4: Implementing the changes

1. Implement the code changes at the required modules
2. Update the unit test cases
3. Add the required documentations and update the end point details DB schema diagram etc.
4. Do a round of regression test to deteming if all the affected modules are working as expecetd
5. Get a PR if the changes and stage it to SIT/UAT env for the users to validate
   Estimates:
   5-15 BD depending on the task size
   Dependencies:
   Technical architect, App Development Team
   Acceptance criteria:
6. Code changes to be reviewed and unit tested
7. Docs and other supporting docs to be updated.
8. No new vulnerability should get introduced

Task 5: User validation
Acceptance criteria:

1. Make sure that the Test/Product team checks the functionalities
2. The test team to update thier test suites
3. Fix any defect that's been rasied or broken due to this change
   Estimates:
   3-5 BD depending on the task size

Task 6: Final clean up and Prod deployemnt
Acceptance criteria:
1)Make sure that the function has been merged to the main branch and gets depled on the palnned release date 2) Delete all the extra branches that were craeted for this functionaliy whcih would help to have a cleaner code base
