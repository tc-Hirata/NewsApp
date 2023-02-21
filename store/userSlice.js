import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  clips: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addClip: (state, action) => {
    // 追加したい新しいclipが入ってくる
      const  newClip = action.payload;
    //stateに既存が入っている
      state.clips.push(newClip)
    },
    deleteClip: (state, action) => {
    // 削除したいpayload
      const deletingClip = action.payload;
    // 現在のclips配列
      const currentClips = state.clips;
      const filteredClips = currentClips.filter((clip) => clip.url !== deletingClip.url)
      state.clips = filteredClips
    },
  },
});

// Action creators are generated for each case reducer function
export const { addClip, deleteClip } = userSlice.actions

export default userSlice.reducer
