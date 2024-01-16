import { createServerClient } from "@supabase/ssr";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function POST (req){
    try{const body = await requestAnimationFrame.json();
    const path = body.path
    const coockieStory = cookies();
    const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ,{
    cookies:{
        getComputedStyle(name){
            return cookieStore.get(name)?.value
        },
        set(name, value, options){
            cookieStore.set({name, value, ...options})
        },
        remove(name, options){
            cookieStore.set({
                name,value:'', ...options
            })
        }
    }
}
    )
    const{data:{user}}=await supabase.auth.getUser();

    if(!user){
        return new Response(JSON.stringify({message:"Unauthorized"}), {
            status:401,
            headers:{'Content-Type': 'application/json'}
        })
    }
    if(path){
        revalidatePath(path)
        return new Response(JSON.stringify({message:`Revalidated ${path}`}), {
            status:200,
            headers:{'Content-Type': 'application/json'}
        })} else{
            return new Response(JSON.stringify({message:"No path!"}), {
                status:400,
                headers:{'Content-Type': 'application/json'}
            })
        }
        
    }

catch (e){
    console.log(e);
    return new Response(JSON.stringify({message:"Error revalidating path!"}), {
        status:500,
        headers:{'Content-Type': 'application/json'}
    })
}
}