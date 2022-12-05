import React, { useState, useEffect } from 'react'
import { format, render, cancel, register } from 'timeago.js';
import profilepic from '../../asset/profilepic.jpg'
import { GrFavorite } from "react-icons/gr";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector } from 'react-redux'
import axios from 'axios'

function Postdisplay({ obj }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const user = useSelector((state) => state.user)
  const [commentShow, setCommentShow] = useState(false)
  const [commentDesc, setCommentDesc] = useState('')
  const [commentData, setCommentdata] = useState([])

  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(obj.likes.length);

  useEffect(() => {
    setIsLiked(obj.likes.includes(user._id));
  
  },[]);

  const likeHandler = () => {
    try {
      axios.put('http://localhost:5000/post/like/'+obj._id,{ userId:user._id });
    } catch (err) {
      console.log(err);
    }
     setLike(isLiked ? like - 1 : like + 1);
     setIsLiked(!isLiked);
  };
 


  const submitHandler = async (e) => {
    e.preventDefault()
    const newComment = {
      userId: user._id,
      postId: obj._id,
      comment: commentDesc,
    }

    try {
      await axios.post('http://localhost:5000/newComment', newComment)
      // window.location.reload()
      setCommentDesc('')
    } catch (err) {
      console.log(err);
    }

  }
  useEffect(() => {
    // pass post id
    axios.get('http://localhost:5000/getComment/' + obj._id).then((response) => {
      // console.log(response.data, 'hdelooooooooooo');
      setCommentdata(response.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [commentDesc])
  return (
    <div>
      <p class="  text-sm font-normal text-gray-500 mt-7"> <img className='w-10 h-10 rounded-2xl m-2' src={obj.userId.profilePicture} alt="" />
        {obj.userId.name}</p>
      <p class=" text-sm font-normal text-gray-500 mb-3">{format(obj.createdAt)}</p>

      <p class="bg-slate-100 mb-4 text-base font-normal text-gray-600">
        {obj.desc}
      </p>

      {/* video */}
      {obj.video && <video className='w-full h-96' controls src={obj.video} type="video/mp4"></video>}
      {/* image */}
      {obj.img && <img className='.max-w-full .h-auto' src={obj.img} alt="" />}
      {/* youtubelink */}
      <div>
        {/* <iframe className='w-full h-96' src="https://www.youtube.com/embed/JKEJizRiBgQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      {/* <input placeholder="Co  ?" id="comment" className='bg-blue-50 mt-1 shareInput'/> */}
      <div className='flex'>
        <p className='text-black mx-2'><button onClick={(e) => {likeHandler()}} className='w-auto p-1 rounded-2xl'>{isLiked ? <TiHeartFullOutline style={{ color:"red"}}/>: <GrFavorite style={{ backgroundColor: "" }}/> }</button></p>
        <p>({like})</p>
        <p className='text-blue-900 mx-2 '><u className='cursor-pointer' onClick={(e) => { setCommentShow(!commentShow) }}>comments</u></p>
      </div>
      {/* comment box start */}
      {/* <div class="mx-auto my-10 max-w-xl rounded-xl border px-4 py-6 text-gray-700">
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="mb-2 text-gray-500"> You <span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
              <div class="rounded-lg bg-gray-100 p-2">
                <p class="flex  text-gray-500"> <img className='w-10 h-10 rounded-2xl ' src={profilepic} alt="" />
                  <span className='mt-3'> vishal varghese</span><span className='text-xs'> Sep 4</span></p>
                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem eum nostrum.</p>
              </div>
            </div> */}

      {commentShow ?
        <div>
          {
            commentData.map((obj) => {
              return (
                <div className="bg-slate-50 flex gap-3 my-2 items-center">
                  <div>
                    {/* <img className="w-8 rounded-full" src={PF+obj.userId.profilePicture} alt="profile" /> */}
                    <img className="w-8 rounded-full" src={obj.userId.profilePicture} alt="profile" />
                  </div>
                  <div>
                    <div>
                      <span className="font-medium text-sm mr-2">{obj.userId.name}</span>
                      <span className="">{obj.comment}</span>
                    </div>
                    <p className="text-slate-500 text-xs ">{format(obj.createdAt)}</p>
                  </div>
                </div>
              )
            })}
          <form onSubmit={submitHandler} action="" class="w-full p-4 bg-slate-100">
            <label class="block mb-2">
              <textarea value={commentDesc} onChange={(e) => { setCommentDesc(e.target.value) }} class="block w-full mt-1 rounded" rows="3" placeholder='Post a Comment'></textarea>
            </label>
            <button type='submit' class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded" >Comment</button>
          </form>

        </div>
        : null}
      {/* comment box start */}

    </div>
  )
}

export default Postdisplay
