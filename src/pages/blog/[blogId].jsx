import { useRouter } from "next/router"

const BlogDetails = (props) => {
    const router =useRouter();
    if(router.isFallback){
        return(
            <h1>Loaidng..................</h1>
        )
    }
  return (
    <div>
        The page id is:{router.query.blogId}<br/>
        <p><b>My Title is: </b> {props.data.title}</p>
    </div>
  )
}

export async function getStaticProps(context){
    const {params} =context;
    console.log("I am from Dynamic page!");
    const res = await fetch(`http://localhost:5000/Posts/${params.blogId}`)
    const data = await res.json()

    return {
        props:{
           data
        }
    }
}

export async function getStaticPaths() {
   return{
    paths:[
        {params:{blogId:"1"}},
        {params:{blogId:"2"}},
        {params:{blogId:"3"}}
    ],
    fallback: true
   }
}
export default BlogDetails