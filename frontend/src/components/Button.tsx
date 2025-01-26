interface ButtonType{
    label:string,
    onClick:any
}

export const Button=({label, onClick}:ButtonType)=>{
    return <div>
        <div className=" flex justify-center pt-10">
            <div>
                <button onClick={onClick} type="button" className=" w-96 bg-black hover:bg-blue-700 text-white font-bold py-2  border border-blue-700 rounded">{label}</button>
            </div>
        </div>
    </div>
}