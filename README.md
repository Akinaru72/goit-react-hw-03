# Homework

- Create a repository named **goit-react-hw-03**.
- When submitting your homework, provide two links:
  - to the repository with the source files
  - to the live project deployed on **Vercel**
- The project should be created using [**Vite**](https://vite.dev/)
- Use the [**Formik**](https://formik.org/) library for building forms
- The code should run without errors or warnings in the console
- Each component in `src/components` should have its own folder containing:
  - the React component JSX file
  - the CSS module file
- Folder names, component filenames (`.jsx`) and CSS module filenames (`.module.css`) should match the component names in the task
- Components should be exported using **export default**
- JS code should be clean and readable; use **Prettier**
- Styling should be implemented using **CSS modules**

---

## Phonebook App

Build an app for storing contacts in a phonebook.  
The app should include:

- a contact addition form
- a contact list
- a search field to filter contacts

Watch the [demo video of the app](https://www.youtube.com/watch?v=ZZCYEl2Yc7U&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ).

---

## Components

In this task, the interface is already divided into components.  
Your task is to plan the state and props and implement them in code.

![preview](./src/assets/goit-hw-react-3-1.png)

Parts of the interface that belong to a component are highlighted with a colored border.

The following components should be created:

- root component `App`
- contact addition form `ContactForm`
- contact list `ContactList`
- individual contact item `ContactListItem`
- search filter `SearchBox`

As you can see, all components are rendered inside the `App` component.  
Its structure will look like this (props and additional logic are implied):

```jsx
<div>
  <h1>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>
```

This time, we will provide fewer hints than in the previous homework.  
This is done intentionally to help you gradually get used to developing components, their props, and the app logic.

---

## Step 1 — Contact List

The `App` component should have a contacts array in its state.  
During development, it’s convenient to hardcode some initial data in the state.  
This avoids the need to manually enter data in the interface when testing new functionality.

For example, you can use the following contacts array as the initial state:

```js
[
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
```

Create the **ContactList** and **Contact** components and use them to display the contact list.  
Pass the necessary values via props.

![preview](./src/assets/goit-hw-react-3-2.png)

After this step, the app interface will look like this — page title and contact list.

---

## Step 2 — Search by Name

Add a **SearchBox** input to filter the contact list by name.

- The search field is an input without a form, with its value stored in state (controlled component).
- The filtering logic should be case-insensitive.

The filter state should be kept in the `App` component and passed as props to the **SearchBox** component.  
Then the contact array is filtered in the `App` component, and the result — an array of filtered contacts — is passed as a prop to the **ContactList** component.

After this step, typing in the search field should update the contact list to show only the matching contacts.

Watch the [demo video of the app](https://www.youtube.com/watch?v=DtzimoNHUzQ&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ)

---

## Step 3 — Adding Contacts

Implement adding a contact to the contact list via the **ContactForm**.  
Each contact should be an object with `name`, `number`, and `id` properties, like the test data currently in state.

- Use any suitable package to generate IDs, for example, `nanoid`.
- At this stage, there is no database, so the object ID is created manually, for example, when submitting the form.

The form must be created using the **Formik** library.  
Add form field validation using **Yup** and display error messages:

- Fields are required
- Minimum length: 3 characters
- Maximum length: 50 characters

After this step, the app should look approximately like this.

Watch the [demo video of the app](https://www.youtube.com/watch?v=GDIcmgB0QaE&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ)

---

## Step 4 — Deleting Contacts

Extend the app functionality to allow users to delete previously saved contacts by clicking the **Delete** button in a contact card.

Watch the [demo video of the app](https://www.youtube.com/watch?v=oFmrtzhgoqk&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ)

---

## Step 5 — Saving Contacts

The app must persist the contact array between page reloads using **localStorage**.  
Use **effects** to synchronize the state with localStorage.

- When adding or deleting a contact, save the contacts to **localStorage**.
- On app load, if contacts exist in **localStorage**, read them and set them in the state.

Watch the [demo video of the app](https://www.youtube.com/watch?v=TgAc8ZtufZ8&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ)

---

**Live page: [GitHub Pages](https://goit-react-hw-03-pearl-two.vercel.app/)**
