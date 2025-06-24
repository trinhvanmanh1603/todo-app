import './App.scss'
import Layout from './layouts/Layout'
import { Route, Routes } from 'react-router-dom'
import TaskForm from './features/menu-contents/TaskForSevenDay'
import Home from './pages'
import CalendarComponent from './components/Calendar'
import DetailTaskForDay from './features/menu-contents/DetailTaskForDay'
import TaskOfList from './features/menu-contents/TaskOfList'
import Login from './features/auth/Login'
import RegisterForm from './features/auth/Register'
import AddList from './components/AddList'
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/task-form" element={<TaskForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/detail-day-task/:date" element={<DetailTaskForDay />} />
        <Route path="/my-list/:id" element={<TaskOfList />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-list" element={<AddList />} />
      </Routes>
    </Layout>
  )
}

export default App
