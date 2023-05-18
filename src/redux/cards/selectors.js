// import { createSelector } from '@reduxjs/toolkit';

export const getUserTeam = state => state.cards.userTeam;

// export const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filterValue) => {
//     const normalizedFilter = filterValue.toLocaleLowerCase().trim();
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizedFilter)
//     );
//     return visibleContacts;
//   }
// );
