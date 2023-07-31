import { defineStore } from "pinia";
import data from "../data.json";
import { currentId, dateFormatted } from "../helper";

export const useCommentStore = defineStore("commentStore", {
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
    async addComment(comment) {
      const newComment = {
        id: currentId(data),
        createdAt: dateFormatted(new Date()),
        user: this.currentUser,
        score: 0,
        content: comment,
        replies: [],
      };
      await this.comments.push(newComment);
      comment = "";
      this.scrollToLastComment();
    },
    // When a comment is added, scroll to the last comment added
    scrollToLastComment() {
      const lastComment = document.querySelector("#comments").lastElementChild;
      lastComment.scrollIntoView({ behavior: "smooth" });
    },
    async addReply(comment, reply) {
      const newReply = {
        id: currentId(data),
        createdAt: dateFormatted(new Date()),
        user: this.currentUser,
        score: 0,
        content: reply,
      };
      await comment.replies.push(newReply);
      reply = "";
      this.scrollToLastReply();
    },
    // When a reply is added, scroll to the last reply added
    scrollToLastReply() {
      const lastReply = document.querySelector("#replies").lastElementChild;
      lastReply.scrollIntoView({ behavior: "smooth" });
    },
  },
});
