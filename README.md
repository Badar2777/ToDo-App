This project focuses on component architecture best practices, props passing, and reusability, while delivering an elegant glass-morphism UI.
It includes a complete task management system featuring categories, editing, deleting, completion toggles, filters, and localStorage persistence.

 Features
 Functional

Add tasks with categories

Edit tasks in a modal

Delete tasks instantly

Mark tasks completed / pending

Filter by categories or completion state

Persistent LocalStorage saving

Animated progress bar showing completion %

 UI/UX

Futuristic glass-morphism UI

Lucide icons for all actions

Smooth hover + transition animations

Responsive on all devices

Clean and minimal layout

Component Architecture

The app is built with clean and highly reusable components:

src/
 ├── App.jsx        → global state + logic + localStorage
 ├── components/
 │     ├── TodoList.jsx  → filters, add, progress bar, mapping list
 │     └── TodoItem.jsx  → icons, edit modal, animations
 └── index.css


App.jsx handles all logic

TodoList.jsx displays list + filtering + UI

TodoItem.jsx manages each individual task

This separation ensures clean structure, scalability, and reusability.

Tech Stack

React.js

Tailwind CSS

Lucide Icons

LocalStorage API

 Learning Outcomes

Master component hierarchy and props passing

Build reusable React UI components

Manage state and lifecycle with hooks

Use LocalStorage for data persistence

Implement category-based filtering

Apply modern styling with Tailwind CSS

Create animated UX components

Screenshots
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/82b1b8c8-6de5-4013-adc3-ebdd57c65fda" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/458d9492-6a69-4c65-94ad-c4bfe8d99158" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/77f33239-84af-465c-8352-92f0df870335" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/36e4d06d-737e-406d-a91f-5fe49388cf30" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/b151f182-71f4-41a1-a4fd-f12923249f5d" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/e1fbc936-f667-405a-b3c9-24485d4a11f5" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/1210a396-ae4e-4957-bbad-9382f4e42c42" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/6e542170-5a8d-4615-b58d-f6464939cb50" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/bb2b2fbe-fc56-436a-b2d0-b37af49c69d1" />



Installation
git clone https://github.com/yourusername/advanced-react-todo.git
cd advanced-react-todo
npm install
npm run dev
