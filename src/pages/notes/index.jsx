import { useRouter } from "next/router"
import { useState } from "react"
const Notes = ({note}) => {
    const router =useRouter();

    const [title,setTitle]=useState('');

    const create=(e)=>{
        e.preventDefault()
    const newNotes={
        id:Date.now()+"",
        title:title
    }
    fetch(`http://localhost:5000/notes`,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(newNotes)
    })
    .then(()=>{
        router.push('notes'); //This router is used to recognize the getServerSidePropes every time clint send a request! 
    })
    }
    const remove=(id)=>{
    //   e.preventDefault();
      fetch(`http://localhost:5000/notes/${id}`,{
        method:"DELETE",
        headers:{
            "Content-type":"application/json"
        }
      })
      .then(()=>{
        router.push("notes");
      })
    }

  return (
    <div>
        <h1>Notes</h1>
        <form onSubmit={(e)=>create(e)}>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
            <button type="submit">Add Notes</button>
        </form>
        <ul>
            {note.map((item)=>(
                <li key={item.id}>{item.title}
                <button onClick={()=>remove(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export async function getServerSideProps(context){        //this function will call each time client request,is don't have any stale time like "revalidate" 
     console.log("I am from getserver!!");
    const res = await fetch(`http://localhost:5000/notes`)
    const data = await res.json()
    return{
        props:{
            note:data
        }
    }
}
export default Notes