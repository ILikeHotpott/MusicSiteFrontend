// Manage chart data in rank list page

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list1: [
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/3_Enough_Cardi_B.jpg',
      track: 'Enough',
      artist: 'Cardi B',
      rank: 1,
    },
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/43_Lover_Taylor_Swift.jpg',
      track: 'Lover',
      artist: 'Taylor Swift',
      rank: 2,
    },
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/22_What_Was_I_Made_For%3F_Billie_Eilish.jpg',
      track: 'What Was I Made For?',
      artist: 'Billie Eilish',
      rank: 3,
    },
  ],
  list2: [
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/snooze_vnjeOob.jpeg',
      track: 'Snooze',
      artist: 'SZA',
      rank: 1,
    },
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/blonde_QG6xC7m.jpeg',
      track: 'Pink + White',
      artist: 'Frank Ocean',
      rank: 2,
    },
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/LetTheLightIn_YUIubch.webp',
      track: 'Let the light in',
      artist: 'Lana del rey',
      rank: 3,
    },
  ],
  list3: [
    {
      imgSrc: 'https://i.scdn.co/image/ab67616d0000b273125b1a330b6f6100ab19dbed',
      track: 'Track 4',
      artist: 'Artist 4',
      rank: 1,
    },
    {
      imgSrc: 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/media/album/wonder_Yx2vcT2.jpg',
      track: 'Wonder',
      artist: 'Shawn Mendes',
      rank: 2,
    },
    {
      imgSrc: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
      track: 'After Hours',
      artist: 'The Weeknd',
      rank: 3,
    },
  ],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    setList1: (state, action) => {
      state.list1 = action.payload;
    },
    setList2: (state, action) => {
      state.list2 = action.payload;
    },
    setList3: (state, action) => {
      state.list3 = action.payload;
    },
  },
});

export const { setList1, setList2, setList3 } = chartSlice.actions;
export default chartSlice.reducer;
