import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectBtn}) => {
    const[courses,setCourses]=useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="md:w-[75%]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                courses.map((course,idx)=><Course handleSelectBtn={handleSelectBtn} key={idx} course={course}></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;