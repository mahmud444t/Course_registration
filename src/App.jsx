import Header from "./components/Header/Header"
import Courses from "./components/Courses/Courses";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [courses,setCourses]=useState([]);

  const [Rcredits,setRcredits]=useState(20);
  const handleSelectBtn=(course)=>{
    const credit=courses.reduce((p,c)=>p+c.credit,0);
    const alreadyExists= courses.find(c=>c.id==course.id);
    if ((credit+course.credit)>20) {  
      return toast.error('Exceeded credit limit');
    }
     if (!alreadyExists) {
          setCourses([...courses,course]);
    setRcredits(Rcredits-course.credit);
    toast.success('Successfully added');
    }else{
      toast.warning('Course already selected');
    }
    


  }
  return (
    <>
    <div className="max-w-[1440px] mx-auto  p-5">
      <Header ></Header>
      <div className="flex flex-col md:flex-row gap-6">
          <Courses handleSelectBtn={handleSelectBtn}></Courses> 
          <Cart courses={courses} Rcredits={Rcredits}></Cart>   
      </div>
      <ToastContainer />
    </div>

    </>
  )
}

export default App
