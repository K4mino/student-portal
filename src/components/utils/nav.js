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
    label:'Новости'
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
    label:'Дисциплины'
  },
  {
    icon:BsBook,
    color:'#2E5BF0',
    label:'Журнал'
  },
  {
    icon:BsChatLeft,
    color:'#2E5BF0',
    label:'Чаты'
  }
];

export default navigation;