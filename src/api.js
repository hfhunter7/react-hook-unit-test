export const getPost = async (id) => {
  try {
    const fetchResult = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!fetchResult.ok) {
      throw new Error("server error")
    }
    return await fetchResult.json();
  } catch (error) {
    throw new Error("something whet wrong")
  }
}