
const Cart = ({courses,Rcredits}) => {
    
    return (
        <div className="md:w-1/4 h-1/2 bg-slate-200 p-6 rounded-xl">
            <h2 className="text-blue-500 text-lg font-bold pb-4 mb-4 border-b-2 border-stone-900 border-opacity-20">Credit Hour Remaining {Rcredits} hr</h2>
            <div className="pb-6 mb-4 border-b-2 border-stone-900 border-opacity-20">
                <h2 className="text-stone-900 text-xl font-bold ">Course Name</h2>
                <div>
                    {
                        courses.map((course,idx)=><p key={idx}>{idx+1} {course.name}</p>)
                    }
                </div>
            </div>
            <div className="text-stone-900 text-opacity-80 text-base font-medium pb-6 mb-4 border-b-2 border-stone-900 border-opacity-20">Total Credit Hour : {courses.reduce((p,c)=>p+c.credit,0)}</div>
            <div className="text-stone-900 text-opacity-80 text-base font-medium ">Total Price: {courses.reduce((p,c)=>p+c.price,0)} USD</div>
        </div>
    );
};

export default Cart;