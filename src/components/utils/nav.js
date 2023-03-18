import { BsPersonCircle ,BsHddStack,BsCalendar,BsJournals,BsBook,BsChatLeft} from 'react-icons/bs';

const navigation = [
  {   
    icon:BsPersonCircle,
    color:'#2E5BF0',
    label:'Профиль',
    path:'/profile'
  },
  {   
    icon:BsHddStack,
    color:'#2E5BF0',
    label:'Новости',
    path:'/news'
  },
  {
    icon:BsCalendar,
    color:'#2E5BF0',
    label:'Расписание',
    path:'/dashboard'
  },
  {
    icon:BsJournals,
    color:'#2E5BF0',
    label:'Дисциплины',
    path:'/disciplines'
  },
  {
    icon:BsBook,
    color:'#2E5BF0',
    label:'Журнал',
    path:'/journal'
  },
  {
    icon:BsChatLeft,
    color:'#2E5BF0',
    label:'Чаты',
    path:'/chats'
  }
];

export default navigation;