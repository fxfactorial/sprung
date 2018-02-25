import { types, onSnapshot } from 'mobx-state-tree';

const NavigationStoreModel = types
  .model('NavigationStore', {
    drawer_button_shows: types.boolean,
    title: 'Sprung',
    subtitle: ' ',
  })
  .actions(self => ({
    toggle_drawer_button() {
      self.drawer_button_shows = !self.drawer_button_shows;
    },
  }));

export const nav_store = NavigationStoreModel.create({
  drawer_button_shows: true,
});

onSnapshot(nav_store, snapshot => {
  console.log({ snapshot });
});
