class Twitter {
    constructor() {
        this.tweetsList = {}
        this.followerList = {}
        this.timestamp = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.tweetsList[userId]) {
            this.tweetsList[userId] = [];
        }
        // Store as [timestamp, tweetId] for ordering
        this.tweetsList[userId].push([this.timestamp++, tweetId]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const result = [];
 
        // Get all people to follow (user + their followees)
        const peopleToFollow = new Set([userId]);
        if (this.followerList[userId]) {
            this.followerList[userId].forEach(followeeId => {
                peopleToFollow.add(followeeId);
            });
        }
 
        // Collect all recent tweets from peopleToFollow
        const allTweets = [];
        peopleToFollow.forEach(personId => {
            if (this.tweetsList[personId]) {
                // Add all tweets from this person
                allTweets.push(...this.tweetsList[personId]);
            }
        });
 
        // Sort by timestamp (descending) and take top 10
        allTweets.sort((a, b) => b[0] - a[0]);
        for (let i = 0; i < Math.min(10, allTweets.length); i++) {
            result.push(allTweets[i][1]);
        }
 
        return result;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
       if (!this.followerList[followerId]) {
            this.followerList[followerId] = [];
        }
        if (!this.followerList[followerId].includes(followeeId)) {
            this.followerList[followerId].push(followeeId);
        }

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (this.followerList[followerId]) {
            const index = this.followerList[followerId].indexOf(followeeId);
            if (index > -1) {
                this.followerList[followerId].splice(index, 1);
            }
        }
    }
}
