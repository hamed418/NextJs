import Nav from "@/component/Nav"
import Link from "next/link";
const index = ({post}) => {
  return (
    
    <div>
        <Nav/><br/>
        <h2>This is blog page!</h2><br/>
        <ul>
            {post.map((item)=>(
                <li key={item.id}>
                   <Link href={`blog/${item.id}`}> {item.title} </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export async function getStaticProps(){
    console.log("I am from Blog page!");
    const res= await fetch(`http://localhost:5000/Posts`);
    const data = await res.json();
    return{
        props:{
            post:data
        },
        revalidate:10
    }
}

export default index