import { renderHook } from '@testing-library/react-hooks';
import { getPost } from '../../api';
import useFetchPost from './'

jest.mock('../../api')
const mockGetPost = getPost;

describe('the useFetchPost hook', () => {
  let mockFetchPostResult;
  let mockPostObject;

  beforeEach(() => {
    mockPostObject = {
      id: "1",
      title: "mock title",
      body: "mock body of post"
    }

    mockFetchPostResult = Promise.resolve(mockPostObject)
  })

  it('should return Post object result', async () => {
    mockGetPost.mockImplementation(() => mockFetchPostResult)

    const { result, waitForNextUpdate } = renderHook(() => useFetchPost(1))
    await waitForNextUpdate()

    const [loading, post, error] = result.current
    expect(loading).toEqual(false)
    expect(post).toEqual(mockPostObject)
    expect(error).toEqual(null)
  })

  it('should return error message when getPost have problem', async () => {
    const mockErrorMessage = new Error("something wrong")
    mockGetPost.mockImplementation(() => Promise.reject(mockErrorMessage))

    const { result, waitForNextUpdate } = renderHook(() => useFetchPost(1))
    await waitForNextUpdate()

    const [loading, post, error] = result.current
    expect(loading).toEqual(false)
    expect(post).toEqual(null)
    expect(error).toEqual(mockErrorMessage.message)
  })
})