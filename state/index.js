import { types, onSnapshot } from 'mobx-state-tree';
import format from 'date-fns/format';
import addDays from 'date-fns/add_days';

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

const Offering = types.model('Offering', {
  id: types.identifier(),
  cost: types.string,
  author: types.string,
});

const OfferingsEachDay = types.model('OfferingEachDay', {
  scheduled_date: types.Date,
  offerings: types.array(Offering),
});

const SprungOfferings = types
  .model('SprungOfferings', {
    current_month: types.string,
    sprung_offerings: types.array(OfferingsEachDay),
  })
  .actions(self => ({
    refresh_offerings() {
      //
    },
  }));

export const nav_store = NavigationStoreModel.create({
  drawer_button_shows: true,
});

const TODAY = new Date();
const MONTH = format(TODAY, 'MMMM');

export const offerings_store = SprungOfferings.create({
  current_month: MONTH,
  sprung_offerings: [
    { scheduled_date: TODAY, offerings: [{ id: '0', cost: '3.99', author: 'Jim Smith' }] },
    {
      scheduled_date: addDays(TODAY, 1),
      offerings: [{ id: '1', cost: '3.99', author: 'Jim Smith' }],
    },
    {
      scheduled_date: addDays(TODAY, 2),
      offerings: [{ id: '2', cost: '3.99', author: 'Jim Smith' }],
    },
  ],
});

onSnapshot(nav_store, snapshot => {
  console.log({ snapshot });
});
