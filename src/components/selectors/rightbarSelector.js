const _ = require('lodash')

export const selectRightbarIsOpen =  (state) => _.get(state, 'rightBar.isOpen',false);