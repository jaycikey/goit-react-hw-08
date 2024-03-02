import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters.name;

export const selectLoading = (state) => state.contacts.loading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const fuseOptions = {
      keys: ["name", "number"],
      includeScore: true,
      isCaseSensitive: false,
    };

    const fuse = new Fuse(contacts, fuseOptions);
    const result = filter ? fuse.search(filter) : contacts;

    return filter ? result.map(({ item }) => item) : contacts;
  }
);
