Install dependencies: npm install

Start development mode: npm start

I have created this little TODO app with React, using React DnD for the drag and drop function, and context to manage the global state.

The form to add a new task can be shown or hidden from the DOM with the small arrow on the right side.

Every individual task can be deleted a moved between columns.

UUID has been used to create unique IDs for every new task.

When submitting a new task, have in mind that there is a validation that only allows you to submit when the value is at least 3 characters long.
