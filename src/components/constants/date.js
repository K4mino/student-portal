import moment from 'moment/moment';

const dateFormat = (date) => moment(date).format('MMMM Do YYYY');

export default dateFormat;