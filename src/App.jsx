import './App.scss'
import Layout from './layouts/Layout'
import { Route, Routes } from 'react-router-dom'
import TaskForm from './features/menu-contents/TaskForSevenDay'
import Home from './pages'
import CalendarComponent from './components/Calendar'
import DetailDayTask from './features/menu-contents/DetailDayTask'
import TaskMyList from './features/menu-contents/TaskMyList'
import Login from './features/auth/Login'
import RegisterForm from './features/auth/Register'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/task-form" element={<TaskForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/detail-day-task/:date" element={<DetailDayTask />} />
        <Route path="/my-list/:id" element={<TaskMyList />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />

      </Routes>
    </Layout>
  )
}

export default App
