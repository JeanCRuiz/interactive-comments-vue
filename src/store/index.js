import { defineStore } from 'pinia';
import data from '../data.json';
import { currentId, dateFormatted } from '../helper';

export const useCommentStore = defineStore('commentStore', {
  state: () => {
    return {
      currentUser: data.currentUser,
      comments: data.comments,
    };
  },
  actions: {
    upvote(id) {
      return id.score++;
    },
    downvote(id) {
      if (id.score <= 0) return;

      return id.score--;
    },
    addComment(comment) {
      return this.comments.push({
        id: currentId(data),
        createdAt: dateFormatted(new Date()),
        user: this.currentUser,
        score: 0,
        content: comment,
        replies: [],
      });
    },
  },
  // getters: {
  //   calculateDate(date) {
  //     const today = new Date();

  //     if (date === today) {
  //       return 'Today';
  //     } else if (data.getDate() - today.getDate() === 1) {
  //       return '1 day ago';
  //     } else if (data.getDate() - today.getDate() > 1) {
  //       return `${data.getDate() - today.getDate()} days ago`;
  //     } else {
  //       return 'More tan a week ago';
  //     }
  //   },
  // },
});
