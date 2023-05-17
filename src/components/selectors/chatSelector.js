const _ = require('lodash');

export const selectUser = (state) => _.get(state, 'chat.user',{});
export const selectIsChatOpen = (state) => _.get(state, 'chat.isChatOpen',false);