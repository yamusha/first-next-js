import React from 'react'
import {useRouter} from 'next/router'
import styles from '../post.module.scss'

const PostName = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Post: {router.query.name} </h1>
      <h1 className={styles.heading}>ID : {router.query.id}</h1>
    </div>
  )
}

export default PostName
