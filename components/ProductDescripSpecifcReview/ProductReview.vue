<template>
  <div @click="$event.stopPropagation()" class="review-section">
    <div class="customer-qa">
      <h2>Customers Q & A</h2>

      <div v-for="data in commentsData" :key="data.CommentData.id">
        <div class="review-cart">
          <div class="user-img">
            <img src="/img/userimg (1).webp" alt="" />
          </div>
          <div class="users-content">
            <div class="user-qa-header">
              <p><i class="bi bi-person"></i> {{ data.CommentData.name }}</p>
              <p><i class="bi bi-clock"></i> Aug 29, 2022</p>
              <p class="rating-star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
              <button><i class="bi bi-arrow-90deg-left"></i> Replay</button>
            </div>
            <small>{{ data.CommentData.comment }}</small>
          </div>
        </div>
        <!-- <div class="review-cart">
          <div class="user-img">
            <img src="/img/userimg (1).webp" alt="" />
          </div>
          <div class="users-content">
            <div class="user-qa-header">
              <p><i class="bi bi-person"></i> User Name</p>
              <p><i class="bi bi-clock"></i> Aug 29, 2022</p>
              <p class="rating-star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </p>
              <button><i class="bi bi-arrow-90deg-left"></i> Replay</button>
            </div>
            <small
              >Khaki cotton blend military jacket flattering fit mock horn
              buttons and patch pockets showerproof black lightgrey. Printed
              lining patch pockets jersey blazer built in pocket square wool
              casual quilted jacket without hood azure.</small
            >
          </div>
        </div> -->
      </div>

      <div class="comments-container">
        <h2>Leave a Comment</h2>
        <form>
          <div class="input-container">
            <div class="input-container-content">
              <label for="">Name</label>
              <br />
              <input type="text" v-model="addCommentData.name" />
            </div>
            <div class="input-container-content">
              <label for="">Email</label>
              <br />
              <input type="email" v-model="addCommentData.email" />
            </div>
          </div>
          <br />
          <textarea
            v-model="addCommentData.comment"
            name=""
            id="textarea"
            cols="30"
            rows="5"
          ></textarea>

          <button type="button" @click="submitComment()">Post Comment</button>
        </form>
      </div>
    </div>

    <div class="customer-reviews">
      <h2>Customers Review</h2>

      <div class="averageRating-container">
        <h1>4.5</h1>
        <div>
          <h2>Average Ratings</h2>
          <p class="rating-star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill last"></i>
          </p>
        </div>
      </div>
      <div class="star-progress-container">
        <div class="star-progress">
          <p>5 Star</p>
          <div class="progressbar">
            <div class="progress" id="value5">
              <span class="value">85%</span>
            </div>
          </div>
        </div>
        <div class="star-progress">
          <p>4 Star</p>
          <div class="progressbar">
            <div class="progress" id="value4">
              <span class="value">75%</span>
            </div>
          </div>
        </div>
        <div class="star-progress">
          <p>3 Star</p>
          <div class="progressbar">
            <div class="progress" id="value3">
              <span class="value">65%</span>
            </div>
          </div>
        </div>
        <div class="star-progress">
          <p>2 Star</p>
          <div class="progressbar">
            <div class="progress" id="value2">
              <span class="value">45%</span>
            </div>
          </div>
        </div>
        <div class="star-progress">
          <p>1 Star</p>
          <div class="progressbar">
            <div class="progress" id="value1">
              <span class="value">25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCommentData: {
        name: "",
        email: "",
        comment: "",
      },

      // error:[]
    };
  },
  methods: {
    submitComment() {
      this.$store.dispatch("addCommentData", {
        CommentData: this.addCommentData,
        quantity: 1,
      });

      this.addCommentData = "";

      // this.error = [];
      // for (const item in this.form) {
      //   if (this.form[item] === "" || this.form[item].length === 0) {
      //     this.error.push(item);
      //   }
      //   if(this.error.length===0){
      //       alert("Data has been submitted")
      //   }
      // }
    },
  },
  computed: {
    commentsData() {
      return this.$store.state.userComment;
    },
  },
};
</script>

<style scoped>
.review-section {
  display: flex;
  width: 75%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 0px;
  font-family: "Rajdhani", sans-serif;
  color: #6d6d6d;
}

.customer-qa {
  width: 50%;
  border-right: 1px solid gainsboro;
  padding-right: 30px;
}

.review-cart {
  display: flex;
  border: 1px solid gainsboro;
  padding: 10px 25px;
  border-radius: 10px;
  margin-top: 30px;
}

.user-img img {
  width: 80px;
}

.user-qa-header {
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid gainsboro;
  justify-content: space-between;
  padding: 10px 0px;
}

.rating-star {
  color: #ef8341;
}

.rating-star .last {
  color: #6d6d6d;
}

.user-qa-header button {
  background: none;
  border: none;
  font-family: "Rajdhani", sans-serif;
  cursor: pointer;
}

.comments-container {
  border: 1px solid gainsboro;
  padding: 20px 40px;
  border-radius: 10px;
  margin: 40px 0px;
}

.input-container {
  display: flex;
  margin-top: 20px;
}

.input-container input {
  width: 100%;
  outline: none;
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 8px;
  gap: 20px;
}

.input-container-content {
  width: 100%;
}

.input-container-content:first-child {
  margin-right: 10px;
}

.input-container-content:last-child {
  margin-left: 10px;
}

#textarea {
  width: 100%;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  color: #6d6d6d;
}

.comments-container button {
  border: none;
  padding: 12px 30px;
  color: #6d6d6d;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
  font-family: "Rajdhani", sans-serif;
  transition: all 0.2s;
}

.comments-container button:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.customer-reviews {
  margin: 0px 30px;
}

.averageRating-container {
  display: flex;
  margin-top: 10px;
}

.averageRating-container h1 {
  font-size: 70px;
  margin-right: 20px;
  font-weight: 600;
}

.averageRating-container h2 {
  margin-top: 15px;
  font-weight: 600;
}

.star-progress-container {
  margin-top: 20px;
}

.star-progress {
  display: flex;
  width: 100%;
  margin-bottom: 10px;
}

.star-progress p {
  width: 50px;
}

.progressbar {
  width: 400px;
  height: 17px;
  background-color: #e0e0e0;
  border-radius: 30px;
  overflow: hidden;
}
.progress {
  background-color: #05658b;
  color: #ccd;
  width: 0;
  border-radius: 30px;
  height: 17px;
}

.value {
  margin-left: 45%;
  margin-top: -2px;
}

#value1 {
  width: 25%;
}
#value2 {
  width: 45%;
}
#value3 {
  width: 65%;
}
#value4 {
  width: 75%;
}
#value5 {
  width: 85%;
}
</style>
