import profileReducer, {addPostAC, deletePostAC, ProfileReducerType} from "./ProfileReducer";

let startState: ProfileReducerType
beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 15},
            {id: 3, message: 'Bla-bla', likesCount: 10}
        ],
        profile: null,
        status: ''
    }
})

test('length of posts should be increased', () => {
    let action = addPostAC('It-kamasutra.com')
    let newState = profileReducer(startState, action)
    expect(newState.posts.length).toBe(4)
})
test('new message should be correct in new post', () => {
    let action = addPostAC('It-kamasutra.com')
    let newState = profileReducer(startState, action)
    expect(newState.posts[3].message).toBe('It-kamasutra.com')
})
test('after deleting length should be decrease', () => {
    let action = deletePostAC(1)
    let newState = profileReducer(startState, action)
    expect(newState.posts.length).toBe(2)
    expect(newState.posts[0].message).toBe('It\'s my first post')
})