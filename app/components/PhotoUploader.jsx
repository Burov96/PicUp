'use client'


import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { useRouter } from 'next/navigation'

function PhotoUploader() {
    const [uploading, setUploading] = useState(false)
    const router = useRouter()
    
    async function handleFileUpload(e){
        try {
            setUploading(true)
            const file = e.target.files[0]
            const fileExt = file.name.split('.').pop()
            const fileName = `${new Date().getTime()}.${fileExt}`
            const {data:{user}} = await supabase.auth.getUser()
            if (!user){ throw new Error('No user on the session!')}
            const filePath = `user_uploads/${user.id}/${fileName}`
            const {error} = await supabase.storage.from('photos').upload(filePath, file)
            if (error){ throw error}
            await fetch ('/api/revalidate',{
                method: 'POST',
                headers:{
                    "Content-Type": 'application/json'
                },
                body:JSON.stringify({path: '/photos'})
            })
            router.refresh();
        }
        catch (error){
            alert(error.message)
        }
        finally {
            setUploading(false)
        }
    }
  return (
<label 
htmlFor="photo-upload"
className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg m-4">
<input
id='photo-upload'
type='file'
className='hidden'
accept='image/*'
onChange={handleFileUpload}
disabled={uploading}
/>
{uploading? 'Uploading...' : 'Upload Photo'}
</label>  )
}

export default PhotoUploader