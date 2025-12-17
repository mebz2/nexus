# FEATURES

## Core

### Things to use
  - react icons for icons
  - Clerk for authentication
  - cors for integrating different ports for client and server
  - checkout swagger for documentation
> [!NOTE]
> try to make them listen to the same port
---
#### User
- Create Account
  - verify email(use auth framework)
- Delete Account
- Edit Account Information
- Receive and respond to invitations
- Calendar, with information from group calendar
- Recent Activities
  - Use que for Activities
  - Update que every time a change happens in joined groups
----
#### Group
- Create Group
- Delete Group
  - Give members a grace period before permanent deletion
- Edit Group Information
- Invite People to the Group
  - searching and completion for user email addresses
- Kick-out members from the Group
- Promote members in the Group
- Group Calendar
  - Add events to the calendar
  - Send notifications to members about events
  - Update user calendar
- Search for Groups you are a part of
- files
  - Upload files
    - Edit name of the file
  - Delete files
- Todo List
  - Create a task
    - Assign task to the whole group, part of the group, or individual member
  - Clear task
  - Remove task
- Recent Activities
  - Use a que for activities
  - update if there is any thing that happened in the group
----
#### Archive
- upload personal files
- delete files

----
## Extras
- Subject directories for files
- use priority ques for recent activities
- Notice Board
  - owner and admins can post information on the notice board
  - contains information about upcoming events from the calendar
- Use qr codes somewhere if needed
