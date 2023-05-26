# Avengers Power Calculator

---

## Description

_The Avengers Power Calculator is a web application that allows users to
calculate the power of their custom Avengers team based on their chosen
characters' characteristics. Users can assemble their own team by selecting
Marvel characters from a provided list and determine how strong their team would
be in battles against other teams. Or the users can choose an existing
well-known team from Marvel comics._

---

## Table of Contents

- [Technologies Used](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Routes](#routes)

---

## Features

- User-friendly interface with a Marvel-themed design.
- Integration with a free API source, such as the Marvel API, to retrieve
  information about Marvel characters.
- Display of detailed information about each character, including their name,
  height, weight, superpowers, and more.
- Ability to add selected characters to the user's team.
- Real-time calculation of the overall power of the team based on the
  characteristics of the chosen characters.
- The ability to save, view and analyze the history of all battles and team
  compositions in which the user played.
- Additional page with information about the Avengers team, including character
  details, superpowers, and the history of the Avengers.
- Engaging animations and interactive elements for an enhanced user experience.
- Adaptive layout: The app is designed to work on tablet and laptop screen sizes
  and that adapts to the user's device.

---

## Technologies Used <a id="technologies"></a>

- React
- React Router
- Axios
- MockAPI
- Styled-components

---

## Installation <a id="installation"></a>

```
$ git clone https://github.com/Siryi-Oleksandr/tweet-card-test.git
$ cd your-project
$ npm install
$ npm start

```

---

## Usage <a id="usage"></a>

You can freely move between pages. On Tweets page choose any interesting user
and subscribe and follow it. Or conversely, you can unsubscribe from anyone.
Also you can filter users by name or status of the subscription. You have many
variants to quickly find some user using filters by name and status of the
users.

---

## API <a id="api"></a>

The app uses the MockAPI service to simulate a backend. The users resource has
been created and the user object has the following fields: id, user, tweets,
followers, avatar. Pagination, filtering implemented through the backend.

---

## Routes <a id="routes"></a>

- '/' - Home page
- '/tweets' - Tweets page

---
