const allPostGetResolver = require('./postResolver/allPostGetResolvers.js')
const createPostMutationResolver = require('./postResolver/createPost.resolver.js')
const handleLikeMutationResolver = require('./postResolver/handleLike.js')
const handleDislikeMutationResolve = require('./postResolver/handleDislike.js')
let createUserMutationResolver = require('./userResolver/createUser.resolver.js')
const userLoginMutationResolver = require('./userResolver/userLogin.resolver.js')
const createCommentMutationResolver = require('./postResolver/createCommentMutationResolver.js')
const someCommentQueryResolver = require('./postResolver/someCommentQueryResolver.js')
const { GraphQLScalarType, Kind } = require('graphql');
const handleCommentLikeMutationResolver = require('./postResolver/handleCommentLike.js')
const handleCommentDislikeMutationResolver = require('./postResolver/handleCommentDislike.js')
const createCommentReplyMutationResolver = require('./postResolver/createCommentReply.js')
let updateUserProfileMutationResolver = require('./userProfileResolver/updateUserProfile.js')
const getUserProfileDetailsResolver = require('./userProfileResolver/getUserProfileDetails.js')
const getUserPostQueryResolver = require('./postResolver/getUserPosts.js')
const fetchNotificationsQueryResolver = require('./notificationResolver.js/fetchNotifications.js')
const romoveNotificationMutationResolver = require('./notificationResolver.js/removeNotification.js')
const notificationWatchMutationResolver = require('./notificationResolver.js/notificationWatch.js')
const fetchUserBookmarksQueryResolver = require('./bookmarkResolver/fetchUserBookmarkResolver.js')
const createBookmarkMutationResolver = require('./bookmarkResolver/createBookmark.resolver.js')
const sendFriendRequestMutationResolver = require('./friendResolver/sendFriendRequest.js')
const saveFriendMutationResolver = require('./friendResolver/saveFriend.js')
const deleteFriendRequestMutationResolver = require('./friendResolver/deleteFriendRequest.js')
const cancelOwnRequestMutationResolver = require('./friendResolver/cancelOwnRequest.js')
const searchUserQueryResolver = require('./searchResolver/searchUser.js')
const searchPostQueryResolver = require('./searchResolver/searchPost.js')

let rootResolvers = {
    Query: {
        details: () => {
            return {
                myCreator: 'Allah.All the praise belongs to Allah',
                project: 'GraphQL + MERN stack'
            }
        },
        allPosts: allPostGetResolver,
        someComment: someCommentQueryResolver,
        userProfileDetails: getUserProfileDetailsResolver,
        userPosts: getUserPostQueryResolver,
        fetchUserNotifications: fetchNotificationsQueryResolver,
        fetchUserBookmarks: fetchUserBookmarksQueryResolver,
        searchUser: searchUserQueryResolver,
        searchPost: searchPostQueryResolver


    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',

        parseValue(value) {
            console.log(value)
            return new Date(value); // Convert incoming integer to Date
        }
    }),
    Mutation: {
        createUser: createUserMutationResolver,
        login: userLoginMutationResolver,
        createPost: createPostMutationResolver,
        handleLike: handleLikeMutationResolver,
        handleDislike: handleDislikeMutationResolve,
        createComment: createCommentMutationResolver,
        handleCommentLike: handleCommentLikeMutationResolver,
        handleCommentDislike: handleCommentDislikeMutationResolver,
        createCommentReply: createCommentReplyMutationResolver,
        updateUserProfile: updateUserProfileMutationResolver,
        removeNotification: romoveNotificationMutationResolver,
        notificationWatch: notificationWatchMutationResolver,
        createBookmark: createBookmarkMutationResolver,
        sendFriendRequest: sendFriendRequestMutationResolver,
        saveFriend: saveFriendMutationResolver,
        deleteFriendRequest: deleteFriendRequestMutationResolver,
        cancelOwnRequest: cancelOwnRequestMutationResolver

    }
}

module.exports = rootResolvers