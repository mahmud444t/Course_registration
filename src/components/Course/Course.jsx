
const Course = ({course,handleSelectBtn}) => {
    const {name,description,photo,price,credit}=course;
    return (

            <div className="card gap-4 bg-base-100 shadow-xl items-center ">
               <div>
                    <img src={photo} className="rounded-xl" />
               </div>  
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className=" text-stone-900 text-opacity-60 text-sm font-normal">{description}</p>
                    <div className="flex gap-4">
                        <div  className="flex gap-3">
                            <div><img src="/public/dollar-sign 1.svg" alt="" /></div>
                            <p className="text-stone-900 text-opacity-60 text-base font-medium">Price: {price}</p>    
                        </div>
                        <div  className="flex gap-3">
                            <div><img src="/public/Frame.svg" alt="" /></div>
                            <p className="text-stone-900 text-opacity-60 text-base font-medium">Credit: {credit}</p>    
                        </div>
                        
                    </div>
                    <button onClick={()=>handleSelectBtn(course)} className="btn btn-primary">Select</button>
                    
                </div>
            </div>

    );
};

export default Course;