
import { useState } from "react"

function ToDo() {
    const [addItem, setAddItem] = useState()
    const [Items, setItems] = useState([])
    const [editItem,setEditItem]=useState(null)
    const handleAdd = () => {
        if(editItem!==null)
        {
            const updateItem=[...Items]
            updateItem[editItem]=addItem
            setItems(updateItem)
            setEditItem(null)
        }
        else{
        setItems([...Items, addItem])
        }
        setAddItem("")
        alert('adding')
    }
    const handleEdit=(index)=>{
        alert('editing...........')
        setEditItem(index)
        setAddItem(Items[index])
    }
    const handleDelete=(index)=>{
        alert('deleting')
        const updateItem=[...Items]
        updateItem.splice(index,1)
        setItems(updateItem)
    }
    const handleAddchange = (e) => {
        setAddItem(e.target.value)
    }
    return (
        <>
            <div>
                <h1 className=" my-20 text-9xl font-bold hover:text-orange-700">ToDo List</h1>
                <input className=" mx-6 my-4 w-96 h-10 text-3xl" placeholder="add item....." type="text" value={addItem} onChange={handleAddchange}></input>
                <button onClick={() => handleAdd()} className=" mx-14 w-20 bg-blue-500 text-3xl rounded-2xl px-1 font-bold hover:bg-orange-700 hover:text-white">ADD</button>
            </div>
            <div>
                <ul>
                    {Items.map((item, index) => (
                        <li key={index} className=" mx-2 py-2 px-4 my-10 bg-yellow-500 w-96 font-bold text-3xl rounded-2xl">
                            {item}

                            <button onClick={() => handleEdit(index)} className=" mx-10 w-20 bg-blue-500 text-3xl rounded-2xl px-1 font-bold hover:bg-orange-700 hover:text-white">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(index)} className=" w-28 bg-blue-500 text-3xl rounded-2xl px-1 font-bold hover:bg-orange-700 hover:text-white">
                                Delete
                            </button>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default ToDo