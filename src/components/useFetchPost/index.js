import { useEffect, useState } from 'react';
import { getPost } from '../../api';

const useFetchPost = (id) => {

  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    const getPostFromApi = async () => {
      try {
        const result = await getPost(id)
        setPost(result)
      } catch(err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getPostFromApi()
  }, [id])

  return [loading, post, error];
}

export default useFetchPost;