import addDays from 'date-fns/add_days';

const a = 'https://crunchbase-production-res.cloudinary.com/image/upload/c_thu';
const b = 'mb,h_120,w_120,f_auto,g_faces,z_0.7,b_white,q_a';
const c = 'uto:eco/v1488827383/zmjgqwimlaqoayobk2e5.png';

const pavel = a + b + c;

const TODAY = new Date();

export default {
  card_day_a: {
    scheduled_date: TODAY,
    offerings: [
      {
        id: '0',
        kind: 'Yoga',
        teacher_name: 'Jim Smith',
        teacher_image_uri: pavel,
        title: 'Sivananda Yoga',
        within_time: '30 Minutes',
        is_personalized: true,
        cost: '3.99',
      },
      {
        id: '1',
        kind: 'Dance',
        teacher_name: 'Sarah Jones',
        teacher_image_uri: pavel,
        title: 'Hip-hop Dance',
        within_time: '1 Hour and 30 Minutes',
        is_personalized: false,
        cost: '3.99',
      },
      {
        id: '2',
        kind: 'Meditation',
        teacher_name: 'Kevin Wu',
        teacher_image_uri: pavel,
        title: 'Start your day',
        within_time: '20 Minutes',
        is_personalized: false,
        cost: '1.99',
      },
      {
        id: '3',
        kind: 'Meditation',
        teacher_name: 'Casey Jordon',
        teacher_image_uri: pavel,
        title: 'Basic Breathing Exercise',
        within_time: '30 Minutes',
        is_personalized: false,
        cost: '1.99',
      },
    ],
  },
  card_day_b: {
    scheduled_date: addDays(TODAY, 1),
    offerings: [
      {
        id: '78',
        kind: 'Yoga',
        teacher_name: 'Jim Smith',
        teacher_image_uri: pavel,
        title: 'Sivananda Yoga',
        within_time: '30 Minutes',
        is_personalized: true,
        cost: '3.99',
      },
      {
        id: '22',
        kind: 'Meditation',
        teacher_name: 'Kevin Wu',
        teacher_image_uri: pavel,
        title: 'Start your day',
        within_time: '20 Minutes',
        is_personalized: false,
        cost: '1.99',
      },
      {
        id: '38',
        kind: 'Meditation',
        teacher_name: 'Casey Jordon',
        teacher_image_uri: pavel,
        title: 'Basic Breathing Exercise',
        within_time: '30 Minutes',
        is_personalized: false,
        cost: '1.99',
      },
    ],
  },
  card_day_c: {
    scheduled_date: addDays(TODAY, 2),
    offerings: [
      {
        id: '33',
        kind: 'Dance',
        teacher_name: 'Jones Sarah',
        teacher_image_uri: pavel,
        title: 'Hip-hop Dance',
        within_time: '2 Hour and 30 Minutes',
        is_personalized: false,
        cost: '2.99',
      },
      {
        id: '44',
        kind: 'Meditation',
        teacher_name: 'Jordon Casey',
        teacher_image_uri: pavel,
        title: 'Basic Breathing Exercise',
        within_time: '1 Hour 30 Minutes',
        is_personalized: false,
        cost: '4.99',
      },
    ],
  },
};
