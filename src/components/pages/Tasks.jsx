import React from 'react';
import styled from 'styled-components';
import { useParams} from 'react-router-dom';
import { getDoc,doc,updateDoc, arrayUnion, arrayRemove} from 'firebase/firestore';
import { uploadBytes, ref, deleteObject } from 'firebase/storage';
import { useEffect,useState,useContext } from 'react';
import { Form, Input,Button,Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import {db,storage} from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import Layout from '../Layout';
import { Box,Text } from '../atoms';
import Task from '../organisms/Task';

const Title = styled(Text)`
    font-size:1.4rem;
    font-weight:600;
    width:100%;
    text-align:left;
`;

const StyledForm = styled(Form)`
    display:flex;
    width:100%;
    justify-content:flex-start;
    gap:25px;
`;

const Tasks = () => { 
  const [lesson,setLesson] = useState('');
  const {id} = useParams();
  const {currentUser} = useContext(AuthContext);
  const [tasks,setTasks] = useState([]);
  const [role,setRole] = useState('');
  const [form] = Form.useForm();
  const [material,setMaterial]= useState(null);
  const [lessonObj,setLessonObj] = useState({});

  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        //setTasks(userData?.lessons[id].tasks);
        //setLesson(userData?.lessons[id].name.toLowerCase());
        //setLessonObj(userData?.lessons[id]);
        let list = [];
        for (const item of userData.lessons){
          const path = item.path;
          const lessonId = path.split('/').pop();
          const lesson = await getDoc(doc(db,'lessons',lessonId));
          list.push(lesson.data());
        }
        setTasks(list[id].tasks);
        setLesson(list[id].name.toLowerCase());
        setLessonObj(list[id]);
        setRole(userData?.role);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);


  useEffect(()=> {
    setLesson(lesson);
  },[lesson]);
  console.log(lessonObj);
  const handleAddTask = async() => {
    const {week,description} = form.getFieldsValue(); 
    const homeworkRef = ref(storage,`studyMaterials/${lessonObj.name.toLowerCase()}/${week}/material-for-week-${week}`);
    let materialLink = `studyMaterials/${lessonObj.name}/${week}`;
    if(material == null) return;

    let newTask = {
      week,
      materialLink,
      description
    };

    await uploadBytes(homeworkRef,material);
    await updateDoc(doc(db,'lessons',lessonObj.uid),{
      tasks:arrayUnion(newTask)
    });
    window.location.reload();
  };

  const handleDeleteTask = async(task,i) => {
    try {
      await updateDoc(doc(db,'lessons',lessonObj.uid),{
        tasks:arrayRemove(task)
      });
      window.location.reload();
      await deleteObject(ref(storage,`studyMaterials/${lessonObj.name}/${i+1}/material-for-week-${i+1}`));
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Layout pageTitle='Задания'>
      <Box
        gap='1rem'
        width='95%'>
        <Title>
          {lesson}
        </Title>
        {
          role == 'teacher' && 
          <StyledForm
            form={form}
            onFinish={handleAddTask}>
            <Form.Item
              label='Week'
              name='week'>
              <Input/>
            </Form.Item>

            <Form.Item
              label='Description'
              name='description'>
              <Input.TextArea rows={2}
                cols={32}/>
            </Form.Item>

            <Upload name='file'
              onChange={(e)=> setMaterial(e.file)}>
              <Button icon={<UploadOutlined/>}>Click to upload</Button>
            </Upload>

            <Form.Item wrapperCol={{ offset: 16, span: 12 }}>
              <Button type='primary'
                htmlType='submit'>
                    Add task
              </Button>
            </Form.Item>
          </StyledForm>
        }
        {
          role == 'student' &&
           <>
             {
               tasks?.map((task) => (
                 <Task
                   role={role}
                   materialsUrl={task.materials}
                   lesson={lesson}
                   key={task.name}
                   week={task.week}
                   description={task?.description}/>
               ))
             }          
           </>
        }
        {
          role == 'teacher' && 
          <>
            {
              tasks?.map((task,i) => (
                <>
                  <Task
                    role={role}
                    materialsUrl={task.materialLink}
                    lesson={lesson}
                    key={task.name}
                    week={task.week}
                    description={task?.description}/>
                  <Button onClick={() => handleDeleteTask(task,i)}>Delete</Button>
                </>
              ))
            }
          </>
        }
      </Box>
    </Layout>
  );
};

export default Tasks;